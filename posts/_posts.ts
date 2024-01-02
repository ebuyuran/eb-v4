import PRERENDERING from './pre-rendering';
import SSGSSR from './ssg-ssr';

export interface Post {
  content: string;
  date: Date;
  id: string;
  summary: string;
  title: string;
}

interface AllPosts {
  [key: string]: Post;
}

const post = {
  PRERENDERING: 'pre-rendering',
  SSGSSR: 'ssg-ssr',
};

export const posts: string[] = [post.PRERENDERING, post.SSGSSR];

export const allPosts: AllPosts = {
  [post.PRERENDERING]: PRERENDERING(post.PRERENDERING),
  [post.SSGSSR]: SSGSSR(post.SSGSSR),
};
