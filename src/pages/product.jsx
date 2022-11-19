import React from "react";
import ProductTable from "../components/Table/ProductsTable";

import { DashboardLayout } from "../components/Layout";

const ProductPage = () => {
  return (
    <DashboardLayout>
      <ProductTable></ProductTable>
    </DashboardLayout>
  );
};

export default ProductPage;
