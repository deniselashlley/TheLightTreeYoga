import React from "react";
import PropTypes from "prop-types";

import { MyStoryTemplate } from "../../components/MyStory";

const MyStoryPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return <MyStoryTemplate data={data}  content={widgetFor('body')}/>;
};

MyStoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MyStoryPreview;