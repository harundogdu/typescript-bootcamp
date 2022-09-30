import React from 'react';

type IStatusProps = {
  status: 'info' | 'success' | 'warning' | 'error';
  message?: string;
};

const Status: React.FC<IStatusProps> = props => {
  const { status, message = 'Default Status Message!' } = props;
  return (
    <div>
      <h1>Status: {status}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Status;
