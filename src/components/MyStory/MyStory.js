import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const MyStoryTemplate = ({
  data: {
    title,
    quote,
    body,
    image,
    pageLink: {
      link,
      label,
    }
  }
}) => {
  return (
    <section id="mystory" className="section-block section-block--mystory">
        <div className="container">
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
              <div className="block block-profile">
                  <img src={image} alt="" className="profile" />
              </div>
              <div className="block block-context">
              <ReactMarkdown children={body} />
              <blockquote className="quote">
                <p>{quote}</p>
              </blockquote>
              </div>
            </div>
            <CustomLink
              linkType="internal"
              linkURL={link}
              className="link link-btn"
            >
            {label}
          </CustomLink>
        </div>
      </section>
  );
};

const MyStory = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;

  return <MyStoryTemplate data={data} />;
};

export { MyStory };
