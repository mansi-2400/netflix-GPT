const { GoogleGenerativeAI } = require("@google/generative-ai");

export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINIAI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });