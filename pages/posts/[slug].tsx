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
    filters: {
        slug: {
          $eq: `${params.slug}`,
        },
      },
  });
  // TODO actually write a new slug findOne() endpoint!
  const response = await axios.get(`${process.env.DB_HOST}/api/posts?${queryParams}`)
  return {
    props: {
      postJson: response.data.data[0]
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`${process.env.DB_HOST}/api/posts`)
  const paths = response.data.data.map((post: any) => {
      return {params: {slug: post.attributes.slug }}
  })
  return {
    paths,
    fallback: false
  };
}

