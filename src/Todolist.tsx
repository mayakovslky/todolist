import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTasks: (taskId: string) => void
    changeTodolistFilter: (nextFilterValue: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement> )=> {
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const onAllClickFilter = () => props.changeTodolistFilter("all")
    const onActiveClickFilter = () => props.changeTodolistFilter("active")
    const onCompletedClickFilter = () => props.changeTodolistFilter("completed")

    const tasksElements = [
        props.tasks.map((t: TasksType) => {
            const onRemoveHandler = () => {
                props.removeTasks(t.id)
            }
            return (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={onRemoveHandler}>x</button>
                </li>
            )
        })
    ]

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyDownHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasksElements}
            </ul>
            <div>
                <button onClick={onAllClickFilter}>All</button>
                <button onClick={onActiveClickFilter}>Active</button>
                <button onClick={onCompletedClickFilter}>Completed</button>
            </div>
        </div>
    );
};