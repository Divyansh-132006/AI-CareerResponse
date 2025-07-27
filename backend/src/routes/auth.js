import express from 'express';
import User from '../models/User.js';
const router = express.Router();
import bcrypt from 'bcryptjs';

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and Password are required" });
    }

    try {
        console.log("Login Request Body:", req.body);

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ success: false, message: "Wrong password" });

        res.json({ success: true, message: "Login successful" });
    } catch (err) {
        console.error("❌ Login error:", err);
        res.status(500).json({ success: false, message: "Login failed" });
    }
});
router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    try {
        console.log("📦 Request Body:", req.body);
        const hashedPassword = await bcrypt.hash(password, 6)
        const newuser = new User({username, email, password : hashedPassword})
        await newuser.save();

        return res.json({ success: true, message: "Signup successful" });
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})
export default router;