//inquirer uses promises and waits until the call is ready and then does the action

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const html = require("./generateHTML.js");
// const phantom = require("phantom");

let name;
let company;
let location;
let github;
let blog;
let repos;
let stars;
let following;
let followers;
let color;

const userMenu = () => {
inquirer.prompt([
  {
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: ["green", "blue", "pink", "red"]
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  }
]).then(function({ username }) {

    console.log(response);
    color = response.color;
    github = response.username; 

    getuser(github);
    });
};

let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    body{
        background-color: ${color}
    }
    </style>
</head>
<body>
    <p>Name: ${name}</p>
    <p>Currently at: ${company}</p>
    <a href="#">Location: ${location}</a>
    <a href="#">Github: ${github}</a>
    <a href="#">Blog: ${blog}</a>
    <p>Job description</p>
    <p>Public Repositories</p>
        <p># of repos: ${repos}</p>
    <p>Followers</p>
        <p># of followers: ${followers}</p>
    <p>Github Stars</p>
        <p># of stars: ${stars}</p>
    <p>Following</p>
        <p># of following: ${following}</p>
</body>
</html>`

// go to api github (gather all the info)
function getuser(github) {
    axios.get(`https://api.github.com/users/${github}`)
    .then(function(profile) {
        console.log(profile, profile.data.name);
        let html = generateHTML(profile)
        console.log(html)
        console.log(res.data);
        console.log(`Saved ${repoNames.length} repos`)
        // convert to pdf
    })
}

function generateHTML(profile) {
    name=profile.data.name
    company=profile.data.company
    location=profile.data.location
    blog=profile.data.blog
    repos=profile.data.public_repos
    following=profile.data.following
    followers=profile.data.followers
    return (htmlTemplate)
};

userMenu();