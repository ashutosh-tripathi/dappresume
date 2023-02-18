// let Web3 = require('web3');

async function display(){
const web3=await new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/80b96aa50c584ab49db0ad2b72e089ef'));


const privateKey = "f35e79991954d033a7c85fdf06beb10a410ab3c89df1b179cea41452663cf00f";
const account = await web3.eth.accounts.privateKeyToAccount(privateKey);
// console.log("Account",account.address);
let address="0xdfb92fd271cd9fbfddec2ca3a3aa8998ebe2b2e3";
// let resumeContract=require('../contracts/Resume.json');
// const response = await fetch('../contracts/Resume.json');
let abi=[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "education",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "major",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "university",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "graduationYear",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "personalInfo",
      "outputs": [
        {
          "internalType": "string",
          "name": "fullName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "phoneNumber",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "projects",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "projectName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endDate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "projectDescription",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "workExperience",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "companyName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "jobTitle",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endDate",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWorkExperience",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "companyName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "jobTitle",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "jobDescription",
              "type": "string[]"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endDate",
              "type": "uint256"
            }
          ],
          "internalType": "struct Resume.WorkExperience[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPersonalInformation",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getEducation",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "degree",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "major",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "university",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "graduationYear",
              "type": "uint256"
            }
          ],
          "internalType": "struct Resume.Education[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProjects",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "projectName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endDate",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "projectDescription",
              "type": "string"
            }
          ],
          "internalType": "struct Resume.Projects[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_major",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_university",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_graduationYear",
          "type": "uint256"
        }
      ],
      "name": "addEducation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_companyName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_jobTitle",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_jobDescription",
          "type": "string[]"
        },
        {
          "internalType": "uint256",
          "name": "_startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endDate",
          "type": "uint256"
        }
      ],
      "name": "addWorkExperience",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_projectName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endDate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_projectDescription",
          "type": "string"
        }
      ],
      "name": "addProjects",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

var contract=new web3.eth.Contract(abi,address);
// console.log("contract",contract);
let personalInfo= await contract.methods.getPersonalInformation().call();
const firstname = document.querySelector('#first-name');
// firstname.textContent = personalInfo[0];
const email = document.querySelector('#email');
email.textContent = personalInfo[1];
// console.log("Personal Info:", personalInfo);
let WorkExperience=await contract.methods.getWorkExperience().call();
console.log("WorkExperience:",WorkExperience);

  const post1=document.querySelector('#post1');
  post1.textContent =WorkExperience[3].jobTitle;

  const company1=document.querySelector('#company1');
  company1.textContent =WorkExperience[3].companyName;
  
  // const steps1=document.querySelector('#steps1');
  var jobDescription=WorkExperience[3].jobDescription;

   var steps1 = document.getElementById('steps1');
    for (var i = 0; i < jobDescription.length; i++) {
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(jobDescription[i]));
         steps1.appendChild(li);
    }
  
  var startDate= new Date(WorkExperience[3].startDate*1000);
 
  var endDate= new Date(WorkExperience[3].endDate*1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 
  const period1=document.querySelector('#period1');
  period1.textContent =months[startDate.getMonth()]+"    "+startDate.toISOString().slice(0,4)+" - "+months[endDate.getMonth()]+"    "+endDate.toISOString().slice(0,4);

  //period2
  const post2=document.querySelector('#post2');
  post2.textContent =WorkExperience[2].jobTitle;

  const company2=document.querySelector('#company2');
  company2.textContent =WorkExperience[2].companyName;
  
  // const steps1=document.querySelector('#steps1');
  var jobDescription2=WorkExperience[2].jobDescription;

   var steps2 = document.getElementById('steps2');
    for (var i = 0; i < jobDescription2.length; i++) {
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(jobDescription2[i]));
         steps2.appendChild(li);
    }
  
  var startDate2= new Date(WorkExperience[2].startDate*1000);
 
  var endDate2= new Date(WorkExperience[2].endDate*1000);
 
  const period2=document.querySelector('#period2');
  period2.textContent =months[startDate2.getMonth()]+"    "+startDate2.toISOString().slice(0,4)+" - "+months[endDate2.getMonth()]+"    "+endDate2.toISOString().slice(0,4);

 //period 3
 const post3=document.querySelector('#post3');
 post3.textContent =WorkExperience[1].jobTitle;

 const company3=document.querySelector('#company3');
 company3.textContent =WorkExperience[1].companyName;
 
 // const steps1=document.querySelector('#steps1');
 var jobDescription3=WorkExperience[1].jobDescription;

  var steps3 = document.getElementById('steps3');
   for (var i = 0; i < jobDescription3.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(jobDescription3[i]));
        steps3.appendChild(li);
   }
 
 var startDate3= new Date(WorkExperience[1].startDate*1000);

 var endDate3= new Date(WorkExperience[1].endDate*1000);

 const period3=document.querySelector('#period3');
 period3.textContent =months[startDate3.getMonth()]+"    "+startDate3.toISOString().slice(0,4)+" - "+months[endDate3.getMonth()]+"    "+endDate3.toISOString().slice(0,4);

//period 4
const post4=document.querySelector('#post4');
post4.textContent =WorkExperience[0].jobTitle;

const company4=document.querySelector('#company4');
company4.textContent =WorkExperience[0].companyName;

