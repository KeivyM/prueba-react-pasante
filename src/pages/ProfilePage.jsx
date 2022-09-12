import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Bio,
  Frustrations,
  Goals,
  Motivations,
  MyPosts,
  PersonalInfo,
  Personality,
} from "../components/Profile";
import { NotFoundPage } from "./NotFoundPage";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState("loading");
  const [userValid, setUserValid] = useState(null);
  const { id } = useParams();

  const validateUser = async () => {
    try {
      await axios.get(`http://localhost:3002/users/${id}`).then((res) => {
        setUser(res.data);
        setUserValid(true);
        setLoading("loaded");
      });
    } catch (error) {
      setUserValid(false);
      setLoading("loaded");
    }
  };

  useEffect(() => {
    validateUser();
  }, [id]);

  return (
    <>
      {loading === "loading" ? (
        <h2>cargando...</h2>
      ) : userValid ? (
        <div
          className="container-fluid py-2"
          style={{
            background: "rgb(234, 207, 255)",
            height: "calc(100vh - 58px)",
            // minWidth: "1000px",
          }}
        >
          <div
            className="container p-3 d-flex col-12 gap-3 "
            style={{
              background: "#fff",
              boxShadow: "0px 0px 15px rgba(0,0,0,.5)",
              height: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
              borderRadius: "20px",
            }}
          >
            <PersonalInfo username={user.username} />

            <div
              className="container p-0 m-0  d-flex w-100 gap-3"
              style={{
                // background: "#c29",

                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <div
                className="w-100 d-flex gap-3"
                style={{
                  // background: "blue",
                  height: "100%",
                  flexWrap: "wrap",
                  alignItems: "center",
                  // gap: "1px",
                }}
              >
                <Bio />

                <Personality />

                <Goals />
              </div>

              <div className="container p-0 m-0 d-flex flex-column w-100 gap-3">
                <Motivations />

                <Frustrations />

                <MyPosts id={id} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
