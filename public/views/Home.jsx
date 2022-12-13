// import PropTypes from "prop-types";
import tableau from "../../src/assets/images/tableau.png";
import omagalul from "../../src/assets/images/omagalul.png";

function Home() {
    return (
        <div className="bg-slate-700 p-5">
            <div className="flex flex-col justify-around items-center h-[800px] 2xl:flex-row 2xl: gap-4">
                <div className="flex items-center justify-center w-[800px] h-[600px] border-4 bg-slate-700 border-black">
                    <p className="flex flex-col text-9xl p-2 text-center border-4 border-orange-600 bg-slate-700 rounded-md">
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
            <div className="flex justify-center my-28 2xl: mt-10">
                <figure className="text-center p-2 bg-slate-700 border-4 border-black w-[50%]">
                    <div className=" border-4 p-5 border-orange-600">
                        <q className="font-bold text-xl">Au dela des pixels, l&apos;émotes est une langue sans mots.</q>
                        <cite className="block not-italic text-lg">Me</cite>
                    </div>
                </figure>
            </div>
        </div>
    );
}

Home.propTypes = {};

export default Home;
