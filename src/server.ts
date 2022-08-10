import cors from "cors";
import axios from "axios";
import express from "express";
import { config } from "dotenv";
import { resolve, join } from "path";
import { createProxyMiddleware } from "http-proxy-middleware";

/**
 * Initializes the express app
 */
const server = express();

/**
 * Dot ENV Config
 */
config();

/**
 * Initializes cors
 */
server.use(cors({ origin: true }));

/**
 * environment variables
 */
const { PORT, APP_LINK } = process.env;

/**
 * Initializes middlewares
 */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/**
 * Set static folder
 */
server.use(express.static(resolve(join(__dirname, "../public"))));

/**
 * Gets the Studyflow app asset manifest
 */
server.get("/studyflow-manifest", async (req, res) => {
  const { data } = await axios.get(`${APP_LINK}/v2.0/asset-manifest.json`);
  const { entrypoints } = data;

  res.send({ entrypoints });
});

/**
 * Sets up the proxy for the asset manifest
 */
server.use(
  "/v2.0/asset-manifest.json",
  createProxyMiddleware({
    target: APP_LINK,
    changeOrigin: true
  })
);

server.listen(PORT, () =>
  console.log(`Express Server is running on port ${PORT}`)
);
