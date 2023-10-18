import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/AppLayout";

//Import Components
const HOME = lazy(() => import("./components/Home"));
const CarList = lazy(() => import("./components/CarTypeList"));
const CarView = lazy(() => import("./components/CarView"));

const RouteComponent = (props) => {
  const { path } = props;

  return (
    <Layout>
      <Routes>
        <Route path={`${path}carsTypes/itemView`} element={<CarView />} />
        <Route path={`${path}carsTypes`} element={<CarList />} />
        <Route path={`${path}`} element={<HOME />} />
      </Routes>
    </Layout>
  );
};

export default RouteComponent;
