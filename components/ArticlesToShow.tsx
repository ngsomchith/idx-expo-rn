import React from 'react';
import { ArticleList } from './ShowArticles';

const ArticlesToShow = () => {
  const articles = [
    {
      title: "Article 1",
      imageUrl: "/home/user/idx-expo-rn/assets/images/image 1achete 1offert.png",
      text: "Content for article 1",
      onActionPress: () => { /* Handle action for article 1 */ },
    },
    {
      title: "Article 2",
      imageUrl: "https://example.com/image2.jpg",
      text: "Content for article 2",
      onActionPress: () => { /* Handle action for article 2 */ },
    },
    // Add more articles as needed
  ];
  return (
    <ArticleList articles={articles} />
  );
};

export default ArticlesToShow;