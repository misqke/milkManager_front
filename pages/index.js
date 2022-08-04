import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { HomePage } from "../components";

const Home = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.name.length) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
