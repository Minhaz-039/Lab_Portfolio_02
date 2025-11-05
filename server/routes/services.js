import express from "express";
import { getServiceById, getServices } from "../controllers/servicesController.js";
const router = express.Router();

router.get("/services", getServices);
router.get("/services/:id", getServiceById);

export default router;
