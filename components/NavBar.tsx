import React, { FunctionComponent } from "react";
import Link from "next/link"

export const NavBar: FunctionComponent = () => <aside>
    <div className="flex flex-row justify-between center-items bg-[#1aad77]">
        <div className="flex flex-row justify-between center-items page-container pt-4 pb-4 font-serif">
            <Link href="/"><a className="navbar-link font-bold">JH</a></Link>
            <div className="flex flex-row justify-between items-baseline ">
                <Link href="/posts"><a className="navbar-link">Posts</a></Link>
                <Link href="/"><a className="navbar-link ml-4">About</a></Link>
                <Link href="/boot"><a className="navbar-link ml-4 text-xs">/boot</a></Link>
            </div>
        </div>
    </div>
</aside>
