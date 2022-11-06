import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./public/views/App";
import Emotes from "./public/views/Emotes";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const link = new HttpLink({
//     fetchOptions: {
//         uri: "http://localhost:4000/graphql",
//         method: "GET",
//         mode: "no-cors",
//     },
// });

const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "emotes",
        element: (
            <ApolloProvider client={client}>
                <Emotes />
            </ApolloProvider>
        ),
    },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
