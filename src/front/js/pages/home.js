import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store } = useContext(Context);
  const storageTokenItem = sessionStorage.getItem("userToken");

  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <h1>Join Our Community!</h1>
        <p>Discover a world of possibilities.</p>
        <div className="alert alert-info">
          {store.message || "Sign up to unlock exclusive features!"}
        </div>
        {storageTokenItem ? (
          <Link to="/private">
            <button className="btn btn-primary login" style={{ backgroundColor: "green" }}>
              Go to Your Profile!
            </button>
          </Link>
        ) : (
          <Link to="/signup">

          </Link>
        )}
      </div>
    </>
  );
};

export default Home;
