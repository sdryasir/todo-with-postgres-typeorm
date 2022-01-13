import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todoActions'
import { RootState } from '../redux/store';
import { UserState } from '../redux/reducers/userReducer'
import { Link } from 'react-router-dom'


export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

const TodoList: React.FC = () => {

    const dispatch = useDispatch();
    const { todos } = useSelector<RootState, any>(state => state.todos);
    const [search, seetSearch] = useState('');

    const [selectedTodos, setSelectedTodos] = useState([]);

    const { userInfo } = useSelector<RootState, UserState>(state => state.user);
    const isAuthenticated = userInfo?.isAuthenticated

    const handleChange = (id: number) => {
        console.log(id)
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const handleChkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        // if (e.target.checked) {
        //     setSelectedTodos([...selectedTodos, name])
        // } else {
        //     setSelectedTodos.filter((t) => t.name !== name),
        // }
        //setSelectedTodos[name] = checked
    }

    return (
        <div className='list-wrapper mt-3'>
            <div className="mb-3">
                <input type="text" onChange={(e) => seetSearch(e.target.value)} className="form-control" placeholder="Search" />
            </div>
            <ul className="list-group">
                <li className="list-group-item active d-flex justify-content-between">
                    <p className='m-0'>All Todos - ({todos ? todos.length : ''}) - Selected {selectedTodos} </p>
                    <div className="sort-btn">
                        {/* <i className="bi bi-sort-alpha-down me-3"></i>
                        <i className="bi bi-sort-alpha-up"></i> */}
                    </div>
                </li>
                {
                    todos?.filter((todo: ITodo) => {
                        if (todo.title === '') {
                            return todo;
                        } else if (todo.title.toString().toLocaleLowerCase().includes(search.toString().toLocaleLowerCase())) {
                            return todo;
                        }
                    }).map((todo: ITodo, idx: number) => (
                        // <ListItem key={idx} todoItem={todo} />
                        <li className="list-group-item d-flex justify-content-between">
                            <div className="todo">
                                <input type="checkbox" name={todo.title} onChange={(e) => handleChkChange(e)} />
                                <span style={{ fontWeight: 'bold', marginLeft: 12 }}>{todo.title}</span>
                            </div>
                            {
                                isAuthenticated ?
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn"><Link to={`/edit/${todo.id}`}><i className="bi bi-pencil-square"></i></Link></button>
                                        <button type="button" className="btn"><i className="bi bi-trash"></i></button>
                                    </div> :
                                    null
                            }

                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList
