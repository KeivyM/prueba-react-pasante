import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import {
  Bio,
  Frustrations,
  Goals,
  Motivations,
  MyPosts,
  PersonalInfo,
  Personality,
} from "../components/Profile";
import endpoints from "../utils/endpoints";
import { NotFoundPage } from "./NotFoundPage";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState("loading");
  const [userValid, setUserValid] = useState(null);
  const { id } = useParams();

  const validateUser = useMemo(
    () => async () => {
      await axios
        .get(`${endpoints.getUsers}/${id}`)
        .then((res) => {
          setUser(res.data);
          setUserValid(true);
          setLoading("loaded");
        })
        .catch((error) => {
          setUserValid(false);
          setLoading("loaded");
        });
    },
    [id]
  );

  useEffect(() => {
    validateUser();
  }, [validateUser, id]);

  return (
    <>
      {loading === "loading" ? (
        <Loading />
      ) : userValid ? (
        <div className="container-fluid py-2 page-profile-custom">
          <div className="container p-3 d-flex rounded-4 col-12 gap-3 container-profile-custom">
            <PersonalInfo username={user.username} />

            <div className="container p-0 m-0  d-flex w-100 gap-3">
              <div
                className="w-100 d-flex flex-wrap gap-3"
                style={{
                  height: "100%",
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
