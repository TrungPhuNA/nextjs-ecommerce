import Master from './../layouts/Master'
import {getProducts} from '../api/home'
import {Card} from 'react-bootstrap';
const Home = ({ posts }) => {
    return (
        <Master>
            {posts.map(post => (
                <Card key={post.id} className='my-3 shadow'>
                    <Card.Body>
                        <Card.Title>
                            {post.id} -- {post.title}
                        </Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Master>
    )
}
export const getStaticProps = async() => {
    const posts = await getProducts();
    return {
        props: {
            posts
        }
    }
}

export default Home
