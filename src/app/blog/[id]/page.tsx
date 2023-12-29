import { getPostData, getSortedPostsData } from '@/utils/blog';

interface BlogPostProps {
  params: {
    id: string;
  };
}

const posts = getSortedPostsData();

export function generateStaticParams() {
  return posts.map((post) => {
    return {
      id: post.id,
    };
  });
}

async function BlogPost(props: BlogPostProps) {
  const post = await getPostData(props.params.id);
  return (
    <div className={'my-16'}>
      <div>{post.id}</div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}

export default BlogPost;
