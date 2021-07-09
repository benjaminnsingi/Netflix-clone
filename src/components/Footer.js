import React from "react"
import "./Footer.scss"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__socials">
                    <a href="/" className="footer__social">
                        <FacebookIcon />
                    </a>
                    <a href="/" className="footer__social">
                        <InstagramIcon />
                    </a>
                    <a href="/" className="footer__social">
                        <TwitterIcon />
                    </a>
                    <a href="/" className="footer__social">
                        <YouTubeIcon />
                    </a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                </ul>
                <div className="footer__copy">Netflix app- tous droits réservés</div>
            </div>
        </footer>
    )
}

