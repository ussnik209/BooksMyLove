const registration = (
  state = {
    form: {
      mail: '',
      password: '',
      name: '',
      surname: ''
    },
    loading: false,
    error: null
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
      case 'SET_ERROR':
        return {
          ...state,
          error: action.error
        }
    default:
      return state
  }
}

export default registration