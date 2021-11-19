import React from "react";
import PropTypes from "prop-types";
import ClassesPage from "../../templates/classes-page";

const ClassesPagePreview = ({ entry, widgetFor }) => (
  <ClassesPage
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

ClassesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ClassesPagePreview;
