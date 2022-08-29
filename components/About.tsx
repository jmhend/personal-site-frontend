import React, { FunctionComponent } from "react";
import Image from "next/image"
import Link from "next/link"

export const About: FunctionComponent = () => {
    return (
        <>
            <div className="flex flex-col container mx-auto max-w-[777px] px-4">
                <div className="flex flex-col items-center mt-8 md:flex-row" >
                    <div className="min-w-[200px] min-w-[200px] md:mr-8">
                    <Image
                        objectFit="cover"
                        src="https://res.cloudinary.com/dfs6gdqqd/image/upload/v1661604404/about_me_cnpfwe.jpg"
                        alt="About Me"
                        width="200px"
                        height="200px"
                        priority 
                        className="rounded-full overflow-hidden"
                        />

                    </div>
                    <div className="flex flex-col items-center mt-8">   
                        <h1 className="page-title">Hi, I&apos;m Jesse</h1>
                        <p className="text-slate-600 text-sm">Software Engineer in Brooklyn, NY</p>
                        <div className="mt-4">
                            <a 
                                href="https://www.linkedin.com/in/jesse-hendrickson-58430239/" 
                                className="text-[#0c66c3] font-bold text-sm no-underline hover:decoration-[#0c66c3]">
                                    LinkedIn
                            </a>
                            <a 
                                href="https://twitter.com/jessetweettweet" 
                                className="text-[#1c9bef] font-bold text-sm no-underline ml-4 hover:decoration-[#1c9bef]">
                                    Twitter
                            </a>
                            <a 
                                href="https://www.instagram.com/jmhend/" 
                                className="text-[#d300c5] font-bold text-sm no-underline ml-4 hover:decoration-[#d300c5]">
                                    Instagram
                            </a>
                            <a 
                                href="mailto:jmhendrickson@gmail.com" 
                                className="text-[#d9a209] font-bold text-sm no-underline ml-4 hover:decoration-[#d9a209]">
                                    Email
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text_body">
                    <p className="mt-8">
                        I work as an Android Engineer at <a href="https://www.patreon.com/" className="underline decoration-[#ff434d]">Patreon</a>, working to create a
                        best-in-class product for imaginative content creators and their patrons.
                    </p>
                    <p className="mt-8">
                        Previously, I worked on the Android app at <a href="https://www.instagram.com/" className="underline decoration-[#d300c5]">Instagram</a>, building product and client
                        infrastracture that powers Explore, Search, Guides, and Locations. 
                        Prior, I worked on the <a href="https://www.facebook.com/" className="underline decoration-[#1a77f2]">Facebook</a> for Android app.
                    </p>
                    <p className="mt-8">
                        I started my career as the Android developer for <a href="https://www.upto.com/" className="underline decoration-[#2b7bb8]">UpTo, Inc</a>. (RIP)
                    </p>
                    <p className="mt-8">
                        Occasionally, I write about books, cooking, writing, engineering, 
                        and continual learning on my <Link  href="/posts"><a className="underline">posts page</a></Link>.
                    </p>
                </div>
            </div>
        </>
      )
}
