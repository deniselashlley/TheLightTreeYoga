import React from "react";
import PropTypes from "prop-types";

import { IntroductionTemplate } from "../../components/Introduction";

const IntroductionPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return <IntroductionTemplate data={data} content={widgetFor('body')}/>;
};

IntroductionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default IntroductionPreview;