import { connect } from 'react-redux'

import request from '../functions/request.js'
import SignInForm from "../components/authorization/SignInForm.jsx"
import { 
  updateForm, 
  setLoading, 
  setServerError, 
  setValidationErrors,
  signIn,
  toggleRememberMe
} from '../actions/authorization.js'

const mapStateToProps = (
  state
) => ({ 
  form: { 
    mail: state.authorization.form.mail,
    password: state.authorization.form.password
  },
  loading: state.authorization.loading,
  serverError: state.authorization.serverError,
  validationErrors: state.authorization.validationErrors
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
    console.log(form)

    if (form.mail === '') errors.push({
      target: 'mail',
      message: 'This field is required'
    })

    if (form.password === '') errors.push({
      target: 'password',
      message: 'This field is required'
    })

    if (!form.mail.match(/^\S+@\S+.\S+$/)) errors.push({
      target: 'mail',
      message: 'Invalid email'
    })

    if (form.password.length < 6) errors.push({
      target: 'password',
      message: 'Min length of password is 6 characters'
    })
    
    dispatch(setValidationErrors(errors))

    return errors.length === 0
  },
  loginHandler: async (form) => {
    dispatch(setLoading(true))

    try {
      const userData = await request('/api/auth/login', 'POST', form)

      dispatch(signIn({token: userData.token, userId: userData.userId}))
      dispatch(setServerError(null))
      dispatch(setLoading(false))
    } catch (e) {
      console.log(e.message)
      dispatch(setServerError({message: e.message}))
      dispatch(setLoading(false))
    }
  },
  rememberMeHandler: () => {
    dispatch(toggleRememberMe())
  }
})

const RequestingLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)

export default RequestingLoginForm