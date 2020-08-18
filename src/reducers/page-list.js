
export const initialState = {
  fetch: false,
  load: false,
  error: {},
  peapole: []
}

export const pageList = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PERSON_FETCH':
        return {
          ...state,
          fetch: true
        }
      case 'GET_PERSON':
        return {
          ...state,
          fetch: false,
          load: true,
          peapole: action.payload
        }
      case 'GET_PERSON_ERROR':
        return {
          ...state,
          fetch: false,
          load: false,
          error: action.payload
        }
      default:
        return state
    }
  }

  export default pageList
