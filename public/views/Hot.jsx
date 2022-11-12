// import PropTypes from 'prop-types'
import NavBar from "../components/NavBar";
import { useQuery } from "@apollo/client";
import spinner from "../../src/assets/images/spinner.gif";
import erreur from "../../src/assets/images/erreur.png";
import { GET_HOT_EMOTES } from "../../GraphQL/queries";

function DisplayEmotes() {
    const { loading, error, data } = useQuery(GET_HOT_EMOTES);

    function showPopup() {
        document.getElementById("popup").style.display = "flex";
        new Promise(() => {
            setTimeout(() => {
                document.getElementById("popup").style.display = "none";
            }, 2000);
        });
    }

    if (loading)
        return (
            <div className="flex justify-center items-center h-full">
                <img className="w-20 h-20" src={spinner} alt="Loading" />
            </div>
        );
    if (error)
        return (
            <div className="flex flex-col justify-center items-center error-img">
                <img src={erreur} className="object-contain w-30 h-30"></img>
                <p className="text-center text-xl font-bold">Une erreur est survenue lors de la requete</p>
            </div>
        );
    return data.emotesHot.map((emote) => (
        <div key={emote.id}>
            <img
                className="w-20 h-20 border-2 border-black hover:scale-110 transition duration-150 ease-in-out cursor-pointer"
                src={`${emote.source_url}`}
                onError={(e) => {
                    e.currentTarget.style.display = "none";
                }}
                onClick={(e) => {
                    navigator.clipboard.writeText(e.currentTarget.src);
                }}
                onMouseUp={showPopup}
            />
        </div>
    ));
}

function Hot() {
    return (
        <>
            <NavBar />
            <div className="flex justify-center flex-wrap gap-x-2 gap-y-5 m-3">
                <DisplayEmotes />
            </div>
        </>
    );
}

Hot.propTypes = {};

export default Hot;
