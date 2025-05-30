import React from 'react';
import ShortenItem from './ShortenItem';

const ShortenUrlList = ({ data, startDate, endDate }) => {
  let content;

  try {
    content = data.map((item) => (
      <ShortenItem key={item.id} {...item} startDate={startDate} endDate={endDate}/>
    ));
  } catch (e) {
    content = <p className="text-red-500">Error rendering shortened URLs.</p>;
  }

  return <div className="my-6 space-y-4">{content}</div>;
};

export default ShortenUrlList;
