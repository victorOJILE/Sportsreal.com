import React from 'react'
import { useState } from 'react';
function Newsletter() {
    let subscribed = (localStorage.getItem('subscribed') == 'true')? 'none': 'block';
    const [show, setshow] = useState({display: subscribed});
    const [value, setValue] = useState('');

    let handleSubscribed = function(condition = false) {
        if(condition == true) {
            let newsl = document.forms.newslForm.newsletter;
            if(newsl.checkValidity() == true) {
                localStorage.setItem('subscribed', condition);
                return;
            }
        }else {
            localStorage.setItem('subscribed', condition);
        }
    }
    let id_div_style = {
        marginTop: "0.5rem",
        borderRadius: '0px'
    }
  return (
    <section className="newsletter" style={show}>
		 <div>
            <h5>Get our news updates delivered straight into your inbox.</h5>
			 <form action="" name="newslForm">
				 <div>
				 	<div className="id-div" style={id_div_style}>
				 		<div>
						 <i className="fa fa-envelope-o"></i>
					 </div>
                     <div className="input">
                        <input type="email" 
                            pattern='.+@.+\.\w+' 
                            name="newsletter" 
                            placeholder="Enter email address..." 
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            required
                         />
                    </div>
			 		</div>
			 		<br />
					 <button type="submit" onClick={()=> handleSubscribed(true)}>Sign up</button>
				 </div>
			 </form>
		 </div>
	 </section>
  )
}

export default Newsletter;