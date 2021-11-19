import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from "../components/Layout";
import { Introduction } from '../components/Introduction'
import { Schedule } from '../components/Schedule'
import { MyStory } from '../components/MyStory'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { Testimonials } from '../components/Testimonials'
import "../styles/home.scss";

const HomePage = ({ data }) => {
  
    const { footerData, navbarData } = data;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {seo: { title: seoTitle, description: seoDescription, browserTitle },} = home;
    const { frontmatter: contact } = data.contact.edges[0].node;
    const { frontmatter: testimonials } = data.testimonials.edges[0].node;
    const { frontmatter: services } = data.services.edges[0].node;
    const { frontmatter: schedule } = data.schedule.edges[0].node;

    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
          <script 
            defer
            async
            data-cfasync="false" 
            data-tockify-script="embed" 
            src="https://public.tockify.com/browser/embed.js"
          />
        </Helmet>
        <>
          <section className="hero-banner" style={{
          backgroundImage: `url(${home.image})`,
          backgroundSize: 'cover',
        }}>
          <AnchorLink href="#intro" className="down-link">
            <span>Introduction</span>
          </AnchorLink>
        </section>
          <Introduction data={data.introduction.edges[0].node} />
          <Schedule data={schedule} />
          <MyStory data={data.mystory.edges[0].node} />
          <Services data={services} />
          <Contact data={contact} />
          <Testimonials data={testimonials} />
        </>
      </Layout>
    );
  }

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    introduction: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "introduction" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            quote
            image
            highlightedText
          }
        }
      }
    }
    mystory: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "my-story" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            quote
            image
            buttons {
              link
              label
            }
          }
        }
      }
    }
    contact: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "contact" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            contactList {
              subHeading
              text
              link
            }
          }
        }
      }
    }
    testimonials: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "testimonials" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            testimonialList {
              author
              description
            }
          }
        }
      }
    }
    services: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "services" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            serviceList {
              title
              image
              description
              label
              link
            }
          }
        }
      }
    }
    schedule: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "schedule" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            classHeading
            eventsHeading
            scheduleSection {
              title
              body
            }
          }
        }
      }
    }
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          id
          frontmatter {
            image
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
