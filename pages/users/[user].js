import React from 'react';
import Head from "next/head";

export default function User(props) {
    const user = props.user
    return (
        <>
            <Head>
                <title>{`User ${user.name}`}</title>
            </Head>
            <main className='container px-4 pt-5'>
                <h2 className='text-center mb-4'>{user.username}</h2>
                <div className="row justify-content-center">
                    <div className="coll-12 coll-lg-8 coll-xl-6">
                        <div className="card p-2">
                            <div className="card-body">
                                <h4 className="card-title">{user.name}</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Email : {user.email}</li>
                                    <li className="list-group-item">Website : {user.website}</li>
                                    <li className="list-group-item">Phone : {user.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}


export async function getStaticProps(context) {
    const id = context.params.user
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()

    return { props: {user} }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map(item => (
        { params: {user: item.id.toString()} }
    ))

    return { paths, fallback: false }
}