import React from "react";
import PropTypes from "prop-types";
import TeachingPage from "../../templates/teaching-page";

const TeachingPagePreview = ({ entry, widgetFor }) => (
  <TeachingPage
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

TeachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeachingPagePreview;
