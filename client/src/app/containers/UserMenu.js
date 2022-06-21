import { connect } from 'react-redux'

import UserMenu from "../components/header/UserMenu.jsx"
import { signOut } from '../actions/authorization.js'

const mapStateToProps = (
  state
) => ({ 
})

const mapDispatchToProps = (
  dispatch
) => ({
  signOut: () => dispatch(signOut())
})

const ActiveUserMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu)

export default ActiveUserMenu