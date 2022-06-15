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

export { setLoading, updateForm, setServerError, setValidationErrors }