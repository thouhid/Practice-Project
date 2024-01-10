
const NavBar = ({ totalCount }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "} 
                <span className="badge badge-pill badge-secondary m-2">
                    {totalCount}
                </span>
            </a>
        </nav>
    );
}
 
export default NavBar;