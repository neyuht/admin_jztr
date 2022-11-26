import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import "./navslide.css";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 border-r-2 lg:translate-x-0 lg:static lg:inset-0 nav-1">
        <span className="admin-name">Hello, Duc ABC</span>
        <div className="flex items-center justify-center mt-10 text-center py-6 cus">
          <span className="mx-2 text-2xl font-semibold text-white">
            <img
              src="https://i.ibb.co/dLYFMvL/JZTR.png"
              alt="MDN logo"
              width="70px"
              height="70px"
            />
            Admin JztrTeam
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Category",
              itemId: "/category",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "View Category",
                  itemId: "/category/view",
                  // Optional
                  elemBefore: () => <Icon name="circle" />,
                },
                {
                  title: "Edit Category",
                  itemId: "/categorys/edit",
                  elemBefore: () => <Icon name="user" />,
                },
              ],
            },
            {
              title: "Product",
              itemId: "/products",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "View Product",
                  itemId: "/products/view",
                  // Optional
                  elemBefore: () => <Icon name="circle" />,
                },
                {
                  title: "Edit Product",
                  itemId: "/products/edit",
                  elemBefore: () => <Icon name="circle" />,
                },
              ],
            },
            {
              title: "List Oder",
              itemId: "/listoder",
              // Optional
              elemBefore: () => <Icon name="burger" />,
            },
            {
              title: "Promo",
              itemId: "/promotion",
              elemBefore: () => <Icon name="briefcase" />,
            },
            {
              title: "Bill",
              itemId: "/product",
              elemBefore: () => <Icon name="plus" />,
            },
            // {
            //   title: "Report",
            //   itemId: "/report",
            //   elemBefore: () => <Icon name="check-square" />,
            // },
            {
              title: "User",
              itemId: "/listmember",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "View Member",
                  itemId: "/members/view",
                  // Optional
                  elemBefore: () => <Icon name="circle" />,
                },
                {
                  title: "Edit Member",
                  itemId: "/members/edit",
                  elemBefore: () => <Icon name="circle" />,
                },
              ],
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="settings" />,
              },
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
