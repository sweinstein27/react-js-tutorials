
var token;

export default function reducer(state={
  token: ""
}, action) {

  switch (action.type) {
    case "SAVE_TOKEN": {
      return {...state, token: action.payload}
    }
  }
  return state
}