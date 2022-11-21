import { useQuery, NetworkStatus } from "@apollo/client";
import spinner from "../../src/assets/images/spinner.gif";
import erreur from "../../src/assets/images/erreur.png";
import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";

function DisplayResultsEmotes({ fetchCategory }) {
    const { query } = useParams();
    const [page, setPage] = useState(1);
    const { loading, error, data, refetch, networkStatus } = useQuery(fetchCategory, {
        variables: { query, page },
        notifyOnNetworkStatusChange: true,
    });
    let isAldreadyCopyPending = false;

    function showPopup() {
        // Verification si une émote à deja était copié pour évité une surcharge de l'affichage de la popup
        if (!isAldreadyCopyPending) {
            isAldreadyCopyPending = true;
            const $popup = document.getElementById("popup");
            $popup.style.display = "flex";
            //A corriger ASAP ‼
            setTimeout(() => {
                $popup.classList.add("slide-up");
            }, 2000);
            setTimeout(() => {
                $popup.style.display = "none";
                $popup.classList.remove("slide-up");
                isAldreadyCopyPending = false;
            }, 2100);
        }
    }

    if (loading)
        return (
            <div className="flex justify-center items-center h-[20vw]">
                <img className="w-120 h-120" src={spinner} alt="Loading" />
            </div>
        );
    if (networkStatus === NetworkStatus.refetch)
        return (
            <div className="flex justify-center items-center h-[20vw]">
                <img className="w-120 h-120" src={spinner} alt="Loading" />
            </div>
        );
    if (error)
        return (
            <div className="flex flex-col justify-center items-center h-[20vw]">
                <img src={erreur} className="object-contain w-30 h-30"></img>
                <p className="text-center text-xl font-bold">Une erreur est survenue lors de la requete</p>
            </div>
        );
    function showEmotes(data) {
        const emotes = data.emotesSearch[0].medias;
        return emotes.map((emote) => (
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
    return (
        <>
            <div className="flex justify-center flex-wrap gap-x-2 gap-y-5 m-3">{showEmotes(data)}</div>
            <div className="flex justify-center m-5">
                <nav aria-label="Page navigation">
                    <ul className="flex items-center list-style-none">
                        <li
                            className="px-5 hover:text-orange-600 hover:font-bold cursor-pointer"
                            onClick={() => {
                                if (page != 1) {
                                    setPage(page - 1);
                                    refetch({ page: page });
                                }
                            }}>
                            Previous
                        </li>
                        <div className="w-10">
                            <li className=" text-orange-600 text-lg h-6 bg-gray-600 text-center align-middle rounded-sm">{page}</li>
                        </div>
                        <li
                            className="px-5 hover:text-orange-600 hover:font-bold cursor-pointer"
                            onClick={() => {
                                if (data.emotesSearch[0].has_more) {
                                    setPage(page + 1);
                                    refetch({ page: page });
                                }
                            }}>
                            Next
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
DisplayResultsEmotes.propTypes = {
    fetchCategory: PropTypes.object,
};

export default DisplayResultsEmotes;
