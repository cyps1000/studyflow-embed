import cors from "cors";
import express from "express";
import { config } from "dotenv";
import { resolve, join } from "path";
import { createProxyMiddleware } from "http-proxy-middleware";

/**
 * Initializes the Express Server
 */
const server = express();

/**
 * Dot ENV Config
 */
config();

/**
 * Gets environment variables
 */
const { APP_PORT, APP_API } = process.env;

/**
 * Initializes cors
 */
server.use(cors({ origin: true }));

/**
 * Set static folder
 */
server.use(express.static(resolve(join(__dirname, "client", "build"))));

server.use("/v2.0", (req, res) => {
  res.sendFile(join(resolve(__dirname, "client", "build", "index.html")));
});

server.use("/v2.0/*", (req, res) => {
  res.sendFile(join(resolve(__dirname, "client", "build", "index.html")));
});

server.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "client", "build", "index.html"));
});

/**
 * Adds middleware for http proxying
 */
const apiProxy = createProxyMiddleware("/studyflow", {
  pathRewrite: {
    "^/studyflow": ""
  },
  target: APP_API,
  changeOrigin: true
});

/**
 * Initializes middlewares
 */
server.use("/studyflow", apiProxy);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(APP_PORT, () =>
  console.log(`Server is running on port ${APP_PORT}`)
);
