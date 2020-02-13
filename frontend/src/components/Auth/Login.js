import React ,{useState,Fragment}from 'react'
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import FormElement from '../Layout/FormElement';

const Login = ({login,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        type:'customer'
      });
    
      const { email, password ,type} = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        login(email, password,type);
    };
    if (isAuthenticated) {
      if(type==="vendor")
      {
        return <Redirect to='/vendor' />;
      }
      if(type==="customer") 
      {
        return <Redirect to='/customer' />;
      }
}
    return (
        <Fragment> 
        <div className="container card mb-3 ">
     <div className="card-header">Login
     </div>
     <div className="card-body">
         <form onSubmit={e => onSubmit(e)}>
                <select className="form-control  mb-2 col-12 col-sm-2" name="type" value={type} onChange={e => onChange(e)} >
                    <option value='customer'>Customer</option>
                    <option value='vendor'>Vendor</option>
                </select>
         <FormElement label="Email"  name="email" placeholder="Enter Email" type="text" value={email} onChange={e => onChange(e)}/>
         <FormElement label="Password"  name="password" placeholder="Enter Password" type="password" value={password} onChange={e => onChange(e)}/>
         <input
             type="submit"
             value="Login"
             className="btn btn-light btn-block"
             />
         </form> 
     </div>
 </div>
   <small className="text-muted">
   Not Registered ? <Link to="/register"> Register here</Link>
   </small>
 </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
  };
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
    mapStateToProps,
    { login }
)(Login);