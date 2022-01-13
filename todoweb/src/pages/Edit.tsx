import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {useNavigate} from 'react-router-dom'
import { RootState } from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {getTodoById} from '../redux/actions/todoActions'

const Edit = () => {
    const {id} = useParams();

    
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] =  useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodoById(Number(id)))
    },[])

    const {todo} = useSelector<RootState, any>(state=>state.todos)

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(e.target.value)
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const todo = {
            title,
            description
        }
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };
        await axios.post('http://localhost:3001/todos', todo, config);
        navigate('/');
    }

    return (
        <form className='mt-3' onSubmit={(e)=>handleSubmit(e)}>
            <div className="row mb-3">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                <input type="text" value={title} onChange={(e)=>handleTitleChange(e)} placeholder='Enter title...' className="form-control" id="title"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                <input type="text" value={description} onChange={(e)=>handleDescriptionChange(e)} placeholder='Enter description...' className="form-control" id="description"/>
                </div>
            </div>
            <button type="submit" className="btn btn-success w-100">Update Todo</button>
        </form>
    )
}

export default Edit
