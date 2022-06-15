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
    validationErrors: []
  },
  action
) => {
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
    default:
      return state
  }
}

export default registration