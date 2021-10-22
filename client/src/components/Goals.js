
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import "../styles/goal.css"

function Goals(props) {

    useEffect(() => {
        props.onAllGoals()
    }, [])

    const handleGoalDelete = (goal) => {
        fetch(`https://sheltered-hamlet-06411.herokuapp.com/api/goals/${goal.id}`, {
            method:'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                props.onAllGoals()
            })
    }

    const goalItems = props.goals.map(goal => {
        return <ul id="goalul" key= {goal.id}>
            
            <li  id="goalli">
            <div id="goalss" >
                <h3>MAIN GOAL</h3>
            <div >WHAT I WANT : </div>
            <div id="db">{goal.title}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO GET : </div>
            <div id="db">{goal.tf}</div><br></br>
            <div >WHEN I WILL GET IT : </div>
            <div id="db">{goal.ed}</div><br></br>
            <div>WHAT I WANT(IN DETAIL) : </div>
            <div id="db">{goal.mgd}</div>
            <br></br><br></br>

            <h3>FIRST QUARTER</h3>
            <div>I WILL : </div>
            <div id="db">{goal.sg1title}</div><br></br>
            <div>HOW LONG IT WILL  TAKE TO COMPLETE : </div>
            <div id="db">{goal.sgtf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sged}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sggd}</div><br></br>
        
            <br></br>
            <h3>SECOND QUARTER</h3>
            <div>I WILL : </div>
            <div id="db">{goal.sg2title}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO COMPLETE : </div>
            <div id="db">{goal.sg2tf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sg2ed}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sg2gd}</div><br></br>
            <br></br>

            <h3>THIRD QUARTER</h3>
            <div>I WILL : </div>
            <div id="db">{goal.sg3t}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO COMPLETE : </div>
            <div id="db">{goal.sg3tf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sg3ed}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sg3gd}</div><br></br>
            <br></br>

            <h3>FOURTH QUARTER</h3>
            <div>I WILL : </div>
            <div id="db">{goal.sg4t}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO COMPLETE : </div>
            <div id="db">{goal.sg4tf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sg4ed}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sg4gd}</div><br></br>
            <br></br>    
            <br></br>

            </div>

            <div>
            <button onClick = {() => handleGoalDelete(goal)}><img src="https://img.icons8.com/nolan/64/delete.png" alt="delete"/></button>
            </div>
            
            
        </li></ul>
    })

    return (
        <div className="GoalsPage">
            <div className="goalsList">{goalItems}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAllGoals: () => dispatch(actionCreators.fetchGoals())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals)