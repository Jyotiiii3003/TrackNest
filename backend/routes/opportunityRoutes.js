const express = require("express");
const {
  createOpportunity,
  getOpportunities,
} = require(
  "../controllers/opportunityController"
);

const protect =
  require("../middleware/authMiddleware");

const router =
  express.Router();

router.post(
  "/",
  protect,
  createOpportunity
);

router.get(
  "/",
  protect,
  getOpportunities
);

module.exports = router;