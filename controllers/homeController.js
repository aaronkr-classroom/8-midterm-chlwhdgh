"use strict";

exports.showHome = (req, res) => {
    res.render("index");
}
exports.showCourses = (req, res) => { 
    res.render("courses");
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};


var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
]; 

exports.showRenderedCourses = (req, res) => {
    res.render("transportation", {
        offeredCourses: courses 
    });
};