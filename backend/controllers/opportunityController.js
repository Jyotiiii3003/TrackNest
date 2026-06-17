const Opportunity =
  require("../models/Opportunity");

const createOpportunity =
  async (req, res) => {
    try {
      const opportunity =
        await Opportunity.create({
          ...req.body,
          user: req.user.id,
        });

      res.status(201).json(
        opportunity
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const getOpportunities =
  async (req, res) => {
    try {
      const opportunities =
        await Opportunity.find({
          user: req.user.id,
        });

      res.json(opportunities);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };


const updateOpportunity =
  async (req, res) => {
    try {
      const opportunity =
        await Opportunity.findById(
          req.params.id
        );

      if (!opportunity) {
        return res
          .status(404)
          .json({
            message:
              "Opportunity not found",
          });
      }

      if (
        opportunity.user.toString() !==
        req.user.id
      ) {
        return res
          .status(401)
          .json({
            message:
              "Not authorized",
          });
      }

      const updated =
        await Opportunity.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      res.json(updated);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const deleteOpportunity =
  async (req, res) => {
    try {
      const opportunity =
        await Opportunity.findById(
          req.params.id
        );

      if (!opportunity) {
        return res
          .status(404)
          .json({
            message:
              "Opportunity not found",
          });
      }

      if (
        opportunity.user.toString() !==
        req.user.id
      ) {
        return res
          .status(401)
          .json({
            message:
              "Not authorized",
          });
      }

      await opportunity.deleteOne();

      res.json({
        message:
          "Opportunity deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  createOpportunity,
  getOpportunities,
  updateOpportunity,
  deleteOpportunity,
};