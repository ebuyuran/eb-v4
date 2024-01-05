import Link from 'next/link';
import { allPosts, postIDs, Posts } from '../../../../posts/_posts';
import { SVG } from '@/components/UI/UI';

interface BlogPostProps {
  params: {
    id: Posts;
  };
}

export function generateStaticParams() {
  return postIDs.map((postID) => {
    return {
      id: postID,
    };
  });
}

function BlogPost(props: BlogPostProps) {
  const post = allPosts[props.params.id];

  if (post) {
    return (
      <div className={'blog-post mt-16 mb-8 p-9'}>
        <div
          className={
            'inline-block py-0 pl-4 pr-5 mb-5 clipped-tl-br bg-primary text-black text-xl cursor-pointer'
          }
        >
          <Link href={'/blog'}>
            <div className={'flex items-center'}>
              <SVG model={'back-arrow'} className={'h-5 w-5'} />
              BACK
            </div>
          </Link>
        </div>
        <div className={`blog relative w-full mb-16`}>
          <div
            className={
              'relative p-3 md:p-6 md:pr-20 bg-tertiary/5 border border-tertiary'
            }
          >
            <div
              className={
                'absolute -z-20 top-[2px] left-[2px] w-[calc(100%+2px)] h-[calc(100%+2px)] border border-tertiary'
              }
            />
            <h2 className={'md:w-3/4 text-4xl'}>{post.title.toUpperCase()}</h2>
            <div
              className={`bg-tertiary text-black inline-block px-2 my-1 leading-5`}
            >
              <div className={'flex items-center font-semibold'}>
                <SVG
                  model={'calendar'}
                  className={'w-4 h-4 relative bottom-[1px] mr-1'}
                />
                {post.date.toDateString()}
              </div>
            </div>
            <div
              className={`text-lg my-4 [&>p]:my-4 [&>p>code]:bg-primary [&>p>code]:text-black [&>p>code]:px-1`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className={'flex items-center'}>
              <SVG
                model={'category'}
                className={'w-5 h-5 fill-tertiary relative bottom-[-4px] mr-1'}
              />
              <ul className={'mt-2'}>
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
        </div>
      </div>
    );
  } else {
    return <div className={'my-16'}>Page not found!</div>;
  }
}

export default BlogPost;
