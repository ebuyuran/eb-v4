import './Skills.css';

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
      <div className={'skills_2742'}>
        <ul>
          <li className={'cyan-box'}>
            <div>CORE</div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>ES6</li>
            </ul>
          </li>
          <li className={'cyan-box'}>
            <div>CSS COMPILERS</div>
            <ul>
              <li>SASS</li>
              <li>STYLUS</li>
              <li>STYLED COMPONENTS</li>
              <li>TAILWINDCSS</li>
            </ul>
          </li>
          <li className={'cyan-box'}>
            <div>JS TOOLS</div>
            <ul>
              <li>TYPESCRIPT</li>
              <li>REACT & REDUX</li>
              <li>GRAPHQL</li>
              <li>NEXT.JS</li>
            </ul>
          </li>
          <li className={'cyan-box'}>
            <div>UNIT TESTING</div>
            <ul>
              <li>JEST</li>
              <li>MOCHA</li>
              <li>CHAI</li>
              <li>SINON</li>
            </ul>
          </li>
          <li className={'cyan-box'}>
            <div>BUILD AUTOMATION</div>
            <ul>
              <li>NODE.JS</li>
              <li>GULP</li>
              <li>NPM & NVM</li>
              <li>WEBPACK</li>
            </ul>
          </li>
          <li className={'cyan-box'}>
            <div>UI & UX</div>
            <ul>
              <li>PHOTOSHOP</li>
              <li>ILLUSTRATOR</li>
              <li>FIGMA</li>
              <li>RTL INTERFACES</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
