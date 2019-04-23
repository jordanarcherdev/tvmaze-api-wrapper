const axios = require('axios');
const tv = axios.create({
  baseURL: 'http://api.tvmaze.com'
})

//TODO error handling for response

let queryApi = async (queryString) => {
  const response = await tv.get(queryString)
    return response.data
}

module.exports = {

  //Returns multiple shows
  search: (show) => {
    url = `/search/shows?q=${show}`;
    queryApi(url)
  },

  //Returns a single show
  singleSearch: (show, embed) => {
    url = `/singlesearch/shows?q=${show}`;
    if(embed){
      if(embed.length === 1){
        url += `&embed=${embed[0]}`;
      }else{
        
        embed.forEach(param => {
          url += `&embed[]=${param}`;
        });
        	
          
      }
    }
    
    const response = queryApi(url);
    return response;
  },

  //Lookup by imdb, tvmaze id
  showLookup: (idType, id) => {
    url = `/lookup/shows?${idType}=${id}`;
    queryApi(url);
  },

  //Returns multiple people from name
  peopleSearch : (name) => {
    url = `/search/people?q=${name}`;
    queryApi(url);
  },

  //Returns a show by id, episodes and specials should be set to true,
  //If you want to return the episodes with the show
  showById: (id, episodes, specials) => {
    url = `/shows/${id}`
    if(episodes){
      url += '/episodes'
      if(specials){
        url += '?specials=1'
      }
    }
    queryApi(url);
  },

  //Returns a single episode from a show
  singleEpisode: (id, season, episode) => {
    url = `/shows/${id}/episodebynumber?season=${season}&number=${number}`
  },

  //Returns the seasons from the show
  seasons: (id, episodes) => {
    url=`/shows/${id}/seasons`;
    if(episodes){
      url += '?embed=episodes'
    }
    queryApi(url);
  },

  //returns the main cast in the show
  cast: (id) => {
    url = `shows/${id}/cast`;
    queryApi(url);
  },

  //Returns the crew working on the show
  crew: (id) => {
    url = `shows/${id}/crew`;
    queryApi(url);
  }
}
