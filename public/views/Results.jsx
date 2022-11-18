// import PropTypes from 'prop-types'
import { GET_SEARCH_EMOTES } from "../../GraphQL/queries";
import DisplayResultsEmotes from "../components/DisplayResultsEmotes";

function Results() {
    return (
        <>
            <main>
                <DisplayResultsEmotes fetchCategory={GET_SEARCH_EMOTES} />;
            </main>
        </>
    );
}

export default Results;
