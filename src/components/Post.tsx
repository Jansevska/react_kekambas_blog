import Card from 'react-bootstrap/Card'

import PostType from "../types/post"
import { CardBody } from 'react-bootstrap'

type PostProps = {
    post: PostType
}

export default function Post({ post }:PostProps) {
    return (
        <Card className='my-3'>
            {/* <Card.Img variant='top' src={post.imageUrl} /> */}
            <CardBody>
                <Card.Title>{ post.title }</Card.Title>
                <Card.Text>{ post.body }</Card.Text>
                <Card.Subtitle>Posted at {post.dateCreated} by {post.author.username}</Card.Subtitle>
            </CardBody>
        </Card>
    )
}
