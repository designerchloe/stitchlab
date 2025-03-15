
function Nav(props) {
    return (
        <div className="nav-container">
            <a href="#" className="navlink" id={ props.selected === 'design' ? 'selected' : '' }>Design</a>
            <a href="#" className="navlink" id={ props.selected === 'samples' ? 'selected' : '' }>Samples</a>
        </div>
    );
}

export default Nav;