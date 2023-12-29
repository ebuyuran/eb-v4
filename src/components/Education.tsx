import { education_data } from '@/data/education';

export function Education() {
  return (
    <div>
      <h2 className={'mb-6'}>EDUCATION</h2>
      <p className={'mt-4 mb-7 lg:w-3/4'}>
        In Turkey, the term <span className={'text-primary'}>University</span>{' '}
        is what is referred to college in US, and the term{' '}
        <span className={'text-primary'}>College</span> is used for schools that
        specialise in language education that have native speaker instructors.
      </p>
      <ul className={`flex flex-wrap justify-between gap-6 `}>
        {education_data.map((school) => (
          <li
            key={school.name}
            className={`relative w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.5rem)] p-4 bg-tertiary/5 border border-tertiary before:block before:absolute before:top-0 before:right-0 before:w-1 before:h-3/4 before:bg-tertiary after:block after:absolute after:top-0 after:right-0 after:w-3/4 after:h-1 after:bg-tertiary`}
          >
            <div className={'text-primary text-lg'}>{school.name}</div>
            <div className={'mt-2'}>{school.field}</div>
            <div className={'text-red-400'}>{school.period}</div>
            {school.studied ? (
              <div>
                <div
                  className={'relative -left-4 my-4 border-t border-tertiary'}
                />
                Studied: {school.studied}.
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
