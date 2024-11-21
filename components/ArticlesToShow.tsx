import React from 'react';
import { ArticleList } from './ShowArticles';

const ArticlesToShow = ({  }) => {
  const articles0 = [
    {
      title: "Article 11",
      // imageUrl: "https://delicatessen.cloud/Html_images/poke-thon-saumon-delicatessen.webp",
      imageUrl: "livreur",
      text: "Content for article 1",
      onActionPress: () => { /* Handle action for article 1 */ },
    },
    {
      title: "Article 22",
      imageUrl: "image1achete1offert",
      text: "Content for article 2",
      onActionPress: () => { /* Handle action for article 2 */ },
    },
    // Add more articles as needed
  ];
  return (
    <ArticleList articles={articles0} />
  );
};

export default ArticlesToShow;