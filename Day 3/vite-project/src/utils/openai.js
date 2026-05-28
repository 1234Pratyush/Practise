import OpenAI from "openai";
import { OPENAI_GPT_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_GPT_KEY, 
});

export default openai


// 'gpt-3.5-turbo'