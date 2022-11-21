// import PropTypes from 'prop-types'
import DisplayEmotes from "../components/DisplayEmotes";
import { GET_HOT_EMOTES } from "../../GraphQL/queries";

function Hot() {
    return (
        <main>
            <DisplayEmotes fetchCategory={GET_HOT_EMOTES} />;
        </main>
    );
}

export default Hot;
