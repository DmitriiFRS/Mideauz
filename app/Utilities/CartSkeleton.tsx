import React from "react";
import ContentLoader from "react-content-loader";

const CartSkeleton = () => {
   return (
      <ContentLoader
         speed={2}
         width="100%"
         height={600}
         viewBox={undefined}
         backgroundColor="#d9d9d9"
         foregroundColor="#ededed"
      >
         <rect className="cart__rect" x="350" y="26" rx="4" ry="4" width="81%" height="250" />
         <rect x="20" y="26" rx="4" ry="4" width={285} height="250" />
         <rect className="cart__rect" x="350" y="290" rx="4" ry="4" width="81%" height="250" />
         <rect x="20" y="290" rx="4" ry="4" width={285} height="250" />
      </ContentLoader>
   );
};

export default CartSkeleton;
