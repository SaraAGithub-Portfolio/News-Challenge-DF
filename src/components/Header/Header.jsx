import './Header.css';

const Header = () => {
    const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <header className="header-container">
            <div className="container d-flex">
                <div className="title-date-container">
                    <h1 className="font-times"> Today&apos;s News </h1>
                    <h3 className="date">{date}</h3>
                </div>
                <p className="latestHeadlines">The Latest Headlines at your fingertips</p>
            </div>
        </header>
    )
}

export default Header;
