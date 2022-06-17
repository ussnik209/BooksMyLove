const setLoading = (loading) => ({
  type: 'SET_LOADING',
  loading
})

const updateForm = (formInput) => ({
  type: 'UPDATE_FORM',
  formInput
})

const setServerError = (error) => ({
  type: 'SET_SERVER_ERROR',
  error: error
})

const setValidationErrors = (errors) => ({
  type: 'SET_VALIDATION_ERRORS',
  errors: errors
})

const signIn = ({token, userId}) => ({
  type: 'SIGN_IN',
  token,
  userId
})

const signOut = () => ({
  type: 'SIGN_OUT'
})

const toggleRememberMe = () => ({
  type: 'TOGGLE_REMEMBER_ME'
})

export { 
  setLoading, 
  updateForm, 
  setServerError, 
  setValidationErrors, 
  signIn, 
  signOut,
  toggleRememberMe
}