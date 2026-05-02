
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Groq from "groq-sdk";

// dotenv.config();

// const app = express();

// app.use(cors()); 
// app.use(express.json());

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });


// app.get("/", (req, res) => {
//   res.json({ status: "Groq backend is running 🚀" });
// });


// app.post("/chat", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt || typeof prompt !== "string") {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//     });

//     res.json({
//       text: completion.choices[0].message.content,
//     });
//   } catch (err) {
//     console.error("Groq API error:", err);
//     res.status(500).json({ error: "Failed to generate response" });
//   }
// });

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Groq from "groq-sdk";

// dotenv.config();

// const app = express();

// app.use(cors({ origin: "*" }));
// app.use(express.json());

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// app.get("/", (req, res) => {
//   res.json({ status: "Backend running 🚀" });
// });

// app.post("/chat", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//     });

//     res.json({
//       text: completion.choices[0].message.content,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Groq API failed" });
//   }
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// app.post("/chat", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const result = await model.generateContent(prompt);
//     res.json({ text: result.response.text() });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(8080, () => {
//   console.log("Gemini backend running on http://127.0.0.1:8080");
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Groq from "groq-sdk";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// app.post("/chat", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//     });

//     res.json({ text: completion.choices[0].message.content });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(8080, () => {
//   console.log("Groq backend running on http://127.0.0.1:8080");
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.get("/", (req, res) => {
  res.json({ status: "Backend running 🚀" });
});

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({
      text: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Groq API failed" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
