import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const IntroductionTemplate = ({data}) => {
  const { title, image, pageLink, quote, body, highlightedText } = data;
  return (
    <section id="intro" className="section-block section-block--introduction">
    <div className="container">
      <div className="container-row">
        <div className="block block-profile">
          <img src={image} alt="" className="profile" />
        </div>
        <div className="block block-context">
          <h1 className="section-title">{title}</h1>
          <ReactMarkdown children={body} />
          { quote ?
            <blockquote className="quote">
              <p>{quote}</p>
            </blockquote>
          : null
          }
          { highlightedText ?  <p className="highlightedText">{highlightedText}</p> : null }
        <CustomLink
          linkType="internal"
          linkURL={pageLink.link}
          className="link link-btn"
        >
        {pageLink.label}
      </CustomLink>
        </div>
      </div> 
    </div>
    </section>
  );
};

const Introduction = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <IntroductionTemplate data={data} />;
};

export { Introduction };
