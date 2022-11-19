import React from "react";
import CategoryTable from "../components/Table/CategoryTable";

import { DashboardLayout } from "../components/Layout";

const CategoryPage = () => {
  return (
    <DashboardLayout>
      <CategoryTable></CategoryTable>
    </DashboardLayout>
  );
};

export default CategoryPage;
