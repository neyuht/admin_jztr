import React from "react";
import CategoryTable from "../components/Table/CategoryTable";

import { DashboardLayout } from "../components/Layout";
import FormCtg from "../components/Form/FormCategory";
const CategoryEdit = () => {
  return (
    <DashboardLayout>
      <FormCtg></FormCtg>
    </DashboardLayout>
  );
};

export default CategoryEdit;
