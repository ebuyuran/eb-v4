import './RecentPosts.css';

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
        <li>
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
            <h3>ON THE WAY DOWN</h3>
          </div>
          <div>March 27, 2023</div>
          <p>Software Development that Brings Everyone to the Table</p>
        </li>
        <li>
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
            <h3>HOW TO WRITE EMAIL THAT PEOPLE WILL READ</h3>
          </div>
          <div>September 23, 2014</div>
          <p>
            We are inundated with email. So how do you write an email that
            clients and co-workers will read?
          </p>
        </li>
        <li>
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
            <h3>SIMPLE IS NOT THE OPPOSITE OF COMPLEX</h3>
          </div>
          <div>May 22, 2014</div>
          <p>Complex is Easy, Simple is Hard</p>
        </li>
        <li>
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
            <h3>Key and Lock</h3>
          </div>
          <div> March 14, 2014</div>
          <p>Learn from interfaces that have endured.</p>
        </li>
      </ul>
    </>
  );
}
