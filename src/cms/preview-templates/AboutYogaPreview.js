import React from "react";
import PropTypes from "prop-types";
import AboutYoga from "../../templates/about-yoga";

const AboutYogaPreview = ({ entry, widgetFor }) => (
  <AboutYoga
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
  />
);

AboutYogaPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutYogaPreview;

