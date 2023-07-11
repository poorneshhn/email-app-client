import { createServer } from "http";
import { parse } from "url";
import { createProxyMiddleware } from "http-proxy-middleware";
// @ts-ignore
import express from "express";
import next from "next";
// import proxy from 'http-proxy-middleware';

const apiPaths = {
  "/api/*": {
    target: "http://localhost:5000",
    pathRewrite: {
      "^/api": "/api",
    },
    changeOrigin: true,
  },
  "/auth/google": {
    target: "http://localhost:5000",
    pathRewrite: {
      "^/auth/google": "/auth/google",
    },
    changeOrigin: false,
  },
};

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    "/auth/google",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: false,
    })
  );

  server.use(
    "/api/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: false,
    })
  );

  // @ts-ignore
  server.all("*", (req, res) => handle(req, res));
  // @ts-ignore
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
