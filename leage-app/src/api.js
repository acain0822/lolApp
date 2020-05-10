const apiHost = "https://api.pandascore.co";
const game = "/lol";
const series = "/series";
const naLCSSummer2019 = "/league-of-legends-na-lcs-summer-2018";
const matchesURI = "/matches";
const baseURI = `${apiHost}`;
const token = `GD7lXcl8dyVTiJfgFM4TDj5wK5eXZJSHGE1LLmovKHQpg-A4uLg`;
const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//create full uri with token
function uri(path) {
  return `${baseURI}/${path}?token=${token}`;
}


function get(path) {
  //making full uri here
  const fullURI = uri(path);
  return fetch(fullURI, {
    method: "get",
    headers: defaultHeaders,
  }).then((res) => {
    return res.json();
  });
}

function apiRequest() {
  var request = new XMLHttpRequest();

  const matches = get(`${series}${naLCSSummer2019}${matchesURI}`);
  console.log(matches);
  matches.then((res) => console.log(res));
  return;

}

export default get;
