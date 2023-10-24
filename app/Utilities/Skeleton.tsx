import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoader = () => (
  <ContentLoader
    speed={2}
    width={484}
    height={600}
    viewBox="0 0 444 600"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
  >
    <rect x="12" y="35" rx="0" ry="0" width="6" height="500" />
    <rect x="14" y="34" rx="0" ry="0" width="408" height="6" />
    <rect x="416" y="34" rx="0" ry="0" width="6" height="500" />
    <rect x="12" y="530" rx="0" ry="0" width="408" height="6" />
    <rect x="37" y="77" rx="7" ry="7" width="361" height="239" />
    <rect x="58" y="375" rx="0" ry="0" width="316" height="8" />
    <rect x="58" y="405" rx="0" ry="0" width="316" height="8" />
    <rect x="58" y="435" rx="0" ry="0" width="316" height="8" />
  </ContentLoader>
);

export default CategoryLoader;
