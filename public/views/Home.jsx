import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// import PropTypes from "prop-types";

function Home() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

Home.propTypes = {};

export default Home;
