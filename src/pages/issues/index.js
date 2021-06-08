import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage:
              "url('https://varv.org/gallery_gen/028c568fae811cad2daa1e95a9b08a65_1020x1020.4081632653.jpg')",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 rgb(1 45 107), -0.5rem 0 0 rgb(1 45 107)",
              backgroundColor: "rgb(1 45 107)",
              color: "white",
              padding: "1rem",
            }}
          >
            Agenda Issues
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
