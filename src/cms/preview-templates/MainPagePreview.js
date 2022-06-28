import React from "react";
import PropTypes from "prop-types";
import MainPage from "../../templates/main-page";

const MainPagePreview = ({ entry, widgetFor }) => (
  <MainPage
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
  />
);

MainPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MainPagePreview;
