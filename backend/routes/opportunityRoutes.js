const express = require("express");
const {
  createOpportunity,
  getOpportunities,
  updateOpportunity,
    deleteOpportunity,
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

router.put(
  "/:id",
  protect,
  updateOpportunity
);

router.delete(
  "/:id",
  protect,
  deleteOpportunity
);

module.exports = router;