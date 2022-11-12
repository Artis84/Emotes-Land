// import PropTypes from 'prop-types'
import DisplayEmotes from "../components/DisplayEmotes";

function Top() {
    return (
        <div className="flex justify-center flex-wrap gap-x-2 gap-y-5 m-3 w-screen h-screen">
            <DisplayEmotes />
        </div>
    );
}

Top.propTypes = {};

export default Top;
