// import PropTypes from 'prop-types'
import DisplayEmotes from "../components/DisplayEmotes";
import { GET_HOT_EMOTES } from "../../GraphQL/queries";

function Hot() {
    return (
        <>
            <div className="m-0 p-0">
                <DisplayEmotes fetchCategory={GET_HOT_EMOTES} />;
            </div>
        </>
    );
}

export default Hot;
