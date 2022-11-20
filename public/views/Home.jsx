// import PropTypes from "prop-types";
import tableau from "../../src/assets/images/tableau.png";
import omagalul from "../../src/assets/images/omagalul.png";

function Home() {
    return (
        <>
            <div className="flex justify-around items-center m-10 h-[800px]">
                <div className="flex items-center justify-center w-[800px] h-[600px] p-5 border-4 bg-slate-700 border-black">
                    <p className="flex flex-col text-9xl p-5 text-center border-4 border-orange-600 bg-slate-700 rounded-md">
                        I
                        <span>
                            L
                            <span className="inline-block">
                                <img src={omagalul} />
                            </span>
                            VE
                        </span>
                        <span>
                            EM
                            <span className="inline-block">
                                <img src={omagalul} />
                            </span>
                            TES
                        </span>
                    </p>
                </div>
                <div className="border-4 border-black p-3 bg-slate-700">
                    <img className="shadow-lg bg-slate-700 border-4 border-orange-600" src={tableau} />
                </div>
            </div>

            <div className="flex justify-center my-32">
                <figure className="text-center px-5 py-10 border border-black w-[50%]">
                    <q className="font-bold">Au dela des pixels, l'émotes est une langue sans mots.</q>
                    <cite className="block not-italic">Me</cite>
                </figure>
            </div>
        </>
    );
}

Home.propTypes = {};

export default Home;
