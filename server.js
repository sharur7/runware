import express from "express";
import dotenv from "dotenv";
import { Runware } from "@runware/sdk-js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));


const runware = new Runware({
  apiKey: process.env.RUNWARE_API_KEY,
  timeout: 600000,  
  maxRetries: 3,
  retryDelay: 2000
});

await runware.connect();

app.post("/generate-image", async (req, res) => {
  const { prompt, count = 1, width = 512, height = 512 } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const images = await runware.requestImages({
      positivePrompt: prompt,
      model: "runware:101@1",
      width,
      height,
      numberResults: count
    });

    if (!images || images.length === 0) {
      return res.status(500).json({ error: "No images returned" });
    }

    res.json({ images: images.map(img => img.imageURL) });
  } catch (err) {
    console.error("Image generation error:", err);
    res.status(500).json({ error: err.message || "Image generation failed" });
  }
});

app.post("/generate-video", async (req, res) => {
  const { prompt, width = 1280, height = 720 } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const payload = {
      positivePrompt: prompt,
      model: "vidu:1@5", 
      width,
      height,
      duration: 4      
    };

    const response = await runware.videoInference(payload);

    if (!response || !response[0]?.videoURL) {
      return res.status(500).json({ error: "No video returned" });
    }

    res.json({ videoUrl: response[0].videoURL });
  } catch (err) {
    console.error("Video generation error:", err);
    res.status(500).json({ error: err.message || "Video generation failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
