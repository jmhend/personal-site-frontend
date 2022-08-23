import axios from 'axios'
import { Post } from '../../models/Post'
import { InferGetStaticPropsType, GetStaticPaths } from 'next'
import { PostView } from '../../components/PostView'

function PostPage( { postJson }: InferGetStaticPropsType<typeof getStaticProps>) {
  const post = Post.fromJSON(postJson)
  return <PostView post = {post} />
}

export default PostPage

export const getStaticProps = async ( { params }: any) => {
  const qs = require('qs');
  const queryParams: string = qs.stringify({
    populate: '*',
  });
  const response = await axios.get(`http://127.0.0.1:1337/api/posts/${params.id}?${queryParams}`)
  return {
    props: {
      postJson: response.data.data
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get("http://127.0.0.1:1337/api/posts")
  const paths = response.data.data.map((post: any) => {
      return {params: {id: post.id.toString() }}
  })
  return {
    paths,
    fallback: false
  };
}

