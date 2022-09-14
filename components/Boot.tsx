import React, { FunctionComponent } from "react";
import Link from "next/link"

export const Boot: FunctionComponent = () => {
    return (
        <div className="page-container">
            <h1 className="page-title mt-8">boot</h1>
            <p className="mt-8 mb-8">In other words, this site was built using...</p>
            <ul className="list-disc pl-8">
                <li className="mt-2">
                    <a href="https://nextjs.org/">Next.js</a>
                    <p className="text-sm"><em>Mostly</em> using Typescript. Static generation.</p>
                </li>
                <li className="mt-2">
                    <a href="https://strapi.io/">Strapi</a>...
                    <p className="text-sm">
                        ... kinda. I store each post on the <Link href="/posts"><a>posts page</a></Link> as an entry in Strapi on <Link href="https://railway.app/"><a>Railway.app</a></Link> . 
                        Since this site is statically generated during `next export`, there&apos;s really no need to host the Strapi 
                        instance, but I&apos;ve done it for completion.
                        Mostly, it&apos;s fun a experience to play around with a headless CMS and Railway.
                    </p>
                </li> 
                <li className="mt-2">
                    <a href="https://cloudinary.com/">Cloudinary</a> for free image hosting.
                </li>
                <li className="mt-2">
                    <a href="https://tailwindcss.com/">Tailwind CSS</a>
                </li>
                <li className="mt-2">
                    <a href="https://vercel.com/">Vercel</a>
                </li>  
                <li className="mt-2">
                    <a href="https://railway.app/">Railway</a>
                </li>  
            </ul>
            <p className="mt-8 mb-8">
                This site is my first stab at web development, React, typescript, jsx, etc. 
                It&apos;s for fun and to learn. Over time, I&apos;ll continually add improvements (better responsiveness, dark theme, etc).
                I&apos;ve open sourced the Next.js project <a href="https://github.com/jmhend/personal-site-frontend">here</a>, 
                so please submit PRs to fix my terrible typescript!
            </p>
        </div>
      )
}
