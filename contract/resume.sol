//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
contract Resume{

        struct PersonalInformation {
        string fullName;
        string email;
        string phoneNumber;
        }
        struct Education {
        uint index;
        string degree;
        string major;
        string university;
        uint graduationYear;
        }
        struct WorkExperience {
        uint index;
        string companyName;
        string jobTitle;
        string[] jobDescription;
        uint startDate;
        uint endDate;
        }
        struct Projects {
        uint index;
        string projectName;
        uint startDate;
        uint endDate;
        string url;
        string projectDescription; 
        }
        PersonalInformation public personalInfo;
        Education[] public education;
        WorkExperience[] public workExperience;
        Projects[] public projects;
        string[]  jobDescription1;

        constructor() {
        personalInfo = PersonalInformation({
            fullName: "Ashutosh Tripathi",
            email: "rbj.ashu@gmail.com",
            phoneNumber: "+918602294161"
        });
        
        
         education.push(Education({
            index: 0,
            degree: "Senior Secondary",
            major: "Science",
            university: unicode"St. Joseph Senior Secondary School, Dibiyapur",
            graduationYear: 2012
        }));
        education.push(Education({
            index: 1,
            degree: unicode"Bachelor’s Degree",
            major: "Computer Science",
            university: "Chattisgarh Swami Vivekananda Technical University",
            graduationYear: 2016
        }));
        
        

        
        jobDescription1.push("Successfully completed vocational training in Web Based Application Development using J2EE and Oracle. Developed a secure and reliable online voting platform that can help in conducting surveys and elections. The web application is developed using J2EE, Oracle and secured using SSL and MD5 encryptions");
        workExperience.push(WorkExperience({
            index:0,
            companyName: "MicroPro Info",
            jobTitle: "Vocational Trainee",
            jobDescription: jobDescription1,
            startDate: 1404153000,
            endDate: 1406831400
        }));
        delete jobDescription1;
        jobDescription1.push("Developed a windows-based game (fun induced learning platform) for kids to demonstrate the effect of game-based learning. The project involved developing a paintball game using C# .net and Windows XNA Game development platform with built-in quizzes for motivating kids to learn. Further to the development, tests were conducted and received positive outcome.");
        workExperience.push(WorkExperience({
            index:1,
            companyName: "Onet Infotech",
            jobTitle: "Intern",
            jobDescription: jobDescription1,
            startDate: 1433097000,
            endDate: 1438367399
        }));
        delete jobDescription1;
        jobDescription1.push("Designed and developed Hyperledger Fabric blockchain solution for a Singapore based power company.");
        jobDescription1.push("Successfully designed and deployed a high-available Hyperledger Fabric network using Kubernetes and Kafka based ordering service.");
        jobDescription1.push("Developed spring microservices based gateway interface using Fabric SDK Java to interact with fabric network.");
        jobDescription1.push("Successfully completed POCs with frameworks like Ethereum, Corda and wallet creation for cryptocurrencies like Bitcoin, BitcoinCash, Ethereum, Ripple.");
        jobDescription1.push("Worked as a Core JAVA and automation developer, responsible for developing an adaptable automation testing framework for banking ecosystem that can be used across various implementations and business transaction modes (Screens, SWIFT ISO 15022 and ISO 20022, Reports, Batches, Queries).");
        workExperience.push(WorkExperience({
            index:2,
            companyName: "Tata Consultancy Services",
            jobTitle: "Software Developer",
            jobDescription: jobDescription1,
            startDate: 1469989800,
            endDate: 1622485800
        }));
        delete jobDescription1;
        jobDescription1.push("Developed ETL job to streamline process of reading bulk data from file/bigquery, transform and load data to bigquery");
        jobDescription1.push("Contributed to the development of a CICD pipeline to deploy product on Google Cloud Platform (GCP).");
        jobDescription1.push("Currently working on the development of a Hyperledger Fabric-based contract negotiation product.");
        jobDescription1.push("Responsible for developing Java/J2EE-based backend to enable efficient communication between UI and blockchain.");
        workExperience.push(WorkExperience({
            index:3,
            companyName: "Mobileum India",
            jobTitle: "Senior Software Developer",
            jobDescription: jobDescription1,
            startDate: 1622485800,
            endDate: 1677608999
        }));
        projects.push(Projects({
            index:0,
            projectName:"Qwak Cryptocurrency",
            startDate:1596220200,
            endDate:1609439399,
            url:"https://qwak.herokuapp.com/,https://github.com/ashutosh-tripathi/cryptochain.git",
            projectDescription:"Created a blockchain based cryptocurrency qwak, that can be used like any other currency with the safety and security of blockchain. The coin is created using NodeJS, with redis for communication between nodes and deployed on heroku." 
        }));
        projects.push(Projects({
            index:1,
            projectName:"Smart Spelling Corrector",
            startDate:1451586600,
            endDate:1459448999,
            url:"https://github.com/ashutosh-tripathi/smart_spell_corrector.git",
            projectDescription:"Implemented Peter Norvig's spell corrector algorithm using trie data structure and Bayes theorem. This implementation is further improvement over Norvig's implementation as it adds new parameters to the word prediction algorithm and thus increasing the accuracy of the word predicted." 
        }));
        projects.push(Projects({
            index:0,
            projectName:"Learn with Fun",
            startDate:1433097000,
            endDate:1438367399,
            url:"https://github.com/ashutosh-tripathi/Learn-with-fun-game.git",
            projectDescription:"Learn with fun is a Windows-based game that demonstrates the ideology of game-based learning. It is a simple paintball game developed using C# .net and XNA Game development framework with built-in quizzes for motivating kids to learn." 
        }));
        projects.push(Projects({
            index:0,
            projectName:"Smart Voter",
            startDate:1406831400,
            endDate:1412101799,
            url:"https://github.com/ashutosh-tripathi/smart-voter.git",
            projectDescription:"Smart voter is a secure and reliable online voting platform developed using J2EE, Oracle and secured with SSL and MD5 encryption techniques. This web application can effectively ease the process of conducting surveys and elections." 
        }));

    }

        // function pushData(string memory data) public{
        //     jobDescription.push(data);
        // }

     function getWorkExperience() public view returns (WorkExperience[] memory) {
        return workExperience;
     }
    

    function getPersonalInformation() public view returns (
        string memory,
        string memory,
        string memory
    ) {
        return (
            personalInfo.fullName,
            personalInfo.email,
            personalInfo.phoneNumber
        );
    }
    function getEducation() public view returns (Education[] memory) {
        return education;
    }
    function getProjects() public view returns(Projects[] memory){
        return projects;
    }
    function addEducation(
        string memory _degree,
        string memory _major,
        string memory _university,
        uint _graduationYear
    ) public {
        uint idx=education.length;
        education.push(Education({
            index:idx,
            degree: _degree,
            major: _major,
            university: _university,
            graduationYear: _graduationYear
        }));
    }

    function addWorkExperience(
        string memory _companyName,
        string memory _jobTitle,
        string[] memory _jobDescription,
        uint _startDate,
        uint _endDate
    ) public {
        uint idx=workExperience.length;
        workExperience.push(WorkExperience({
            index:idx,
            companyName: _companyName,
            jobTitle: _jobTitle,
            jobDescription: _jobDescription,
            startDate: _startDate,
            endDate: _endDate
        }));
    }
    function addProjects(
        string memory _projectName,
        uint _startDate,
        uint _endDate,
        string memory _url,
        string memory _projectDescription ) public {
            uint idx=projects.length;
            projects.push(Projects({
                index:idx,
                projectName:_projectName,
                startDate:_startDate,
                endDate:_endDate,
                url:_url,
                projectDescription:_projectDescription
            }));

    }



}
