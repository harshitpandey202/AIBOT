import  {
    GoogleGenerativeAI,
   
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyCTkRAnANrlzyzOnPOjody5dhxY7egfLVY"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default run;



























