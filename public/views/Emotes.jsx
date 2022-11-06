/* eslint-disable react/react-in-jsx-scope */
// import PropTypes from 'prop-types'
import NavBar from "../components/NavBar";
import { useQuery } from "@apollo/client";
import spinner from "../../src/assets/images/spinner.gif";
import erreur from "../../src/assets/images/erreur.png";
import GET_EMOTES from "../../GraphQL/queries";

function DisplayEmotes() {
    const { loading, error, data } = useQuery(GET_EMOTES);

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
    return data.map(({ id, source_url }) => (
        <div key={id} className="bg-gray-700 p-3">
            <div className="flex gap-2 bg-gray-600">
                <img src={`${source_url}`} />
                <p className="font-bold">{`${id}`}</p>
            </div>
        </div>
    ));
}

function Emotes() {
    return (
        <>
            <NavBar />
            <DisplayEmotes />
        </>
    );
}

Emotes.propTypes = {};

export default Emotes;
