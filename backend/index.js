const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./files",
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const config = {
  headers: "Content-Type : multipart/form-data",
};
app.use(cors(config));

app.post("/upload", upload.single("file"), (req, res) => {
  req.header("Content-Type : multipart/form-data");
  const data = req.body;
  const file = req.file;
  console.log(file.originalname);
  res.send({ file: file, data: data });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});