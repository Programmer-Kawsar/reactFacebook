import { Link } from "react-router-dom";
import "./Auth.scss";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import Myhelmet from "../../components/helmet/Myhelmet";
import { FaQuestionCircle } from "react-icons/fa";
import {
  createToastify,
  isValidmobile,
  isValidEmail,
} from "../../helpers/helper";
import { day, month } from "../../fakeData/FakeData";

// get facebook year

const Year = Array.from(
  { length: new Date().getFullYear() - 1904 },
  (_, i) => 1905 + i
).reverse();

const AuthPage = () => {
  const [modal, setModal] = useState(false);

  const handleBlur = (e) =>
    e.target.value.length < 1
      ? (e.target.className = "red-border")
      : (e.target.className = "");

  // create new accoutn form start

  const [input, setInput] = useState({
    first_name: "",
    sur_name: "",
    moe: "",
    pass: "",
    date: "",
    month: "",
    year: "",
    gender: "",
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // blur border red

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.first_name || !input.sur_name || !input.moe || !input.pass) {
      createToastify("all fields are required", "error");
    } else if (!isValidmobile(input.moe) && !isValidEmail(input.moe)) {
      createToastify("Invalid mobile or email", "error");
    } else {
      createToastify("Account created successfully", "success");

      setInput({
        first_name: "",
        sur_name: "",
        moe: "",
        pass: "",
        date: "",
        month: "",
        year: "",
        gender: "",
      });

      setModal(false);
    }
  };

  // create new accoutn form end

  // login form start

  const [logininput, setLoginInput] = useState({
    moe: "",
    pass: "",
  });

  const handleloginInput = (e) => {
    setLoginInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!logininput.moe || !logininput.pass) {
      createToastify("all fields are required", "error");
    } else if (
      !isValidmobile(logininput.moe) &&
      !isValidEmail(logininput.moe)
    ) {
      createToastify("Invalid mobile or email", "error");
    } else {
      createToastify("login successfully", "success");
      setLoginInput({
        moe: "",
        pass: "",
      });
    }
  };

  // login form end

  return (
    <>
      <Myhelmet title={" - Log in or sing up"} />
      {/* create new accoutn modal */}
      {modal && (
        <Modal
          title={"Sign Up"}
          desc={"It's quick and easy."}
          hide={() => setModal(false)}
        >
          <form className="new-accoutn-form" onSubmit={handleSubmit}>
            <div className="name-field">
              <input
                type="text"
                placeholder="First name"
                name="first_name"
                value={input.first_name}
                onChange={handleInput}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="Surname"
                name="sur_name"
                value={input.sur_name}
                onChange={handleInput}
                onBlur={handleBlur}
              />
            </div>
            <input
              type="text"
              placeholder="Mobile number or email address"
              name="moe"
              value={input.moe}
              onChange={handleInput}
              onBlur={handleBlur}
            />

            <input
              type="password"
              placeholder="New password"
              name="pass"
              value={input.pass}
              onChange={handleInput}
              onBlur={handleBlur}
            />

            <div className="date reg-selector">
              <span>
                Date of birth <FaQuestionCircle />
              </span>
              <div className="selector">
                <select name="date" onChange={handleInput}>
                  {day?.map((item, index) => (
                    <option
                      key={index}
                      value={item}
                      selected={new Date().getDate() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>

                <select name="date" onChange={handleInput}>
                  {month?.map((item, index) => (
                    <option
                      key={index}
                      value={item}
                      selected={new Date().getMonth() == index ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <select name="year" onChange={handleInput}>
                  {Year.map((item, index) => (
                    <option
                      key={index}
                      value={item}
                      selected={new Date().getFullYear() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="gender reg-selector">
              <span>
                Date of birth <FaQuestionCircle />
              </span>

              <div
                className="selector"
                value={input.gender}
                onChange={handleInput}
              >
                <label>
                  <p>Male</p>
                  <input name="gender" type="radio" value={"male"} />
                </label>
                <label>
                  <p>Female</p>
                  <input name="gender" type="radio" value={"female"} />
                </label>
                <label>
                  <p>Custom</p>
                  <input name="gender" type="radio" value={"custom"} />
                </label>
              </div>
            </div>
            <div className="upload-contact-desc">
              <p>
                People who use our service may have uploaded your contact
                information to Facebook. <Link to={"/"}>Learn more.</Link>
              </p>
            </div>

            <div className="terms-condition">
              <p>
                By clicking Sign Up, you agree to our{" "}
                <Link to={"/"}>Terms</Link>,{" "}
                <Link to={"/"}>Privacy Policy</Link> and{" "}
                <Link to={"/"}>Cookies Policy</Link>. You may receive SMS
                notifications from us and can opt out at any time.
              </p>
            </div>

            <button type="submit" className="sing-up-button">
              Sign Up
            </button>
          </form>
        </Modal>
      )}
      <div className="auth-main-area">
        <div className="auth-container">
          <div className="auth-container-left">
            <div className="image-logo">
              {" "}
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                alt=""
              />
            </div>

            <h2 className="auth-bottom-image-des">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="auth-container-right">
            <div className="auth-box-area">
              <form className="login-form" onSubmit={loginSubmit}>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  name="moe"
                  value={logininput.moe}
                  onChange={handleloginInput}
                  onBlur={handleBlur}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="pass"
                  value={logininput.pass}
                  onChange={handleloginInput}
                  onBlur={handleBlur}
                />
                <button type="submit" className="auth-login-button">
                  Log in
                </button>
              </form>
              <Link to={"/"}>Forgotten password?</Link>

              <div className="divider"></div>
              <button
                onClick={() => setModal(true)}
                className="auth-create-button"
              >
                Create new account
              </button>
            </div>
            <p className="auth-right-create-page">
              <Link>Create a Page </Link>
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <Link>English (UK)</Link>
            <Link>বাংলা</Link>
            <Link>অসমীয়া</Link>
            <Link>Bahasa Indonesia</Link>
            <Link> العربية</Link>
            <Link>中文(简体)</Link>
            <Link> Bahasa Melayu </Link>
            <Link> Español</Link>
            <Link>Português (Brasil)</Link>
          </div>
          <div className="divider"></div>
          <div className="footer-content">
            <Link>Sign Up</Link>
            <Link>Log in</Link>
            <Link>Messenger</Link>
            <Link>Facebook Lite</Link>
            <Link>Video</Link>
            <Link>Places</Link>
            <Link>Games</Link>
            <Link> Marketplace</Link>
            <Link>Meta Pay</Link>
            <Link>Meta Store</Link>
            <Link>Meta Quest</Link>
            <Link>Instagram</Link>
            <Link>Threads</Link>
            <Link>Fundraisers</Link>
            <Link>Services</Link>
            <Link>Voting Information Centre</Link>
            <Link>Privacy Policy</Link>
            <Link>Privacy Centre</Link>
            <Link>Groups</Link>
            <Link>About</Link>
            <Link>Create ad</Link>
            <Link>Create Page</Link>
            <Link>Developers</Link>
            <Link>Careers</Link>
            <Link>Cookies</Link>
            <Link>AdChoices</Link>

            <Link>Terms</Link>
            <Link>Help</Link>
            <Link>Contact uploading and non-users</Link>
          </div>
          <p>Meta {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
