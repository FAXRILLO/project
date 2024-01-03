import React, { useState } from "react";
import "./Auth.css";
import { toast } from "react-toastify";
import { login, register } from "../../api/authRequests";
import { useInfoContext } from "../../context/Context";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [loading, setLoading] = useState(false);


  const { setCurrentUser } = useInfoContext();

  const [confirmPass, setConfirmPass] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setLoading(true)
    try {
      toast.loading("Please wait ...");
      let res;
      if (!isSignup) {
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password === confirmPassword) {
            setConfirmPass(true)
          res = await register(formData);
        } else {
            toast.dismiss();
          return setConfirmPass(false);
        }
      } else {
        res = await login(formData);
      }
      toast.dismiss();
      localStorage.setItem("profile", JSON.stringify(res?.data?.user));
      localStorage.setItem("token", JSON.stringify(res?.data?.token));
      setCurrentUser(res?.data?.user);
      setLoading(false)
    } catch (error) {
        setLoading(false)
      toast.dismiss();
      toast.error(error.response.data.message)
    }
  };
  return (
    <div className="backgroud">
    <video src="https://cdn.kia-motors.uz/uploads/video/Kia_Seltos.mp4" muted="muted" autoplay="autoplay" loop="loop" preload="https://cdn.kia-motors.uz/uploads/video/Kia_Seltos.mp4" playsinline=""></video>
      <div className="auth">
        <div className="auth-left">
          <div className="app-name">
          <h1 >E'lon</h1>
          <h6>Explore with WEBSTAR IT ACADEMY</h6>
        </div>
        </div>
        <div className="auth-right">
          <form onSubmit={handleSubmit} action="" className="auth-form">
            <h3>{isSignup ? "Login" : "Register"}</h3>

            {!isSignup && (
              <>
                <div>
                  <input
                    type="text"
                    name="firstname"
                    className="info-input"
                    placeholder="Enter your firstname"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    className="info-input"
                    placeholder="Enter your lastname"
                    required
                  />
                </div>
              </>
            )}
            <div>
              <input
                type="email"
                name="email"
                className="info-input"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                className="info-input"
                placeholder="Enter your passoword"
                required
              />
            </div>
            {!isSignup && (
            <div>
              <input
                type="password"
                name="confirmPassword"
                className="info-input"
                placeholder="Enter your Confirm passoword"
                required
              />
            </div>
          )}
            {!confirmPass && (
            <span className="confirm-span">*Confirm password is not same</span>
          )}
            <div>
              <span
                onClick={() => {
                  setIsSignup(!isSignup);
                  setConfirmPass(true);
                }}
                className="info-span"
              >
                {!isSignup
                  ? " Alredy have an account Login"
                  : "Don't have an account Signup"}
              </span>
              <button className="info-btn button">
                {isSignup ? "Login" : "SignUp"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
