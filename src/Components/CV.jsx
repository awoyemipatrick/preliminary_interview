import React from 'react'


const CV = () => {

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-[24px] font-bold my-8 '>My CV </h1>
      <div className='flex flex-col items-center mx-[20%] text-black bg-white'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[34px] font-bold'>Awoyemi Patrick Gbenga</h1>
          <p>Front-End Engineer</p>
        </div>
        <div>
          <div className='flex justify-center '>
            <a className='mr-4' href="">0-816-118-5089</a>
            <a className='ml-4' href="">awoyemipatrick33@yahoo.com</a>
          </div>

          <div>
            <p>
              I have an understanding of web development technologies such as HTML, CSS, and JavaScript. I am
              proficient in using JavaScript frameworks such as ReactJS. I have experience building responsive
              and mobile-friendly web pages and am able to effectively use CSS preprocessors such as SASS. I am
              also familiar with cross-browser compatibility issues and can implement solutions to ensure a
              consistent user experience. I am a quick learner, and a proactive problem-solver, and am able to
              work well in a team environment. I am excited to continue honing my skills and learning new
              technologies in a professional setting.
            </p>
          </div>

          <div className='items-center flex flex-col mx-[2.5rem]  my-6'>
            <h2 className='font-bold text-[18px] my-4 '>EXPERIENCE</h2>
            <div className='flex'>
              <div className=''>
                <h4>Front-End Mobile App Developer</h4>
                <p>
                  BINCOM ICT SOLUTIONS <br />
                  May 2021 -Present
                </p>
                <h4>Role / Focus</h4>
                <ul>
                  <li className='list-disc'>
                    Building and managing interactive websites
                    for clients, as well as adding required
                    features to meet the demands of the client
                    and users.
                  </li>
                  <li className='list-disc'>
                    Bringing concepts to life with HTML,
                    Javascript, and CSS.
                  </li>
                  <li className='list-disc'>
                    Responsible for developing user-side apps
                    utilizing frontend frameworks
                  </li>
                  <li className='list-disc'>
                    Developing and maintaining the user
                    interface.
                  </li>
                  <li className='list-disc'>
                    Turning the design into reality on mobile
                    websites.
                  </li>
                  <li className='list-disc'>
                    Developing an interactive single-page
                    application
                  </li>
                </ul>
              </div>

              <div>
                <h4>Technical Assistant (Intern)</h4>
                <p>
                  IJTEK POWER SOLUTIONS
                  March 2023 -Present
                </p>
                <h4>Role / Focus</h4>
                <ul>
                  <li className='list-disc'>
                    Building and managing interactive websites.
                  </li>
                  <li className='list-disc'>
                    Developing and maintaining the user interface.
                  </li>
                  <li className='list-disc'>
                    Turning the design into reality on mobile websites.
                  </li>
                  <li className='list-disc'>
                    Assisting with Installing and configuring inverters
                  </li>
                  <li className='list-disc'>
                    Maintaining records and documentation
                  </li>
                  <li className='list-disc'>
                    Provide support to the installation team and ensure that
                    the installation process goes smoothly and efficiently.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex my-4'>
            <div className='flex flex-col w-[50%] '>
              <h2 className='font-bold text-[18px] '>TRAINING & DEVELOPMENT</h2>
              <h4>
                Bincom Global Tech
              </h4>
              <h4> May 2021 - Present</h4>
              <p>
                BIncom Dev Center Is a Multi-location based
                Training and Development Center for
                Technology Resources and Technology
                Solutions.
              </p>
            </div>

            <div className='flex flex-col w-[50%] '>
              <div className='flex flex-col items-center'>
                <h4 className='font-bold text-[18px] '>EDUCATION</h4>
                <h4>Bincom Academy(Front-End Mobile App Class)</h4>
                <p>May 2021 -Present</p>
              </div>
              <div className='flex flex-col mx-[4rem] '>
                <div className='m-2 p-2 rounded-2xl bg-[#03989e] text-white self-start'>
                  <p className=''>
                    Mobile Beginners Class
                  </p>
                </div>
                <p className='m-2 p-2 rounded-2xl bg-[#03989e] text-white self-end'>
                  Mobile Intermediate Class
                </p>
                <p className='m-2 p-2 rounded-2xl bg-[#03989e] text-white self-start'>
                  Advanced Front-End Class
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='font-bold '>
                  Secondary School certificate
                </h3>
                <h4 className='text-[12px] '>
                  Deyo-Tuwo Comprehensive High School, Ododeyo-Imewuro
                </h4>
                <p>2002</p>
              </div>
            </div>
          </div>

          <div className='items-center flex flex-col mx-[8%] '>
            <h2 className='font-bold text-[18px] '>SOFT/TECHNICAL SKILLS</h2>
            <div className='flex justify-between flex-wrap '>
              <p className='m-2 p-2  rounded-2xl bg-[#03989e] text-white ' > Version Control Systems: Git, GitLab, GitHub </p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '> HTML</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Javscript</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>CSS</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Responsive Web Design</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Technical Documentation</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Team Collaboration</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Content Creation Tools</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Analytical & Problem solving</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>Critical-Thinking</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl '>ReactJS</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default CV