import React from "react";
import { graphql } from 'gatsby';

    const Header = ({data}) => {
console.log(data);
return (
    <header id="header">
           
    </header>
  );
};

export default Header;
export const query = graphql`
query {
    allWpPost{
      edges{
        node{
            title
        }
      }
    }
  }
  
  `