


import { Router } from "express";
import multer from "multer";
import fs from "fs";
import PDFParser from "pdf2json";
import model from "../../utility/geminiClient.js";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post("/resume", upload.single("resume"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData) => {
      console.error("PDF parse error:", errData.parserError);
      return res.status(500).json({ error: "Failed to parse PDF" });
    });

    pdfParser.on("pdfParser_dataReady", async (pdfData) => {
      const texts = [];

      pdfData?.Pages?.forEach((page) => {
        page.Texts?.forEach((textItem) => {
          const line = textItem.R?.map(r => decodeURIComponent(r.T)).join(" ");
          if (line) texts.push(line);
        });
      });

      const resumeText = texts.join(" ");

      if (!resumeText || resumeText.length < 50) {
        return res.status(400).json({ error: "Resume content could not be extracted properly." });
      }

      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: `Give professional feedback on this resume:\n\n${resumeText}` }],
          },
        ],
      });

      const aiResponse = await result.response.text();
      res.json({ feedback: aiResponse });
    });

    pdfParser.loadPDF(filePath);
  } catch (err) {
    console.error("Resume analysis error:", err.message);
    res.status(500).json({ error: "Failed to analyze resume", message: err.message });
  }
});

export default router;
