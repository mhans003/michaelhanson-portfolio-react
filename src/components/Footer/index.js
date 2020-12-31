import FooterItem from "../FooterItem";

function Footer() {
    return (
        <footer className="footer bg-dark">
            <nav className="container-fluid">
                <div className="row justify-content-between mx-2">
                    <FooterItem url={`/contact`} icon={`fas fa-mobile-alt`} text={`(951) 834-8219`} alt={`Michael Hanson's Phone Number`}/>
                    <FooterItem url={`/contact`} icon={`fas fa-envelope-open-text`} text={`michaeledwardhanson@gmail.com`} alt={`Michael Hanson's Email Address`}/>
                    <FooterItem url={`https://github.com/mhans003`} icon={`fab fa-github`} text={`mhans003`} alt={`Michael Hanson's GitHub Account`}/>
                    <FooterItem url={`https://www.linkedin.com/in/michaeledwardhanson/`} icon={`fab fa-linkedin`} text={`LinkedIn`} alt={`Michael Hanson's LinkedIn Account`}/>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;