import { useQuery } from "@apollo/client";
import spinner from "../../src/assets/images/spinner.gif";
import erreur from "../../src/assets/images/erreur.png";
import { GET_TOP_EMOTES } from "../../GraphQL/queries";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function FetchEmotes(props) {
    let page = String(props.page);
    const { loading, error, data } = useQuery(GET_TOP_EMOTES, {
        variables: { page: page },
    });
    let isAldreadyCopyPending = false;

    function showPopup() {
        // Verification si une émote à deja était copié pour évité une surcharge de l'affichage de la popup
        if (!isAldreadyCopyPending) {
            isAldreadyCopyPending = true;
            document.getElementById("popup").style.display = "flex";
            new Promise(() => {
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none";
                    isAldreadyCopyPending = false;
                }, 2000);
            });
        }
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
    return data.emotesTop.map((emote) => (
        <div key={emote.id}>
            <img
                className="w-20 h-20 border-2 border-black hover:scale-110 transition duration-150 ease-in-out cursor-pointer"
                src={`${emote.source_url}`}
                onError={(e) => {
                    e.currentTarget.style.display = "none";
                }}
                onMouseDown={(e) => {
                    navigator.clipboard.writeText(e.currentTarget.src);
                }}
                onMouseUp={showPopup}
            />
        </div>
    ));
}
FetchEmotes.propTypes = {
    page: PropTypes.number,
};

function DisplayEmotes() {
    const { page } = useParams() ?? null;
    return (
        <>
            <FetchEmotes page={page} />
            <div className="flex justify-center m-5">
                <nav aria-label="Page navigation">
                    <ul className="flex items-center list-style-none">
                        <li>
                            <Link
                                className="px-5 hover:text-orange-600 hover:font-bold"
                                to={page}
                                onClick={() => {
                                    if (page != 1) page - 1;
                                }}>
                                Previous
                            </Link>
                        </li>
                        <div className="w-10">
                            <li className=" text-orange-600 text-lg h-6 bg-gray-600 text-center align-middle rounded-sm">{page}</li>
                        </div>
                        <li>
                            <Link
                                className="px-5 hover:text-orange-600 hover:font-bold"
                                to={page}
                                onClick={() => {
                                    page + 1;
                                }}>
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default DisplayEmotes;
