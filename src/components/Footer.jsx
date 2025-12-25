const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">&copy; {new Date().getFullYear()} Rajesh R. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://linkedin.com/in/rajesh-r-26070327a" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <a href="mailto:rajesh.r072000@gmail.com" className="footer-link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
