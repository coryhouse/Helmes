import React, { Component } from "react";

const Navigation = ({ isAdmin }) => (
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    {isAdmin && (
      <li>
        <a href="#">Users</a>
      </li>
    )}
  </ul>
);

export default Navigation;
