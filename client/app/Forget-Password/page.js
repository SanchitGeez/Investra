"use client";
import React from "react";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Forget = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showblock, setShowblock] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showconfirmpassword, setShowconfirmpassword] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
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
    } else {
      // axios.post("http://localhost:4000/send-otp",{email:email})
      axios
        .post("https://investra-26xe.vercel.app/send-otp", { email: email })
        .then((response) => {
          setShowblock(true);
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          // console.log(error);
          toast.error(error.response.data, {
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
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp === "") {
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
    } else {
      // axios.post("http://localhost:4000/verify-otp",{email:email,otp:otp})
      axios
        .post("https://investra-26xe.vercel.app/verify-otp", {
          email: email,
          otp: otp,
        })
        .then((response) => {
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setShowconfirmpassword(true);
        })
        .catch((error) => {
          // console.log(error);
          toast.error(error.response.data, {
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
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "" || confirmPass === "") {
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
    } else if (password !== confirmPass) {
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
    } else {
      // axios.post("http://localhost:4000/change-password",{email:email,password:password})
      axios
        .post("https://investra-26xe.vercel.app/change-password", {
          email: email,
          password: password,
        })
        .then((response) => {
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          // console.log(error);
          toast.error(error.response.data, {
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
      setShowconfirmpassword(false);
      setEmail("");
      setOtp("");
      setPassword("");
      setConfirmPass("");
      router.push("/");
    }
  };

  return (
    <div className="container">
      {!showconfirmpassword ? (
        <>
          <h1 className="heading">Forgot Password</h1>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            {!showblock ? (
              <button type="submit" className="cursor-pointer">
                Get OTP
              </button>
            ) : null}
          </form>
          {showblock ? (
            <form onSubmit={handleOTPSubmit}>
              <input
                type="text"
                placeholder="Enter your OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />{" "}
              <br />
              <button type="submit" className="cursor-pointer">
                Submit
              </button>
            </form>
          ) : null}
          <ToastContainer />
        </>
      ) : (
        <>
          <h1 className="heading">Reset Password</h1>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter your confirm password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />{" "}
            <br />
            <button type="submit" className="cursor-pointer">
              Submit
            </button>
          </form>
          <button
            className="cursor-pointer"
            onClick={() => {
              setShowpassword(!showpassword);
            }}
          >
            {showpassword ? "Hide Password" : "Show Password"}
          </button>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Forget;
