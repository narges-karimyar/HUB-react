import { Link, useOutletContext } from "react-router-dom";
import {
  FaHouse,
  FaBars,
  FaMagnifyingGlass,
  FaCircleUser,
  FaGear,
  FaBell,
  FaChevronDown,
  FaHeart,
} from "react-icons/fa6";
import product from "../Data/Products";
import { useState } from "react";

export default function FindDoctor() {
  const { open, setOpen } = useOutletContext();
  const [view, setView] = useState("map"); // "map" | "list"
  const [sort, setSort] = useState("next"); // "next" | "distance"
  return (
    <>
      <div className="background  text-white">
        <header className="flex justify-between max-[600px]:flex-wrap p-5 gap-2.5 m-2.5 ">
          <div className="flex gap-2.5 ">
            <FaHouse />
            <p>/searchdoctor</p>
          </div>
          <div>
            <p>searchdoctor</p>
          </div>

          <FaBars onClick={() => setOpen(!open)} className="cursor-pointer" />

          <div className="search-box relative w-[250px] max-lg:w-[150px] max-[600px]:w-full max-[600px]:order-3">
            <FaMagnifyingGlass className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[rgb(112,113,115)]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full  text-black py-2.5 pr-2.5 pl-[35px] bg-white border border-[#ccc] rounded-[10px]"
            />
          </div>
          <div className="iconsbox flex items-center gap-2.5 p-2.5 text-[rgb(112,113,115)]">
            <Link to="/account">
              <FaCircleUser className="text-white" />
            </Link>
            <button
              className="border-none bg-[rgba(233,231,231,0.336)] text-white"
              onClick={() => alert("You have been logged out!")}
            >
              log out
            </button>
            <FaGear className="text-white" />
            <FaBell className="text-white" />
          </div>
        </header>
        <div className=" flex-column justify-center text-center">
          <h1 className="text-4xl font-bold">Find a Doctor</h1>

          <p className="text-2xl font-monospace">
            Search Doctors and schedule an appointment
          </p>

          <div class="doctor-form">
            <input
              type="text"
              placeholder="Search a doctor by name, specialty"
              className=" bg-white text-black py-5 px-5 pt-2 pb-2 rounded m-2 "
            />

            <input
              type="text"
              placeholder="Zip Code or Neighborhood"
              className=" bg-white text-black py-5 px-5 pt-2 pb-2 rounded m-2 "
            />
            <button className=" bg-blue-500 text-gray-600 text-black py-5 px-5 pt-2 pb-2 rounded-2xl m-2 ">
              CURRENT
            </button>
            <button className=" bg-blue-500 text-gray-600 text-black py-5 px-5 pt-2 pb-2 rounded-2xl m-2 ">
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <section className="parttwo">
        <h1>Special Services</h1>
        <div className="services-container">
          <div className="service-card">
            <img src={product[10].Image} alt="" />
            <span>
              <h3>Primary Care and Internal MD</h3>
              <p>
                our Doctors Partner with you to help you to reach your welness
              </p>
            </span>
            <Link to="/find-clinic">
              <FaChevronDown />
            </Link>
          </div>

          <div className="service-card">
            <img src={product[11].Image} alt="" />
            <span>
              <h3>Primary Care and Internal MD</h3>
              <p>
                our Doctors Partner with you to help you to reach your welness
              </p>
            </span>
            <Link to="/find-clinic">
              <FaChevronDown />
            </Link>
          </div>

          <div className="service-card">
            <img src={product[12].Image} alt="" />
            <span>
              <h3>Primary Care and Internal MD</h3>
              <p>
                our Doctors Partner with you to help you to reach your welness
              </p>
            </span>
            <Link to="/find-clinic">
              <FaChevronDown />
            </Link>
          </div>

          <div className="service-card">
            <img src={product[13].Image} alt="" />
            <span>
              <h3>Primary Care and Internal MD</h3>
              <p>
                our Doctors Partner with you to help you to reach your welness
              </p>
            </span>
            <Link to="//find-clinic">
              <FaChevronDown />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="parttwo">
        <h1>Find Doctors By Specialty</h1>
        <p className="m-3 text-center">
          Select a Specialty to View all Doctors and schedule an Appointment
        </p>

        <div className="servicescontainer">
          <div className="servicecard">
            <h4>Anesthesiology</h4>
            <span>
              <Link to="/find-clinic">
                <FaChevronDown />
              </Link>
            </span>
          </div>

          <div className="servicecard">
            <h4>Anesthesiology</h4>
            <span>
              <Link to="/find-clinic">
                <FaChevronDown />
              </Link>
            </span>
          </div>

          <div className="servicecard">
            <h4>Anesthesiology</h4>
            <span>
              <Link to="/find-clinic">
                <FaChevronDown />
              </Link>
            </span>
          </div>

          <div className="servicecard">
            <h4>Anesthesiology</h4>
            <span>
              <Link to="/find-clinic">
                <FaChevronDown />
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
