import React from 'react';
import MSkeleton from '@material-ui/lab/Skeleton';

export default function Skeleton() {
  return (
    <div>
      <MSkeleton variant="text" width={210} />
      <MSkeleton variant="circle" width={40} height={40} />
      <MSkeleton variant="rect" width={210} height={118} />
    </div>
  );
}