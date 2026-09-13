import api from "./api";

export const sendAIMessage = async (message) => {
  const response = await api.post("/api/ai/chat", {
    message,
  });

  return response.data;
};