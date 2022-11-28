import React from "react";
import {FilterValuesType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTasks: (taskId: number) => void
    changeTodolistFilter: (nextFilterValue: FilterValuesType) => void
}

export function Todolist(props: PropsType) {

    const tasksElements = [
        props.tasks.map((task: TasksType) => {
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={()=> props.removeTasks(task.id)}>x</button>
                </li>
            )
        })
    ]

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksElements}
            </ul>
            <div>
                <button onClick={() => props.changeTodolistFilter("all")}>All</button>
                <button onClick={() => props.changeTodolistFilter("active")}>Active</button>
                <button onClick={() => props.changeTodolistFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}