import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'
import { connect } from 'react-redux';


function Navbar(props) {
     
        return (
            <div className="Nav">
                {props.isLoggedIn ? null : <NavLink to="/"><div className="LogInMenu"><img src="https://img.icons8.com/nolan/64/enter-2.png" alt="login button"/><br></br> LOGIN</div></NavLink> }
                {props.isLoggedIn ? null : <NavLink to="/register"><div className="RegisterMenu"><img src="https://img.icons8.com/nolan/64/multiple-inputs.png" alt="register button"/><br></br>REGISTER</div></NavLink> }
                {props.isLoggedIn ? <NavLink to="/home"><div className="home"><img src="https://img.icons8.com/nolan/64/home-page.png" alt="home button"/><br></br>HOME</div></NavLink>: null }
                {props.isLoggedIn ? <NavLink to="/create-a-post"><div className="createPost"><img src="https://img.icons8.com/nolan/64/mind-map.png" alt="share post"/><br></br>SHARE A POST</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/profile"><div className="profilePage"><img src="https://img.icons8.com/nolan/64/omnichannel.png" alt="profile button"/><br></br>PROFILE</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/edit-profile"><div className="editProfile"><img src="https://img.icons8.com/nolan/64/administrative-tools.png" alt="edit profile"/><br></br>EDIT PROFILE</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to = "/add-goal"><div className="addaGoal"><img src="https://img.icons8.com/nolan/64/four-squares.png" alt="goals"/><br></br>GOALS</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/" ><div className="Logout" onClick="window.location.href=window.location.href" ><img src="https://img.icons8.com/nolan/64/exit.png" alt="logout"/><br></br>LOGOUT</div></NavLink> : null }
                
            </div>
        )                            
    
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navbar)
