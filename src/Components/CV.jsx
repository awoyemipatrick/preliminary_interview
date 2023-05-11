import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'


const CV = () => {

  return (
    <main className='flex flex-col items-center '>
      <h1 className='text-[24px] font-bold my-8 '>My CV </h1>
      <div className='flex flex-col items-center mx-[20%] text-black bg-white my-[2rem] '>
        <div className='flex flex-col items-center '>
          <h1 className='lg:text-[40px] text-[1.5rem] font-bold mt-[1rem] '>Awoyemi Patrick Gbenga</h1>
          <p className='text-[1.3rem] opacity-50 mt-[1rem] '> Front-End Engineer</p>
        </div>
        <div>
          <div className=' justify-center text-center lg:flex px-[1rem] '>
            <a className='my-8 mx-4 p-2 bg-[#03989e] text-white rounded-2xl flex justify-center items-center ' href=""> <span className='text-white mx-2 bg-black p-[0.3em] rounded-2xl text-[1.2rem] ' ><MdPhone /> </span> 0-816-118-5089</a>
            <a className='my-8 mx-4 p-2 bg-[#03989e] text-white rounded-2xl flex justify-center items-center ' href=""> <span className='text-black mx-2 text-[2rem] ' ><MdEmail /></span> awoyemipatrick33@yahoo.com</a>
          </div>

          <div>
            <p className='mx-[1rem] text-[1rem] tracking-wide '>
              I have an understanding of web development technologies such as HTML, CSS, and JavaScript. I am
              proficient in using JavaScript frameworks such as ReactJS. I have experience building responsive
              and mobile-friendly web pages and am able to effectively use CSS preprocessors such as SASS. I am
              also familiar with cross-browser compatibility issues and can implement solutions to ensure a
              consistent user experience. I am a quick learner, and a proactive problem-solver, and am able to
              work well in a team environment. I am excited to continue honing my skills and learning new
              technologies in a professional setting.
            </p>
          </div>

          <div className='items-center flex flex-col  my-6'>
            <h2 className='font-bold text-[18px] my-8 underline decoration-[#03989e] decoration-4 '>EXPERIENCE</h2>
            <div className='lg:flex justify-between '>
              <div className='mx-[2rem] lg:max-w-[40%] mb-8 '>
                <h4 className='font-bold'>Front-End Mobile App Developer</h4>
                <p className='leading-8 opacity-50'>
                  BINCOM ICT SOLUTIONS <br />
                  May 2021 -Present
                </p>
                <h4 className='font-bold my-2'>Role / Focus</h4>
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

              <div className='mx-[2rem] lg:max-w-[40%]'>
                <h4 className='font-bold'>Technical Assistant (Intern)</h4>
                <p className='leading-8 opacity-50'>
                  IJTEK POWER SOLUTIONS <br />
                  March 2023 -Present
                </p>
                <h4 className='font-bold my-2'>Role / Focus</h4>
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

          <div className=' flex-col lg:mx-[2rem] mx-4 mt-[4rem]'>

            <div className='lg:flex mx-4 '>

              <div className=' lg:w-[50%] mb-[2rem] '>
                <h2 className='font-bold text-[18px] underline decoration-[#03989e] decoration-4 '>TRAINING & DEVELOPMENT</h2>
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

              <div className='flex flex-col lg:w-[50%]'>
                <div className='flex flex-col items-center'>
                  <h4 className='font-bold text-[18px] underline decoration-[#03989e] decoration-4'>EDUCATION</h4>
                  <h4>Bincom Academy(Front-End Mobile App Class)</h4>
                  <p>May 2021 -Present</p>
                </div>
                <div className='lg:flex flex-col lg:mx-[1.5rem] mx-[8%]  '>
                  <div className='m-2 p-2 rounded-2xl bg-[#03989e] text-[12px] text-white flex justify-center items-center self-start'>
                    <p className=''>
                      Mobile Beginners Class
                    </p>
                  </div>
                  <p className='m-2 p-2 rounded-2xl bg-[#03989e] text-[12px] text-white flex justify-center items-center self-end'>
                    Mobile Intermediate Class
                  </p>
                  <p className='m-2 p-2 rounded-2xl bg-[#03989e] text-[12px] text-white flex justify-center items-center self-start'>
                    Advanced Front-End Class
                  </p>
                </div>
                <div className='flex flex-col items-center my-4'>
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
          </div>

          <div className='items-center flex flex-col mx-[8%] my-6 '>
            <h2 className='font-bold text-[18px] underline decoration-[#03989e] decoration-4'>SOFT/TECHNICAL SKILLS</h2>
            <div className='lg:flex justify-around flex-wrap  '>
              <p className='m-2 p-2  rounded-2xl bg-[#03989e] text-white text-[12px] flex justify-center items-center ' > Version Control Systems: Git, GitLab, GitHub </p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '> HTML</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Javscript</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>CSS</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Responsive Web Design</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Technical Documentation</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Team Collaboration</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Content Creation Tools</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Analytical & Problem solving</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>Critical-Thinking</p>
              <p className='m-2 p-2 bg-[#03989e] text-white rounded-2xl text-[12px] flex justify-center items-center '>ReactJS</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default CV