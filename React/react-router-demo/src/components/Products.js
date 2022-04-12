import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <div>Products Page</div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search products..."
      />
      <nav>
        {/* it is a relative link if you don't add slash */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
