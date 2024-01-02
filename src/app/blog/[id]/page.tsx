import { allPosts, posts } from '../../../../posts/_posts';

interface BlogPostProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return posts.map((postID) => {
    return {
      id: postID,
    };
  });
}

function BlogPost(props: BlogPostProps) {
  const post = allPosts[props.params.id];

  if (post) {
    return (
      <div className={'my-16'}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  } else {
    return <div className={'my-16'}>Page not found!</div>;
  }
}

export default BlogPost;
