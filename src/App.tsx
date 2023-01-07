import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'


function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTasks = (id: string) => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
        console.log(tasks)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    const changeTodolistFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }

    let tasksForRender: Array<TasksType> = [];

    if (filter === 'all') {
        tasksForRender = tasks
    } else if (filter === 'active') {
        tasksForRender = tasks.filter(tasks => !tasks.isDone)
    } else if (filter === 'completed') {
        tasksForRender = tasks.filter(tasks => tasks.isDone)

    }

    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={tasksForRender}
                      removeTasks={removeTasks}
                      changeTodolistFilter={changeTodolistFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
