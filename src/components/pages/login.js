import React from "react"
import { Link } from 'react-router-dom';
import './signup.css';

export default function Login() {
    const [formData, setFormData] = React.useState({
        workEmail: '',
        password: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    return(
        <div className="universal--container">
        <div className="left---container">
            <div className="margin--headers">
                <h6 className="margin--header--bigger">Get started for free</h6>
                <h6 className="margin--header--smaller">Create your account to access more</h6>
            </div>


            <div className="image--headers">
            <img className="tick" alt="" src="./images/tick.jpg"/>
            <div className="image--right">
            <h6 className="image--big">Get started fast with Tech Haven</h6>
            <p className="image--small">Experience a seamless shopping journey with Tech Haven. Enjoy fast and easy access to the latest gadgets and electronics.</p>

            </div>
            </div>

            <div className="image--headers">
            <img className="tick" alt="" src="./images/tick.jpg"/>
            <div className="image--right">
            <h6 className="image--big">Access all Tech Haven services</h6>
            <p className="image--small">Explore our full range of services and discover how Tech Haven can enhance your shopping experience with unbeatable deals and exceptional customer support.</p>
            
            </div>
            </div>

            <div className="image--headers">
            <img className="tick" alt="" src="./images/tick.jpg"/>
            <div className="image--right">
            <h6 className="image--big">Trusted by online shoppers</h6>
            <p className="image--small">Join thousands of satisfied customers who trust Tech Haven for their gadget and electronic needs. Shop with confidence and find exactly what you’re looking for.</p>
            
            </div>
            </div>




        </div>
        <div className="login--container">
            <div className="obey">
            <h1>Sign in to your account</h1>
            <form className="signup-form">
            <label>
                   Email
                   <br/>
                    <input
                        type="email"
                        name="workEmail"
                        placeholder="dennis@gmail.com"
                        value={formData.workEmail}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Password
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </label>
                    <label className="terms">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                    />
                    I agree to the TECH HAVEN Terms of Service and Privacy Policy 
                </label>
                <button type="submit" className='sales'>Login</button>
                <p>Don't have an Account? <Link to="/signup"><span className="sign--blue">Sign Up</span></Link></p>
            </form>
            </div>
        </div>
        </div>
    )
}