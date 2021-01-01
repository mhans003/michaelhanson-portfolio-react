(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){},42:function(e,t){},50:function(e,t,a){},51:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),o=a.n(s),c=a(21),r=a.n(c),i=(a(50),a(14)),l=(a.p,a(51),a(52),a(43)),h=a(7),d=(a(27),a(26)),m=a(30);var j=function(e){return Object(n.jsx)("span",{className:"nav-item px-3".concat(e.current===e.tagName?" active":""),children:Object(n.jsxs)(m.a.Link,{href:"/".concat(e.tagName),children:[Object(n.jsx)("hr",{className:"hr-light d-lg-none"}),Object(n.jsx)("span",{className:"dropdown-text",children:e.text}),Object(n.jsx)("hr",{className:"hr-light d-lg-none"})]})})};var p=function(e){return Object(n.jsxs)(d.a,{className:"navbar-dark bg-dark",expand:"lg",children:[Object(n.jsx)(d.a.Brand,{className:"px-3 pt-2",href:"/",children:"Michael Hanson"}),Object(n.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"mr-2"}),Object(n.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(m.a,{className:"ml-auto",children:[Object(n.jsx)(j,{text:"Home",tagName:"home",current:e.current}),Object(n.jsx)(j,{text:"Portfolio",tagName:"portfolio",current:e.current}),Object(n.jsx)(j,{text:"Contact",tagName:"contact",current:e.current}),Object(n.jsx)(j,{text:"Resume",tagName:"resume",current:e.current})]})})]})};var b=function(e){return Object(n.jsxs)("span",{className:"text-light",children:[Object(n.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("i",{className:e.icon})}),Object(n.jsxs)("span",{className:"d-none d-md-inline",children:[e.text,Object(n.jsx)("span",{className:"sr-only",children:e.alt})]})]})};var u=function(){return Object(n.jsx)("footer",{className:"footer bg-dark",children:Object(n.jsx)("nav",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row justify-content-between mx-2",children:[Object(n.jsx)(b,{url:"/contact",icon:"fas fa-mobile-alt",text:"(951) 834-8219",alt:"Michael Hanson's Phone Number"}),Object(n.jsx)(b,{url:"/contact",icon:"fas fa-envelope-open-text",text:"michaeledwardhanson@gmail.com",alt:"Michael Hanson's Email Address"}),Object(n.jsx)(b,{url:"https://github.com/mhans003",icon:"fab fa-github",text:"mhans003",alt:"Michael Hanson's GitHub Account"}),Object(n.jsx)(b,{url:"https://www.linkedin.com/in/michaeledwardhanson/",icon:"fab fa-linkedin",text:"LinkedIn",alt:"Michael Hanson's LinkedIn Account"})]})})})};var g=function(e){var t=e.main,a=e.children;return Object(n.jsx)("div",{className:"container".concat(t?" main":""),children:a})};var x=function(e){var t=e.children;return Object(n.jsx)("div",{className:"row",children:t})};var O=function(e){var t=e.size,a=e.children;return Object(n.jsx)("div",{className:t,children:a})};var f=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{current:e.current}),Object(n.jsxs)(g,{main:!0,children:[Object(n.jsx)("h1",{className:"text-center mt-3",children:"About Me"}),Object(n.jsx)("hr",{}),Object(n.jsxs)(x,{children:[Object(n.jsx)(O,{size:"col-lg-6",children:Object(n.jsx)("img",{id:"biopic",src:"assets/images/mh.jpg",alt:"Michael Hanson"})}),Object(n.jsxs)(O,{size:"col-lg-6",children:[Object(n.jsx)("p",{className:"biobody mt-3 mt-lg-0",children:"I am a web developer currently finishing the Full Stack Web Development Boot Camp through UCR Extension, and I have built various mobile-first applications using various technologies including JavaScript, jQuery, Node.js, MySQL, and MongoDB. I also hold a certificate in Computer Information Systems from MSJC and an additional Web Development certificate through UCR Extension."}),Object(n.jsx)("p",{className:"biobody",children:"I come with experience of having been a teacher with a successful track record for over 7 years, during which I held teacher-leader roles including administrative designee. During that time, I incorporated coding into my work. For example, I taught programming concepts to students as a summer youth instructor at UCR Extension, and I also built and deployed math games for my own fourth grade students. I have since made the decision to devote myself to web development full-time."}),Object(n.jsx)("p",{className:"biobody",children:'As for a few other unique facts about myself, I have interests in photography, science, cooking, and healthy food. I love to exercise, and lap swimming is my favorite sport. I have had a prosthetic leg my entire life, and you might catch me making wisecracks about it. I hope you have enjoyed getting a sense of walking a day in my "shoe!"'})]})]})]}),Object(n.jsx)(u,{})]})};var v=function(e){return Object(n.jsx)(O,{size:"col-md-6 col-lg-4 portfolio-item",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./assets/images/".concat(e.projectData.image),className:"card-img-top",alt:"Screenshot of ".concat(e.projectData.name)}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:Object(n.jsx)("a",{href:"".concat(e.projectData.link),target:"_blank",rel:"noreferrer",children:Object(n.jsx)("strong",{children:e.projectData.name})})}),e.projectData.isTeamProject?Object(n.jsx)("h6",{className:"text-center text-muted",children:"Team Project"}):"",Object(n.jsx)("hr",{}),Object(n.jsx)("p",{className:"card-text",children:e.projectData.description}),e.projectData.guestUsername&&e.projectData.guestPassword?Object(n.jsxs)("div",{children:[Object(n.jsxs)("h6",{className:"card-text",children:["Guest Username: ",Object(n.jsx)("i",{children:e.projectData.guestUsername})]}),Object(n.jsxs)("h6",{className:"card-text mb-3",children:["Guest Password: ",Object(n.jsx)("i",{children:e.projectData.guestPassword})]})]}):"",Object(n.jsxs)("p",{className:"card-text",children:["Technologies Include: ",e.projectData.technologies]}),Object(n.jsx)("form",{action:"".concat(e.projectData.repo),target:"_blank",className:"text-center",children:Object(n.jsxs)("button",{type:"submit",className:"btn btn-info btn-sm",children:["Repo ",Object(n.jsx)("i",{className:"fab fa-github"})]})})]})]})})},y=[{name:"React Blog Application",image:"reactblog1.jpg",link:"https://blogapplication-mh.herokuapp.com/",description:"Full-stack blog application allows a user to write, save, and read blog posts and mark favorites.",technologies:"React Front-End, Node.js Back-End, React Context API, Bootstrap, MongoDB, Mongoose",repo:"https://github.com/mhans003/react-blog-application"},{name:"To-Do List",image:"todo1.jpg",link:"https://mhans003-todolist.herokuapp.com/",description:"Allows a user to view, add, delete, and organize to-do items using MySQL.",technologies:"MySQL, Node.js, jQuery, Express, Express Handlebars, Bootstrap",repo:"https://github.com/mhans003/todolist"},{name:"JavaScript Quiz Game",image:"gamescreenshot.jpg",link:"https://javascript-quiz-game-mh.herokuapp.com/",description:"Fast-paced quiz game to test user on JavaScript concepts and save high scores.",technologies:"Node.js, Express, Express Handlebars, MySQL, Sequelize",repo:"https://github.com/mhans003/codequiz"},{name:"Employee Management System (CLI Application)",image:"empdb1.jpg",link:"https://github.com/mhans003/employeemanagementsystem",description:"Allows a user to view, edit, add, and delete entries for a company's departments, roles, and employees using MySQL.",technologies:"MySQL, Node.js, Inquirer, console.table",repo:"https://github.com/mhans003/employeemanagementsystem"},{name:"React Employee Directory",image:"empdirectory2.jpg",link:"https://react-employee-directory-mh.herokuapp.com/",description:"Allows a user to view, sort, and filter employee data based on randomly retrieved data.",technologies:"React, JavaScript, Bootstrap, React Bootstrap, Random User Generator API",repo:"https://github.com/mhans003/react-employee-directory"},{name:"Workout Tracker",image:"workoutimg1.jpg",link:"https://workout-tracker-mh.herokuapp.com/",description:"Allows a user to add exercises to a workout and track data/progress visually.",technologies:"MongoDB, Mongoose, Chart.js, Node.js, Express, Semantic UI",repo:"https://github.com/mhans003/workout-tracker"},{name:"Budget/Expense Tracker",image:"expensetracker2.jpg",link:"https://budgettracker-mh.herokuapp.com/",description:"An application, which can be installed as a PWA, that allows a user to enter and view expenses over time.",technologies:"MongoDB, IndexedDB, Chart.js, Node.js, Express, Bootstrap",repo:"https://github.com/mhans003/budgettracker"},{name:"Note Taker",image:"note2.jpg",link:"https://notetaker-mh.herokuapp.com/",description:"Allows a user to write, save, and edit notes to and from a JSON file.",technologies:"Node.js, jQuery, Express, fs, Moment.js, Bootstrap",repo:"https://github.com/mhans003/notetaker"},{name:"Employee Generator (CLI Application)",image:"employeegenerator.jpg",link:"https://github.com/mhans003/employeegenerator",description:"Produces an HTML document with employee data for a company/team.",technologies:"Node.js, Inquirer, fs, Jest",repo:"https://github.com/mhans003/employeegenerator"},{name:"Good README Generator (CLI Application)",image:"goodreadme.jpg",link:"https://github.com/mhans003/goodreadme",description:"Generates strong README.md and LICENSE.txt files for a developer's project.",technologies:"Node.js, Inquirer, fs",repo:"https://github.com/mhans003/goodreadme"},{name:"Day Planner",image:"appshot.jpg",link:"https://mhans003.github.io/calendarapp/",description:"Tracks past, present, and future time slots and allows user to write and save events.",technologies:"HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, Fontawesome",repo:"https://github.com/mhans003/calendarapp"},{name:"Weather Dashboard",image:"weatherappscreenshotsf.jpg",link:"https://mhans003.github.io/weatherapp/",description:"Provides current weather and 5-day forecast for local or searched city.",technologies:"HTML, CSS, JavaScript, Openweathermap API, Bootstrap",repo:"https://github.com/mhans003/weatherapp"},{name:"Hanson Math Games",image:"hansonmathgames.jpg",link:"https://safe-wave-91410.herokuapp.com/",description:"Fun math games and tools to build number fluency; Saves and authenticates users and scores.",technologies:"HTML, CSS, Bootstrap, JavaScript, Node.js, MongoDB, Express, Passport, Mongoose, EJS",repo:"https://github.com/mhans003/hansonmathgames",guestUsername:"Hanson",guestPassword:"Hanson"},{name:"HealthApp",image:"healthapp.jpg",link:"https://mhans003.github.io/healthapp/",description:"Retrieves local health-oriented businesses and tracks food calorie data.",technologies:"HTML, CSS, JavaScript, Yelp API, Zomato API, Nutritionix API, Semantic UI",repo:"https://github.com/mhans003/healthapp",isTeamProject:!0},{name:"Password Generator",image:"passwordgenerator.jpg",link:"https://password-generator-mh.herokuapp.com/",description:"Generates unique random passwords based on selected character types.",technologies:"Node.js, JavaScript, Express, Bootstrap, ClipboardJS, Fontawesome",repo:"https://github.com/mhans003/passwordgenerator"},{name:"Expense Management System",image:"expensetracker.jpg",link:"https://monthly-expense-management.herokuapp.com/",description:"Allows a user to save, view, edit, and delete subscription information in order to help keep track of recurring expenses.",technologies:"Node.js, jQuery, MySQL, Sequelize, Express, Passport",repo:"https://github.com/mhans003/monthly-expense-management",guestUsername:"new@new.com",guestPassword:"new",isTeamProject:!0}];var w=function(){return Object(n.jsx)(x,{children:y.map((function(e){return Object(n.jsx)(v,{projectData:e})}))})};var k=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{current:e.current}),Object(n.jsxs)(g,{main:!0,children:[Object(n.jsx)("h1",{className:"text-center mt-3",children:"Portfolio"}),Object(n.jsx)("hr",{}),Object(n.jsx)(w,{})]}),Object(n.jsx)(u,{})]})},N=a(33);var S=function(e){return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{type:"button",className:"btn btn-secondary btn-block btn-lg page-button",onClick:function(){return e.handleContactShow(e.heading,e.body)},children:Object(n.jsxs)("span",{className:"contact-item",children:[e.text," ",Object(n.jsx)("i",{className:e.icon})]})})})};var M=function(e){return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("form",{action:e.url,target:"_blank",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-secondary btn-block btn-lg page-button",children:Object(n.jsxs)("span",{className:"contact-item",children:[e.text,"  ",Object(n.jsx)("i",{className:e.icon})]})})})})},I=a(67);var C=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(I.a,{show:e.contactShow,onHide:e.handleContactClose,children:[Object(n.jsx)(I.a.Header,{closeButton:!0,children:Object(n.jsx)(I.a.Title,{children:Object(n.jsx)("h3",{children:e.heading})})}),Object(n.jsx)(I.a.Body,{children:"Call or Text Michael Hanson"===e.heading?Object(n.jsx)("h2",{className:"text-center",children:e.body}):Object(n.jsx)("h5",{className:"text-center",children:e.body})})]})})};var E=function(e){var t=Object(s.useState)(!1),a=Object(N.a)(t,2),o=a[0],c=a[1],r=Object(s.useState)(""),i=Object(N.a)(r,2),l=i[0],h=i[1],d=Object(s.useState)(""),m=Object(N.a)(d,2),j=m[0],b=m[1],x=function(e,t){h(e),b(t),c(!0)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{current:e.current}),Object(n.jsxs)(g,{main:!0,children:[Object(n.jsx)("h1",{className:"text-center mt-3",children:"Contact"}),Object(n.jsx)("hr",{}),Object(n.jsx)(S,{text:"Email ",icon:"fas fa-envelope-open-text",handleContactShow:x,heading:"Email Michael Hanson",body:"michaeledwardhanson@gmail.com"}),Object(n.jsx)(S,{text:"Phone ",icon:"fas fa-mobile-alt",handleContactShow:x,heading:"Call or Text Michael Hanson",body:"(951) 834-8219"}),Object(n.jsx)(M,{text:"GitHub ",icon:"fab fa-github",url:"https://github.com/mhans003"}),Object(n.jsx)(M,{text:"LinkedIn ",icon:"fab fa-linkedin",url:"https://www.linkedin.com/in/michaeledwardhanson/"})]}),Object(n.jsx)(u,{}),Object(n.jsx)(C,{contactShow:o,handleContactClose:function(){return c(!1)},heading:l,body:j})]})};var D=function(){return Object(n.jsx)("div",{className:"main-content",children:Object(n.jsx)("embed",{src:"./assets/MichaelHansonResume.pdf",type:"application/pdf",width:"100%",height:"600px"})})};var P=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{current:e.current}),Object(n.jsxs)(g,{main:!0,children:[Object(n.jsxs)("h1",{children:["Resume ",Object(n.jsx)("a",{href:"./assets/MichaelHansonResume.pdf",download:!0,children:Object(n.jsx)("i",{id:"download-icon",className:"fad fa-arrow-to-bottom"})})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(D,{})]}),Object(n.jsx)(u,{})]})},H=a(42),A=a.n(H);var B=function(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(f,Object(i.a)(Object(i.a)({},e),{},{current:"home"}))}}),Object(n.jsx)(h.a,{exact:!0,path:"/home",render:function(e){return Object(n.jsx)(f,Object(i.a)(Object(i.a)({},e),{},{current:"home"}))}}),Object(n.jsx)(h.a,{exact:!0,path:"/portfolio",render:function(e){return Object(n.jsx)(k,Object(i.a)(Object(i.a)({},e),{},{current:"portfolio"}))}}),Object(n.jsx)(h.a,{exact:!0,path:"/contact",render:function(e){return Object(n.jsx)(E,Object(i.a)(Object(i.a)({},e),{},{current:"contact"}))}}),Object(n.jsx)(h.a,{exact:!0,path:"/resume",render:function(e){return Object(n.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{current:"resume"}))}}),Object(n.jsx)(h.a,{component:A.a})]})})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),o(e),c(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),L()}},[[60,1,2]]]);
//# sourceMappingURL=main.12ba272d.chunk.js.map