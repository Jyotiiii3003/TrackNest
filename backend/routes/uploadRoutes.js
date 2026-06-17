const express = require("express");
const multer =
  require("multer");
const cloudinary =
  require("../config/cloudinary");
const protect =
  require("../middleware/authMiddleware");

const router =
  express.Router();

const storage =
  multer.memoryStorage();

const upload =
  multer({ storage });

router.post(
  "/",
  protect,
  upload.single("file"),
  async (req, res) => {
    try {
      const result =
        await cloudinary.uploader.upload(
          `data:${req.file.mimetype};base64,${req.file.buffer.toString(
            "base64"
          )}`,
          {
            folder:
              "tracknest-documents",
          }
        );

      res.json({
        url: result.secure_url,
        originalName:
          req.file.originalname,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

module.exports = router;