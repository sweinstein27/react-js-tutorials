import $ from "jquery"
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

export function getToken() {
  return function(dispatch) {
    spotifyApi.getAccessToken()
    .then((response) => {
      debugger
    })
  //   $.ajax({
  //     type: "GET",
  //     url: "https://accounts.spotify.com/authorize?",
  //     data: {
  //       client_id: "8bee15aded0d4853bd49d1fd705cf597",
  //       response_type: "code",
  //       redirect_uri: "http://localhost:8080/callback"
  //     },
  //     contentType: 'jsonp',
  //     crossDomain: true
  //   })
  //   .then((response) => {
  //     debugger
  //   })
  }
}

  export function saveToken(token) {
    return {
      type: "SAVE_TOKEN",
      payload: {
        token
      }
    }
  }