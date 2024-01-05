import { allPosts, postIDs } from '../../posts/_posts';
import { SVG } from './UI/UI';
import Link from 'next/link';

export function RecentPosts() {
  return (
    <>
      <div className={'flex justify-between items-center'}>
        <h2 className={'text-[22pt] font-normal'}>RECENT POSTS</h2>
        <SVG model={'server'} className={'w-6 h-6 fill-primary'} />
      </div>
      <div className={'divider my-4 mb-8'} />
      <ul
        className={`recent-posts flex flex-col flex-wrap gap-6 md:flex-row selection:bg-secondary`}
      >
        {postIDs.slice(0, 4).map((post) => {
          const postDetail = allPosts[post];
          return (
            <li
              key={post}
              className={
                'relative md:w-[calc(50%-.75rem)] bg-secondary/10 border border-secondary p-4'
              }
            >
              <div className={'relative pt-1'}>
                <SVG
                  model={'document'}
                  className={
                    'inline fill-secondary absolute top-[6px] left-0 w-5 h-5'
                  }
                />
                <h3 className={'pl-6 text-secondary md:max-w-full md:truncate'}>
                  <Link href={`/blog/${postDetail.id}`}>
                    {postDetail.title}
                  </Link>
                </h3>
              </div>
              <div className={'text-neutral-400'}>
                {postDetail.date.toDateString()}
              </div>
              <div
                className={'mt-2'}
                dangerouslySetInnerHTML={{ __html: postDetail.short_summary }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
