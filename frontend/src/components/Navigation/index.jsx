import "./style.scss"
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-left">
                    <h1>🪁</h1>
                </div>
                <div className="navbar-middle"></div>
                <div className="navbar-links">
                    <Link to="/about">Главная</Link>
                    <Link to="/about">Экскурсии</Link>
                    <Link to="/about">О Личный кабинет</Link>

                </div>
                <div id='outlet'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Navigation