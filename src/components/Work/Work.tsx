import { Screenshots } from './Screenshots';
import { work_data } from '@/data/work';

export function Work() {
  return (
    <ul className={'mt-9 mb-8'}>
      {work_data.map((corp, i) => (
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
                className={`cyan-box tr-cyan-tri-before bl-cyan-dec-after flex flex-col flex-wrap list-disc mt-9 p-4 [&>li]:ml-4 md:flex-row md:list-none lg:w-[12rem] lg:mt-0 lg:list-disc lg:flex-col`}
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
          {work_data.length !== i + 1 && (
            <div className={'divider-fullwidth mt-6'} />
          )}
        </li>
      ))}
    </ul>
  );
}
