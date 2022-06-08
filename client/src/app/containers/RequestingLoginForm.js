import { connect } from 'react-redux'

import request from '../functions/request.js'
import LoginForm from "../components/authorization/LoginForm.jsx"

const mapStateToProps = (
  // state
) => ({ 

})

const mapDispatchToProps = (
  dispatch
) => ({
  changeHandler: event => {
    setForm({ ...from, [event.target.name]: event.target.value })
  },
  loginHandler: async () => {
    try {
      const data = request('/login', 'POST', { ...form })
    } catch (e) {}
  }
})

const RequestingLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default RequestingLoginForm