const mongoose = require("mongoose");

const opportunitySchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      organization: {
        type: String,
        required: true,
      },

      category: {
        type: String,
      },

      status: {
        type: String,
        default: "Wishlist",
      },

      deadline: {
        type: Date,
      },

      notes: {
        type: String,
      },

      resumeName: {
        type: String,
      },

      coverLetterName: {
        type: String,
      },

      reminderDays: {
        type: Number,
        default: 3,
      },

      history: [
        {
          action: String,
          date: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Opportunity",
    opportunitySchema
  );