import { unbounded } from '@/assets/fonts';

import { Skills } from './components/Skills/Skills';
import { RecentPosts } from './components/RecentPosts/RecentPosts';

function Home() {
  return (
    <div className={'p-9'}>
      <h1 className={unbounded.className}>EFE BUYURAN</h1>
      <p className={'mt-1 mb-9 leading-none text-gray-300'}>
        Sn. Front-End Engineer
      </p>
      <div className={'max-w-2xl pb-4 [&>p]:text-lg [&>p]:leading-5'}>
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
        <RecentPosts />
      </div>
      <div className={'my-16'}>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
