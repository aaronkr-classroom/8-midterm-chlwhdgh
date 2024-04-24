"use strict";

const express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));


app.get('/', homeController.showHome);
app.get("/transportation", homeController.showRenderedCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm)

app.use(errorController.resNotFound);
app.use(errorController.resInternalError);


app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});