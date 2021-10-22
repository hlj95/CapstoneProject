import { connect } from 'react-redux';
import { useState } from 'react';
import * as actionCreators from "../store/creators/actionCreators";
import '../styles/AddPost.css';

function AddPost(props) {
    const id= localStorage.getItem('user_id')
    const [post, setPost] = useState({
        
    })

    const handleOnChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        })
    }

    const newPost = () => {
        fetch('https://frozen-mountain-21176.herokuapp.com/api/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(result => {
            })
        props.onNewPost()
        props.history.push('/home')
    }

    return(
        <div id="addPostDiv">
            {/* <input type="hidden" name="user_id" value={post.user_id} onChange={handleOnChange} ></input> */}
            <h2>POST :</h2>
            <br></br>
            <textarea type="text" name="body_text" placeholder="It's Okay If They Don't Like It!" onChange={handleOnChange} />
            <h2>SIGN :</h2>
            <input type="text" name="image" placeholder="SIGNATURE"onChange={handleOnChange}  />
            <br></br>
            
            <button onClick={newPost}> <img src="https://img.icons8.com/nolan/64/sent.png" alt="share post"/><br></br>SHARE!</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPost: () => dispatch(actionCreators.fetchPosts())

    }
}

export default connect(null, mapDispatchToProps)(AddPost)