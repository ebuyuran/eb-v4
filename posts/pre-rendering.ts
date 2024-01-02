import { Post } from './_posts';

const post = function (postID: string): Post {
  return {
    content:
      '<div class="sadfsfd">Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering</div>',
    date: new Date('2023-1-12'),
    id: postID,
    summary:
      'Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering',
    title: 'Two Forms of Pre-rendering',
  };
};

export default post;
