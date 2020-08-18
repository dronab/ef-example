import axios from "axios";

export const getList = () => async (dispatch, state) => {
    dispatch({
        type: 'GET_PERSON_FETCH'
    })
    await axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            const persons = res.data.data;
            dispatch({
                type: 'GET_PERSON',
                payload: persons
            })
        }).catch(error => dispatch({
            type: 'GET_PERSON_ERROR',
            payload: error
        }))
}
