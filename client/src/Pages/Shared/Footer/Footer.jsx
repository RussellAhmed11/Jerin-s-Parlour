import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-pink-500 text-white p-10">
            <div className="">
                <p>
                    H#000 (0th Floor), Road #00,
                    <br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh    </p>
            </div>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link className="link link-hover">About</Link>
                <Link className="link link-hover">Our Team</Link>
                <Link className="link link-hover">Terms and Conditions</Link>
                <Link className="link link-hover">Submit Listing</Link>

            </nav>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <Link className="link link-hover">Rentals</Link>
                <Link className="link link-hover">Sales</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Our Blog</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;