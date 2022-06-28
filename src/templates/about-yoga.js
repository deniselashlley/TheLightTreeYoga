import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "../styles/about-page.scss";

// eslint-disable-next-line
export const AboutYogaTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1>
                {title}
              </h1>
              <PageContent className="content editor-content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutYogaTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutYoga = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutYogaTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutYoga.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutYoga;

export const mainPageQuery = graphql`
  query AboutYoga($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