// const steps1=document.querySelector('#steps1');
var jobDescription4=WorkExperience[0].jobDescription;

 var steps4 = document.getElementById('steps4');
  for (var i = 0; i < jobDescription4.length; i++) {
       var li = document.createElement("li");
       li.appendChild(document.createTextNode(jobDescription4[i]));
       steps4.appendChild(li);
  }

var startDate4= new Date(WorkExperience[0].startDate*1000);

var endDate4= new Date(WorkExperience[0].endDate*1000);

const period4=document.querySelector('#period4');
period4.textContent =months[startDate4.getMonth()]+"    "+startDate4.toISOString().slice(0,4)+" - "+months[endDate4.getMonth()]+"    "+endDate4.toISOString().slice(0,4);





let Education=await contract.methods.getEducation().call();
console.log("Education:",Education);
// const educationList = document.querySelector('#education-list');
// Education.forEach(edu => {
//     const li = document.createElement('li');
//     li.textContent = `${edu.degree} - ${edu.major} from ${edu.university} (${edu.graduationYear})`;
//     educationList.appendChild(li);
//   });

const univ1 = document.querySelector('#univ1');
univ1.textContent=Education[1].university;
const degree1 = document.querySelector('#degree1');
degree1.textContent=Education[1].degree;
const major1 = document.querySelector('#major1');
major1.textContent=Education[1].major;
const gradYear1 = document.querySelector('#gradyear1');
gradYear1.textContent=Education[1].graduationYear;



const univ2 = document.querySelector('#univ2');
univ2.textContent=Education[0].university;
const degree2 = document.querySelector('#degree2');
degree2.textContent=Education[0].degree;
const major2 = document.querySelector('#major2');
major2.textContent=Education[0].major;
const gradYear2 = document.querySelector('#gradyear2');
gradYear2.textContent=Education[0].graduationYear;





let Projects=await contract.methods.getProjects().call();
console.log("Projects:", Projects);

// const projectsList = document.querySelector('#projects-list');
// Projects.forEach(projects => {
//     const li = document.createElement('li');
//     li.textContent = `${projects.projectName} - ${projects.url} from ${projects.projectDescription} (${projects.startDate})`;
//     projectsList.appendChild(li);
//   });

const projname1=document.querySelector('#proj-name1');
projname1.textContent =Projects[0].projectName;

// const projurl1=document.querySelector('#proj-url1');
// projurl1.textContent =Projects[0].url;

const projdesc1=document.querySelector('#proj-desc1');
projdesc1.textContent=Projects[0].projectDescription;

var projStartDate1= new Date(Projects[0].startDate*1000);

var projEndDate1= new Date(Projects[0].endDate*1000);

const projcomp1=document.querySelector('#proj-comp1');
projcomp1.textContent =months[projStartDate1.getMonth()]+"    "+projStartDate1.toISOString().slice(0,4)+" - "+months[projEndDate1.getMonth()]+"    "+projEndDate1.toISOString().slice(0,4);


//Project2

const projname2=document.querySelector('#proj-name2');
projname2.textContent =Projects[1].projectName;

const projurl2=document.querySelector('#proj-url2');
projurl2.textContent =Projects[1].url;

const projdesc2=document.querySelector('#proj-desc2');
projdesc2.textContent=Projects[1].projectDescription;

var projStartDate2= new Date(Projects[1].startDate*1000);

var projEndDate2= new Date(Projects[1].endDate*1000);

const projcomp2=document.querySelector('#proj-comp2');
projcomp2.textContent =months[projStartDate2.getMonth()]+"    "+projStartDate2.toISOString().slice(0,4)+" - "+months[projEndDate2.getMonth()]+"    "+projEndDate2.toISOString().slice(0,4);

//Project3

const projname3=document.querySelector('#proj-name3');
projname3.textContent =Projects[2].projectName;

const projurl3=document.querySelector('#proj-url3');
projurl3.textContent =Projects[2].url;

const projdesc3=document.querySelector('#proj-desc3');
projdesc3.textContent=Projects[2].projectDescription;

var projStartDate3= new Date(Projects[2].startDate*1000);

var projEndDate3= new Date(Projects[2].endDate*1000);

const projcomp3=document.querySelector('#proj-comp3');
projcomp3.textContent =months[projStartDate3.getMonth()]+"    "+projStartDate3.toISOString().slice(0,4)+" - "+months[projEndDate3.getMonth()]+"    "+projEndDate3.toISOString().slice(0,4);


//Project2

const projname4=document.querySelector('#proj-name4');
projname4.textContent =Projects[3].projectName;

const projurl4=document.querySelector('#proj-url4');
projurl4.textContent =Projects[3].url;

const projdesc4=document.querySelector('#proj-desc4');
projdesc4.textContent=Projects[3].projectDescription;

var projStartDate4= new Date(Projects[3].startDate*1000);

var projEndDate4= new Date(Projects[3].endDate*1000);

const projcomp4=document.querySelector('#proj-comp4');
projcomp4.textContent =months[projStartDate4.getMonth()]+"    "+projStartDate4.toISOString().slice(0,4)+" - "+months[projEndDate4.getMonth()]+"    "+projEndDate4.toISOString().slice(0,4);



}
display();