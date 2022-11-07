// import PropTypes from 'prop-types'
import NavBar from "../components/NavBar";
import { useQuery } from "@apollo/client";
import spinner from "../../src/assets/images/spinner.gif";
import erreur from "../../src/assets/images/erreur.png";
import { GET_TOP_EMOTES } from "../../GraphQL/queries";

function DisplayEmotes() {
    const { loading, error, data } = useQuery(GET_TOP_EMOTES);

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
    return data.emotesTop.map((emote) => (
        <div key={emote.id}>
            <div className=" border-2 border-black">
                <a href={emote.source_url}>
                    <img className="w-20 h-20" src={`${emote.source_url}`} />
                </a>
            </div>
        </div>
    ));
}

function Top() {
    return (
        <>
            <NavBar />
            <div className="flex justify-center flex-wrap gap-x-2 gap-y-5 m-3">
                <DisplayEmotes />
            </div>
        </>
    );
}

Top.propTypes = {};

export default Top;
