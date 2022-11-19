import React from "react";

import { DashboardLayout } from "../components/Layout";
import style from "../styles/style.css";
import FormLog from "../components/Form/FormLogin";
const HomePage = () => {
  return (
    <DashboardLayout>
      <FormLog></FormLog>
    </DashboardLayout>
  );
};

export default HomePage;
