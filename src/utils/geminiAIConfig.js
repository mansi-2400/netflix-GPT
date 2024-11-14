import {GEMINIAI_KEY} from "./constants"
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });