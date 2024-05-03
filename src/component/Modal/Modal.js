import React, { useState, useEffect } from "react";
import "./Modal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Modal({ isVisible }) {

  let [numbersInput, setNumbersInput] = useState({
    numberOne: "",
    numberTwo: "",
    numberThree: "",
    numberFour: "",
  });
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  let formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (isVisible) {
    return (
      <div className="">
        <div className="row gx-0">
         
          <div className="col-lg-12 d-flex justify-content-center align-items-center min-vh-100">
            <div className="container border rounded-3">
              <form
                className=" p-5 "
                onSubmit={(e) => {
                  e.preventDefault();

                }}
              >
                <div className="head text-white">
                  <h1 className=" fw-semibold mb-3">ادخل رقم التحقق</h1>
                  <p>تم ارسال رمز التحقق الى +2011111111</p>
                </div>

                <div class="row gy-4 mt-3 justify-content-center ">
                  <div class="col-lg-2 col-md-2 col-3">
                    <input
                      type="text"
                      class="form-control  py-4 py-lg-5 text-center bg-transparent text-white"
                      onChange={(e) => {
                        setNumbersInput({
                          ...numbersInput,
                          numberOne: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-3">
                    <input
                      type="text"
                      class="form-control  py-4 py-lg-5 text-center bg-transparent text-white"
                      onChange={(e) => {
                        setNumbersInput({
                          ...numbersInput,
                          numberTwo: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-3">
                    <input
                      type="text"
                      class="form-control  py-4 py-lg-5 text-center bg-transparent text-white"
                      onChange={(e) => {
                        setNumbersInput({
                          ...numbersInput,
                          numberThree: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-3">
                    <input
                      type="text"
                      class="form-control  py-4 py-lg-5 text-center bg-transparent text-white"
                      onChange={(e) => {
                        setNumbersInput({
                          ...numbersInput,
                          numberFour: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="col-8 text-center">
                  <span className=" text-white fs-5 ms-2">
                        {formatTime(timeLeft)}
                      </span>
                  </div>
                  
                  <div class="col-8 ">
                    <button
                      // onClick={handleLoginClick}
                      type="submit"
                      className="btn text-white w-100 fs-5 py-3"
                    >
                      
                      تحقق
                    </button>

                    <div className="text-center mt-3"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
