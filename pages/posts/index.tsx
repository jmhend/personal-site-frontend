import axios from 'axios'
import { Post } from '../../models/Post'
import { InferGetStaticPropsType } from 'next'
import { PostPreviewList } from '../../components/PostPreviewList'

function PostsPage( { posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  let postsArray: Post[] = posts.map((element: any) => {
    return Post.fromJSON(element);
  });
  return (
    <div className="ph">
      <h1 className="page-title mt-8 mb-4">Posts</h1>
      <PostPreviewList posts = {postsArray} />
    </div>
  )
}

export default PostsPage

export const getStaticProps = async () => {
  const qs = require('qs');
  const params: string = qs.stringify({
    populate: '*',
    sort: ['id:desc']
  });
  const response = await axios.get(`http://127.0.0.1:1337/api/posts?${params}`)
  return {
    props: {
      posts: response.data.data
    }
  };
}
