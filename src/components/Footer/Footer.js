import React from "react";
import "./styles.scss";

export const FooterTemplate = ({ data }) => {
  const { copyrightText} = data;
  let year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="footer">
      <div className="container">
        <p className="copy-text">Copyright &copy; {year} {copyrightText}</p>
        </div>
    </footer>
  );
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
