import express from "express";
import { router } from "./routes/route.mjs";
import { connect } from "./Database/Connection.mjs";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4500;
const app = express();


app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", router);

Promise.all([connect(process.env.DB_USERNAME, process.env.DB_PASSWORD)])
.then(data=>{
  console.log('Successfully Connected');
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

})
.catch(e=>console.log(e.message))