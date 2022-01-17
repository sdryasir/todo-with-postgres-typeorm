import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux';
// import { getTodos } from '../redux/actions/todoActions'
import { RootState } from '../redux/store';
import { UserState } from '../redux/reducers/userReducer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

const TodoList: React.FC = () => {

    const dispatch = useDispatch();
    // const { todos } = useSelector<RootState, any>(state => state.todos);


    const [todos, setTodos] = useState<ITodo[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [lastPage, setLastPage] = useState<number>(0)

    const [isChecked, setIsChecked] = useState(false)

    const [search, seetSearch] = useState('');

    // const [selectedTodos, setSelectedTodos] = useState<number[]>([]);
    // const [status, setStatus] = useState<boolean>(false)

    const { userInfo } = useSelector<RootState, UserState>(state => state.user);
    const isAuthenticated = userInfo?.isAuthenticated


    const getTodos = async () => {
        try {
            await axios.get('http://localhost:3001/todos')
                .then(response => {
                    const data = response.data.data
                    setTotal(response.data.total)
                    setCurrentPage(response.data.page)
                    setLastPage(response.data.last_page)
                    setTodos(data)
                });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        //dispatch(getTodos())
        getTodos();
    }, [])

    const handleChkChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        // const { name, checked } = e.target;

        // e.target.checked = checked
        // console.log(e.target.checked = checked)
        setIsChecked(!isChecked)
        
        


        // console.log(todo.id)
        // await axios.put(`http://localhost:3001/todos/${todo.id}`, {...todo, status:todo.status?false:true})
        // .then(response=>{
        //     console.log(response)
        // })


        // let tempTodo = todos.map((todo) => {
        //     return todo.title === name ? { ...todo, status: checked } : todo;
        // })
        // console.log(tempTodo)
        //setTodos(tempTodo)
    }

    const handlePageClick = async (data:any)=>{
        let currentPage = data.selected + 1;
        await axios.get(`http://localhost:3001/todos?page=${currentPage}`)
        .then(response=>{
            setTodos(response.data.data)
        })
    }

    const handleSearch = async ()=>{
        await axios.get(`http://localhost:3001/todos?search=${search}`)
        .then(response=>{
            const data = response.data.data
            setTotal(response.data.total)
            setCurrentPage(response.data.page)
            setLastPage(response.data.last_page)
            setTodos(data)
        })
    }

    const handleDesc = async ()=>{
        await axios.get(`http://localhost:3001/todos?sort=asc`)
        .then(response=>{
            const data = response.data.data
            setTotal(response.data.total)
            setCurrentPage(response.data.page)
            setLastPage(response.data.last_page)
            setTodos(data)
        })
    }

    const handleAsc = async ()=>{
        await axios.get(`http://localhost:3001/todos?sort=desc`)
        .then(response=>{
            const data = response.data.data
            setTotal(response.data.total)
            setCurrentPage(response.data.page)
            setLastPage(response.data.last_page)
            setTodos(data)
        })
        
    }

 

    return (
        <div className='list-wrapper mt-3'>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={(e) => seetSearch(e.target.value)} placeholder="Search Here"/>
                <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
            </div>
            <ul className="list-group mb-3">
                <li className="list-group-item active d-flex justify-content-between">
                    <p className='m-0'>All Todos - ({total}) : Selected ({todos.filter((i) => i.status).length}) </p>
                    <div className="sort-btn d-flex align-item-center">
                        
                        <i className="bi bi-sort-alpha-down ms-3 me-3" onClick={handleDesc}></i>
                        <i className="bi bi-sort-alpha-up" onClick={handleAsc}></i>
                    </div>
                </li>
                {
                    todos?.map((todo: ITodo, idx: number) => (
                        // <ListItem key={idx} todoItem={todo} />
                        <li key={idx} className="list-group-item d-flex justify-content-between">
                            <div className="todo">
                                <input type="checkbox" id={todo.id.toString()} checked={isChecked} onChange={(e) => handleChkChange(e)} />
                                {/* <input type="checkbox" name={todo.title} checked={todo.status || false} onChange={(e) => handleChkChange(e)} /> */}
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
            <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    containerClassName='pagination'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    pageRangeDisplayed={2}
                    pageCount={lastPage}
                    previousLabel="< previous"
                    previousClassName='page-item'
                    nextClassName='page-item'
                    previousLinkClassName='page-link'
                    nextLinkClassName='page-link'
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    activeClassName='active'
                />
        </div>
    )
}

export default TodoList