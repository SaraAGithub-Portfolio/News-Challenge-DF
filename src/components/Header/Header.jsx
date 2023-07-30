import './Header.css';
const Header = () => {
    const date = new Date().toLocaleDateString();
    return (
        <header className="header-container">
            <div className="container d-flex">
                <h3 className="date">{date}</h3>
                <h1 className="font-times"> This is Your News </h1>
                <p className="latestHeadlines">The Latest Headlines at your fingertips</p>
            </div>
        </header>
    )
}

export default Header;



