import './header.css'

export default function Header({tasksOverview}: any) {
    const date: Date | string = new Date().toLocaleDateString();
  
    return (
        <header className="header">
            <div className="header__navigation">
                <button className="header__navigation__btn btn-weather"></button>
                <button className="header__navigation__btn btn-admin-panel"></button>
            </div>

            <h3 className="header__title">{date}</h3>
            <span className="header__description">{tasksOverview}</span>
        </header>
    )
}