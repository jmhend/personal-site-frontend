import React, { FunctionComponent } from "react";
import { Post } from "../models/Post";
import Link from "next/link"

export type PostPreviewProps = {
    post: Post;
}

export const PostPreview: FunctionComponent<PostPreviewProps> = ( { post } : PostPreviewProps) => {
    return (
        <aside>
            <div className="pt-8 pb-8">
                <Link href={`/posts/p/${post.slug}`}>
                    <a className="fat-link">{post.title}</a>
                </Link>
                <p className="text-[#726F6C] mt-2 ">{post.description}</p>
                <p className="text-[#726F6C] text-xs mt-2">{post.formatDateAndMinutes()}</p>
            </div>
        </aside>
    );
}
