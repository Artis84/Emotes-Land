// import PropTypes from 'prop-types'

function Singin() {
    return (
        <div className="flex justify-center mt-40">
            <div className="w-1/3 blocks p-20 rounded-lg bg-white border-2 border-slate-700">
                <form>
                    <div className="form-group mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-700 focus:outline-none"
                            id="user-username"
                            aria-labelledby="Champ d'entrée pseudonyme"
                            placeholder="Nom d'utilisateur"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-700 focus:outline-none"
                            id="user-email"
                            aria-labelledby="Champ d'entrée email"
                            placeholder="Adresse email"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-700 focus:outline-none"
                            id="user-password"
                            aria-labelledby="Champ d'entrée mot de passe"
                            placeholder="Mot de passe"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/2 px-6 py-2.5 bg-orange-600 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Singin.propTypes = {};

export default Singin;
