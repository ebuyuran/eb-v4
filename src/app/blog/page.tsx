import Link from 'next/link';
import { postIDs, allPosts } from '../../../posts/_posts';
import { SVG } from '@/components/UI/UI';

function Blog() {
  return (
    <div className={' mt-16 mb-8 p-9'}>
      <ul>
        {postIDs.map((postID) => {
          const post = allPosts[postID];
          return (
            <li key={postID} className={`blog relative w-full mb-16`}>
              <div className={'pl-2 pr-3 md:pr-20'}>
                <Link href={`/blog/${postID}`}>
                  <h2 className={'md:w-3/4 text-3xl'}>
                    {post.title.toUpperCase()}
                  </h2>
                </Link>
                <div
                  className={`bg-tertiary text-black font-semibold inline-block px-2 my-1 leading-5`}
                >
                  {post.date.toDateString()}
                </div>
                <div
                  className={`text-lg my-4`}
                  dangerouslySetInnerHTML={{ __html: post.summary }}
                />
                <div className={'flex items-center'}>
                  <SVG
                    model={'category'}
                    className={'w-5 h-5 fill-tertiary mr-1'}
                  />
                  <ul className={'my-2'}>
                    {post.categories.map((category, i) => (
                      <li
                        key={i}
                        className={
                          'inline-block bg-tertiary text-black text-sm px-2 mr-3'
                        }
                      >
                        {category.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={'absolute bottom-0 right-0 w-2 h-2 bg-primary'} />
              <div className={'divider dv-inverted mt-4'} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
