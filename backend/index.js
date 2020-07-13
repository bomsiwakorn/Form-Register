const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// const config = {
//   headers: "Content-Type : multipart/form-data"
// };
app.use(cors());

app.post("/upload", upload.single("file"), (req, res) => {
  // req.header("Content-Type : multipart/form-data");
  const data = req.body;
  const file = req.file;
  console.log(file);
  console.log(data);
  res.send({ file: file, data: data });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});