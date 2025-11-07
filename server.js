import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// ✅ Get correct __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Serve static frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

// ✅ Gemini API proxy route
app.post("/api/chat", async (req, res) => {
  const { userMessage, context } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
You are an AI assistant for the website "https://www.digifysol.com/".

Only answer questions using the following information:
${context}

You can also greet people on behalf of Digify Solutions.

If someone asks something unrelated to this site, reply:
"I'm sorry, I can only answer questions related to this website."

User: ${userMessage}
                `,
              },
            ],
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // ✅ Extract the text from Gemini API response
    const apiText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I cannot get that.";

    // ✅ Send only the extracted text to frontend
    res.json({ text: apiText });
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ text: "Sorry, I cannot get that" });
  }
});

// ✅ Fallback route — handles "Cannot GET /" on reload
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// ✅ Use environment port for deployment (Railway, Vercel, etc.)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
