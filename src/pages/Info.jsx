import Layout from "../Components/Layout"
import { Link } from "react-router-dom"
function Info() {
    return (
        <div>
            <h3>Info Page</h3>
            <p>OwO or UwU?</p>
            <h3>PC SPECS</h3>
            <p>My PC is very outdated i know Someday I'll upgrade it</p>
            <table>
                <tr>
                    <th>Component Name</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>AMD Ryzen 1700</td>
                </tr>
                <tr>
                    <td>GPU</td>
                    <td>Sapphire AMD RX 580 Special Edition</td>
                </tr>
                <tr>
                    <td>MotherBoard</td> 
                    <td>Asus X370 Prime Pro</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>KFA DDR4-3600 16GB x2 8GB</td>
                </tr>
                <tr>
                    <td>OS</td>
                    <td>Linux Mint Cinnammon 22 / Windows 10 (Dual Boot)  </td>
                </tr>
                <tr>
                    <td>PC CASE</td>
                    <td>Phanteks Enthoo Pro.</td>
                </tr>
            </table>
            <p>Last updated 2024</p>
            <div>
                <h3>About AMD 1700 and Linux.</h3>
                <p>Random Reboots on GNU/Linux (Windows has not this problem) </p>
                <p>Seems that this processor has a bug and i need to disable  the "Global C-State Control" (or similarly-named) option in  BIOS.</p>
                <p>After doing that Seems stable no more random reboots</p>
            </div>
        </div>
    )
}

export default Info