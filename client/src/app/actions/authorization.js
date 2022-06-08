const signIn = (token, userId) => ({
  type: 'SIGN_IN',
  token,
  userId
})

const signOut = () => ({
  type: 'SIGN_OUT'
})

export { signIn, signOut }