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

//Progect Covers
import fancyWeather from "./images/fancy-weather-cover.jpg"
import englishForKids from "./images/english-for-kids.jpg"
import socialNetwork from "./images/social-network-cover.png"
import freedomRunner from "./images/freedom-runner.jpg"
import covidDashboard from "./images/covid-dashboard.jpg"
import cards from "./images/cards.jpg"


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
            url: "https://github.com/YauhenDavidovich/cards",
            page: "https://yauhendavidovich.github.io/cards",
        },
        {
            title: "Fancy Weather",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            imageSrc:
            fancyWeather,
            url: "http://test.com/",
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
            title: "Freedom Runner",
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

            imageSrc:
            freedomRunner,
            url: "https://github.com/YauhenDavidovich/rsclone/tree/develop",
            page: "https://freedom-runner-rsschool2020q3-yauhen-davidovich.netlify.app/",
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

    ],

    // End Work Section -----------------------

    // About Secton --------------
    aboutParaOne:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    aboutParaTwo:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    aboutParaThree:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
            img: reduxIcon,
            para:
                "Redux",
        },
        {
            img: testingIcon,
            para:
                "Unit Tests, Storybook",
        },
        {
            img: sassIcon,
            para:
                "Sass",
        },
    ],

    // End Skills Section --------------------------

    //   Promotion Section --------------------------

    promotionHeading: "Heading",
    promotionPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

