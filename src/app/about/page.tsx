import Image from 'next/image';

function About() {
  return (
    <div>
      <div className={'flex flex-col justify-between p-9 md:flex-row'}>
        <div
          className={'flex justify-center items-center md:order-2 md:w-[40%]'}
        >
          <Image
            src={'/assets/img/profile.png'}
            width={200}
            height={200}
            alt={'Profile Picture'}
            className={
              'md:w-48 md:h-48 p-2 border-2 border-primary rounded-full'
            }
          />
        </div>
        <div
          className={
            'flex items-center mt-12 text-lg md:mt-0 md:w-[50%] lg:w-[40rem]'
          }
        >
          <p>
            I am a Front-End Engineer from Istanbul with +8 years of experience,
            specializing in building modern user interfaces by Next.js &
            TypeScript with a strong emphasis on aesthetics.
          </p>
        </div>
      </div>

      <div className={'px-9 pb-9 text-lg lg:pr-48 [&>p]:my-4'}>
        <h2 className={'my-4'}>BIOGRAPHY</h2>
        <p>
          Ever since I had an Amiga 500 in my hands at 1992 when I was 4. I was
          mesmerized by the colours, shapes, technology and everything that came
          along for the ride with user interfaces. The vast majority of my
          childhood was spent admiring what we could do with our computers, and
          they weren’t even doing much at the time.
        </p>
        <p>
          My family were convinced that I should be studying something related
          to computers. So, I went to one of the most prestigious vocational
          high-schools (that’s a thing in Turkey) where I got my first taste of
          programming with Pascal, and first taste of animations with Flash.
          I’ve realised I could be making static websites with Flash at the time
          so I’ve made a bit of money with freelance work.
        </p>
        <p>
          I used to enjoy making cheesy animations in Flash a little too much to
          study Computer Science, so I’ve decided to study Visual Communication
          in university. Which was one of the best decisions I’ve ever made. I
          had the chance to study Advertisement, Typography, Web Development,
          Graphic Design, Animation, Screenwriting, Cinema, Photography and
          Intercultural Relations at basic level.
        </p>
        <p>
          Around this time, I found the solution to my dilemma between pursuing
          programming or a creative field by discovering Front-End Development.
          Which is the perfect combination of technology and aesthetics.
        </p>
        <p>
          Ever since, I have written thousands of lines of code, built many
          projects, and worked with numerous teams. My work in Riot Games has
          reached millions of gamers around the world. As a gamer since early
          childhood, it meant a lot to me to be part of a project that other
          gamers would enjoy playing.
        </p>
      </div>
    </div>
  );
}

export default About;
