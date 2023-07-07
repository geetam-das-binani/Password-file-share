import express from "express";
import { router } from "./routes/route.mjs";
import { connect } from "./Database/Connection.mjs";
import { engine } from 'express-handlebars';
const app = express();
connect();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
	res.render("index");  
}); 
app.use("/", router);  

app.listen(8000, () => console.log("Server is listening on port 8000"));
 