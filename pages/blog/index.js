import Head from "next/head";
import Link from "next/link";
import {v4 as uuidv4} from 'uuid'

function Index(props) {
    const posts = props.posts

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <main className='px-4 pt-5'>
                <section className="container p-4">
                    <h1 className="">Posts</h1>
                    <div className="row g-3 mt-4">
                        { posts.map(post => (
                            <article key={uuidv4()} className='col-12 col-md-6 col-xl-4'>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body.slice(0, 60) + '...'}</p>
                                        <Link href={`/blog/${post.id.toString()}`} className='card-link'>Lire</Link>
                                    </div>
                                </div>
                            </article>
                        )) }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Index;

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()

        return {
            props: { posts }
        }
    } catch {
        return { notFound: true }
    }
}