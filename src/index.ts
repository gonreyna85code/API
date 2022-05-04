import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import bodyParser from "body-parser";
import index from "./routes/index";
import user from "./routes/user";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CFLOW form parser",
      version: "1.0.0",
      description: "API for parsing CFLOW forms",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const app = express();
const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.set("env", process.env.APP_ENV);
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/", [index, user]);

app.listen(3000, () => {
  console.log("Express server is running on port 3000.");
});
