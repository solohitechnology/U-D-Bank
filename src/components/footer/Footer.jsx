import './footer.css'

export const Footer = () => {
    return (
        <>
            <div className='footer'>
                <footer>
                    <ul>
                        <h2>Company</h2>
                        <li> <a href=''>About Us</a></li>
                        <li> <a href=''>Join our team</a></li>
                        <li> <a href=''><small>U~D</small>blog</a></li>
                        <li> <a href=''>press & media</a></li>
                        <li> <a href=''>Contact us</a></li>
                    </ul>

                    <ul>
                        <h2>Resources</h2>
                        <li> <a href=''>Private policy</a></li>
                        <li> <a href=''>Terms of service</a></li>
                        <li> <a href=''>Service Level Agreement</a></li>
                        <li> <a href=''>Documentation</a></li>
                        <li> <a href=''>Security</a></li>
                    </ul>

                    <ul>
                        <h2>Discover</h2>
                        <li> <a href=''>Business</a></li>
                        <li> <a href=''>Persornal</a></li>

                    </ul>

                    <ul>
                        <h2>Address</h2>
                        <li> <a href=''>Katampa</a></li>
                        <li> <a href=''>Abuja</a></li>

                    </ul>
                </footer>
            </div>

            <div className='lastFooter'> 
            <h2>U~D bank plc</h2>
            <label>@copy 2023 U~D Digital service Limited</label>
            <label><small>Facebook</small> <small>Twiter</small> <small>Instagram</small> <small>LinkIn</small></label>
            </div>

            
        
        
        </>
    )
}