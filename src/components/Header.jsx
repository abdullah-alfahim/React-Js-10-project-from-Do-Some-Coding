

function Header({logo}) {
    return (
        <header className="header">
            <div className="inner_header">
                <div className="logo_area">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="menu_area">
                    <ul className="menu">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="login_area">
                    <button className="login_button">Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header