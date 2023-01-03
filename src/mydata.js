// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import tsIcon from "./images/typescript.svg"
import reactIcon from "./images/react.svg"
import sassIcon from "./images/sass.svg"
import testingIcon from "./images/testing.svg"
import reduxIcon from "./images/redux.svg"
import myPhoto from "./images/my-photo.jpg"
import nextJSIcon from "./images/nextjs-icon.svg"
import graphqlIcon from "./images/graphqlIcon.svg"

//Projects Covers
import fancyWeather from "./images/fancy-weather-cover.jpg"
import englishForKids from "./images/english-for-kids.jpg"
import socialNetwork from "./images/social-network-cover.png"
import momentum from "./images/momentum.jpg"
import shelter from "./images/shelter.jpg"
import covidDashboard from "./images/covid-dashboard.jpg"
import cards from "./images/cards.jpg"
import restaurant from "./images/restaurant.jpg"
import keyboard from "./images/keyboard.jpg"


// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
    //   Header Details ---------------------
    name: "Yauhen",
    headerTagline: [
        //Line 1 For Header
        "Yauhen Davidovich.",
        //Line 2 For Header
        "I build things for the web."
    ],
    //   Header Paragraph
    headerParagraph:
        "Front End Developer ",

    //Contact Email
    contactEmail: "davidovichyauhen@gmail.com",

    // End Header Details -----------------------

    // Work Section ------------------------
    projects: [
        {
            title: "Social network",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            socialNetwork,

            url: "https://github.com/YauhenDavidovich/Social-network/tree/develop",
            page: "https://github.com/YauhenDavidovich/Social-network/tree/develop",
        },
        {
            title: "Cards",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
            cards,
            url: "https://github.com/YauhenDavidovich/card-learning",
            page: "https://yauhendavidovich.github.io/card-learning",
        },
        {
            title: "Fancy Weather",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            imageSrc:
            fancyWeather,
            url: "http://test.com/",
            page: "https://fancy-weather-yauhendavidovich.netlify.app/"
        },
        {
            title: "English for kids",
            para:
                "App for learning English words by children.",
            imageSrc:
            englishForKids,
            url: "https://github.com/YauhenDavidovich/rsschool2020-2021/tree/english-for-kids/english-for-kids",
            page: "https://yauhendavidovich-english-for-kids.netlify.app/",
        },
        {
            title: "Covid Dashboard",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            covidDashboard,
            url: "https://github.com/nkrivitsky/COVID-19-Dashboard/tree/develop",
            page: "https://covid-dashboard-yauhendavidovich-nkrivitsky-omaslov.netlify.app/"
        },
        {
            title: "Momentum",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            momentum,
            url: "https://github.com/YauhenDavidovich/rsschool2020-2021/tree/momentum/momentum",
            page: "https://rolling-scopes-school.github.io/yauhendavidovich-JS2020Q3/momentum/"
        },
        {
            title: "Shelter",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            shelter,
            url: "https://github.com/YauhenDavidovich/rsschool2020-2021/tree/shelter",
            page: "https://rolling-scopes-school.github.io/yauhendavidovich-JS2020Q3/shelter/pages/main/main.html",
        },
        {
            title: "Restaurant",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            restaurant,
            url: "https://github.com/YauhenDavidovich/Rsschool2021-EN/tree/markup-1/layout-restaurant",
            page: "https://restaurant-html-css-layout-yauhen-davidovich.netlify.app/",
        },
        {
            title: "Vanilla JS keyboard",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            keyboard,
            url: "https://github.com/YauhenDavidovich/Rsschool2021-EN/tree/virtual-keyboard/virtual-keyboard",
            page: "https://virtual-keyboard-rsschool-yauhen-davidovich.netlify.app/",
        },

    ],

    // End Work Section -----------------------

    // About Secton --------------
    aboutParaOne:
        "I come from a provincial town in Belarus, currently living in ~~Cracow~~ on the road. My interest in web development started back in 2020 when I enrolled in a course for aspiring developers at RSSchool.",
    aboutParaTwo:
        "Fast-forward to today, and have experience in creating SPA applications using React, Redux, ES6+, HTML, CSS. My main focus these days is to build a successful career in commercial software development as a Front-end / JavaScript / React developer.",
    aboutParaThree:
        "My place in the world seems to be at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design or code—only the tools change. \n" +
        "I'm quietly confident, naturally curious, and perpetually working on improving my chops one code problem at a time.\n",
    aboutParaFour:
        "I am always experimenting, always learning, and never bored.",

    aboutImage: myPhoto,

    //   End About Section ---------------------

    // Skills Section ---------------

    //   Import Icons from the top and link it here

    skills: [
        {
            img: htmlIcon,
            para:
                "HTML5",
        },
        {
            img: cssIcon,
            para:
                "CSS3",
        },
        {
            img: jsIcon,
            para:
                "JavaScript",
        },
        {
            img: tsIcon,
            para:
                "Typescript",
        },
        {
            img: reactIcon,
            para:
                "React",
        },
        {
            img: nextJSIcon,
            para:
                "NextJS",
        },
        {
            img: graphqlIcon,
            para:
                "GraphQL",
        },
        {
            img: reduxIcon,
            para:
                "Redux",
        },
        {
            img: testingIcon,
            para:
                "Unit Tests, Storybook, Jest",
        },
        {
            img: sassIcon,
            para:
                "Sass",
        },
    ],

    // End Skills Section --------------------------

    //   Promotion Section --------------------------

    promotionHeading: "СV",
    promotionPara:
        "https://drive.google.com/file/d/1fDo32BZsMFvCYNUnlQGJfgBtbtcE96yV/view?usp=sharing",
    // End Promotion Section -----------------

    //   Contact Section --------------

    contactSubHeading: "Let's create your next experience together",
    social: [
        // Add Or Remove The Link Accordingly
        {
            img: githubIcon,
            url: "https://github.com/yauhendavidovich"
        },
        {
            img: linkedinIcon,
            url: "https://www.linkedin.com/in/yauhendavidovich/",
        },
    ],

    // End Contact Section ---------------
}

