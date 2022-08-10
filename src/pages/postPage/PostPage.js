import React from 'react';
import {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";
// import post from "../../components/post/Post";

function PostPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(10, 20)))
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title} <NavLink to={`/post/${post.id}`}>Посмотреть</NavLink></li>)}
            </ul>

        </div>
    );
}

export default PostPage;