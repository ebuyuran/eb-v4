import { Work } from '@/components/Work/Work';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Button } from '@/components/UI/UI';

function Resume() {
  return (
    <div className={'p-9'}>
      <div className={'flex justify-end'}>
        <Button label={'DOWNLOAD CV'} />
      </div>
      <Work />
      <Skills />
      <div className={'mb-24'} />
      <Education />
      <div className={'mb-12'} />
    </div>
  );
}

export default Resume;
