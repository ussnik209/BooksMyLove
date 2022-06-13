const setLoading = (loading) => ({
  type: 'SET_LOADING',
  loading
})

const updateForm = (formInput) => ({
  type: 'UPDATE_FORM',
  formInput
})

const setError = (error) => ({
  type: 'SET_ERROR',
  error: error
})

export { setLoading, updateForm, setError }