import React, { useState } from "react";
import '../../styles/ListSection.css'

export const ListSection = ({ todoList, setTodoList, list, setList }) => {
    const [isEdit, setIsEdit] = useState(null)
    const handlerChange = (e) => {
        setList(e.target.value)
    }

    const handlerClick = () => {
        if (list.trim() == "") {
            alert('You cannot leave the text input blank.')
            return
        }
        setTodoList([...todoList, list])
        setList("")
        setIsEditing(null)
    }
    const handlerKeyUp = (e) => {
        if (e.key === 'Enter') {
            handlerClick();
        }
    };
    const handlerEdit = (newValue, id) => {
        const updateList = [...todoList]
        updateList[id] = newValue
        setTodoList(updateList)
    }
    const deleteElement = (id) => {
        const filterList = todoList.filter((element, position) => position !== id)
        setTodoList(filterList);
    }
    return (
        <div className="main d-flex flex-column align-items-center justify-content-center">
            <div className="input-group input-task m-3 w-100 justify-content-center">
                <span className="input-group-text input-task-text" id="inputGroup-sizing-default">Task</span>
                <input type="text" name='list'
                    className="form-control input-task-input"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={list}
                    onChange={handlerChange} onKeyUp={handlerKeyUp} />
                <button className="btn button-task" onClick={handlerClick} onKeyUp={handlerKeyUp}>Add</button>
            </div>
            <div className="totalTasks">{todoList.length === 0 ? 'No tasks have been added yet' : `You have ${todoList.length} tasks due today`}</div>
            {
                todoList.map((item, index) => (
                    <div className="d-flex align-items-center justify-content-between w-100  tasks" key={index}>
                        {isEdit === index ? (<input className="form-control d-inline"
                            value={item}
                            onChange={(e) => handlerEdit(e.target.value, index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setIsEdit(null);
                                }
                            }}
                            autoFocus
                        />) : (
                            <p className="p-0 m-0 mx-3 fs-4 flex-grow-1 m-0 d-inline">{item}</p>
                        )}
                        <div>
                            <button className="btn edit fs-5" onClick={() => setIsEdit(index)}>
                                <i className="fa-solid fa-pencil text-success"></i>
                            </button>
                            <button btn className="btn delete fs-5" onClick={() => deleteElement(index)}>
                                <i className="fa-solid fa-trash text-danger"></i>
                            </button>
                        </div>

                    </div>
                ))
            }
        </div >
    );
};