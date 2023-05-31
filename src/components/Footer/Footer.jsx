import { FooterContainer } from './Footer.styled';
import { FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaKickstarterK,
} from 'react-icons/fa';

const SiteFooter = () => (
    <FooterContainer >
        <p>More from Star Wars</p>
        <ul>
            <li>
                <a href='https://www.facebook.com/StarWars/' alt='Star Wars official Facebook site'>
                    <i>
                        <FaFacebook />
                    </i>
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/starwars/' alt='Official Star Wars Instagram account'>
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href='https://www.youtube.com/user/starwars/' alt='Official Star Wars YouTube account'>
                    <FaYoutube />
                </a>
            </li>
            <li>
                <a href='https://twitter.com/starwars/' alt='Official Star Wars Twitter account'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://starwarskids.com/' alt='Official Star Wars Kids site'>
                    <FaKickstarterK />
                </a>
            </li>
        </ul>
        <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
        <p><span style={{color: 'gold'}}>IT </span>Academy, 20<span style={{color: 'gold'}}>23</span></p>
    </ FooterContainer>
);

export default SiteFooter;