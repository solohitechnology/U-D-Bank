import './help.css';



export const Help = () => {
    return (
        <>
            <div className="help">
                <div className="help_content">
                    <h1>We are here to help</h1>

                    <p className='chat'>Chat with us via our in-app live chat or send us massage on our official social media pages. if you inquire further assisteance, contact us via the following channels </p>

                    <div className="contact">
                        <p>
                            <label><a href='#' >09123456789</a> OR <a href='#'>091-2345</a></label>
                            <label><a href='#' >09123456789</a> OR <a href='#'>091-2345</a></label>

                            <label><a href='#'>costomersercvice@U~Dbank-inc.com</a></label>
                        </p>
                    </div>

                </div>


                <div className="img_container">
                    <img src='help.jpg' alt='img' />
                </div>



            </div>
        </>
    )
}