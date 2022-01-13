import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Register = () => {

    const navigate = useNavigate()
    const [fullname, setFullname] = useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFullname(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const user = {
            fullname,
            email,
            password
        }
        await axios.post('http://localhost:3001/auth/register', user);
        navigate('/auth/login');
    }


    return (
        <form className='mt-3' onSubmit={(e)=>handleSubmit(e)}>
            <div className="row mb-3">
                <label htmlFor="fullname"  className="col-sm-2 col-form-label">Fullname</label>
                <div className="col-sm-10">
                <input type="text" required onChange={(e)=>handleNameChange(e)} placeholder='Enter your fullname...' className="form-control" id="fullname"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" required onChange={(e)=>handleEmailChange(e)} placeholder='Enter your email...' className="form-control" id="email"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" required onChange={(e)=>handlePasswordChange(e)} placeholder='Enter Password...' className="form-control" id="password"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Create account</button>
        </form>
    )
}

export default Register
