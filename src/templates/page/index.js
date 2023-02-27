import React from "react";

import Layout from "../../layouts/layout";
import Seo from "../../components/seo";
import LayoutBuilder from "../../layouts/LayoutBuilder";

const Page = ({ pageContext }) => {
  const page = pageContext.page;
  const sections = page.layoutBuilderSections.genesisSections || [];
  const settings = page.pageSettings;
  let layouts = [];
  let popupLayouts = [];

  for (let i = 0; i < sections.length; i++) {
    layouts.push(
      <LayoutBuilder
        key={i}
        layoutData={sections[i]}
        postType={"Page"}
        context={page}
        modal={popupLayouts}
      />
    );
  }

  if (settings.modalWindow) {
    const popupSections =
      settings.modalWindow.layoutBuilderSections.genesisSections || [];
    for (let i = 0; i < popupSections.length; i++) {
      popupLayouts.push(
        <LayoutBuilder
          key={i}
          layoutData={popupSections[i]}
          postType={"Popup"}
          context={page}
        />
      );
    }
  }

  return (
    <Layout activePage={page.slug}>
      <Seo meta={page.seo} slug={page.uri} pageName={page.title} />
      {layouts}
    </Layout>
  );
};

export default Page;