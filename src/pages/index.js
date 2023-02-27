import * as React from "react"
import { graphql } from 'gatsby'
import './style.css';
import Header from "../components/Header";
import Card from "../components/Card";

const IndexPage = ({data}) => {
console.log(data);
// let dataAttr = [];
//  for (let i = 0; i< data.allWpPost.edges.length; i++){
//   dataAttr[i] = data.allWpPost.edges[i];
// }


  return (
    <>
<Header />
<div className="background__overlay">
  
<div className="container">
  <div className="titles">
    {data.allWpPost.edges[0].node.title + " "}
    {data.wpTestimonial.content};
    {data.wpTestimonial.title};
    <Card name={data.allWpPost.edges[0].node.title} />
    <br></br>
    </div>
  </div>
  </div>
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


