import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>

            <nav>
                <ul>
                    <li><Link to="/work">Our Work</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>

            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>

    )
}

export default Layout;