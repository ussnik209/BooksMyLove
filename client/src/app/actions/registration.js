const setLoading = (loading) => ({
  type: 'SET_LOADING',
  loading
})

const updateForm = (formInput) => ({
  type: 'UPDATE_FORM',
  formInput
})

export { setLoading, updateForm }