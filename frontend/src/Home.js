import React, { useEffect, useState } from 'react';
import Create from './Create';
import './App.css';
import axios from 'axios';
import {  BsFillTrashFill, BsPencil } from 'react-icons/bs';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [updatetask, setUpdatetask] = useState('');
    const [taskid, setTaskid] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/get`)
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const edit = (id) => {
        axios.put(`http://todolist-imkh.onrender.com/edit/${id}`)
            .then(result => {
                console.log(result.data);
                const updatedTodos = todos.map(todo => {
                    if (todo._id === id) {
                        return { ...todo, done: !todo.done };
                    }
                    return todo;
                });
                setTodos(updatedTodos);
            })
            .catch(err => console.log(err));
    };

    const Update = (id, updatedTask) => {
        axios.put(`http://todolist-imkh.onrender.com/update/${id}`, { task: updatedTask })
            .then(result => {
                console.log(result.data);
                const updatedTodos = todos.map(todo => {
                    if (todo._id === id) {
                        return { ...todo, task: updatedTask };
                    }
                    return todo;
                });
                setTodos(updatedTodos);
                setTaskid('');
                setUpdatetask('');
                Window.location.reload();
            })
            .catch(err => console.log(err));
    };

    const Hdelete = (id) => {
        axios.delete(`http://todolist-imkh.onrender.com/delete/${id}`)
            .then(result => {
                console.log(result.data);
                const updatedTodos = todos.filter(todo => todo._id !== id);
                setTodos(updatedTodos);
            })
            .catch(err => console.log(err));
    };

    return (
    <main>
        <Create />
        {todos.length === 0 ? (
            <div className='task'>No tasks found</div>
        ) : (
            todos.map((todo) => (
                <div className='task' key={todo._id}>
                    <div className='checkbox'>
                        {taskid === todo._id ? (
                            <input
                                type='text'
                                value={updatetask}
                                onChange={e => setUpdatetask(e.target.value)}
                            />
                        ) : (
                            <p className={todo.done ? 'through' : 'normal'}>
                                {todo.task}
                            </p>
                        )}
                    </div>
                    <div>
                        <span className='actions'>
                            {/* Edit / Save */}
                            <BsPencil
                                className='icon'
                                onClick={() => {
                                    if (taskid === todo._id) {
                                        Update(todo._id, updatetask);
                                    } else {
                                        setTaskid(todo._id);
                                        setUpdatetask(todo.task);
                                    }
                                }}
                            />
                            {/* Delete */}
                            <BsFillTrashFill
                                className='icon'
                                onClick={() => Hdelete(todo._id)}
                            />
                            {/* Mark as Complete Button */}
                            {!todo.done && (
                                <button
                                    className='complete-btn'
                                    onClick={() => edit(todo._id)}
                                >
                                    Mark as Complete
                                </button>
                            )}
                        </span>
                    </div>
                </div>
            ))
        )}
    </main>
);
};

export default Home;
