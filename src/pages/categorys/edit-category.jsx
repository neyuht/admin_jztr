import React from "react";
import CategoryTable from "../components/Table/CategoryTable";

import { DashboardLayout } from "../components/Layout";

const CategoryEditPage = () => {
  return (
    <DashboardLayout>
      <CategoryTable data = {["A", "B"]}></CategoryTable>
    </DashboardLayout>
  );
};

export default CategoryEditPage;
