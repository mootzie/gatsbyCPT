// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
// const path = require("path");
// const { copyLibFiles } = require("@builder.io/partytown/utils");

// exports.createResolvers = async ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions;

//   await createResolvers({
//     WPGraphQL_MediaItem: {
//       imageFile: {
//         type: "File",
//         async resolve(source) {
//           let sourceUrl = source.sourceUrl;

//           if (source.mediaItemUrl !== undefined) {
//             sourceUrl = source.mediaItemUrl;
//           }

//           return await createRemoteFileNode({
//             url: encodeURI(sourceUrl),
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           });
//         },
//       },
//     },
//   });
// };

// const createPages = require("./create/createPages");

// exports.createPagesStatefully = async (
//   { graphql, actions, reporter },
//   options
// ) => {
//   await createPages({ actions, graphql, reporter }, options);
//   await createPosts({ actions, graphql, reporter }, options);
//   await createCategories({ actions, graphql, reporter }, options);
//   await createTags({ actions, graphql, reporter }, options);
// };

// exports.onPreBuild = async () => {
//   await copyLibFiles(path.join(__dirname, "static", "~partytown"));
// };