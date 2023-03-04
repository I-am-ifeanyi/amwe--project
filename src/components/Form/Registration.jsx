import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { myContextApi } from "../../ContextApi";

export const Registration = () => {
  const {
    state1,
    state2,
    state3,
    state4,
    state5,
    off,
    off2,
    off3,
    off4,
    hide,
    off5,
    state,
    inputs,
    submit,
    address,
    State,
    country2,
    phone,
    country,
  } = useContext(myContextApi);

  return (
    <div
      className={`${
        submit ? "bg-black/40 backdrop-blur-xl " : ""
      } text-gray-600 w-4/4 h-4/4 overflow-hidden`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className={` flex justify-center w-full h-auto`}>
        <div
          className={`${
            submit ? "md:border-none " : "md:border-gray-300 md:border"
          }   w-4/4 md:w-3/4  mt-10 flex flex-col justify-center  py-20 rounded-lg`}
        >
          <div
            className={`mx-5 border  ${
              submit ? "border-none" : "border-[#e8e8f0] shadow-gray-200"
            } w-4/4 md:w-4/4  shadow-lg `}
          >
            <div className="flex  items-center ">
              <figure className="md:w-[550px] md:h-[230px] md:flex md:flex-col">
                <img
                  src="formBg/img1.jpg"
                  alt=""
                  className={`${submit ? "hidden" : "flex"} w-full h-full`}
                />
              </figure>

              <div className="md:hidden">
                <img src="formBg/AMWE5.png" alt="" />
              </div>
              <div className="hidden font-medium  mt-10 md:flex md:flex-col justify-center">
                <h2 className="md:text-[35px] text-gray-600 font-extrabold text-[25px]   md:pr-10">
                  All Africa Medical & Wellness Expo
                </h2>
                <p className="flex text-gray-600 items-end justify-end font-bold  text-[10px] pb-4 mr-40 border-b-2  border-gray-500 w-4/4">
                  {" "}
                </p>
                <p className="w-[250px] flex items-center md:w-auto text-[13px] md:text-[16px] font-extrabold pb-[10px]  gap-2 text-gray-600 my-2 md:mt-5">
                  <span className="text-[16px] text-gray-600 mt-[-2px] ">
                    Live:
                  </span>{" "}
                  30th - 31th August
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              !state ? "flex flex-col " : "hidden"
            }  ml-[80px] md:mt-10 mt-20 mx-5`}
          >
            <h1 className="font-extrabold md:font-semibold text-gray-600 md:text-lg ml-[-50px] md:ml-0 mx-4 md:mx-0 text-center md:text-start">
              Welcome to the AMSWE world visitor registration form.
            </h1>
            <p className="text-[12px] font-medium text-gray-600 mt-7 md:mt-7 text-center md:text-start ml-[-70px] md:ml-0 mx-4 md:mx-0">
              By completing this registration form, you will get you{" "}
              <strong className="md:text-[14px] font-medium md:font-bold text-gray-700">
                Free visitors badge
              </strong>{" "}
              that gives you access to:
            </p>
            <ul className="text-gray-600 list-disc text-[12px] mt-5 w-4/5 md:mt-10 font-medium -ml-10 mx-3  md:ml-[50px]">
              <li>The exhibition halls and all exhibiting companies</li>
              <li>Thousands of products across 9 product sectors</li>
              <li>Innovative sessions at the Transformation Zone</li>
              <li>Workshops and product launches on the show floor</li>
              <li>Workshops and product launches on the show floor</li>
              <li>
                FREE online tool to explore products and companies to set up
                meetings in advance of the live show days (available from 9
                January 2023)
              </li>
            </ul>

            <p className="mt-7 text-[12px] text-gray-600 md:w-[600px] ml-[-50px] md:ml-0 mx-5">
              Your visitor badge will be digital - available to you through the
              Arab Health Mobile App (when it goes live) and will be emailed to
              you in the days before the in-person event. Click the 'Register'
              button below to start your FREE visitor journey to attend Arab
              Health - <strong>where the world of healthcare meets.</strong>
            </p>
            <ul className="mt-10 md:ml-[50px] gap-5 flex flex-col  -ml-[50px] mx-5 list-disc text-[12px] text-gray-600">
              <li>
                If you are an exhibiting staff member then contact your
                company's admin to get registered and receive your badge
              </li>
              <li>
                If you want to attend the paid CME-accredited conferences then
                <Link className="mx-1 underline">
                  contact our delegate sales team
                </Link>
              </li>
            </ul>
            <div className="flex justify-center w-3/4 md:justify-start">
              <Link to="next1">
                {" "}
                <button
                  onClick={hide}
                  className=" py-2 md:py-2 px-[50px] md:px-10 rounded-lg text-gray-200 md:mt-20 mt-10 bg-[#0F2F63] shadow-md hover:bg-blue-800 transition-all duration-200 shadow-gray-300"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
          {/* {state ? (
            <p className="text-gray-400 text-xl font-light flex justify-center mt-10">
              Refresh Page to Sign Up
            </p>
          ) : (
            ""
          )} */}
          <div
            className={` ${
              !state ? "hidden" : ""
            } absolute ml-[320px] mt-[2650px] md:mt-[1900px] md:ml-[900px]`}
          >
            <Link to="next2" className={state1 ? "hidden" : ""}>
              <button
                onClick={off}
                disabled={
                  !inputs.lname ||
                  !inputs.fname ||
                  !inputs.status ||
                  !inputs.industries
                }
                className={` ${
                  !inputs.industries ||
                  !inputs.industries ||
                  !inputs.fname ||
                  !inputs.email ||
                  !inputs.position
                    ? "bg-[#0a0a3e] cursor-not-allowed  opacity-70 text-gray-500"
                    : "bg-[#0a0a57]  cursor-pointer text-white"
                }    px-10 -ml-20 py-1 md:py-2 md:ml-[-0]  rounded-md mb-20 md:mb-40 font-bold`}
              >
                Next
              </button>
            </Link>
          </div>

          <div
            className={
              !state1 || state2
                ? "hidden"
                : "absolute mt-[900px] md:mt-[1200px] ml-[270px] md:ml-[900px]"
            }
          >
            <Link to="next3">
              <button
                onClick={off2}
                disabled={
                  !address || !phone || !country || !State || !inputs.country2
                }
                className={` ${
                  !address || !phone || !country || !State || !country2
                    ? "bg-[#0a0a3e] cursor-not-allowed  opacity-70 text-gray-500"
                    : "bg-[#0a0a57]  cursor-pointer text-white"
                } px-10 py-2 rounded-lg -ml-20 md:ml-10 md:mt-10 mb-10`}
              >
                Next
              </button>
            </Link>
          </div>

          <Link
            to="next4"
            className={
              !state2 || state3
                ? "hidden"
                : "absolute  mt-[900px] md:mt-[800px] ml-[280px]  md:ml-[900px]"
            }
          >
            <button
              onClick={off3}
              disabled={
                !inputs.companySize || !inputs.Function || !inputs.seniority
              }
              className={` ${
                !inputs.companySize || !inputs.Function || !inputs.seniority
                  ? "bg-[#0a0a3e] cursor-not-allowed  opacity-70 text-gray-500"
                  : "bg-[#0a0a57]  cursor-pointer text-white"
              } px-10 py-2 rounded-lg -ml-20 md:ml-10 mb-10`}
            >
              Next
            </button>
          </Link>
          <Link
            to="next5"
            className={
              !state3 || state4
                ? "hidden"
                : ` ${
                    inputs.companyChoice ? " flex md:mt-[2000px]" : ""
                  } absolute mt-[1500px] ml-[300px] md:ml-[900px]`
            }
          >
            <button
              onClick={off4}
              disabled={
                !inputs.box1 &&
                !inputs.box2 &&
                !inputs.box3 &&
                !inputs.box5 &&
                !inputs.box6 &&
                !inputs.box7 &&
                !inputs.box8 &&
                !inputs.box9 &&
                !inputs.box10
              }
              className={` ${
                !inputs.box1 &&
                !inputs.box2 &&
                !inputs.box3 &&
                !inputs.box5 &&
                !inputs.box6 &&
                !inputs.box7 &&
                !inputs.box8 &&
                !inputs.box9 &&
                !inputs.box10
                  ? "bg-[#0a0a3e] cursor-not-allowed  opacity-70 text-gray-500"
                  : "bg-[#0a0a57]  cursor-pointer text-white"
              } px-10 py-1 md:py-2 rounded-lg -ml-20 md:ml-10 mb-10`}
            >
              Next
            </button>
          </Link>
          <Link
            to="next6"
            className={
              !state4 || state5
                ? "hidden"
                : "absolute mt-[1600px] md:mt-[1000px] ml-[330px] md:ml-[900px]"
            }
          >
            <button
              onClick={off5}
              disabled={!inputs.attendee || !inputs.notice || !inputs.privacy}
              className={` ${
                !inputs.attendee || !inputs.notice || !inputs.privacy
                  ? "bg-[#0a0a3e] cursor-not-allowed  opacity-70 text-gray-500"
                  : "bg-[#0a0a57]  cursor-pointer text-white"
              } px-10 py-1 md:py-2 rounded-lg -ml-20 md:ml-10 mb-10`}
            >
              Next
            </button>
          </Link>

          <Outlet />
        </div>
      </div>
      <div className="md:mt-20 mt-10 text-gray-600 text-[13px] flex justify-center">
        <div>
          <p className="md:w-[800px] leading-7 mx-5 md:mx-0 text-justify">
            By proceeding to the next page your contact details and other data
            supplied by you at this point will be retained by our registration
            system. Should your registration be stopped or interrupted you may
            receive an email from the system within 24 hours with a link to take
            you back to the point where you exited.
          </p>
          <p className="md:w-[800px] leading-7 mt-5 mx-5 md:mx-0 text-justify">
            you choose to not complete the registration process you will not
            receive any further communications. If you have not previously given
            your details to Informa Markets your data will be deleted within 30
            days from the completion of the event.
          </p>

          <ul className="mt-10 bg-[#0F2F63] py-3 px-5 flex flex-col text-[1rem] gap-5  md:flex  md:flex-row md:gap-[55px] text-gray-100">
            <li className="underline">
              <Link>Accessibility</Link>
            </li>
            <li className="underline">
              <Link>Terms of use</Link>
            </li>
            <li className="underline">
              <Link>Privacy policy</Link>
            </li>
            <li className="underline">
              <Link>Cookie policy</Link>
            </li>
            <li className="underline">
              <Link>Visitors terms and conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
