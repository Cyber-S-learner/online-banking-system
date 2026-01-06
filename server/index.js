import express from 'express'
import http from 'http'

const app = express()

const PORT = 4001

app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.listen(PORT , ()=>{
    console.log(`server listening on port ${PORT}`)
})
