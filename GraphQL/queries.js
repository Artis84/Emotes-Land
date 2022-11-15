import { gql } from "@apollo/client";

const GET_TOP_EMOTES = gql`
    query GetEmotes($page: String!) {
        emotesTop(page: $page) {
            source_url
            id
        }
    }
`;

const GET_HOT_EMOTES = gql`
    query GetEmotes($page: String!) {
        emotesHot(page: $page) {
            source_url
            id
        }
    }
`;

export { GET_HOT_EMOTES, GET_TOP_EMOTES };
