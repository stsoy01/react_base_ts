import { useState } from 'react'
import Header from '../../components/header/Header';
import TaskBoxTemplate from '../../components/task-box-template/Task-box-template';
import './todo-list.css'

export default function TodoList() {

    let [tasksOverview, setTaskOverview] = useState(localStorage.getItem('tasksOverview') ?? 'У вас нет задач на сегодня')

    function handleCallback(): void {
        setTaskOverview(String(localStorage.getItem('tasksOverview')));
    }
    

    return (
        <div className="container">
            <Header tasksOverview={tasksOverview}></Header>
            <TaskBoxTemplate fromChild={handleCallback}></TaskBoxTemplate>
        </div>
    )
}