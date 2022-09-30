import React from 'react';

interface ILoadingProps {
  loading: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = ({ loading, children }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default Loading;
