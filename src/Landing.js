import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson , faDoorOpen, faComputer, faCirclePlay} from '@fortawesome/free-solid-svg-icons'; 



function Landing({ toggleMode, mode }) {
  return (
    <>
      <div
        className="welcome  d-sm-flex flex-column w-100 p-2 mx-0  justify-content-center align-items-center "
        style={{ height: "90vh" }}
      >
        <h1 className=" text-danger text-center fs-2 fst-italic fw-400 text-capitalize ">
          Welcome <FontAwesomeIcon icon={faDoorOpen} /> to this mind refreshing game
        </h1>
        <p
          className={` text-${
            mode === "light" ? "dark" : "light"
          } fs-5 fst-italic fw-400 text-center`}
        >
          Lets Begin <FontAwesomeIcon icon={faCirclePlay} />  Please choose an option !
        </p>
        <div className=" buttons buttons-landing ">
          <ul className="text-center d-sm-flex w-100  align-items-center justify-content-center">
            <li className="m-2 m-sm-1">
              <Link to="/second">
                <button className="btn btn-outline-danger px-4 py-0 ">
                <FontAwesomeIcon icon={faPerson} />  Play with your friend
                </button>
              </Link>
            </li>
            <li className="m-2 m-sm-1">
              <Link to="/first">
                <button className="btn btn-outline-danger px-4 py-0 ">
                <FontAwesomeIcon icon={faComputer} />   Play with the computer
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Landing;
