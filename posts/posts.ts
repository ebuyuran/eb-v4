interface Posts {
  date: Date;
  content: string;
  id: string;
  summary: string;
  title: string;
}

export const posts: Posts[] = [
  {
    date: new Date('2023-1-12'),
    content:
      '<div>Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering</div>',
    id: 'pre-rendering',
    summary:
      'Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering',
    title: 'Two Forms of Pre-rendering',
  },
  {
    date: new Date('2023-3-5'),
    content:
      '<div>When to Use Static Generation v.s. Server-side Rendering</div>',
    id: 'ssg-ssr',
    summary: 'You can use Static Generation for many types of pages',
    title: 'When to Use Static Generation v.s. Server-side Rendering',
  },
];
