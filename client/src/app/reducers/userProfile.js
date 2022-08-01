const userProfile = (
  state = {
    user: null,
    loading: false
  },
  action
) => {

  switch (action.type) {
    case 'ADD_USER_DATA':
      return {
        ...state,
        user: {...action.user}
      }
    case 'SET_PROFILE_LOADING':
      return {
        ...state,
        loading: action.loading
      } 
  }
}

export default userProfile