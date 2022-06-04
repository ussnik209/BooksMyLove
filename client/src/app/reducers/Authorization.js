import { localStorageUser as userTitle } from '../constants/constants.js' 

const authorization = ( 
  state,
  action  
) => {
  if (!state) {
    state = {
      isAuthorized: false,
      user: {
        id: null
      }
    }

    const localUser = JSON.parse(localStorage.getItem(userTitle))

    if (localUser) {
      state = {
        isAuthorized: true,
        user: {
          id: localUser.userId
        }
      }
    }
  }

  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem(
        userTitle,
        JSON.stringify({
          token: action.token,
          userId: action.userId
      }))

      return {
        ...state,
        isAuthorized: true,
        user: { id: action.userId }
      }
    case 'SIGN_OUT':
      localStorage.removeItem(userTitle)

      return {
        ...state,
        isAuthorized: false,
        user: { 
          id: null
        }
      }
    default:
      return state
  }
}

export default authorization