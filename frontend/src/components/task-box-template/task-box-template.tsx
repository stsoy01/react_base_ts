import {Component} from "react";
import './task-box-template.css';

export class TaskBoxTemplate extends Component {
    private _position: { isBottom: boolean } = {isBottom: true}

    public render() {
        return (
            <div className="task__box" style={{
                bottom: this._position.isBottom ? '0' : '250px',
                height: this._position.isBottom ? '250px' : '400px',
            }}>
                <button
                    className="task__box__open-btn"
                    onClick={() => this.setState({isBottom: this._position.isBottom = !this._position.isBottom})}>
                </button>

                <div className="task__box--visible" style={{pointerEvents: this._position.isBottom ? 'none' : 'auto'}}>
                    <div className="task__box__container">
                        asdasd
                    </div>
                    {/*<button onClick={() => localStorage.setItem('totalTaskCount', JSON.stringify(2))}>click</button>*/}
                </div>

            </div>
        )
    }
}