// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import aiRoutes from './src/routes/aiRoutes.js'; 
// import login from './src/routes/auth.js';
// import signup from './src/routes/auth.js';
// import resume from './src/routes/ai.js';


// dotenv.config();
  

// const app = express();

// mongoose.connect(process.env.MongoPassword, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("✅ MongoDB connected");
// }).catch(err => {
//   console.error("❌ MongoDB connection error:", err);
// });
// app.use(cors({
//   origin: 'https://darling-bavarois-e52057.netlify.app',
//   credentials: true
// }));


// app.use(cors());
// app.use(express.json());

// app.use('/api/ai', aiRoutes);
// app.use('/api/ai/ask', aiRoutes);
// app.use('/api/ai/', login);
// app.use('/api/ai/', signup);
// app.use('/api/ai/', resume);


// app.get("/ping", (req, res) => {
//   res.status(200).send("pong");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import aiRoutes from './src/routes/aiRoutes.js'; 
import login from './src/routes/auth.js';
import signup from './src/routes/auth.js';
import resume from './src/routes/ai.js';
import historyroutes from './src/routes/History.js';


dotenv.config();
  

const app = express();

mongoose.connect(process.env.MongoPassword, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});
app.use(cors({
  origin: 'https://ai-careerresponse-2.onrender.com',
  credentials: true
}));
// app.use(cors({
//   origin: 'http://localhost:3000', 
//   credentials: true
// }));


app.use(cors());
app.use(express.json());

app.use('/api/ai', aiRoutes);
app.use('/api/ai/ask', aiRoutes);
app.use('/api/ai/', login);
app.use('/api/ai/', signup);
app.use('/api/ai/', resume);
app.use('/api/ai/', historyroutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

