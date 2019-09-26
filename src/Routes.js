import { Router } from "express";
import ServiceController from "./controllers/Service.controller";

const routes = Router();

routes.get("/", (req, res) => res.send("Go!"));
routes.get("/service/summary", ServiceController.getSummary);

export default routes;
