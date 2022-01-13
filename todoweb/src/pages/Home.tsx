import React from 'react'
import TodoList from '../components/TodoList';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { UserState } from '../redux/reducers/userReducer';

const Home = () => {

    const {userInfo, loading} = useSelector<RootState, UserState>(state=>state.user);
    

    return (
        <div>
            <TodoList/>
        </div>
    )
}

export default Home
