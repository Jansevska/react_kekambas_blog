import Post from "../components/Post"


export default function PostsView() {

    const posts = [
        {
            id: 1,
            body: "I'm missing Kekambas",
            author:{
                user_id: 1,
                username:'brians'
            }
        },
        {
            id: 2,
            body:"Killer job on that whiteboard" ,
            author:{
                user_id: 2,
                username:'sarahs'
            }
        },
        {
            id: 3,
            body: "Isn't React Fun",
            author:{
                user_id: 3,
                username: "dylans"
            }
        }
    ]

    return (
        <>
        <h2>Posts</h2>
        { posts.map((post, i)=> <Post key={i}post={post} />)}
        </>
    )
}
