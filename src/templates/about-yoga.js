import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import "../styles/about-page.scss";

export const AboutYogaTemplate = ({
  title,
  content,
  contentComponent,
  featureImage: { image, imageAlt },
}) => {
  const PageContent = contentComponent || Content;

  return (
    <article className="about">
      <header className="banner">
        <img src={image} alt={imageAlt} />
      </header>
      <section className="content-block">
        <div className="container">
          <h1>{title}</h1>
          <PageContent className="content editor-content" content={content} />
        </div>
      </section>
    </article>
  );
};

AboutYogaTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  featureImage: PropTypes.shape({
    image: PropTypes.string,
    imageAlt: PropTypes.string,
  }),
};

const AboutYoga = ({ data }) => {
  const { markdownRemark: post, footerData, navbarData } = data;
  const {
    frontmatter: {
      meta: { title, description },
      heroImage
    },
  } = post
  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <title>The Light Tree | {title}</title>
      </Helmet>
      <AboutYogaTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        featureImage={heroImage}
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
        heroImage {
          image
          imageAlt
        }
        meta {
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;
