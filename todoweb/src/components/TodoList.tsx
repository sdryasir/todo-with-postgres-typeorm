import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todoActions'
import { RootState } from '../redux/store';

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

    const handleChange = (id: number) => {
        console.log(id)
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [])

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
                        <ListItem key={idx} todoItem={todo} />)
                        // <ListItem key={idx} todoItem={todo} handleChange={handleChange} />)
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList
