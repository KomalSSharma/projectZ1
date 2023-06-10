import React, { lazy, Suspense } from 'react';
import Spinner from '../spinner/Spinner';

const LazyUserSearched = lazy(() => import('./UserSearched'));

function UserSearchedWrapper(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyUserSearched {...props} />
    </Suspense>
  );
}

export default UserSearchedWrapper;
