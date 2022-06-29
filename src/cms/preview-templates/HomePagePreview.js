import React from "react";
import PropTypes from "prop-types";

import HomePage from "../../pages/index";

const HomePagePreview = ({ entry }) => {
  const content = entry.getIn(["data"]).toJS();
  return <HomePage home={content} />;
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HomePagePreview;
