import { connect } from 'react-redux'

import request from '../functions/request.js'
import { setLoading, updateForm } from '../actions/registration.js'
import RegistrationForm from '../components/registration/SignUpForm.jsx'


const mapStateToProps = (
  state
) => ({ 
  loading: state.registration.loading,
  form: state.registration.form
})

const mapDispatchToProps = (
  dispatch
) => ({
  changeHandler: event => {
    dispatch(
      updateForm({[event.target.name]: event.target.value })
    )
  },
  registerHandler: async (form) => {
    dispatch(setLoading(true))

    try {
      const data = await request('/api/auth/register', 'POST', form)
      dispatch(setLoading(false))
      
    } catch (e) {
      console.log(e.message)
      dispatch(setLoading(false))
    }

  }
})

const RequestingRegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RequestingRegistrationForm