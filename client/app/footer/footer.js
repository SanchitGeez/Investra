// footer.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <p>Follow Us</p>
                <a href="https://www.facebook.com" target="_blank" aria-label='Facebook'>
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.x.com" target="_blank" aria-label='X'>
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" aria-label='Instagram'>
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://www.linkedin.com" target="_blank" aria-label='Instagram'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://www.youtube.com" target="_blank" aria-label='YouTube'>
                    <i class="fa-brands fa-youtube"></i>
                </a>

            </div>

            <p className='copyright'>
                &copy; {new Date().getFullYear()} Investra. All Rights Reserved.
            </p>

        </footer>
    );
};

export default Footer;
