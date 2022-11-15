import React from 'react';
import Head from "next/head";
import Link from "next/link";

export default function Post(props) {
    const post = props.post
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main className='container px-4 pt-5'>
                <h1 className='text-center mb-4'>{post.title}</h1>
                <p>{post.body}</p>
                <Link href='/blog'>Retour</Link>
            </main>
        </>
    );
}

export async function getStaticProps(context) {
    const id = context.params.post

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return { props: {post} }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map(item => (
        { params: {post: item.id.toString()} }
    ))

    return { paths, fallback: false }
}