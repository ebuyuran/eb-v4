import { unbounded } from '@/assets/fonts';
import Link from 'next/link';
import { Skills } from '@/components/Skills';
import { RecentPosts } from '@/components/RecentPosts';
import { Button } from '@/components/UI/UI';

function Home() {
  return (
    <div className={'p-9'}>
      <h1 className={unbounded.className}>EFE BUYURAN</h1>
      <p className={'mt-1 mb-9 leading-none text-gray-300'}>
        Sn. Front-End Engineer
      </p>
      <div className={'max-w-2xl pb-4 [&>p]:text-lg [&>p]:leading-5'}>
        <p className={'py-2'}>
          I am a multi-diciplinary Front-End Engineer with a focus on merging
          creativity and technology to make the web beautiful. With 8+ years of
          experience, I have gained a solid grasp of core web technologies,
          performance principles, typography, UI, and UX.
        </p>
        <p className={'py-2 mb-4'}>
          I had the privilege of working for Riot Games, Spinmatic
          Entertainment, Hyundai, Huawei, and GrubTech. Developing games and
          products used by millions of people across the world.
        </p>
      </div>
      <div>
        <Link href={'/about'}>
          <Button label={'READ MORE'} />
        </Link>
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
