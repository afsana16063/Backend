import express from "express";
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the simple page. You will learn about me and my contact</h1>"
  );
});

app.get("/about", (req, res) => {
  res.send("<h1>My name is Afsana, I am a Developer&Designer</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>You can reach me out my mail, and linkedin</h2>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
