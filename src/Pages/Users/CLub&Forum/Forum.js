import React from 'react';
import ForumBanner from './ForumBanner';
import ForumFAQ from './ForumFAQ';
import ForumMembers from './ForumMembers';
import ForumRegister from './ForumRegister';

const Forum = () => {
  return (
    <div>
      <ForumBanner />
      <ForumRegister />
      <ForumMembers />
      <ForumFAQ />
    </div>
  );
};

export default Forum;