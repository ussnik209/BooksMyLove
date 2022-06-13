const registration = (
  state = {
    form: {
      mail: '',
      password: '',
      name: '',
      surname: ''
    },
    loading: false
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
    default:
      return state
  }
}

export default registration