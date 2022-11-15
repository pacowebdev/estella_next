import React from 'react';
import Head from "next/head";
import Link from "next/link";
import {v4 as uuidv4} from 'uuid'

function Index(props) {
    const users = props.users
    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <main className='px-4 pt-5'>
                <h1>Users</h1>
                <div className="row justify-content-center mt-5">
                    {users.map(user => (
                        <div key={uuidv4()} className='coll-12 coll-lg-6 m-2'>
                            <div className="card">
                                <div className="card-body d-flex justify-content-between">
                                    <h5 className="card-title">{user.name}</h5>
                                    <Link href={`/users/${user.id}`} className='card-link'>Contact</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Index;

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await res.json()

        return { props: { users } }
    } catch {
        return { notFound: true }
    }
}