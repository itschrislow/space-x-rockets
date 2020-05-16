import Link from 'next/link'

function Layout({ children }) {
    return (
        <div>
            <header>
                <nav className="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item">
                                Home
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
}

export default Layout