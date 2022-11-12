/*global process*/
import * as dotenv from "dotenv";
import { Route, Routes } from "react-router-dom";
import Hot from "./views/Hot";
import Top from "./views/Top";
import Home from "./views/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import Streams from "./views/Streams";
import ErrorPage from "./components/error-page";
// import PropTypes from "prop-types";

dotenv.config();
function App() {
    const client = new ApolloClient({
        uri: process.env.API_END_POINT,
        cache: new InMemoryCache(),
    });
    return (
        <>
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
                    errorElement={<ErrorPage />}>
                    <Route
                        path="top"
                        element={
                            <StrictMode>
                                <ApolloProvider client={client}>
                                    <Top />
                                </ApolloProvider>
                            </StrictMode>
                        }>
                        <Route
                            path=":page"
                            element={
                                <StrictMode>
                                    <ApolloProvider client={client}>
                                        <Top />
                                    </ApolloProvider>
                                </StrictMode>
                            }
                        />
                    </Route>
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
                </Route>
            </Routes>
        </>
    );
}

App.propTypes = {};

export default App;
