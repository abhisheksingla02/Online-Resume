var bio = {
    "name": "ABHISHEK SINGLA",
    "role": "web developer",
    "contacts": {
        "mobile": "9501808162",
        "email": "abhisheksingla74@gmail.com",
        "github": "abhisheksingla02",
        "location": "panchkula,haryana,india",
    },
    "welcomeMessage": "welcome to my resume",
    "skills": ["C", "C++", "HTML", "CSS"],
    "biopic": "images/profile_pic.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", "ABHISHEK SINGLA");
        var formattedRole = HTMLheaderRole.replace("%data%", "web developer");
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts,#footerContacts").append(formattedmobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts,#footerContacts").append(formattedemail);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts,#footerContacts").append(formattedgithub);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts,#footerContacts").append(formattedlocation);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#topContacts").append(formattedwelcomeMsg);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#topContacts").prepend(formattedbioPic);
        if (bio.skills.length > 0) {


            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedskills);
            }
        }

    }

};
bio.display();
var education = {
    "schools": [{
            "name": "Bhavan Vidyalaya",
            "location": "Panchkula",
            "degree": "secondary-education",
            "majors": ["SSC"],
            "dates": "2001-2013",
            "url": "http://www.bhavanpanchkula.in/"
        },
        {
            "name": "Government Model Senior Secondary School",
            "location": "Manimajra",
            "degree": "higher-secondary",
            "majors": ["HSC"],
            "dates": "2013-2015",
            "url": "http://www.gmsssmhcchd.com/"
        },
    ],
    "onlineCourses": [{
        "title": "Front-End",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }],
    display: function() {
        for (i = 0; i < education.schools.length; i++) {
            var formattedschoolStart = HTMLschoolStart;
            $("#education").append(formattedschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $("#education").append(formattedschoolName);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $("#education").append(formattedschoolLocation);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $("#education").append(formattedschoolDegree);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $("#education").append(formattedschoolMajor);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $("#education").append(formattedschoolDates);
        }
        for (i = education.onlineCourses.length - 1; i < education.onlineCourses.length; i++) {
            var formattedonlineClasses = HTMLonlineClasses;
            $("#education").append(formattedonlineClasses);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            $("#education").append(formattedonlineTitle);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $("#education").append(formattedonlineSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $("#education").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $("#education").append(formattedonlineURL);

        }
    }

};
education.display();
var work = {
    "jobs": [{
        "employer": "innovate & excel school",
        "title": "head coach",
        "location": "panchkula",
        "dates": "2013-july 2014",
        "description": "I was head sports coach,I used to teach the kids playing cricket and used to help them with their batting,bowling and fielding techniques.I also used to mentor and prepare them for inter-school and state level tournaments.Along with my staff I used to take special classes for dedicated and talented students.It was really a privellege to grrom and mentor a very special lot of students."
    }],
    display: function() {
        for (job = 0; job < work.jobs.length; job++) {
            var formattedonworkStart = HTMLworkStart;
            $("#workExperience").append(formattedonworkStart);
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            $("#workExperience").append(formattedworkEmployer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            $("#workExperience").append(formattedworkTitle);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $("#workExperience").append(formattedworkLocation);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $("#workExperience").append(formattedworkDates);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $("#workExperience").append(formattedworkDescription);
        }
    }
};
work.display();

var projects = {
    "project": [{
            "title": "Animal Card",
            "dates": "22nd jan 2017",
            "description": "This project provides details of a house sparrow",
            "images": ["images/card.PNG"]
        },
        {
            "title": "Portfolio",
            "dates": "2 feb 2017",
            "description": "This project provides details of my portfolio",
            "images": ["images/portfolio.PNG"]
        }
    ],
    display: function() {

        for (i = 0; i < projects.project.length; i++) {

            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
            $("#projects").append(formattedprojectTitle);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
            $("#projects").append(formattedprojectDates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
            $("#projects").append(formattedprojectDescription);
            var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[i].images);
            $("#projects").append(formattedprojectImage);
        }
    }
};
projects.display();
$("#mapDiv").append(googleMap);