import API from "../api";

export const getOpportunities =
  () =>
    API.get(
      "/opportunities"
    );

export const createOpportunity =
  (data) =>
    API.post(
      "/opportunities",
      data
    );

export const updateOpportunity =
  (id, data) =>
    API.put(
      `/opportunities/${id}`,
      data
    );

export const deleteOpportunity =
  (id) =>
    API.delete(
      `/opportunities/${id}`
    );