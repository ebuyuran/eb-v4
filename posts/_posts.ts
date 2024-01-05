import PRERENDERING from './pre-rendering';
import SSGSSR from './ssg-ssr';

type PostCategory = 'CSS' | 'API' | 'Animation';

export interface Post {
  categories: PostCategory[];
  content: string;
  date: Date;
  id: string;
  short_summary: string;
  summary: string;
  title: string;
}

type AllPosts = {
  [key in Posts]: Post;
};

export enum Posts {
  PRERENDERING = 'pre-rendering',
  SSGSSR = 'ssg-ssr',
}

export const postIDs: Posts[] = [Posts.PRERENDERING, Posts.SSGSSR];

export const allPosts: AllPosts = {
  [Posts.PRERENDERING]: PRERENDERING(Posts.PRERENDERING),
  [Posts.SSGSSR]: SSGSSR(Posts.SSGSSR),
};
