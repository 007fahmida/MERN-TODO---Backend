const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());


const corsOptions = {
    origin:"https://todo-app2131340070.netlify.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE" ,
    credentials:true
}
app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

const PORT = 1000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
