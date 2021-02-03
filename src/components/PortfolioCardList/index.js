import PortfolioItem from "../PortfolioItem";
import Row from "../Row";

const projectData = [
    {
        name: "React Library Book Search Application",
        image: "reactlibrary1.jpg",
        link: "https://reactlibrary-mh.herokuapp.com/",
        description: "Full-stack MERN application allows users to search and save books of interest from the Google Books API.",
        technologies: "React Front-End, Google Books API, Node.js Back-End, Passport, React Context API, Bootstrap, MongoDB, Mongoose",
        repo: "https://github.com/mhans003/reactlibrary-mh",
        guestUsername: "guest",
        guestPassword: "guest"
    },
    {
        name: "Python News Application",
        image: "pythonnews1.jpg",
        link: "https://python-newsapp-mh.herokuapp.com/",
        description: "Python-based application allows an authenticated user to create posts to articles/links and comment/vote on favorites.",
        technologies: "Python, Flask, SQLAlchemy, Jinja, JavaScript, Bootstrap",
        repo: "https://github.com/mhans003/python-newsapp",
        guestUsername: "guest",
        guestPassword: "guest"
    },
    {
        name: "Safety Consulting React Site",
        image: "safetyconsulting.jpg",
        link: "https://safety-consulting-mh.herokuapp.com/",
        description: "Sample of Michael Hanson's front-end development and design work with React.",
        technologies: "React, React Router, JavaScript, Bootstrap, React Bootstrap",
        repo: "https://github.com/mhans003/matthew-palomo"
    },
    {
        name: "React 'Aspirations' To-Do Application",
        image: "aspirations2.jpg",
        link: "https://aspirations-mh.herokuapp.com/register",
        description: "Full-stack to-do-like application allows authenticated users to save aspirations and record milestones for each.",
        technologies: "React Front-End, Node.js Back-End, Passport, React Context API, Bootstrap, MongoDB, Mongoose",
        repo: "https://github.com/mhans003/react-aspirations-app",
        guestUsername: "sample",
        guestPassword: "sample12"
    },
    {
        name: "React Blog Application",
        image: "reactblog1.jpg",
        link: "https://blogapplication-mh.herokuapp.com/",
        description: "Full-stack blog application allows a user to write, save, and read blog posts and mark favorites.",
        technologies: "React Front-End, Node.js Back-End, React Context API, Bootstrap, MongoDB, Mongoose",
        repo: "https://github.com/mhans003/react-blog-application"
    },
    {
        name: "To-Do List",
        image: "todo1.jpg",
        link: "https://mhans003-todolist.herokuapp.com/",
        description: "Allows a user to view, add, delete, and organize to-do items using MySQL.",
        technologies: "MySQL, Node.js, jQuery, Express, Express Handlebars, Bootstrap",
        repo: "https://github.com/mhans003/todolist"
    },
    {
        name: "JavaScript Quiz Game",
        image: "gamescreenshot.jpg",
        link: "https://javascript-quiz-game-mh.herokuapp.com/",
        description: "Fast-paced quiz game to test user on JavaScript concepts and save high scores.",
        technologies: "Node.js, Express, Express Handlebars, MySQL, Sequelize",
        repo: "https://github.com/mhans003/codequiz"
    },
    {
        name: "Employee Management System (CLI Application)",
        image: "empdb1.jpg",
        link: "https://github.com/mhans003/employeemanagementsystem",
        description: "Allows a user to view, edit, add, and delete entries for a company's departments, roles, and employees using MySQL.",
        technologies: "MySQL, Node.js, Inquirer, console.table",
        repo: "https://github.com/mhans003/employeemanagementsystem"
    },
    {
        name: "React Employee Directory",
        image: "empdirectory2.jpg",
        link: "https://react-employee-directory-mh.herokuapp.com/",
        description: "Allows a user to view, sort, and filter employee data based on randomly retrieved data.",
        technologies: "React, JavaScript, Bootstrap, React Bootstrap, Random User Generator API",
        repo: "https://github.com/mhans003/react-employee-directory"
    },
    {
        name: "Workout Tracker",
        image: "workoutimg1.jpg",
        link: "https://workout-tracker-mh.herokuapp.com/",
        description: "Allows a user to add exercises to a workout and track data/progress visually.",
        technologies: "MongoDB, Mongoose, Chart.js, Node.js, Express, Semantic UI",
        repo: "https://github.com/mhans003/workout-tracker"
    },
    {
        name: "Budget/Expense Tracker",
        image: "expensetracker2.jpg",
        link: "https://budgettracker-mh.herokuapp.com/",
        description: "An application, which can be installed as a PWA, that allows a user to enter and view expenses over time.",
        technologies: "MongoDB, IndexedDB, Chart.js, Node.js, Express, Bootstrap",
        repo: "https://github.com/mhans003/budgettracker"
    },
    {
        name: "Note Taker",
        image: "note2.jpg",
        link: "https://notetaker-mh.herokuapp.com/",
        description: "Allows a user to write, save, and edit notes to and from a JSON file.",
        technologies: "Node.js, jQuery, Express, fs, Moment.js, Bootstrap",
        repo: "https://github.com/mhans003/notetaker"
    },
    {
        name: "Employee Generator (CLI Application)",
        image: "employeegenerator.jpg",
        link: "https://github.com/mhans003/employeegenerator",
        description: "Produces an HTML document with employee data for a company/team.",
        technologies: "Node.js, Inquirer, fs, Jest",
        repo: "https://github.com/mhans003/employeegenerator"
    },
    {
        name: "Good README Generator (CLI Application)",
        image: "goodreadme.jpg",
        link: "https://github.com/mhans003/goodreadme",
        description: "Generates strong README.md and LICENSE.txt files for a developer's project.",
        technologies: "Node.js, Inquirer, fs",
        repo: "https://github.com/mhans003/goodreadme"
    },
    {
        name: "Day Planner",
        image: "appshot.jpg",
        link: "https://mhans003.github.io/calendarapp/",
        description: "Tracks past, present, and future time slots and allows user to write and save events.",
        technologies: "HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, Fontawesome",
        repo: "https://github.com/mhans003/calendarapp"
    },
    {
        name: "Weather Dashboard",
        image: "weatherappscreenshotsf.jpg",
        link: "https://mhans003.github.io/weatherapp/",
        description: "Provides current weather and 5-day forecast for local or searched city.",
        technologies: "HTML, CSS, JavaScript, Openweathermap API, Bootstrap",
        repo: "https://github.com/mhans003/weatherapp"
    },
    {
        name: "Hanson Math Games",
        image: "hansonmathgames.jpg",
        link: "https://safe-wave-91410.herokuapp.com/",
        description: "Fun math games and tools to build number fluency; Saves and authenticates users and scores.",
        technologies: "HTML, CSS, Bootstrap, JavaScript, Node.js, MongoDB, Express, Passport, Mongoose, EJS",
        repo: "https://github.com/mhans003/hansonmathgames",
        guestUsername: "Hanson",
        guestPassword: "Hanson"
    },
    {
        name: "HealthApp",
        image: "healthapp.jpg",
        link: "https://mhans003.github.io/healthapp/",
        description: "Retrieves local health-oriented businesses and tracks food calorie data.",
        technologies: "HTML, CSS, JavaScript, Yelp API, Zomato API, Nutritionix API, Semantic UI",
        repo: "https://github.com/mhans003/healthapp",
        isTeamProject: true
    },
    {
        name: "Password Generator",
        image: "passwordgenerator.jpg",
        link: "https://password-generator-mh.herokuapp.com/",
        description: "Generates unique random passwords based on selected character types.",
        technologies: "Node.js, JavaScript, Express, Bootstrap, ClipboardJS, Fontawesome",
        repo: "https://github.com/mhans003/passwordgenerator"
    },
    {
        name: "Expense Management System",
        image: "expensetracker.jpg",
        link: "https://monthly-expense-management.herokuapp.com/",
        description: "Allows a user to save, view, edit, and delete subscription information in order to help keep track of recurring expenses.",
        technologies: "Node.js, jQuery, MySQL, Sequelize, Express, Passport",
        repo: "https://github.com/mhans003/monthly-expense-management",
        guestUsername: "new@new.com",
        guestPassword: "new",
        isTeamProject: true
    }
];

function PortfolioCardList() {

    return (
        <Row>
            {projectData.map((project, index) => {
                return <PortfolioItem key={index} projectData={project}/>;
            })}
        </Row>
    );
}

export default PortfolioCardList;