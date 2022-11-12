import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import App from "./public/views/App";
import Hot from "./public/views/Hot";
import Top from "./public/views/Top";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import TopNewPage from "./public/views/TopNewPage";

const client = new ApolloClient({
    uri: "https://public54c03220a6e86c0e.stepzen.net/api/get-hot-emotes/__graphql",
    cache: new InMemoryCache(),
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <StrictMode>
                    <App />
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
                }>
                <Route
                    path=":page"
                    element={
                        <StrictMode>
                            <ApolloProvider client={client}>
                                <TopNewPage />
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
        </Route>
    )
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
