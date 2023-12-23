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
            viewBox={'0 0 20 20'}
            fill={'currentColor'}
            className={'w-6 h-6 fill-primary'}
          >
            <path d={'M14 6H6v8h8V6Z'} />
            <path
              fillRule={'evenodd'}
              d={
                'M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z'
              }
              clipRule={'evenodd'}
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
