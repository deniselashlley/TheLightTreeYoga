import React from "react";
import CustomLink from "../CustomLink";
import Content, { HTMLContent } from '../Content'
import "./styles.scss";

export const MyStoryTemplate = ({
  data: {
    title,
    quote,
    image,
    buttons
  },
  content,
  contentComponent
}) => {
  const SectionContent = contentComponent || Content

  const getLinkType = (value) => {
    return value.includes('www') ? 'external' : 'internal';
  } 

  return (
    <section id="mystory" className="section-block section-block--mystory">
        <div className="container">
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
              <div className="block block-profile">
                <img src={image} alt="" className="profile" />
              </div>
              <div className="block block-context">
                <SectionContent content={content} />
              <blockquote className="quote">
                <p>{quote}</p>
              </blockquote>
              </div>
            </div>
            <div className="list-of-btns">
            {buttons.map(item => (
              <CustomLink
              linkType={getLinkType(item.link)}
              linkURL={item.link}
              className="link link-btn"
            >
              {item.label}
            </CustomLink>
            ))}
            </div>
        </div>
      </section>
  );
};

const MyStory = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;

  return <MyStoryTemplate             
            data={data.frontmatter} 
            contentComponent={HTMLContent} 
            content={data.html} 
          />;
};

export { MyStory };
