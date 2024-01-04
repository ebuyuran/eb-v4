import { postIDs, allPosts } from '../../../posts/_posts';

function Blog() {
  return (
    <div className={'w-3/4 mt-16 mb-8'}>
      <h1>BLOG</h1>
      {/* <div className={'divider dv-w-200 dv-left mt-2'} /> */}
      <ul>
        {postIDs.map((postID) => {
          const post = allPosts[postID];
          return (
            <li
              key={postID}
              className={`relative w-full my-12 p-4 bg-tertiary/5 border border-tertiary before:block before:absolute before:top-0 before:right-0 before:w-1 before:h-1/2 before:bg-tertiary after:block after:absolute after:top-0 after:right-0 after:w-3/4 after:h-1 after:bg-tertiary`}
            >
              <h2 className={'w-3/4 text-2xl'}>{post.title.toUpperCase()}</h2>
              <div
                className={`bg-tertiary text-black inline-block px-2 my-1 leading-5`}
              >
                {post.date.toDateString()}
              </div>
              <div
                className={
                  'relative -left-4 my-2 bg-tertiary w-[200px] h-[1px]'
                }
              />
              <div className={`text-lg mt-4`}>{post.summary}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
