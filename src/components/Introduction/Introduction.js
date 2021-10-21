import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const IntroductionTemplate = ({data}) => {
  const { title, pageLink, quote, body, highlightedText } = data;
  return (
    <section id="intro" className="section-block section-block--introduction">
    <div className="container">
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
