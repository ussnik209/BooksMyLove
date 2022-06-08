import { connect } from 'react-redux'

import request from '../functions/request.js'
import { setLoading } from '../actions/registration.js'
import RegistrationForm from '../components/registration/SignUpForm.jsx'


const mapStateToProps = (
  state
) => ({ 
  loading: state.registration.loading
})

const mapDispatchToProps = (
  dispatch
) => ({
  changeHandler: event => {
    setForm({ ...from, [event.target.name]: event.target.value })
  },
  registerHandler: async () => {
    dispatch(setLoading(true))

    try {
      const data = await request('/api/auth/register', 'POST', {email: '', password: ''})
      dispatch(setLoading(false))
    } catch (e) {
      console.log('error: ' + e.message)
      dispatch(setLoading(false))
    }

  }
})

const RequestingRegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RequestingRegistrationForm