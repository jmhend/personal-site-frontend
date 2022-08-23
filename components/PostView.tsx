import React, { FunctionComponent } from "react";
import { Post } from "../models/Post";
import MarkdownIt from 'markdown-it';

export type PostViewProps = {
    post: Post;
}

export const PostView: FunctionComponent<PostViewProps> = ( { post } : PostViewProps) => {
    const md = new MarkdownIt();
    const htmlBody = md.render(post.body);
    return (
        <div className="post-view ph pt-8 pb-8">
            <h1 className="page-title mb-2">{post.title}</h1>
            <h2 className="text-[#726F6C] text-sm mb-8">{post.formatDateAndMinutes()}</h2>
            <section dangerouslySetInnerHTML={{__html: htmlBody}}></section>
        </div>
    );
}
