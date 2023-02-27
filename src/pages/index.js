import * as React from "react"
import { graphql } from 'gatsby'
import './style.css';
import Header from "../components/Header";
import Card from "../components/Card";
const IndexPage = ({data}) => {
console.log(data);


  return (
    <>
<Header siteTitle={"test"} />

    <Card content={data.wpTestimonial.content} name={data.allWpPost.edges[0].node.title} />
  </>
)}



export const query = graphql`
{
  wpTestimonial{
    title
    content
    featuredImage {
      node {
        id
      }
    }
  }
  allWpPost {
    edges {
      node {
        id
        title
        slug
        tags{
          nodes{
            id
            description
          }
        }
        featuredImage {
          node {
            id
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}`
 
  export default IndexPage;


