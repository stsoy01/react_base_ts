import { useState } from "react";
import SingleTask from "../single-task/Single-task";
import './task-box-template.css';
import { SingleTaskInterface } from "../../shared/interfaces/single-task.interface";

export default function TaskBoxTemplate({ fromChild }: any) {
    const [_position, setPosition] = useState({ isBottom: true });
    const tasksList: SingleTaskInterface[] = [
        { id: 1, title: 'Call Mom', status: true, creation_date: new Date().toLocaleString() },
        { id: 2, title: 'Write CV', status: false, creation_date: new Date().toLocaleString() },
        { id: 3, title: 'Buy weges', status: true, creation_date: new Date().toLocaleString() },
        { id: 4, title: 'Take care of sister', status: false, creation_date: new Date().toLocaleString() },
        { id: 5, title: 'Ride bike', status: false, creation_date: new Date().toLocaleString() },
        { id: 6, title: 'Go to City Bank', status: true, creation_date: new Date().toLocaleString() },
        { id: 7, title: 'Pay bills', status: false, creation_date: new Date().toLocaleString() },
    ]

    function handleCallback(): void {
        localStorage.setItem('tasksOverview', JSON.stringify('2 задачи'))
        fromChild()
    }


    return (
        <div className="task__box" style={{
            bottom: _position.isBottom ? '0' : '250px',
            height: _position.isBottom ? '250px' : '400px',
        }}>
            <button
                className="task__box__open-btn"
                onClick={() => setPosition({ isBottom: !_position.isBottom })}
            ></button>

            <div
                className="task__box--visible"
                style={{ pointerEvents: _position.isBottom ? 'none' : 'auto' }}>
                <div className="task__box__container">
                    <SingleTask tasksList={tasksList}></SingleTask>
                </div>

                {/* <button onClick={handleCallback}>click</button> */}
            </div>

        </div>
    )
}