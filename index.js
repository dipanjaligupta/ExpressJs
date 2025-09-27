const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res) => {
const buttons = [
  { label: "Home", route: "/" },
  { label: "Instagram Cats Page", route: "/ig/cats" },
  { label: "Instagram Dogs Page", route: "/ig/dogs" },
  { label: "Error Page", route: "/error" }
];
res.render("home",{buttons});
});

app.get("/ig/:username", (req,res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
if(data){
   res.render("ing.ejs", {data});  
}else{
   res.render("error.ejs");  
}
});
app.get("/error",(req,res) => {
    res.render("error.ejs");
})

app.listen(port,() => {
    console.log(`listening on port ${port}`);
});







































/*const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/bootstrap")));
app.use(express.static(path.join(__dirname,'public')));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
 

app.get("/",(req,res) => {
    res.render("pro");
});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});*/
