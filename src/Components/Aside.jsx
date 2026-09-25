import React from "react";
import { Link } from "react-router-dom";
import {
  FaStore,
  FaCreditCard,
  FaBuilding,
  FaComment,
  FaCartShopping,
  FaRocket,
  FaFileLines,
  FaScrewdriverWrench,
  FaGear,
  FaCircleQuestion,
} from "react-icons/fa6";
import product from "../Data/Products";

export default function Aside({ open }) {
  return (
    <aside
      className={`shrink-0 transition-all duration-300 m-2 p-1 h-screen sticky top-0 overflow-y-auto max-lg:hidden ${
        open ? "w-64" : "w-20"
      }`}
    >
      <div className="flex m-2">
        <img
          src={product[0].Image}
          alt={product[0].name}
          className="h-12 w-13"
        />
        <p className="mt-3">MyPatientHUB</p>
      </div>

      <hr />

      <div className="aside">
        {/* 1 */}
        <div>
          <Link to="/" className="flex m-8 gap-3  item">
            <span>
              <FaStore style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Dashboard</p>
          </Link>
        </div>
        {/* 2 */}
        <div>
          {" "}
          <Link to="/appointments" className="flex m-8 gap-3 ">
            <span>
              <FaCreditCard style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Appointments</p>
          </Link>
        </div>
        {/* 3 */}
        <div>
          <Link to="/find-doctor" className="flex m-8 gap-3 ">
            <span>
              <FaBuilding style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Find Doctor</p>
          </Link>
        </div>
        {/* 4 */}
        <div>
          <Link to="/find-clinic" className="flex m-8 gap-3 ">
            <span>
              <FaStore style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Find Clinic</p>
          </Link>
        </div>
        {/* 5 */}
        <div>
          <Link to="/chat" className="flex m-8 gap-3 ">
            <span>
              <FaComment style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Chat</p>
          </Link>
        </div>
        {/* 6 */}
        <div>
          <Link to="/marketplace" className="flex m-8 gap-3 ">
            <span>
              <FaCartShopping style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Find Marketplace</p>
          </Link>
        </div>
        {/* 7 */}
        <div>
          <Link to="/pharmacy" className="flex m-8 gap-3 ">
            <span>
              <FaRocket style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Find Pharmacy</p>
          </Link>
        </div>
        {/* 8 */}
        <div>
          {" "}
          <Link to="/dependents" className="flex  m-8 gap-3 ">
            <span>
              <FaFileLines style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>My Dependents</p>
          </Link>
        </div>
        {/* 9 */}
        <div>
          <Link to="/account" className="flex m-8 gap-3 ">
            <span>
              <FaScrewdriverWrench style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>My Account</p>
          </Link>
        </div>
        {/* 10 */}
        <div>
          <Link to="/settings" className="flex  m-8 gap-3 ">
            <span>
              <FaGear style={{ color: "rgb(30, 48, 80)" }} />
            </span>
            <p>Settings</p>
          </Link>
        </div>
      </div>
      <div className="bg-linear-to-b from-[rgba(233,67,197,0.911)] to-[rgb(149,71,217)] p-7 m-3 rounded">
        <FaCircleQuestion />
        <h1 className="text-white">Download</h1>
        <p className="text-white">MyPIHUB Mobile App</p>
      </div>
    </aside>
  );
}
