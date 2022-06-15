import { connect } from 'react-redux'

import request from '../functions/request.js'
import { setLoading, updateForm, setServerError, setValidationErrors } from '../actions/registration.js'
import RegistrationForm from '../components/registration/SignUpForm.jsx'


const mapStateToProps = (
  state
) => ({ 
  loading: state.registration.loading,
  form: state.registration.form,
  serverError: state.registration.serverError,
  validationErrors: state.registration.validationErrors
})

const mapDispatchToProps = (
  dispatch
) => ({
  changeHandler: event => {
    dispatch(
      updateForm({[event.target.name]: event.target.value })
    )
  },
  validateForm: (form) => {
    const errors = []

    Object.entries(form).forEach(el => {
      if (el[1] === '') errors.push({
        target: el[0],
        message: 'This field is required'
      })
    })

    if (!form.mail.match(/^\S+@\S+.\S+$/)) errors.push({
      target: 'mail',
      message: 'Invalid email'
    })

    if (form.password.length < 6) errors.push({
      target: 'password',
      message: 'Min length of password is 6 characters'
    })

    if (form.confirmPassword.length < 6) errors.push({
      target: 'confirmPassword',
      message: 'Min length of password is 6 characters'
    })

    if (form.password !== form.confirmPassword) errors.push({
      target: 'password',
      message: 'Passwords do not match'
    },
    {
      target: 'confirmPassword',
      message: 'Passwords do not match'
    })

    dispatch(setValidationErrors(errors))

    return errors.length === 0
  },
  registerHandler: async (form) => {
    dispatch(setLoading(true))

    try {
      await request('/api/auth/register', 'POST', form)
      
      dispatch(setServerError(null))
      dispatch(setLoading(false))
    } catch (e) {
      console.log(e.message)
      dispatch(setServerError({message: e.message}))
      dispatch(setLoading(false))
    }

  }
})

const RequestingRegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RequestingRegistrationForm