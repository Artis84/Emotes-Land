/*global process*/
import { Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StrictMode, Suspense, lazy } from "react";
import placeholder from "../src/assets/images/loading-placeholder.png";

const Home = lazy(() => import("./views/Home"));
const Top = lazy(() => import("./views/Top"));
const Hot = lazy(() => import("./views/Hot"));
const Streams = lazy(() => import("./views/Streams"));
const Results = lazy(() => import("./views/Results"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));

function App() {
    const client = new ApolloClient({
        uri: process.env.API_END_POINT,
        cache: new InMemoryCache(),
    });
    return (
        <>
            <Suspense
                fallback={
                    <div>
                        <img className="object-contain" src={placeholder} alt="Chargement en cours." />
                    </div>
                }>
                <Routes>
                    <Route
                        index
                        element={
                            <StrictMode>
                                <Home />
                            </StrictMode>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <StrictMode>
                                <Home />
                            </StrictMode>
                        }
                        errorElement={
                            <StrictMode>
                                <ErrorPage />
                            </StrictMode>
                        }>
                        <Route
                            path="top"
                            element={
                                <StrictMode>
                                    <ApolloProvider client={client}>
                                        <Top />
                                    </ApolloProvider>
                                </StrictMode>
                            }
                        />
                        <Route
                            path="hot"
                            element={
                                <StrictMode>
                                    <ApolloProvider client={client}>
                                        <Hot />
                                    </ApolloProvider>
                                </StrictMode>
                            }
                        />
                        <Route
                            path="stream"
                            element={
                                <StrictMode>
                                    <Streams />
                                </StrictMode>
                            }
                        />
                        <Route
                            path="results/:query"
                            element={
                                <StrictMode>
                                    <ApolloProvider client={client}>
                                        <Results />
                                    </ApolloProvider>
                                </StrictMode>
                            }
                        />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

App.propTypes = {};

export default App;
