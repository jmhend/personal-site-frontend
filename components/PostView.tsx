import React, { FunctionComponent } from "react";
import { Post } from "../models/Post";
import MarkdownIt from 'markdown-it';
import Link from "next/link";
import { useRouter } from 'next/router'

export type PostViewProps = {
    post: Post;
}

export const PostView: FunctionComponent<PostViewProps> = ( { post } : PostViewProps) => {
    const md = new MarkdownIt();
    const htmlBody = md.render(post.body);
    const { asPath } = useRouter();
    return (
        <>
            <div className="post-view page-container pt-8 pb-8">
                <h1 className="page-title mb-2">{post.title}</h1>
                <h2 className="text-[#726F6C] text-sm mb-8">{post.formatDateAndMinutes()}</h2>
                <section dangerouslySetInnerHTML={{__html: htmlBody}}></section>
            </div>
            <div className="page-container">
                <div className="pt-4 pb-4">
                    <Link href={getTwitterShareUrl(post, asPath)}>
                        <a>
                        <div className="flex flex-row" >
                            <img src="/twitter.svg" className="w-4 h-4 mr-1"/>
                            <p className="text-xs text-slate-600">Share on Twitter</p>
                        </div>
                        </a>
                    </Link>

                </div>
            </div>
        </>
    );
}

function getTwitterShareUrl(post: Post, path: string): string  {
    const qs = require('qs');
    const url = `www.jmhend.me${path}`;
    const params: string = qs.stringify({
        text: post.title,
        via: 'jessetweettweet',
        url: url
    });
    return `https://twitter.com/intent/tweet?${params}`;
}
