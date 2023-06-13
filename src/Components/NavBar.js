import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className="navigationWrapper">
            <div className="logoWrapper">
                <span className="stylish">Text Analyser</span>
            </div>
            <ul className="navigation">
                <a className="bi bi-linkedin" href="https://www.linkedin.com/in/shivanshu-/"> </a>
                <a className="bi bi-github" href="https://github.com/Ryomensukuna2003"> </a>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar