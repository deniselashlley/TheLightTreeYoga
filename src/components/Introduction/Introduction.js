import React from "react";
import CustomLink from "../CustomLink";
import Content, { HTMLContent } from '../Content'
import "./styles.scss";

export const IntroductionTemplate = ({ 
  data: { 
      title,
      quote,
      highlightedText,
    }, 
    contentComponent,
    content
}) => {
  const SectionContent = contentComponent || Content

  return (
    <section id="intro" className="section-block section-block--introduction">
    <div className="container">
          <h1 className="section-title">{title}</h1>
          <SectionContent className="section-content" content={content} />
            <blockquote className="quote">
              <p>{quote}</p>
            </blockquote>
          <p className="highlightedText">{highlightedText}</p>
        </div>
    </section>
  );
};

const Introduction = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  
  return <IntroductionTemplate 
            data={data.frontmatter} 
            contentComponent={HTMLContent} 
            content={data.html}
          />;
};

export { Introduction };
