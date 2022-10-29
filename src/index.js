//STYLES
import './style/header.css';
import './style/home.css';
import './style/menu.css';
import './style/footer.css';
import './style/contact.css';


//create pages
import createHeader from "./pages/header";
import home from './pages/home';
import menu from './pages/menu';
import footer from './pages/footer';
import loadPage from './pages/loadPage';
import contactUs from './pages/contact';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("container").innerText = "";
    createHeader();
    home();
    addNavEvents()
    footer()
});

function addNavEvents(){
    const container = document.querySelector("#container");

    container.addEventListener('click', (e) => {
        if(e.target.id === "home"){
            // console.log("home");
            document.getElementById("container").innerText = "";
            createHeader();
            home();
            footer();
        } else if(e.target.id === "pmenu"){
            // console.log("menu")
            loadPage();
            createHeader();
            menu();
            footer();
        } else if(e.target.id === "about"){
            e.preventDefault();
            loadPage();
            createHeader();
            home();
            footer();
            window.scroll(0, 741);

            // window.onscroll = function() {    var y = window.scrollY;    console.log(y);}; //look scroll
        } else if(e.target.id === "contact"){
            loadPage();
            createHeader()
            contactUs();
            footer()
        }
    });
};

