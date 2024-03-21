const express = require("express");

const app = express();

const narimoto = [
  {
    id: "0",
    name: "古賀",
    tel: "080-0000-0000",
  },
  {
    id: "1",
    name: "airi",
    tel: "080-0000-0000",
  },
  {
    id: "3",
    name: "naho",
    tel: "080-0000-0000",
  },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/list", (req, res) => {
  res.send(narimoto);
});

app.listen(8000, () => {
  console.log("サーバーが起動しました。");
});
