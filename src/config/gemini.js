

// const API_KEY= "AIzaSyCdfXu7rTcfQyraJ6EnhV0FwSuKFqaMFqc";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyB6tJSA2erxnapl3mc8hbUGVFPhIeHB_wI");

// const model = genAI.getGenerativeModel({
//   model: "models/gemini-1.5-flash",
//   apiVersion: "v1",
// });

// export default async function runChat(prompt) {
//   const result = await model.generateContent({
//     contents: [
//       {
//         role: "user",
//         parts: [{ text: prompt }],
//       },
//     ],
//   });

//   return result.response.text();
// }


export default async function runChat(prompt) {
    try {
      const res = await fetch("http://127.0.0.1:8080/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.error || "Backend error");
      }
  
      return data.text;
    } catch (err) {
      console.error("Frontend fetch error:", err);
      return "⚠️ Gemini backend not responding.";
    }
  }
  