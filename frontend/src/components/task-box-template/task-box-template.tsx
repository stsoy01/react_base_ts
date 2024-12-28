import {Component} from "react";
import './task-box-template.css';

export class TaskBoxTemplate extends Component {
    private _position: { isBottom: boolean } = {isBottom: true}

    public render() {
        return (
            <div className="task__box" style={{bottom: this._position.isBottom ? '0' : '250px'}}>
                <button
                    className="task__box__switch"
                    onClick={() => this.setState({isBottom: this._position.isBottom = !this._position.isBottom})}>
                </button>
                <button onClick={() => localStorage.setItem('totalTaskCount', JSON.stringify(2))}>click</button>

            </div>
        )
    }
}