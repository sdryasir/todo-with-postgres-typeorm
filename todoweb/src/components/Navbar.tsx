import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { UserState } from '../redux/reducers/userReducer';
import { logout } from '../redux/actions/userActions';
import { useNavigate } from 'react-router';


const Navbar = () => {

    const {userInfo} = useSelector<RootState, UserState>(state=>state.user);
    const fullname = userInfo?.fullname;
    const isAuthenticated = userInfo?.isAuthenticated
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = ()=>{
        dispatch(logout());
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TODO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     {
                        isAuthenticated?
                            <>
                                <li className="nav-item">
                                   <Link className="nav-link" to="#">My Todos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/todo">Create Todo</Link>
                                </li>
                            </>:''
                    }
                        
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                           isAuthenticated?
                           <>
                           <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Hi, {fullname}</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active btn btn-danger" onClick={handleLogout}>Logout</button>
                            </li>
                           </>:
                           <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/auth/login">Login</Link>
                           </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
