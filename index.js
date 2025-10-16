import express from "express";  // or use require() if you're not using ES modules

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Render injects PORT automatically

app.get("/", (req, res) => {
  res.send("Hello CI/CD world! Deployed via Render 🎉");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
