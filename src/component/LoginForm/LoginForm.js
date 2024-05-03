import "./LoginForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Modal from "../Modal/Modal";
import { useState } from "react";
export default function LoginForm() {
  const [showForm, setShowForm] = useState(true);
  let [loginInputs, setLoginInputs] = useState({
    userName: "",
    password: "",
  });
  let [btnSubmit, setBtnSubmit] = useState(false);
  return (
    <div className=" ">
      <div className="container  bg-white rounded-3">
        {showForm &&(
  <form
          showForm={true}
          className=" p-5"
          onSubmit={(e) => {
            e.preventDefault();
            setBtnSubmit(true);
            
              setShowForm(false);
            
          }}
        >
          <h1 className=" fw-semibold">تسجيل الدخول</h1>
          <div className="mb-4 mt-5">
            <label htmlFor="userName" className="form-label">
              اسم المستخدم
            </label>
            <input
              type="text"
              className="form-control mt-2"
              id="userName"
              placeholder="ادخل اسم المستخدم"
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, userName: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label ">
              الرقم السري
            </label>
            <input
              type="password"
              className="form-control mt-2"
              id="password"
              placeholder="ادخل الرقم السري"
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, password: e.target.value });
              }}
            />
          </div>

          <div className="forget-password mb-5 text-start ">
            <span className=" text-primary" style={{ cursor: "pointer" }}>
              هل نسيت الرقم السري؟
            </span>
          </div>

          <div className="btn-submit">
            <button
              type="submit"
              className="btn text-white w-100 fs-5 py-2"
              disabled={!loginInputs.userName || !loginInputs.password}
            >
              تسجيل الدخول
            </button>
          </div>
        </form>
        )}
      
        
      </div>
      {  !showForm && <Modal isVisible={btnSubmit} />}
    </div>
  );
}
