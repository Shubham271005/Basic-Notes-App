const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const notes = [];

app.post("/notes", function (req, res) {
  const note = req.body.note;
  notes.push(note);
  res.json({
    message: "Done !!",
  });
});

app.get("/notes", function (req, res) {
  res.json({
    notes,
  });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
