import { useState } from 'react'
import Header from '../../components/header/Header';
import './todo-list.css'
import TaskBoxTemplate from '../../components/task-box-template/Task-box-template';

export default function TodoList() {

    const [tasksOverview, setTaskOverview] = useState(localStorage.getItem('tasksOverview') ?? 'У вас нет задач на сегодня');
    const [_position, setPosition] = useState({ isBottom: true });

    const tasksList: any[] = [
        { id: 1, title: 'Call Mom', status: true, creation_date: new Date().toLocaleString() },
        { id: 2, title: 'Write CV', status: false, creation_date: new Date().toLocaleString() },
        { id: 3, title: 'Buy weges', status: true, creation_date: new Date().toLocaleString() },
        { id: 4, title: 'Take care of sister', status: false, creation_date: new Date().toLocaleString() },
        { id: 5, title: 'Ride bike', status: false, creation_date: new Date().toLocaleString() },
        { id: 6, title: 'Go to City Bank', status: true, creation_date: new Date().toLocaleString() },
        { id: 7, title: 'Pay bills', status: false, creation_date: new Date().toLocaleString() },
    ]

    function handleCallback(): void {
    }

    return (
        <>
            <div className="container">
                <div style={{ position: 'relative' }}>
                    <Header
                        tasksOverview={tasksOverview}
                        borderRadius={_position.isBottom}
                    ></Header>

                    <button
                        className='btn_switch'
                        onClick={() => setPosition({ isBottom: !_position.isBottom })}
                    ></button>
                </div>

                <section
                    className='task__container'
                    style={{
                        overflow: _position.isBottom ? 'hidden' : 'auto',
                        height: _position.isBottom ? '0' : '370px',
                    }}>
                    <TaskBoxTemplate fromChild={handleCallback}></TaskBoxTemplate>
                </section>
            </div >
        </>
    )
}