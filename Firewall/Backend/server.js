import express from "express";
import cors from "cors";
import { ipBlockWAF } from "./WAF.js";

const app = express();
const port = 3000;

/* =========================
   BASIC MIDDLEWARE
========================= */

// Body parser (required for WAF payload inspection)
app.use(express.json());

// CORS (frontend access)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);



// Apply WAF to ALL incoming requests
app.use(ipBlockWAF);


app.get("/", (req, res) => {
  res.send("Hello World! WAF Active");
});

// Dummy routes for testing WAF
app.post("/login", (req, res) => {
  res.json({ ok: true, message: "Login route reached" });
});

app.post("/register", (req, res) => {
  res.json({ ok: true, message: "Register route reached" });
});



app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
