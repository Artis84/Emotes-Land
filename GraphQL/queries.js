import { gql } from "@apollo/client";

const GET_TOP_EMOTES = gql`
    query GetEmotes {
        emotesTop {
            source_url
            id
        }
    }
`;

const GET_HOT_EMOTES = gql`
    query GetEmotes {
        emotesHot {
            source_url
            id
        }
    }
`;

export { GET_HOT_EMOTES, GET_TOP_EMOTES };
