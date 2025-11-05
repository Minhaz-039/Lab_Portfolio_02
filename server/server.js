import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import contactRoutes from "./routes/contact.js";
import servicesRoutes from "./routes/services.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// API routes
app.use("/api", contactRoutes);
app.use("/api", servicesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
