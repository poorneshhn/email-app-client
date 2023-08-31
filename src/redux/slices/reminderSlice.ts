import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance/axiosInstance";
import type { RootState } from "../store";
import { checkStatusCode, generateUniqueId } from "@/component/utils/utils";
import { AxiosResponse } from "axios";

export interface ReminderObject {
  uniqueID: string;
  date: string;
  time: string;
  eventDetails: string;
}

export interface ReminderState {
  reminderList: ReminderObject[];
}

const initialState: ReminderState = {
  reminderList: [
    {
      uniqueID: generateUniqueId(),
      date: "",
      time: "",
      eventDetails: "",
    },
  ],
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    updateReminderState: (state: ReminderState, actions) => {
      state.reminderList = actions.payload;
    },
    resetReminderState: (state: ReminderState) => {
      state.reminderList = [
        {
          uniqueID: generateUniqueId(),
          date: "",
          time: "",
          eventDetails: "",
        },
      ];
    },
  },
});

export const { updateReminderState, resetReminderState } =
  reminderSlice.actions;

export default reminderSlice.reducer;

export const submitReminderData =
  (data: ReminderState["reminderList"]) =>
  async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        "/reminder/postreminderlist",
        {
          reminderData: data,
        }
      );
      if (!checkStatusCode(response, 201)) {
        throw new Error("Something went wrong while submitting");
      }

      dispatch(resetReminderState());

      alert("Created Reminder(s) successfully");
    } catch (error) {
      alert("Something went wrong while submitting");
      console.log(error, "error while submitting reminder");
    }
  };

export const getReminderList =
  () => async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const { data } = await axiosInstance.get("/reminder/allreminderlist");
      dispatch(updateReminderState(data));
      return data;
    } catch (error) {
      alert("Something went wrong while fetching reminder list");
      console.log("error while fetching all reminder list", error);
    }
  };
