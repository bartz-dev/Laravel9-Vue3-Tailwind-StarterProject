// import App from "../App.vue";
// import Register from "../pages/Register.vue";
// import Login from "../pages/Login.vue";
// import AppHomePage from "../pages/AppHomePage.vue";

const App = () => import("./App.vue");
const Homepage = () => import("./Pages/HomePage.vue");

// Layout

export default [
    {
        path: "/",
        name: "home",
        components: {
            default: Homepage,
        },
    },
];
