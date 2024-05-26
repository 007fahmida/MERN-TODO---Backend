const express = require("express");
const app = express();
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

const PORT = 1000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
