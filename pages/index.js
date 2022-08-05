import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { HomePage, Loading } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.name.length) {
      router.push("/login");
    }
    setLoading(false);
  }, [user]);

  return <>{loading ? <Loading /> : <HomePage user={user} />}</>;
};

export default Home;
