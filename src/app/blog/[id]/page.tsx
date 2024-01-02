import { posts } from '../../../../posts/posts';

interface BlogPostProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return posts.map((post) => {
    return {
      id: post.id,
    };
  });
}

function BlogPost(props: BlogPostProps) {
  const post = posts.find((post) => post.id === props.params.id);

  if (post) {
    return (
      <div className={'my-16'}>
        <div>{post.id}</div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  } else {
    return <div className={'my-16'}>Page not found!</div>;
  }
}

export default BlogPost;
