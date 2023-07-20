// import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./others/Navigation/MainNavigation";

//? React has 2 types of components - Presentational and Stateful components - dumb and smart
//? Presentational component is a dumb/presentational component where it just used to render a div with some styles applied to it and outputs some content it received from props. Ex: Card, Avatar, UserItem
//? Stateful component is a smart component that keeps track of the data by fetching it, and maintains a state in it. Ex: Users and other big useful components.

function App() {
    return (
        //? switch component makes sure that the react router will not evaluate lines after the route is found.
        <Router>
            <MainNavigation />
            {/* using main tag here as main is specified in MainHeader.css file */}
            <main>
                <Routes>
                    <Route path="/" element={<Users />}></Route>
                    <Route path="/places/new" element={<NewPlace />} />

                    {/* //?redirect to home if route does not exist. */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
