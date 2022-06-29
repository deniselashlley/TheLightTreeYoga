import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import "../styles/about-page.scss";

const AboutYoga = ({data}) => {
  const { markdownRemark: post, footerData, navbarData } = data;
  const {
    frontmatter: {
      title,
      meta: { title: metaTitle , description },
      heroImage: { image, imageAlt }
    },
  } = post;

  const PageContent = HTMLContent || Content;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={description} />
        <title>The Light Tree | {metaTitle}</title>
      </Helmet>
      <article className="about">
        <header className="banner">
          <img src={image} alt={imageAlt} />
        </header>
        <section className="content-block">
          <div className="container">
          <h1>{title}</h1>
            <PageContent className="content editor-content" content={post.html} />
          </div>
        </section>
    </article>
    </Layout>
  );
};

AboutYoga.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutYoga;

export const AboutYogaPageQuery = graphql`
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
