import Image from 'next/image';

function About() {
  return (
    <div>
      <div className={'flex flex-col justify-between p-9 md:flex-row'}>
        <div
          className={'flex justify-center items-center md:order-2 md:w-[50%]'}
        >
          <Image
            src={'/assets/img/profile.png'}
            width={200}
            height={200}
            alt={'Profile Picture'}
            className={'md:w-48 md:h-48'}
          />
        </div>
        <div
          className={'mt-12 text-lg md:mt-0 md:pl-6 md:w-[50%] lg:w-[40rem]'}
        >
          <p>
            My father gifted me my first computer when I was 10 years old. It
            had an internet connection so from the beginning, I was surfing on
            the web. After 6 years surfing among websites, I became curious
            about Web Design and at the age of 16, I started to learn HTML, CSS,
            and Photoshop.
          </p>
          <p>
            In 2005 I took on my first paid freelance web design job. After a
            couple of months I became one of the moderators on the PHP-Fusion
            Turkey Official National Support Site and started to learn PHP.
          </p>
        </div>
      </div>

      <div className={'px-9 pb-9 text-lg lg:pr-48'}>
        <h2>BIOGRAPHY</h2>
        <p>
          But I found himself enjoying design more than coding and decided to
          focus on improving my skills in design. Some of my PHP-Fusion themes
          made it to the top 5 in the PHP-Fusion global theme database. In 2007,
          I established my own Photoshop tutorials website called
          photoshopturk.org and published tutorials for beginners.
        </p>
        <p>
          In 2010, after 5 years of working at various companies, I joined
          Enustkat Interactive as their Lead Designer and worked there for
          almost 5 years receiving 4 awards and countless projects.
        </p>
        <p>
          With 16 years total experience including branding, graphic design, art
          direction, and UI/UX design, now I work at Community Gaming as Lead
          Product Designer.
        </p>
      </div>
    </div>
  );
}

export default About;
