// import PropTypes from 'prop-types'
import DisplayEmotes from "../components/DisplayEmotes";
import { GET_TOP_EMOTES } from "../../GraphQL/queries";

function Top() {
    return (
        <>
            <main>
                <DisplayEmotes fetchCategory={GET_TOP_EMOTES} />;
            </main>
        </>
    );
}

export default Top;
