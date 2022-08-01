const addUserData = (user) => ({
  type: 'ADD_USER_DATA',
  user
})

const setLoading = (loading) => ({
  type: 'SET_PROFILE_LOADING',
  loading
})

export {
  addUserData,
  setLoading
}