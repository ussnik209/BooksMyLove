import { connect } from 'react-redux'

import Header from "../components/header/Header.jsx"

const mapStateToProps = (
  state
) => ({ 
  isAuthorized: state.authorization.isAuthorized
})

const mapDispatchToProps = () => ({})

const AuthorizedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default AuthorizedHeader