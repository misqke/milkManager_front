import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { HomePage, Loading } from "../components";
import { startApi } from "../actions";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const wakeApi = async () => {
      const data = await startApi();
      if (!user.name.length) {
        router.push("/login");
      }
      if (data) {
        setLoading(false);
      }
    };
    wakeApi();
  }, [user, router]);

  return <>{loading ? <Loading /> : <HomePage user={user} />}</>;
};

export default Home;
