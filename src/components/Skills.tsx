import { skills_data } from '@/data/skills';

export function Skills() {
  return (
    <>
      <div className={'flex justify-between items-center'}>
        <h2
          className={`pl-4 pr-5 py-2 text-[18pt] font-medium bg-r text-black bg-clipped-yellow-tr`}
        >
          FRONT-END SKILLS
        </h2>
      </div>
      <div className={`skills_2742 relative border border-primary p-4`}>
        <ul
          className={`flex flex-col flex-wrap font-semibold gap-5 sm:flex-row`}
        >
          {skills_data.map((skill) => (
            <li
              key={skill.headline}
              className={
                'cyan-box tr-cyan-tri-before bl-cyan-dec-after sm:w-[calc(50%-(1.25rem/2))] lg:w-[calc(33.3%-(1.25rem/1.5))]'
              }
            >
              <div className={'text-xl text-primary'}>{skill.headline}</div>
              <ul className={'mt-1 list-disc text-white'}>
                {skill.subsets.map((subset) => (
                  <li key={subset} className={'ml-4 text-lg'}>
                    {subset}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
