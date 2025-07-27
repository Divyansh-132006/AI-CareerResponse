import express from 'express';
import { careerroadmap } from '../services/aiServices.js'; 
import { askAnything } from '../services/aiServices.js';


const router = express.Router();

router.post('/roadmap', async (req, res) => {
  const { goal, skills } = req.body;

  try {
    const result = await careerroadmap(goal, skills);  
    res.json({ roadmap: result });
  } catch (err) {
    console.error("❌ Error in /roadmap:", err.message);
    res.status(500).json({ error: 'AI response failed', message: err.message });
  }
});
router.post('/ask', async (req,res)=>{
 const { query, userId} = req.body;
 console.log("🔥 Query Received from frontend/postman:", query);

  try {
    const answer = await askAnything(query);
    
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: 'AI failed', message: err.message });
  }
});



export default router;
