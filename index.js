import express from "express";  // if using "type": "module" in package.json
const app = express();

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("Hello CI/CD world! Deployed via Render 🎉");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
