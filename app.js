import express from 'express';
import cors from 'cors';


const app = express();
const port = 5000;
app.use(cors())

app.get("/tweets", (req, res) => {

})

app.listen(port)