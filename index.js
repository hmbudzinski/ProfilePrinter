//inquirer uses promises and waits until the call is ready and then does the action
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// const pdf = require("html-pdf");
// var html = fs.readFileSync('./printed.txt', 'utf8');

// const genhtml = require("./generateHTML");
// const options = { format: 'Letter'};
// let htmlTemplate;

// let github;
// let stars;
// let color;
// let name;
// let company;
// let location;
// let blog;
// let repos;
// let following;
// let followers;
// let name= response.data.name;
// let company= response.data.company;
// let location= response.data.location;
// let blog= response.data.blog;
// let repos= response.data.public_repos;
// let following= response.data.following;
// let followers= response.data.followers;


const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };

let userMenu = () => {
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
]).then(function(response) {

    console.log(response);
    color = response.color;
    github = response.username; 

    getuser(github);
    });
};

// go to api github
function getuser(github, color) {
    let profileResponse;
    axios.get(`https://api.github.com/users/${github}`)
    .then(function(response) {
        profileResponse = generateHTML({...response.data, ...{color}});
        console.log(response, response.data.name);
        let htmlProfile = profileInfo(response, html);
        console.log(htmlProfile);
    fs.writeFileSync("index1.html", profileResponse, function(err) {
    console.log("3");
        if (err) throw err;
    })
})
};

// function profileInfo(github, color) {

// name= response.data.name;
// company= response.data.company;
// location= response.data.location;
// blog= response.data.blog;
// repos= response.data.public_repos;
// following= response.data.following;
// followers= response.data.followers;

//     htmlTemplate = 
//     `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
//     <style>
//     body{
//         background-color: ${color}
//     }
//     </style>
// </head>
// <body>
//     <p>Name: ${name}</p>
//     <p>Currently at: ${company}</p>
//     <a href="#">Location: ${location}</a>
//     <a href="#">Github: ${github}</a>
//     <a href="#">Blog: ${blog}</a>
//     <p>Public Repositories</p>
//         <p># of repos: ${repos}</p>
//     <p>Followers</p>
//         <p># of followers: ${followers}</p>
//     <p>Github Stars</p>
//         <p># of stars: ${stars}</p>
//     <p>Following</p>
//         <p># of following: ${following}</p>
// </body>
// </html>`

//     return (htmlTemplate)
// };

// fs.writeFile("printed.html", generateHTML, function(err) {
//     if (err) throw err
// });

// pdf.create(htmlTemplate, options).toFile('printed.txt', function(err, res) {
//     if (err) return console.log(err);
//     console.log(res);
// })

// pdf.create(html).toFile([filepath, ], function(err, res){
//   console.log(res.filename);
// });
 
// pdf.create(html).toStream(function(err, stream){
//   stream.pipe(fs.createWriteStream('./foo.pdf'));
// });
 
// pdf.create(html).toBuffer(function(err, buffer){
//   console.log('This is a buffer:', Buffer.isBuffer(buffer));
// });
 
// pdf.create(html [, options], function(err, buffer){});

userMenu();    

//NOTES     from natalia
//to create an html file if you are not usig the starter code
//call premade function generateHTML and pass the data into it
//const htmlRefered = ejs.render(htmlContent, {
//     filename: "main.ejs";
//      data: { name: "John Doe", age: 36, hello: "HElloo"}
// });
//fs.writeFileSynch("profile.html"), htmlRendered);
//run node starter
  
  function generateHTML(data) {
    return `<!DOCTYPE html>
        <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>

        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[data.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[data.color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[data.color].headerBackground};
             color: ${colors[data.color].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
    body{
        background-color: ${color}
    }
</head>
<body>
      <div class="wrapper">
         <div class="photo-header">
            <img src="${data}" alt="Photo of ${data}" />
            <h1>Hi!</h1>
            <h2>
            My name is ${data.name}!</h1>
            <h5>${data}</h5>
            <nav class="links-nav">
               <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/${data}"><i class="fas fa-location-arrow"></i> ${data}</a>
               <a class="nav-link" target="_blank" rel="noopener noreferrer" href="${data}"><i class="fab fa-github-alt"></i> GitHub</a>
              <a class="nav-link" target="_blank" rel="noopener noreferrer" href="${data}"><i class="fas fa-rss"></i> Blog</a>
            </nav>
         </div>
         <main>
            <div class="container">
            <div class="row">
               <div class="col">
                  <h3>${data}</h3>
               </div>
            </div>
               <div class="row">
                <div class="col">
                    <div class="card">
                      <h3>Public Repositories</h3>
                      <h4>${data.repos}</h4>
                    </div>
                </div>
                <div class="col">
                  <div class="card">
                    <h3>Followers</h3>
                    <h4>${data.followers}</h4>
                  </div>
               </div>
               </div>
               <div class="row">
               <div class="col">
               <div class="card">
                  <h3>GitHub Stars</h3>
                  <h4>${data.stars}</h4>
                  </div>
               </div>
                <div class="col">
                <div class="card">
                  <h3>Following</h3>
                  <h4>${data.following}</h4>
                  </div>
               </div>
               </div>
            </div>
         </main>
      </div>
   </body>
</html>`

          }