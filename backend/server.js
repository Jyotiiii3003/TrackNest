const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes =
  require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();
const protect =
  require("./middleware/authMiddleware");
app.get(
  "/api/protected",
  protect,
  (req, res) => {
    res.json({
      message:
        "Protected route accessed",
      user: req.user,
    });
  }
);

const opportunityRoutes =
  require(
    "./routes/opportunityRoutes"
  );

app.use(cors());
app.use(express.json());
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/opportunities",
  opportunityRoutes
);

app.get("/", (req, res) => {
  res.send("TrackNest API running...");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});

const uploadRoutes =
  require("./routes/uploadRoutes");
app.use(
  "/api/upload",
  uploadRoutes
);

const resumeRoutes =
require("./routes/resumeRoutes");
app.use(
  "/api/resume",
  resumeRoutes
);