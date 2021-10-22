import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'
import { connect } from 'react-redux';


function Navbar(props) {
     
        return (
            <div className="Nav">
                {props.isLoggedIn ? null : <NavLink to="/"><div className="LogInMenu"><img src="https://img.icons8.com/nolan/96/enter-2.png"/><br></br> LOGIN</div></NavLink> }
                {props.isLoggedIn ? null : <NavLink to="/register"><div className="RegisterMenu"><img src="https://img.icons8.com/nolan/96/multiple-inputs.png"/><br></br>REGISTER</div></NavLink> }
                {props.isLoggedIn ? <NavLink to="/home"><div className="home"><img src="https://img.icons8.com/nolan/96/home-page.png"/><br></br>HOME</div></NavLink>: null }
                {props.isLoggedIn ? <NavLink to="/create-a-post"><div className="createPost"><img src="https://img.icons8.com/nolan/96/mind-map.png"/><br></br>SHARE A POST</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/profile"><div className="profilePage"><img src="https://img.icons8.com/nolan/96/omnichannel.png"/><br></br>PROFILE</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/edit-profile"><div className="editProfile"><img src="https://img.icons8.com/nolan/96/administrative-tools.png"/><br></br>EDIT PROFILE</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to = "/add-goal"><div className="addaGoal"><img src="https://img.icons8.com/nolan/96/four-squares.png"/><br></br>GOALS</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/" ><div className="Logout" onClick="window.location.href=window.location.href"><img src="https://img.icons8.com/nolan/96/exit.png"/><br></br>LOGOUT</div></NavLink> : null }
                
            </div>
        )                            
    
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navbar)
