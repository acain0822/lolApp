

var request = new XMLHttpRequest()

var args = [
    {
    "begin_at": "2020-01-20T23:00:00Z",
    "description": null,
    "end_at": null,
    "full_name": "Spring 2020",
    "id": 2402,
    "league": {},
    "league_id": 4302,
    "modified_at": "2020-01-20T17:51:43Z",
    "name": null,
    "season": "Spring",
    "slug": "league-of-legends-prime-league-pro-division-spring-2020",
    "tournaments": [],
    "videogame": {
    "id": 1,
    "name": "LoL",
    "slug": "league-of-legends"
    },
    "winner_id": null,
    "winner_type": null,
    "year": 2020
    }
    ];
    
request.open('GET', 'https://api.pandascore.co/lol/leagues?&token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg', 'true')

request.onload = function() {
    var data = JSON.parse(this.response)

    data.forEach(match => {
        console.log(match.name);
    })
}

request.send()