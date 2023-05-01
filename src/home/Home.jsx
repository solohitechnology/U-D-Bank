import { Downloadapp } from '../components/downloadapp/Downloadapp';
import { Nofailure } from '../components/nofailure/Nofailure';
import { Security } from '../components/security/Security';
import { Service } from '../components/ourservice/Service';
import { Footer } from '../components/footer/Footer';
import { Mobile } from '../components/mobile/Mobile';
import { Join } from '../components/join/Join';
import { Card } from '../components/card/Card';
import { Help } from '../components/help/Help';
import './home.css';

export const Home = (props) => {


    const styles = {
        background: 'linear-gradient( rgb(174, 222, 241), rgb(224, 221, 221),  whitesmoke, white)',
        height: '100vh',

    };

    return (
        <div className='home_component'>

            <div className='header'>
                <h1 className='logo'>U~D Bank </h1>
                <div className='navbar'>
                    <nav>
                        <ul>
                            <li>
                                <a href='/home'>Pesonal</a>
                            </li>
                            <li>
                                <a href='/home'>Join Us</a>
                            </li>
                            <li>
                                <a href='/home'>Company</a>
                            </li>
                            <li>
                                <a href='/home'>Documentation</a>
                            </li>
                            <li>
                                <a href='/home'>business</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='header_banner' style={styles}>
                <div className=' discription'>

                    <h1><big>welcome to</big> U~D Bank</h1>
                    <p>We care about the satisfaction of our client, FAST in transaction Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, architecto tempore ipsam perspiciatis cupiditate reprehenderit incidunt molestiae aperiam nam minima ab at quod, laboriosam et recusandae. Quo officiis enim alias. </p>
                    <p className='linsence'><text>Fully Lincense by </text> <img src='/ndic.png' alt='img'/></p>
                    <legend className='mobileapp'><text>Now Available On</text><img src='paly1.png' alt='img'/></legend>
                </div>

                <img id='img1' src='bank2.png' alt='img'/>
                <img id='img2' src='creditcard.jpg' alt='img' />
                {/* <img id='img3' src='creditcard2.jpg' /> */}
            </div>
            <Mobile />
            <Service />
            <Card />
            <Join />
            <Downloadapp />
            <Nofailure />
            <Security />
            <Help />
            <Footer />

            {/* //////////////////////////////////  FOOTER ////////////////////////////////////////////////////// */}



        </div>
    )

}