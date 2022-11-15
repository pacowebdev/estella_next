import Head from 'next/head'
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className='px-4 pt-5'>
                <h1>Home</h1>
                <div className="row mt-5">
                    <div className="col-12 col-sm-6">
                        <div className="card w-100 h-100">
                            <div className="card-body">
                                <h5 className="card-title">Posts</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>Lorem ipsum dolor ammet</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla.</p>
                                <Link href='/blog'>Visit blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="card w-100 h-100">
                            <div className="card-body">
                                <h5 className="card-title">Users</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>Lorem ipsum dolor ammet</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla.</p>
                                <Link href='/users'>Watch users</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


