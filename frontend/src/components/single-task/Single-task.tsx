import { SingleTaskInterface } from "../../shared/interfaces/single-task.interface";
import Checkbox from "../checkbox/Checkbox";
import './single-task.css'

export default function SingleTask({ tasksList }: any) {
    const task = tasksList.map((task: SingleTaskInterface) =>
        <li className="task" key={task.id}>
            <div className="task__left__box">
                <Checkbox></Checkbox>
                <h6>{task.id}</h6>
                <p>
                    {task.title}
                </p>
            </div>
            <button className="task__btn-delete"></button>
        </li>
    )

    return (
        <ul>{task}</ul>
    )

}