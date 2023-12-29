import Link from 'next/link';
import { getSortedPostsData } from '@/utils/blog';
import './RecentPosts.css';

const posts = getSortedPostsData();

export function RecentPosts() {
  return (
    <>
      <div className={'flex justify-between items-center'}>
        <h2 className={'text-[22pt] font-normal'}>RECENT POSTS</h2>
        <svg
          xmlns={'http://www.w3.org/2000/svg'}
          viewBox={'0 0 20 20'}
          fill={'currentColor'}
          className={'w-6 h-6 fill-primary'}
        >
          <path
            d={
              'M4.464 3.162A2 2 0 0 1 6.28 2h7.44a2 2 0 0 1 1.816 1.162l1.154 2.5c.067.145.115.291.145.438A3.508 3.508 0 0 0 16 6H4c-.288 0-.568.035-.835.1.03-.147.078-.293.145-.438l1.154-2.5Z'
            }
          />
          <path
            fillRule={'evenodd'}
            d={
              'M2 9.5a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm13.24 0a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V9.5Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V9.5a.75.75 0 0 0-.75-.75h-.01ZM2 15a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm13.24 0a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z'
            }
            clipRule={'evenodd'}
          />
        </svg>
      </div>
      <div className={'divider scale-y-[-1] pb-2 mb-8'} />
      <ul className={`recent-posts_3205`}>
        {posts.map((post) => (
          <li key={post.id}>
            <div>
              <svg
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'currentColor'}
              >
                <path
                  fillRule={'evenodd'}
                  d={
                    'M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z'
                  }
                  clipRule={'evenodd'}
                />
              </svg>
              <h3>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
            </div>
            <div>{post.date.toString()}</div>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
