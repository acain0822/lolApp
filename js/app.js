// curl https://api.pandascore.co/lives?token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg

// HTTP/1.1 200 OK
// Content-Type: application/json; charset=utf-8
// Link: <https://api.pandascore.co/lol/champions?page=3&token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg>; rel="last", <https://api.pandascore.co/lol/matches?page=2&token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg>; rel="next"
// X-Page: 1
// X-Per-Page: 50
// X-Request-Id: c51e8cf0-c397-421c-8a09-44c126f55a36
// X-Runtime: 0.077614
// X-Total: 133

// const apiToken = 'GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg';

// var socket = new WebSocket('wss://live.pandascore.co/lol/matches/&token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg');
// socket.onmessage = function(event) {
//     console.log(JSON.parse(event.data))
// }

var request = new XMLHttpRequest()

request.open('GET', 'https://api.pandascore.co/lol/matches?&token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg', 'true')

request.onload = function() {
    var data = JSON.parse(this.response)

    data.forEach(match => {
        console.log(match.name);
    })
}

request.send()