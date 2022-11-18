import { gql } from "@apollo/client";

const GET_TOP_EMOTES = gql`
    query GetEmotes($page: Int!) {
        emotesTop(page: $page) {
            source_url
            id
        }
    }
`;

const GET_HOT_EMOTES = gql`
    query GetEmotes($page: Int!) {
        emotesHot(page: $page) {
            source_url
            id
        }
    }
`;

const GET_SEARCH_EMOTES = gql`
    query searchEmotes($query: String!, $page: Int!) {
        emotesSearch(query: $query, page: $page) {
            medias {
                id
                source_url
            }
            has_more
        }
    }
`;

export { GET_HOT_EMOTES, GET_TOP_EMOTES, GET_SEARCH_EMOTES };
