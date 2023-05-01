import './security.css'

export const Security = () => {
    return (
        <>
        <div className="security">

            <div className="comment">
                <legend>
                    <h4>Advance Fraud Detection</h4>
                    <label>Your data are stored and encripted using strong criptography, we scan our system daily against security threats</label>
                </legend>
                <legend>
                    <h4>Save Transaction</h4>
                    <label>We are complient with PCI DSS. Your transactions are allways encrypted and secure</label>
                </legend>
            </div>
            <div className="secimg">
                <img src='sec.jpeg' alt=''/>
            </div>
        </div>
        </>
    )
}