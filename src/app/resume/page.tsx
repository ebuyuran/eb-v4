import Image from 'next/image';
import { Screenshots } from '@/components/Screenshots';
import { Skills } from '@/components/Skills';
import { work } from '../data/work';
import { education } from '../data/education';

function Resume() {
  return (
    <div>
      <div className={'p-9'}>
        <div className={'flex justify-end'}>
          <button className={`after:content-['DOWNLOAD_CV']`}>
            DOWNLOAD CV
          </button>
        </div>
        <ul className={'mt-9 mb-8'}>
          {work.map((corp, i) => (
            <li className={'mb-20 pb-6'} key={i}>
              <div className={'flex flex-col items-baseline sm:flex-row'}>
                <h2>{corp.name}</h2>
                <div className={'ml-3 text-lg'}>{corp.position}</div>
              </div>
              <div
                className={`bg-secondary text-black inline-block px-3 py-0 my-2 text-lg`}
              >
                {corp.duration}
              </div>
              <div className={'flex flex-col justify-between my-4 lg:flex-row'}>
                <ul className={'px-8 list-disc text-lg lg:w-9/12'}>
                  {corp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div>
                  <ul
                    className={`cyan-box flex flex-col flex-wrap list-disc mt-9 p-4 [&>li]:ml-4 md:flex-row md:list-none lg:w-[12rem] lg:mt-0 lg:list-disc lg:flex-col`}
                  >
                    {corp.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className={'flex flex-wrap justify-center mt-12 gap-4 '}>
                <Screenshots list={corp.screenshots} />
              </ul>
              {work.length !== i + 1 && (
                <div className={'divider-fullwidth mt-6'} />
              )}
            </li>
          ))}
        </ul>
        <Skills />
        <div className={'mb-24'} />
        <div className={''}>
          <h2 className={'mb-6'}>EDUCATION</h2>
          <p className={'mt-4 mb-7'}>
            In Turkey, the term{' '}
            <span className={'text-primary'}>University</span> is what is
            referred to college in US, and the term{' '}
            <span className={'text-primary'}>College</span> is used for schools
            that specialise in language education that have native speaker
            instructors.
          </p>
          <ul className={`flex flex-wrap justify-between gap-6 `}>
            {education.map((school) => (
              <li
                key={school.name}
                className={`relative w-[calc(50%-0.75rem)] md:w-[calc(25%-1.5rem)] p-4 bg-tertiary/5 border border-tertiary before:block before:absolute before:top-0 before:right-0 before:w-1 before:h-3/4 before:bg-tertiary after:block after:absolute after:top-0 after:right-0 after:w-3/4 after:h-1 after:bg-tertiary`}
              >
                <div className={'text-primary text-lg'}>{school.name}</div>
                <div className={'mt-2'}>{school.field}</div>
                <div className={'text-red-400'}>{school.period}</div>
                {school.studied ? (
                  <div>
                    <div
                      className={
                        'relative -left-4 my-4 border-t border-tertiary'
                      }
                    />
                    Studied: {school.studied}.
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className={'mb-12'} />
      </div>
    </div>
  );
}

export default Resume;
