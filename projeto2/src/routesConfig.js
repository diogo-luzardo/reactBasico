import Home from "./home/Home";
import User from "./Users";

const routesConfig = [
    {
        path:"/",
        component: Home,
        exact: true
    },
    {
        path:"/user",
        component:User,
        exact: true

    },

]

export default routesConfig;