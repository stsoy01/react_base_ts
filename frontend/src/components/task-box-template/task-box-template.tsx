import SingleTask from "../single-task/Single-task";
import './task-box-template.css';
import { SingleTaskInterface } from "../../shared/interfaces/single-task.interface";

export default function TaskBoxTemplate({ fromChild }: any) {
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
        <div className="task__box" >

            <div
                className="task__box--visible">
                <div className="task__box__container">
                    <SingleTask tasksList={tasksList}></SingleTask>
                </div>

                {/* <button onClick={handleCallback}>click</button> */}
            </div>

        </div>
    )
}