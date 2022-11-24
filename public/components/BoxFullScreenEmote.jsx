import PropTypes from "prop-types";

function BoxFullScreenEmote(emote) {
    return (
        <div className="screen-icon">
            <div className="fixed top-0 right-0 bottom-0 left-0 blur-sm"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img className="border-2 w-[600px] h-[400px] border-black" src={emote} />
            </div>
        </div>
    );
}

BoxFullScreenEmote.propTypes = {
    emote: PropTypes.string,
};

export default BoxFullScreenEmote;
