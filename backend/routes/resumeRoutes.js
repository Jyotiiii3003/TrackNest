const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    try {
      const fileBuffer =
        fs.readFileSync(
          req.file.path
        );

      const parsed =
        await pdfParse(
          fileBuffer
        );

      const text =
        parsed.text.toLowerCase();

      const {
        targetRole,
      } = req.body;

      let score = 0;
      let missingSkills = [];
      let suggestions = [];

      const checks = [
        "github",
        "linkedin",
        "projects",
        "skills",
        "education",
        "java",
        "react",
        "mongodb",
      ];

      checks.forEach(
        (keyword) => {
          if (
            text.includes(
              keyword
            )
          ) {
            score += 10;
          } else {
            missingSkills.push(
              keyword
            );
          }
        }
      );

      if (
        !text.includes("@")
      ) {
        suggestions.push(
          "Add email address"
        );
      }

      if (
        !text.includes(
          "experience"
        )
      ) {
        suggestions.push(
          "Add experience section"
        );
      }

      if (
        !text.includes(
          targetRole.toLowerCase()
        )
      ) {
        suggestions.push(
          `Add more ${targetRole} specific keywords`
        );
      }

      fs.unlinkSync(
        req.file.path
      );

      res.json({
        atsScore: score,
        missingSkills,
        suggestions,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message:
          "Resume analysis failed",
      });
    }
  }
);

module.exports = router;