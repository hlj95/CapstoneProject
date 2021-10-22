
export const fetchPosts = () => {
        return (dispatch) => {
        fetch('https://frozen-mountain-21176.herokuapp.com/api/post')
        .then(response => response.json())    
        .then(posts => {
            dispatch({type:'ALL_POSTS', payload: posts})
        })
    }
}

export const fetchInfo = (user_id) => {
        return (dispatch) => {
        fetch(`https://frozen-mountain-21176.herokuapp.com/api/v1/users/edit-profile/${user_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }

        }) 
        .then(response => response.json())    
        .then(info => {
            console.log(info)
            dispatch({type:'INFO', payload: info})
        })
    }
}



export const fetchGoals = () => {
    return (dispatch) => {
    fetch('https://sheltered-hamlet-06411.herokuapp.com/api/goals')
    .then(response => response.json())
    .then(goals => {
        dispatch({type:'ALL_GOALS', payload: goals})
    })
}

}
