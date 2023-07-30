
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container text-center">
                <p className="footer-tagline">Brought to you by Sara&apos;s News </p>
                <p>&copy; {year} Your News. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
