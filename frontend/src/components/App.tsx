import {Component} from "react";
import './app.styles.css'
import {TaskBoxTemplate} from "./task-box-template/task-box-template";

export class App extends Component {


    public render() {
        return (
            <>
                <div className="container">
                    <TaskBoxTemplate></TaskBoxTemplate>
                </div>
            </>
        );
    }
}
