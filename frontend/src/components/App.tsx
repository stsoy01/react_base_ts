import {Component} from "react";
import './app.styles.css'
import {TaskBoxTemplate} from "./task-box-template/task-box-template";
import {Header} from "./header/header";

export class App extends Component {

    private show(): void {
        console.log(this)
    }


    public render() {
        return (
            <>
                <div className="container" onScroll={this.show}>
                    <Header></Header>
                    <TaskBoxTemplate></TaskBoxTemplate>
                </div>
            </>
        );
    }
}
