import React from 'react';

const Loading = () => {
    return (
        <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span className="sr-only">...</span>
</div>
    );
};

export default Loading;