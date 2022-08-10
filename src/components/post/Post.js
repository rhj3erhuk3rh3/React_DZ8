import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Post() {

    const navigate = useNavigate()

    const gotToBack = () => {
        navigate(-1)
    }

    const [post, setPost] = useState({})

    const params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <button onClick={gotToBack}>Back</button>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </div>
    );
}

export default Post;