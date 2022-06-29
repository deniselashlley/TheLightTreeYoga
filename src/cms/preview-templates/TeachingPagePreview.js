import React from "react";
import PropTypes from "prop-types";
import TeachingPage from "../../templates/teaching-page";

const TeachingPagePreview = ({ entry, widgetFor }) => (
  <TeachingPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

TeachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeachingPagePreview;
