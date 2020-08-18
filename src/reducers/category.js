export const category = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CATEGORY':
        return [
          ...state,
          {
            value: action.value,
            text: action.text
          }
        ]
      default:
        return state
    }
  }

  export default category
