import { Component } from "react";
import { NavLink} from "react-router-dom";
// import '../styles/navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="Nav">
                <NavLink to ="/"><div className="home">Home</div></NavLink>
                <NavLink to = "/create-a-post"><div className="createPost">Creat A Post</div></NavLink>
                <NavLink to ="/profile"><div className="profilePage">Profile</div></NavLink>
            
            </div>        
            )
    }
}

export default Navbar