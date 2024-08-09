import { Link } from "react-router-dom";
import "./AsideNavBar.css";


export default function AsideNavBar(props) {
    return <aside>
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/animes">Animes</Link></li>
                    <li><Link to="/info">More Info</Link></li>
                </ul>
            </div>

           
        </nav>
    </aside>
}