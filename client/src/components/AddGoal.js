import { connect } from "react-redux";
import { useState } from "react";
import * as actionCreators from "../store/creators/actionCreators";
import '../styles/addGoal.css';
import SixSteps from './SixSteps';

function AddGoal(props) {

    const [goal, setGoal] = useState({})

    const handleOnChange = (e) => {
        setGoal({
            ...goal,
            [e.target.name]: e.target.value,

        })
    }

    const newGoal = () => {
        fetch('https://sheltered-hamlet-06411.herokuapp.com/api/goals', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goal)
        })
            .then(response => response.json())
            .then(result => {
            })
        props.onNewGoal()
        props.history.push('/home')
    }

    return (

        <div id="body">
                    <SixSteps/>
            <div className="addGoal">


            <div id="mainGoal">
                <h4>Main Goal</h4>
                <input type="text" name="title" placeholder="Name of Goal" onChange={handleOnChange} />
                <br></br>
                <textarea id="define" type="text" name="mgd" placeholder="Define Main Goal" onChange={handleOnChange} />
                <br></br>
                <input type="text" name="tf" placeholder="Timeframe to Complete" onChange={handleOnChange} />
                <br></br>
                <input type="text" name="ed" placeholder="End Date" onChange={handleOnChange} />
            </div>
            
            <div className="addGoal">
            <div id="giveTitle">What you intend to give in return for what you desire<br></br>
            <h5>-Divide the timeframe you chose to achieve your main goal into 4 quarters and describe in detail what you need to 
            complete in each quarter in order to reach your deadline.</h5>
            </div>
                <div id="gives">
                
                    <br></br>
                    <div>
                        <h4>1st Quarter</h4>
                        <input type="text" name="sg1title" placeholder="I Will Start/Do/Accomplish..." onChange={handleOnChange} />
                        <br></br>
                        <textarea id="define" type="text" name="sggd" placeholder="Define Action" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sgtf" placeholder="Timeframe to Complete" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sged" placeholder="End Date" onChange={handleOnChange} />
                    </div>
                    <div>
                        <h4>2nd Quarter</h4>
                        <input type="text" name="sg2title" placeholder="I Will Start/Do/Accomplish..." onChange={handleOnChange} />
                        <br></br>
                        <textarea id="define" type="text" name="sg2gd" placeholder="Define Action" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sg2tf" placeholder="Timeframe to Complete" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sg2ed" placeholder="End Date" onChange={handleOnChange} />
                    </div>

                    <div>
                        <h4>3rd Quarter</h4>
                        <input type="text" name="sg3t" placeholder="I Will Start/Do/Accomplish..." onChange={handleOnChange} />
                        <br></br>
                        <textarea id="define" type="text" name="sg3gd" placeholder="Define Action" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sg3tf" placeholder="Timeframe to Complete" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sg3ed" placeholder="End Date" onChange={handleOnChange} />
                    </div>
                    
                    <div>
                        <h4>4th Quarter</h4>
                        <input type="text" name="sg4t" placeholder="I Will Start/Do/Accomplish..." onChange={handleOnChange} />
                        <br></br>
                        <textarea id="define" type="text" name="sg4gd" placeholder="Define Action" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sg4tf" placeholder="Timeframe to Complete" onChange={handleOnChange} />
                        <br></br>
                        <input type="text" name="sg4ed" placeholder="End Date" onChange={handleOnChange} />
                    </div>

                
                <br></br>




                </div>
                </div>
            </div>

            <button onClick={newGoal}><img src="https://img.icons8.com/nolan/96/lock.png" alt="create"/><br></br>CREATE</button>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewGoal: () => dispatch(actionCreators.fetchGoals())
    }
}



export default connect(null, mapDispatchToProps)(AddGoal)
