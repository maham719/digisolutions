import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve HTML, CSS, JS

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

    res.json(response.data);
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Error communicating with Gemini API" });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
