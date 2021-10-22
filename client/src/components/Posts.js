
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import '../styles/Posts.css';


function Posts(props) {

    useEffect(() => {
        props.onAllPosts()
    }, [])

    const handlePostDelete = (post) => {
        fetch(`https://frozen-mountain-21176.herokuapp.com/api/post/${post.id}`, {
            method:'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                props.onAllPosts()
            })
    }

    const postItems = props.posts.map(post => {
        return <ul id="postUL" key= {post.id}>
            <li  id="postLI">
                <br></br>
                <div id="postBody">{post.body_text}</div>
                <br></br>
                <div><img src="https://img.icons8.com/nolan/64/developer.png"/><br></br>{post.image}</div>
                <div>{post.user_id}</div>
                <br></br>
                <div>{post.updatedAt}</div>
                <br></br>
                <div>
                <button><img src="https://img.icons8.com/nolan/64/ok-hand.png"/><br></br>coo!</button>
                <button><img src="https://img.icons8.com/nolan/64/thumbs-down.png"/><br></br>wack!</button>
                </div>
                
                {/* <button onClick = {() => handlePostDelete(post)}>Delete Blog</button> */}


                

            </li>
        </ul>
    })

    return (
        <div className="PostsDiv" >
            {postItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAllPosts: () => dispatch(actionCreators.fetchPosts())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)