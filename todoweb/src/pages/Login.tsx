import axios from 'axios';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const user = {
            email:email,
            password:password
        }
        dispatch(login(email, password));
        history('/');
    }
    return (
        <form className='mt-3' onSubmit={(e)=>handleSubmit(e)}>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" required onChange={(e)=>setEmail(e.target.value)} placeholder='Enter you email...' className="form-control" id="email"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" required onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password...' className="form-control" id="password"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
            <Link to="/auth/register" className='text-muted'>Don't have account? Create!</Link>
        </form>
    )
}

export default Login;
