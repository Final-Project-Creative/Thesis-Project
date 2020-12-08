import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer.js';
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import SignIn from './Component/SignIn';
// import SignUp from './Component/SignUp/SignUp.js'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

// {/* <PhoneInput
//   country={'us'}
//   value={this.state.phone}
//   onChange={phone => this.setState({ phone })}
// /> */}
interface FormData {
  name: String;
  email: String;
  password: String;
  terms: boolean;
}

export default function Home() {
  const { register, handleSubmit, errors } = useForm<FormData>();//{
  //   defaultValues:{
  //     name:"AYA",
  //     email:"used@email.com",
  //     password:"A@ya12345678!",
  //     terms:true,
  //   },
  // });
  // const [submitting, setSubmitting] = useState<boolean>(false);
  console.log(errors, "Errors");
  return (
    <div>
      <div>
        <SignIn />
      </div>
      <form
        onSubmit={handleSubmit((formData) => {
          //setSubmitting(true);
          console.log(formData, "formData");
          //  const response = await fetch("/api/auth", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     name: formData.name,
          //     email: formData.email,
          //     password: formData.password,
          //     terms: formData.terms,
          //     //token, 
          // }),

          //  });
          //  const data = await response.json();
          //  console.log(data,"server data")
          //  setSubmitting(false);
        })}
      >

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={register({ required: "required" })} />
          {errors.name ? <div>{errors.name.message}</div> : null}
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="Email" ref={register({ required: "required" })} />
          {errors.email ? <div>{errors.email.message}</div> : null}
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input type="password" password="password" id="password" ref={register({
            required: "required",
            minLength: {
              value: 8,
              message: "must be 8 chars",
            },
            validate: (value) => {
              return [
                /[a-z]/,
                /[A-Z]/,
                /[0-9]/,
                /[^a-zA-Z0-9]/,
              ].every((pattern) => pattern.test(value)
              ) || "must include lower,upper,number,and special chars"
            }
          })}
          />
          {errors.password ? <div>{errors.password.message}</div> : null}

        </div>

        <div>
          <label htmlFor="terms">You must agree to our terms</label>
          <input type="checkbox" name="terms" id="terms" ref={register({ required: "Agree to term" })} />
          {errors.terms ? <div>{errors.terms.message}</div> : null}
        </div>

        <div>
          <button type="submit" >Register</button>
        </div>

      </form>
    </div>
  );
}

// // function App() {
// //   return (
// //     <div className="App">
// //       {/* <SignUp /> */}
// //       <header className="App-header">
// //         <h1>RAWNAQ.COM</h1>
// //         <img id ='img' src="https://image.freepik.com/free-vector/shopping-online-website-mobile-application-landing-page-concept-marketing-digital-marketing_144352-77.jpg"  alt="" />
// //       </header>
// //       <div>
// //       <Footer></Footer>

// //       </div>

// //     </div>



//   );
// }

//export default App;
