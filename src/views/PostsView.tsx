import { useEffect, useState } from 'react';
import Post from "../components/Post"
import PostType from '../types/post';
import { getAllPosts } from '../lib/apiWrapper';



export default function PostsView() {
    
    const [posts, setPosts] = useState<PostType[]>([])

    // fetch is the other way of getting data opposed to Axios(imported axios (npm i axios) -> added lib/apiWrapper.tx, /types/api.ts)
    // useEffect( () => {
    //     fetch('https://jansevska-flaskblog-api.onrender.com/api/posts')
    //     .then(res => res.json())
    //     .then(data => setPosts(data))
    // }, [])

    useEffect( () => {
        async function fetchData() {
            const response = await getAllPosts();
            if (response.data){
                setPosts(response.data);
            }
        };
        fetchData()
    }, [])

    return (
        <>
            <h2>Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}
