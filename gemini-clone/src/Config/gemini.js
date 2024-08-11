/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey ='AIzaSyDIe2IPR824cxe9w3mDZ9m2Uvut18CnS8s';
const genAI = new GoogleGenerativeAI(apiKey);


const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});


const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function runChat(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text);
        return result.response.text;
    } catch (error) {
        console.error("Error during chat session:", error);
        throw error;
    }
}

export default runChat;
