const express = require("express");
const app = express();
app.use(express.json());

const AuthRoute = require("./routes/auth")
app.use("/", AuthRoute)




app.listen(8000, () => {
    console.log("Server listening at port 8000");
})
