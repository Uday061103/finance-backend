import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import testRoutes from "./routes/test.routes.js";
import recordRoutes from "./routes/record.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import userRoutes from "./routes/user.routes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get('/', (req, res) => {
    res.send('API is running!');
});

export default app;
app.use(errorHandler);