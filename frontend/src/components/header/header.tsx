import {Component} from "react";
import './header.css'

export class Header extends Component {

    readonly date: any = new Date().toLocaleDateString();

    public render() {
        return (
            <header className="header">
                <div className="header__navigation">
                    <button className="header__navigation__btn btn-weather"></button>
                    <button className="header__navigation__btn btn-admin-panel"></button>
                </div>

                <h3 className="header__title">{this.date}</h3>
                <span className="header__description">tasks descriptions</span>
            </header>
        )
    }
}