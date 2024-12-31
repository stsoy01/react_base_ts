import { useEffect, useState } from 'react'
import Header from '../../components/header/Header';
import './todo-list.css'
import SingleTask from '../../components/single-task/Single-task';
import { SingleTaskInterface } from '../../shared/interfaces/single-task.interface';
import TaskService from '../../shared/services/tasks.service';

export default function TodoList() {

    const [tasksOverview, setTaskOverview] = useState(localStorage.getItem('tasksOverview') ?? 'У вас нет задач на сегодня');
    const [_position, setPosition] = useState({ isBottom: true });
    const [taskList, setTaskList] = useState([]);


    useEffect(() => {
        let tasks = TaskService().returnTasksList;
        setTaskList(tasks as any)
    }, [])



    function pickTaskList(project: string): any {
        setTaskList(TaskService().returnTasksList(project))
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

                    <div className='task__sections'>
                        <button className='task__section-btn' onClick={() => pickTaskList('all')}>{'Все'}</button>
                        <button className='task__section-btn' onClick={() => pickTaskList('done')}>{'Выполнено'}</button>
                        <button className='task__section-btn' onClick={() => pickTaskList('undone')}>{'Незавершено'}</button>
                    </div>
                    <SingleTask tasksList={taskList}></SingleTask>
                </section>
            </div >
        </>
    )
}