import Image from 'next/image';
import { unbounded } from '@/assets/fonts';

interface HomeProps {}

function Home(props: HomeProps) {
  return (
    <div className={'p-9'}>
      <h1 className={unbounded.className}>EFE BUYURAN</h1>
      <p className={'mt-1 mb-9 leading-none text-gray-300'}>
        Sn. Front-End Developer
      </p>
      <div className={'pb-4 [&>p]:text-lg [&>p]:leading-5'}>
        <p>
          I&apos;m a Sn. Front-End Developer from Istanbul with 8 years of
          experience, specializing in building modern user interfaces by React &
          TypeScript with a strong emphasis on aesthetics.
        </p>
        <p>
          Having worked across products used by millions of people, I&apos;m
          looking to utilize this experience to create new and exciting apps.
          I&apos;ve worked for companies such as Riot Games, Spinmatic
          Entertainment, Hyundai, and Huawei.
        </p>
      </div>
      <div>
        <button className={`after:content-['READ_MORE']`}>READ MORE</button>
      </div>
      <div className={'mt-16'}>
        <div className={'absolute z-0'}></div>
        <div className={'flex justify-between items-center'}>
          <h2 className={'text-[22pt] font-normal'}>RECENT POSTS</h2>
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            fill={'none'}
            viewBox={'0 0 24 24'}
            strokeWidth={1.5}
            stroke={'currentColor'}
            dataslot={'icon'}
            className={'w-6 h-6 stroke-primary relative bottom-[1px]'}
          >
            <path
              strokeLinecap={'round'}
              strokeLinejoin={'round'}
              d={
                'M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25'
              }
            />
          </svg>
        </div>
        <div className={'divider scale-y-[-1] pb-2 mb-8'} />
        <ul
          className={
            '[&>li]:my-4 [&>li]:p-3 [&>li]:bg-secondary/5 [&>li]:border [&>li]:border-secondary/20 [&>li>div>h3]:text-secondary [&>li>div>h3]:inline [&>li>div]:pt-1 [&>li>div>svg]:inline [&>li>div>svg]:relative [&>li>div>svg]:bottom-[4px] [&>li>div>svg]:fill-secondary [&>li>div>svg]:mr-1 [&>li>p]:my-0 [&>li>div]:text-gray-400'
          }
        >
          <li>
            <div>
              <svg
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'currentColor'}
                className={'w-5 h-5'}
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
                className={'w-5 h-5'}
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
                className={'w-5 h-5'}
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
        </ul>
      </div>
      <div className={'my-16'}>
        <div className={'flex justify-between items-center'}>
          <h2 className={'text-[22pt] font-normal'}>FRONT-END SKILLS</h2>
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            fill={'none'}
            viewBox={'0 0 24 24'}
            strokeWidth={1.5}
            stroke={'currentColor'}
            dataslot={'icon'}
            className={'w-6 h-6 stroke-primary'}
          >
            <path
              strokeLinecap={'round'}
              strokeLinejoin={'round'}
              d={
                'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z'
              }
            />
          </svg>
        </div>
        <div className={'divider scale-y-[-1] pb-2'} />
        <div>
          <ul
            className={
              'mt-6 font-semibold text-primary [&>li]:flex [&>li]:items-center [&>li>span]:text-xl [&>ul]:list-disc [&>ul]:text-white [&>ul]:text-lg [&>ul]:my-2 [&>ul]:ml-2 [&>ul>li]:ml-3 [&>ul>li]:leading-tight'
            }
          >
            <li>
              <span>CORE</span>
            </li>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <li>
              <span>CSS COMPILERS</span>
            </li>
            <ul>
              <li>SASS</li>
              <li>STYLUS</li>
              <li>STYLED COMPONENTS</li>
              <li>TAILWINDCSS</li>
            </ul>
            <li>
              <span>JS EXTENSIONS</span>
            </li>
            <ul>
              <li>TYPESCRIPT</li>
              <li>REACT</li>
              <li>NEXT.JS</li>
              <li>REDUX</li>
              <li>RESTFUL API&apos;S</li>
            </ul>
            <li>
              <span>UNIT TESTING</span>
            </li>
            <ul>
              <li>MOCHA</li>
              <li>CHAI</li>
              <li>SINON</li>
            </ul>
            <li>
              <span>BUILD AUTOMATION</span>
            </li>
            <ul>
              <li>NPM & NVM</li>
              <li>WEBPACK</li>
            </ul>
            <li>
              <span>UI & UX</span>
            </li>
            <ul>
              <li>PHOTOSHOP</li>
              <li>ILLUSTRATOR</li>
              <li>FIGMA</li>
              <li>RESPONSIVE DESIGN</li>
              <li>CSS ANIMATIONS</li>
              <li>RTL INTERFACES</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
