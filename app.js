const express = require ('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(function(req, res){
       res.send("404: Not Found")
   })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
