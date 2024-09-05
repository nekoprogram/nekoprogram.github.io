import { useEffect,useState } from 'react';
import './Footer.css'

export default function Footer(props)
{
    const currentYear = useState(new Date().getFullYear());



    return(
    <footer>
        <p>Copyright &copy;  NekoProgram / ProgramNeko</p>
        <p id="year">{currentYear}</p>
    </footer> )
}