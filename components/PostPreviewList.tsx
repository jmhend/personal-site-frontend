import React, { FunctionComponent, ReactNode } from "react";
import { Post } from "../models/Post";
import { PostPreview, PostPreviewProps } from '../components/PostPreview'

export type PostPreviewListProps = {
    posts: Post[];
}

export const PostPreviewList: FunctionComponent<PostPreviewListProps> = ( { posts } : PostPreviewListProps) => <aside>
    <div>{renderPosts(posts)}</div>
</aside>

function renderPosts(posts: Post[]): ReactNode {
    return (
        <>
        {
            posts.map((post, index) => (
                <div key={post.id}>
                    <PostPreview post={post}/>
                    {index !== posts.length-1 ? <hr className="solid"/> : null}
                </div>
            ))
        }
        </>
    );
}