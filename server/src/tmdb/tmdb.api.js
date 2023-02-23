import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoints.js";

const tmdbApi = {
    mediaList : async ({mediaType, mediaCategory,page}) => axiosClient.get(
        tmdbEndpoints.mediaList({mediaType,mediaCategory,page})
    ),
    mediaDetail : async ({mediaType,page}) => axiosClient.get(
        tmdbEndpoints.mediaDetail({mediaType,page})
    ),
    mediaGenres : async ({mediaType}) => axiosClient.get(
        tmdbEndpoints.mediaGenres({mediaType})
    ),
    mediaCredits : async ({mediaType,mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaCredits({mediaType,mediaId})
    ),
    mediaVideos : async ({mediaType,mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaVideos({mediaType,mediaId})
    ),
    
    mediaRecommend : async ({mediaType,mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaRecommend({mediaType,mediaId})
    ),
    mediaImages : async ({mediaType,mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaImages({mediaType,mediaId})
    ),
    mediaSearch : async ({mediaType,query,page}) => axiosClient.get(
        tmdbEndpoints.mediaSearch({mediaType,query,page})
    ),
    personMedias : async ({personId}) => axiosClient.get(
        tmdbEndpoints.personMedias({personId})
    ),
    personDetail : async ({personId}) => axiosClient.get(
        tmdbEndpoints.personDetail({personId})
    ),
    
};

export default tmdbApi;
