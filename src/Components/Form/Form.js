import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

export default function Form(){
    


    function sendEmail(e){
        e.preventDefault();

        let w= document.getElementById('input1');
        let x= document.getElementById('input2');
        let y= document.getElementById('input3');
        let z=document.getElementById('input4');


        if ((w.value=="") || (x.value == "") || (y.value == "") || (z.value == "")){
            alert("Plase fill all required fields.");
            return false;

          



        }else{
            alert("Thank you for your submission. We'll get back to you soon.")


            //send email using emailJS
            emailjs.sendForm('nvgmail', 'template_c3ssf09', e.target, 'user_P9aMdRJjpC1pDpnDb3uOJ')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
            e.target.reset()

            return true;

        }

       
        
    }



    return(
        <div className= 'form-container'>

            <form onSubmit= {sendEmail}>
                <input type='text' placeholder="Name*" className= "here" id= "input1" name= "name"  />
                <div class= "required-text"></div>

                <input type="email" placeholder="Email*" className= "here" id="input2"name= "emal" />
                <div class= "required-text"></div>

                <input type="text" placeholder="Subject*" className= "here" id="input3" name= "subject" />
                <div class= "required-text"></div>

                <textarea placeholder="Message*" className= "message" id= "input4" name="message"  ></textarea>
                <div class= "required-text"></div>


                <div className= 'center-button'><input type="submit" className= "submit-button" id="button1" ></input></div>
                
            </form>




        </div>

    )
}