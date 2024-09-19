import "./Menu.css"
import { menu } from "../../utils/information"

export function Menu() {
    return (
        <div className="menu">
            <div className="menu-container">
                <div className="itens-menu">
                    <img className="logo" src="images/logo-icon.png" alt="logo" />
                    <ul>
                        {menu.map((item =>
                            <li key={item} className="text-menu">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}