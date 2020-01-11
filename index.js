//inquirer uses promises and waits until the call is ready and then does the action

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
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

//caitlins code
function getuser(github) {
    axios.get(`https://api.github.com/users/${github}`)
    .then(function(profile) {
        console.log(profile,profile.data.name);
        let html = generateHTML(profile)
        console.log(html)
        // convert to pdf
    })

const userMenu = () => {
inquirer.prompt([
    // {
    //     message: `What is your favorite color?`,
    //     name: "answer"
    // },
    {
        message: "Enter your GitHub username:",
        name: "username"
    }
])
  //once response comes back, then push it to a PDF 
  .then(function({ username }) {
    // const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const queryUrl = `https://api.github.com/users/${github}`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

    //   fs.writeFile("printed.txt", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }
        //need username 
        //image
        //number of followers
        //github stars
        //number of users following 
        // console.log(res.data);
        console.log(`Saved ${repoNames.length} repos`);
      });
    });
//   });
};

// userMenu()
