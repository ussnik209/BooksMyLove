import { localStorageUser as userTitle } from '../constants/constants.js' 

const registration = (
  state = {
    form: {
      mail: '',
      password: '',
      confirmPassword: '',
      name: '',
      surname: ''
    },
    loading: false,
    serverError: null,
    validationErrors: [],
    isAuthorized: false,
    user: {
      id: null
    },
    rememberMe: false
  },
  action
) => {
  const localUser = JSON.parse(localStorage.getItem(userTitle))

  if (localUser) {
    state = {
      ...state,
      isAuthorized: true,
      user: {
        id: localUser.userId
      }
    }
  }

  switch (action.type) {
    case 'SET_LOADING':
      return { 
        ...state,
        loading: action.loading
      }
      case 'UPDATE_FORM':
        return {
          ...state,
          form: {
            ...state.form,
            ...action.formInput
          }
        }
      case 'SET_SERVER_ERROR':
        return {
          ...state,
          serverError: action.error
        }
      case 'SET_VALIDATION_ERRORS':
        return {
          ...state,
          validationErrors: action.errors
        }
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
      case 'TOGGLE_REMEMBER_ME':
        return {
          ...state,
          rememberMe: !state.rememberMe
        }
    default:
      return state
  }
}

export default registration