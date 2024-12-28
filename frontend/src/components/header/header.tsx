import {Component} from "react";
import './header.css'

export class Header extends Component {

    private readonly date: any = new Date().toLocaleDateString();
    private _taskStatistic: { totalTaskCount: number | string } = {
        totalTaskCount: localStorage.getItem('totalTaskCount') ?? 'У вас нет задач'
    }

    constructor(props: object) {
        super(props);
        this.stateListener();
    }

    private stateListener(): void {
        const intervalId = setInterval(() => {
            const tasks = JSON.parse(localStorage.getItem('totalTaskCount') as any);
            this.setState({totalTaskCount: this._taskStatistic.totalTaskCount = tasks ? `У вас ${tasks} задач на сегодня` : 'У вас нет задач'});
        }, 5000)
    }


    public render() {
        return (
            <header className="header">
                <div className="header__navigation">
                    <button className="header__navigation__btn btn-weather"></button>
                    <button className="header__navigation__btn btn-admin-panel"></button>
                </div>

                <h3 className="header__title">{this.date}</h3>
                <span className="header__description">{this._taskStatistic.totalTaskCount}</span>
            </header>
        )
    }
}