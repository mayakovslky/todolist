import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed'


function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')
    console.log(filter)

    const removeTasks = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
        console.log(tasks)
    }

    const changeTodolistFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }

    let tasksForRender: Array<TasksType> = [];

    if (filter === 'all') {
        tasksForRender = tasks
    } else if (filter === 'active') {
        tasksForRender = tasks.filter(tasks => tasks.isDone === false)
    } else if (filter === 'completed') {
        tasksForRender = tasks.filter(tasks => tasks.isDone === true)

    }

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForRender}
                      removeTasks={removeTasks}
                      changeTodolistFilter={changeTodolistFilter}
            />
        </div>
    );
}

export default App;
