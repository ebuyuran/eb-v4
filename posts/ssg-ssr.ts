import { Post } from './_posts';

const post = function (postID: string): Post {
  return {
    content:
      '<div>When to Use Static Generation v.s. Server-side Rendering</div>',
    date: new Date('2023-3-5'),
    id: postID,
    summary: 'You can use Static Generation for many types of pages',
    title: 'When to Use Static Generation v.s. Server-side Rendering',
  };
};

export default post;
