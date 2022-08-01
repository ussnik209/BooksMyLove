import { connect } from 'react-redux'

import UserPage from '../components/userPage/UserPage.jsx'

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = () => ({

})

const PersonalizedUserPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage)

export default PersonalizedUserPage