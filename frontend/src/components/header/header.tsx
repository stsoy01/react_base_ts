import './header.css'

export default function Header({ tasksOverview, borderRadius }: any) {
    const date: Date | string = new Date().toLocaleDateString();

    return (
        <header
            className="header"
            style={{
                height: borderRadius ? '650px' : '400px',
                borderBottomLeftRadius: borderRadius ? '24px' : '0',
                borderBottomRightRadius: borderRadius ? '24px' : '0'
            }}>

            <div className="header__navigation">
                <button
                    title="theme-color"
                    className="header__navigation__btn btn-weather"
                ></button>

                <button
                    title="settings"
                    className="header__navigation__btn btn-admin-panel"
                ></button>
            </div>

            <h3 className="header__title">{date}</h3>

            <span className="header__description">{tasksOverview}</span>
        </header>
    )
}