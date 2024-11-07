'use client'
import React from "react";
import "./style.css"                                   // Importing CSS styles
import axios from "axios";                             // Importing Axios for making HTTP requests
import { useState } from 'react';                      // Importing useState hook to manage state in the component
import { ToastContainer, toast } from 'react-toastify';  // Importing Toastify for displaying notifications
import 'react-toastify/dist/ReactToastify.css';         // Importing Toastify CSS for styling
import { useRouter } from 'next/navigation';            // Importing useRouter from Next.js for navigation
import ChatbotEmbed from '../chatBot.jsx'

const Forget = () => {
    const router=useRouter();                  // Initialize Next.js router for navigation after password reset
    const [email, setEmail] = useState("");    // State to store email input
    const [otp, setOtp] = useState("");         // State to store OTP input
    const [showblock, setShowblock] = useState(false);    // State to control showing OTP input block
    const [password, setPassword] = useState("");         // State to store new password input
    const [confirmPass, setConfirmPass]=useState("");     // State to store confirm password input
    const [showconfirmpassword, setShowconfirmpassword] = useState(false);     // State to show/hide password reset form
    const [showpassword, setShowpassword] = useState(false);                  // State to toggle password visibility

     // Function to handle the submission of email for OTP request
    const handleEmailSubmit = (e)=>
    {
        e.preventDefault();                         // Prevent form from refreshing the page
        if(email === "")
        {
            // If email is empty, show an error notification
            toast.error("Please Enter Your Email", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else
        {
            // axios.post("http://localhost:4000/send-otp",{email:email})
            axios.post("https://investra-26xe.vercel.app/send-otp",{email:email})          // Send email to the server for OTP generation
            .then((response) => {
                setShowblock(true);                                // Show OTP input block after success
                toast.success(response.data, {                     // Show success notification
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }).catch((error) => {
                // console.log(error);
                toast.error(error.response.data, {                     // Show error notification on failure
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
        }
    }

    // Function to handle OTP verification
    const handleOTPSubmit =(e)=>
        {
            e.preventDefault();                      // Prevent form refresh
            if(otp === "")
            {
                // If OTP is empty, show an error notification
                toast.error("Please Enter Your OTP", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else
            {
                // axios.post("http://localhost:4000/verify-otp",{email:email,otp:otp})
                axios.post("https://investra-26xe.vercel.app/verify-otp",{email:email,otp:otp})            // Send email and OTP to the server for verification
                .then((response) => {
                    toast.success(response.data, {                     // Show success notification
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setShowconfirmpassword(true);                  // Show password reset form after successful OTP verification
                }).catch((error) => {
                    // console.log(error);
                    toast.error(error.response.data, {            // Show error notification on failure
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                });
            }
        }

   // Function to handle password reset submission
    const handlePasswordSubmit =(e)=>
    {
        e.preventDefault();
        if(password === "" || confirmPass === "")
        {
             // If password or confirm password is empty, show an error notification
            toast.error("Please Enter Your Password", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else if(password !== confirmPass)
        {
            // If password and confirm password don't match, show an error notification
            toast.error("Password and Confirm Password should be same", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else
        {
            // axios.post("http://localhost:4000/change-password",{email:email,password:password})
            axios.post("https://investra-26xe.vercel.app/change-password",{email:email,password:password})         // Send new password to the server for updating the user's password
            .then((response) => {
                toast.success(response.data, {             // Show success notification
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }).catch((error) => {
                // console.log(error);
                toast.error(error.response.data, {          // Show error notification on failure
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }); 
            });
             // Reset all states after password change and navigate to homepage
            setShowconfirmpassword(false);
            setEmail("");
            setOtp("");
            setPassword("");
            setConfirmPass("");
            router.push("/")
        }
    }

    return (
        <div className="container">
            {
            // Conditionally render either the OTP form or password reset form
            !showconfirmpassword ?
            <>
                <h1 className="heading">Forget Password</h1>
                 {/* Email input form for OTP request */}
                <form onSubmit={handleEmailSubmit}>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    {
                        !showblock ? <button type="submit" className="cursor-pointer">Get OTP</button> :null
                    }
                </form>
                {
                    // OTP input form shown if OTP request is successful
                    showblock ? 
                    <form onSubmit={handleOTPSubmit}>
                        <input type="text" placeholder="Enter your OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required /> <br />
                        <button type="submit" className="cursor-pointer">Submit</button>
                    </form> : null
                }
                <ToastContainer />          {/* Display Toast notifications */}
            </>
            :
            <>
                <h1 className='heading'>Reset Password</h1>
                {/* Password reset form */}
                <form onSubmit={handlePasswordSubmit}>
                    <input type={showpassword?"text":"password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                    <input type={showpassword?"text":"password"} placeholder="Enter your confirm password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} /> <br />
                    <button type="submit" className="cursor-pointer">Submit</button>
                </form>

                 {/* Button to toggle password visibility */}
                <button className="cursor-pointer" onClick={()=>{setShowpassword(!showpassword)}}>{showpassword?"Hide Password":"Show Password"}</button>
                <ToastContainer />  
            </>
            
            }
            <ChatbotEmbed />
        </div>
    )
}

export default Forget;       // Exporting the Forget component for use in other parts of the app