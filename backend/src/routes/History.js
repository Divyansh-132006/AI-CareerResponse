import express from 'express';
const router = express.Router();
import History from '../models/History.js';

router.post('/savehistory', async (req, res) => {
  const { userEmail, query, response } = req.body;

  console.log("📥 SaveHistory Input:", { userEmail, query, response });

  if (!userEmail || !query || !response) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const newEntry = new History({
      userEmail,
      query,
      response,
      timestamp: new Date()
    });

    await newEntry.save();

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error saving history:", err);
    res.status(500).json({ success: false, message: "Could not save history" });
  }
});



router.get('/user/history/', async (req, res) => {
  try {
    const { email } = req.params;
    const data = await History.find({ userEmail: email }).sort({ timestamp: -1 });
    res.json({ success: true, history: data });
  } catch (err) {
    console.error("History fetch error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch history" });
  }
});

export default router;
