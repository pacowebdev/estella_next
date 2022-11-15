import Link from "next/link";

function Nav(props) {

    return (
        <nav className='navbar navbar-dark bg-primary'>
            <div className="container-fluid justify-content-center">
                <Link className='navbar-brand mx-4' href='/'>Home</Link>
                <Link className='navbar-brand mx-4' href='/blog'>Blog</Link>
                <Link className='navbar-brand mx-4' href='/users'>Contacts</Link>
                <Link className='navbar-brand mx-4' href='/api/api'>Api</Link>
            </div>
        </nav>
    );
}

export default Nav;

