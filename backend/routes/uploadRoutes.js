const express = require("express");
const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

router.post(
  "/",
  protect,
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file uploaded",
        });
      }

      const uploadStream =
        cloudinary.uploader.upload_stream(
          {
            folder: "tracknest-documents",
           resource_type: "raw",
          },
          (error, result) => {
            if (error) {
              return res.status(500).json({
                message: error.message,
              });
            }

            res.json({
              url: result.secure_url,
              originalName:
                req.file.originalname,
            });
          }
        );

      streamifier
        .createReadStream(
          req.file.buffer
        )
        .pipe(uploadStream);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;