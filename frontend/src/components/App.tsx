import {Component} from "react";
import './app.styles.css'
import {TaskBoxTemplate} from "./task-box-template/task-box-template";
import {Header} from "./header/header";

export class App extends Component {

    public render() {
        return (
            <>
                <div className="container">
                    <Header></Header>
                    <TaskBoxTemplate></TaskBoxTemplate>
                </div>
            </>
        );
    }
}
