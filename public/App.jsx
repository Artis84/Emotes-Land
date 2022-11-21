// import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

App.propTypes = {};

export default App;
