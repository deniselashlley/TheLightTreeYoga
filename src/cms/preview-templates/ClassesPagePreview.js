import React from "react";
import PropTypes from "prop-types";
import ClassesPage from "../../templates/classes-page";

const ClassesPagePreview = ({ entry, widgetFor }) => (
  <ClassesPage       
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
  />
);

ClassesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ClassesPagePreview;
