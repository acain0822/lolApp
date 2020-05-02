const apiHost = "https://api.pandascore.co";
const game = "/lol";
const baseURI = `${apiHost}${game}`;
const token = `GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg`;
const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function uri(path) {
  return `${baseURI}/${path}?token=${token}`;
}

function get( path ) {
	const fullURI = uri(path); 
	
	return fetch(fullURI, {
		method: 'get',
		headers: defaultHeaders
	}).then((res) => {
		return res.json();
 
 })
}

function apiRequest() {
  var request = new XMLHttpRequest();

	const matches = get('matches');
	matches.then( res => console.log(res) );
	//console.log(matches);
	return;
  request.open(
    "GET",
    "https://api.pandascore.co/lol/lives?&token=GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg",
    "true"
  );

  request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach((match) => {
      console.log(match);
    });
  };

  request.send();
}

export default get;
