import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const loadingSkeleton = () => {
  return (
    <div className="flex w-1/3 flex-col">
      <div>
        <Skeleton width="40%" height="30px" />
      </div>
      <div>
        <Skeleton width="100%" height="30px" />
        <Skeleton width="100%" height="30px" />
        <Skeleton width="100%" height="30px" />
        <Skeleton width="100%" height="30px" />
      </div>
    </div>
  );
};

export default loadingSkeleton;
