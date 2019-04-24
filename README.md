# TV Maze Api Wrapper
JavaScript wrapper for querying the tvmaze api for information about TV-Shows.    TV Maze requires NO API key and a reasonably generous rate limit of 20 calls per 10 seconds.

# Installation
```npm install --save tvmaze-wrapper```

# Usage
The api query functions can either be pulled in individually eg.  
```javascript
const { search, showLookup } = require('tvmaze-wrapper');

let shows = search('Some show string').catch(err => console.log);
let myShow = showLookup('imdb', id).catch(err => console.log);
```
The entire package can also be pulled in to be used in a similar fashion eg.  

```javascript
const maze = require('tvmaze-wrapper');

let shows = maze.search('some show string').catch(err => console.log);
```

# Available Functions
I haven't included all of the functions of the API just yet but the main ones are there:  
```javascript
const maze = require('tvmaze-wrapper');

//Search function, takes a string and provides an array of shows matching
//the name, it needs to be relativly accurate with the show name though
//eg. including symbols and capitalizaton
let showList = maze.search('American Dad!');

//singleSearch returns a single show and is more lenient with search terms
//it requires a string search term for the first argument and an optional
//STRING ARRAY of embed options to attach additional information for the second, it can be passed one, or multiple options
//But it must be an array. Some of the options are included in the array below
let embeds = ['episodes', 'seasons', 'cast', 'crew', 'nextepisode'];
let myShow = maze.singleSearch('american dad', embeds);

//showLookup if you already know the id of the show it can be fetched with the id
//The first argument is the type of id you know from the available options (string) and the second is the id itself.
//The available idTypes are 'imdb' 'tvrage' or 'thetvdb'
let lookup = maze.showLookup('imdb', 'tt2022713');

//showById returns a single show if you know the tv maze id, it comes with
//Two optional arguments: episodes and specials respectively, to include these in the result they should be true
//Specials are defined in the response as having null as the episode number
let episodes = true;
let specials = true;
let someShow = maze.showById(115, episodes, specials);
//same as
someshow = maze.showById(115, true, true);

//peopleSearch returns an array of people who match the search term it takes a string argument
let booger = maze.peopleSearch('Curtis Armstrong');

//singleEpisode returns information about a single episode, you need the tvmaze id of the show for this to work
let id = 112;
let season = 5;
let episode = 8;
let towelie = maze.singleEpisode(id, season, episode);

//Cast returns an array featuring the main cast of the show, it takes the tvmaze id
let kurtan = maze.cast(24941);

//Crew is the same as cast but returns crew
let crew = maze.crew(35820);
```  

Further reference can be found at the tvmaze api website  
http://www.tvmaze.com/api
