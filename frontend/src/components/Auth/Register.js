import React ,{useState,Fragment} from 'react'
import { Link ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import FormElement from '../Layout/FormElement';

const Register = ({register , isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        type:'customer'
      });
      const { name, email, password, password2 ,type} = formData;

      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log("password does not match");
            console.log(type);
        } else {
            register({ name, email, password,type });
        }
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
        <div className="card-header">Register
        </div>
        <div className="card-body">
            <form onSubmit={e => onSubmit(e)}>
                <select className="form-control  mb-2 col-12 col-sm-2" name="type" value={type} onChange={e => onChange(e)} >
                    <option value='customer'>Customer</option>
                    <option value='vendor'>Vendor</option>
                </select>
            <FormElement label="Name"  name="name" placeholder="Enter Name" type="text" value={name} onChange={e => onChange(e)}/>
            <FormElement label="Email"  name="email" placeholder="Enter Email" type="text" value={email} onChange={e => onChange(e)}/>
            <FormElement label="Password"  name="password" placeholder="Enter Password (Min 6 characters)" type="password" value={password} onChange={e => onChange(e)}/>
            <FormElement label="Confirm Password"  name="password2" placeholder="Re-enter Password" type="password" value={password2} onChange={e => onChange(e)}/>

            <input
                type="submit"
                value="Register"
                className="btn btn-light btn-block"
                />

            </form> 
        </div>

      </div>
            <small className="text-muted">
            Already Registered ? <Link to="/login"> login here</Link>
            </small>
          </Fragment>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    {  register }
)(Register);