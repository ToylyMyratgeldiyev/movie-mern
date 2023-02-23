import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
    mediaList : ({mediaType,mediaCategory,page})=> tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page 
    ),
    mediaDetail : ({mediaType,mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    mediaGanres : ({mediaType}) => tmdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits : ({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos : ({mediaType,mediaId})=> tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend : ({mediaType, mediaId})=>tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaSearch:({mediaType,query,page})=>tmdbConfig.getUrl(
        `search/${mediaType},${query,page}`
    ),
    mediaImages : ({mediaType, mediaId})=>tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    personMedias : ({personId}) => tmdbConfig.getUrl(
        `person/${personId}/combined_credits`
    ),
    personDetail : ({personId}) => tmdbConfig.getUrl(
        `person/${personId}`
    ),

};

export default tmdbEndpoints;
