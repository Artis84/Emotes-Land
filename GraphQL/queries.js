import { gql } from "@apollo/client";

const GET_EMOTES = gql`
    query GetDogs {
        dogs {
            id
            breed
        }
    }
`;

export default GET_EMOTES;
