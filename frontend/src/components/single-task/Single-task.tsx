import { SingleTaskInterface } from "../../shared/interfaces/single-task.interface";
import Checkbox from "../checkbox/Checkbox";
import './single-task.css'

export default function SingleTask({ tasksList }: any) {


    const task = tasksList?.map((task: SingleTaskInterface) =>
        <li
            key={task.id}
            className="task">

            <div className="t_container">
                <div className="task__left__box">
                    <Checkbox checkedTask={task}></Checkbox>

                    <div>
                        <h6>{task.title}</h6>
                        <p>{task.description}</p>
                    </div>
                </div>

                <button
                    title="task-delete"
                    className="task__btn-delete"
                ></button>
            </div>

            <span
                style={{
                    fontWeight: '500',
                    fontSize: '10px',
                    display: 'block',
                    textAlign: 'right'
                }}>создано:{task.creation_date}</span>
        </li>
    )

    return (
        <ul>{task}</ul>
    )

}