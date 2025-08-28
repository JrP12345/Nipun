import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

// Optional: handle errors during startup
app.on("error", (err) => {
  console.log("Server failed to start:", err);
});

export default app;
