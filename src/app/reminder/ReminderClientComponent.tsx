"use client";
import Button from "@/component/components/basic/button/Button";
import DatePicker from "@/component/components/reminder/date-picker/DatePicker";
import TimePicker from "@/component/components/reminder/time-picker/TimePicker";
import React, { Fragment } from "react";
import styles from "./reminder.module.css";
import { generateUniqueId, isEmpty } from "@/component/utils/utils";
import Input from "@/component/components/basic/input/Input";
import {
  useAppDispatch,
  useAppSelector,
} from "@/component/custom-hooks/typedReactReduxHooks";
import {
  submitReminderData,
  updateReminderState,
} from "@/component/redux/slices/reminderSlice";
import { ReminderObject } from "@/component/redux/slices/reminderSlice";
// check if all fields are filled
function checkForEmptyFields(fields: ReminderObject[]) {
  let fieldKeys = Object.keys(fields[0]) as (keyof ReminderObject)[];
  let isFieldEmpty = fields.some((field) => {
    for (let fieldKey of fieldKeys) {
      if (field[fieldKey] === "") return true;
    }
    return false;
  });

  return isFieldEmpty;
}
const ReminderClientComponent = () => {
  const dateAndTime = useAppSelector((state) => state.reminder.reminderList);
  const dispatch = useAppDispatch();
  const addRowsHandler = () => {
    dispatch(
      updateReminderState([
        ...dateAndTime,
        { date: "", time: "", uniqueID: generateUniqueId(), eventDetails: "" },
      ])
    );
  };

  const removeRowsHandler = (uniqueID: string) => {
    if (dateAndTime.length === 1) return;
    const newArray = dateAndTime.filter((item) => item.uniqueID !== uniqueID);
    dispatch(updateReminderState(newArray));
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    uniqueID: string
  ) => {
    const { name, value } = e.target;
    let arr = dateAndTime.map((dateTimeValue) => {
      if (dateTimeValue.uniqueID === uniqueID) {
        return {
          ...dateTimeValue,
          [name]: value,
        };
      } else {
        return dateTimeValue;
      }
    });
    dispatch(updateReminderState(arr));
  };
  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let isFieldEmpty = checkForEmptyFields(dateAndTime);
    if (isFieldEmpty) {
      alert("Please enter values in all the fields");
      return;
    }
    dispatch(submitReminderData(dateAndTime));
  };
  return (
    <form className={styles.clientContainer}>
      <div className={styles.activityContainer}>
        {dateAndTime.map((eachDateTime) => {
          return (
            <Fragment key={eachDateTime.uniqueID}>
              <div className={styles.headersContainer}>
                <h5>Date & Time</h5>
                <Button
                  className="red"
                  onClick={() => removeRowsHandler(eachDateTime.uniqueID)}
                  title="delete"
                  icon="delete"
                />
              </div>
              <DatePicker
                required={true}
                name="date"
                value={eachDateTime.date}
                onChange={(e) => onChangeHandler(e, eachDateTime.uniqueID)}
              />
              <TimePicker
                required={true}
                name="time"
                value={eachDateTime.time}
                onChange={(e) => onChangeHandler(e, eachDateTime.uniqueID)}
              />
              <Input
                required={true}
                name="eventDetails"
                value={eachDateTime.eventDetails}
                placeholder="What is the reminder about? ex: Company holiday, Friend's Birthday..."
                onChange={(e) => onChangeHandler(e, eachDateTime.uniqueID)}
              />
            </Fragment>
          );
        })}
      </div>
      <div className={styles.addButtonContainer}>
        <Button
          onClick={addRowsHandler}
          className="btn-floating btn-large teal"
          title="Add new date and time row"
          icon="add"
        />
      </div>
      {isEmpty(dateAndTime) ? (
        <p>Add rows by clicking on &quot;+&quot; button</p>
      ) : (
        <div className={styles.submitButtonContainer}>
          <Button
            onClick={submitHandler}
            className="teal btn-large"
            title="submit"
            label="Submit"
            icon="send"
            iconPosition="right"
            type="submit"
          />
        </div>
      )}
    </form>
  );
};

export default ReminderClientComponent;
