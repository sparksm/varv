import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const EndorsementsPageTemplate = ({ title, endorsements }) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{title}</h1>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    {endorsements.map(({ name, district }) => (
                      <p key={name}>
                        {name} from District {district}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

EndorsementsPageTemplate.propTypes = {
  title: PropTypes.string,
};

const EndorsementsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EndorsementsPageTemplate
        title={frontmatter.title}
        endorsements={frontmatter.endorsementList.endorsements}
      />
    </Layout>
  );
};

EndorsementsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EndorsementsPage;

export const pageQuery = graphql`
  query EndorsementsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "endorsements-page" } }) {
      frontmatter {
        title
        endorsementList {
          endorsements {
            name
            district
          }
        }
      }
    }
  }
`;
