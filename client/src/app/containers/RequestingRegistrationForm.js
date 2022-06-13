import { connect } from 'react-redux'

import request from '../functions/request.js'
import { setLoading, updateForm, setError } from '../actions/registration.js'
import RegistrationForm from '../components/registration/SignUpForm.jsx'


const mapStateToProps = (
  state
) => ({ 
  loading: state.registration.loading,
  form: state.registration.form,
  error: state. registration.error
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
      await request('/api/auth/register', 'POST', form)
      
      dispatch(setError(null))
      dispatch(setLoading(false))
    } catch (e) {
      console.log(e.message)
      dispatch(setError({message: e.message}))
      dispatch(setLoading(false))
    }

  }
})

const RequestingRegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RequestingRegistrationForm