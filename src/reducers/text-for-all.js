
export const initialState = {
    myJSONObject: 'Текст по умолчанию'
}

export const textALL = (state = initialState, action) => {
    switch (action.type) {
      case 'TEXTALL':
        let resource = {
          ...state,
          myJSONObject: action.text
        }
        return resource
      default:
        return state
    }
  }

  export default textALL
