const express = require("express")
const cors = require("cors")
const app=express()


app.use(express.json())
app.use(cors())
// Registraion and Login Router
app.use("/auth",require("./routes/jtwAuth"))

app.use("/dashboard",require("./routes/dashboard"))

app.listen(2000,()=>{
    console.log("server running on port 2000")
})