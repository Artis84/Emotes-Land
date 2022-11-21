/*global process*/
import loadable from "@loadable/component";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import placeholder from "./src/assets/images/emotes-placeholder.png";
import Home from "./public/views/Home";
import NavBar from "./public/components/NavBar";

const App = loadable(() => import("./public/App"));
const Top = loadable(() => import("./public/views/Top"), {
    fallback: <img src={placeholder} />,
});
const Hot = loadable(() => import("./public/views/Hot"), {
    fallback: <img src={placeholder} />,
});
const Streams = loadable(() => import("./public/views/Streams"));
const Results = loadable(() => import("./public/views/Results"), {
    fallback: <img src={placeholder} />,
});
const ErrorPage = loadable(() => import("./public/components/ErrorPage"));

const client = new ApolloClient({
    uri: process.env.API_END_POINT,
    cache: new InMemoryCache(),
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                index
                element={
                    <StrictMode>
                        <NavBar />
                        <Home />
                    </StrictMode>
                }
            />
            <Route
                path="/"
                element={
                    <StrictMode>
                        <App />
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
        </>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
