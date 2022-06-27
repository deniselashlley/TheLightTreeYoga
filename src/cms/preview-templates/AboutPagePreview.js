import React from "react";
import PropTypes from "prop-types";
import AboutPage from "../../templates/about-page";

const AboutPagePreview = ({ entry,  widgetFor }) => {
   console.log(entry, widgetFor);
   return ( <AboutPage page={{
    frontmatter: entry.getIn(["data"]).toJS(),
    html: entry.getIn(["data", "body"]),
    bodyIsMarkdown: false,
  }} 
  /> )
};


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
