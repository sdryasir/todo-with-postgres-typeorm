import React from 'react'
import { ITodo } from '../components/TodoList'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../redux/reducers/userReducer'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

// interface ChildProps {
//     handleChange: () => void
// }


const ListItem = (props: { todoItem: ITodo }) => {

    const navigate = useNavigate();
    const { userInfo } = useSelector<RootState, UserState>(state => state.user);
    const isAuthenticated = userInfo?.isAuthenticated


    return (
        <div>
            <li className="list-group-item d-flex justify-content-between">
                <div className="todo">
                    <input type="checkbox" />
                    {/* <input type="checkbox" onChange={() => props.todoItem.handleChange(props.todoItem.id)} /> */}
                    <span style={{ fontWeight: 'bold', marginLeft: 12 }}>{props.todoItem.title}</span>
                    {/* <p>{props.todoItem.description}</p> */}
                </div>
                {
                    isAuthenticated ?
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn"><Link to={`/edit/${props.todoItem.id}`}><i className="bi bi-pencil-square"></i></Link></button>
                            <button type="button" className="btn"><i className="bi bi-trash"></i></button>
                        </div> :
                        null
                }

            </li>
        </div>
    )
}

export default ListItem
