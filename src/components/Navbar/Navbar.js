import React from "react";

import NavbarContainer from "./NavBarContainer";

export const NavbarTemplate = ({ data }) => (
  <NavbarContainer data={data} />
);

const Navbar = props => {
  if (!props.data) {
    return null;
  }

  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { Navbar };
