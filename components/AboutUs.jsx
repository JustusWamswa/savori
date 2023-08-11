import Image from "next/image"
import Link from "next/link"

function AboutUs() {
  return (
    <div className="bg-primary text-tertiary w-full relative">
      <div className="bg-[url('/moon.png')] w-full bg-center bg-no-repeat bg-contain bg-fixed">
        <div className="w-full py-12">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold">Get to know us</h1>
            <hr className="mt-2 w-32 bg-tertiary h-1" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 w-4/5 mx-auto mt-16">
            <div className=" w-full shadow-md shadow-zinc-900 flex flex-col items-center p-5">
              <Image
                src={'/group.png'}
                width={50}
                height={50}
                alt="team"
              />
              <h2 className="font-light text-sm tracking-widest mb-5">TEAM</h2>
              <p className="p-2 pb-12 leading-7 tracking-wide">
                The team compromises of numerous sets of skills, all stemming from a remarkably diverse background,
                spanning various industries, cultures, and educational disciplines.
              </p>
            </div>
            <div className=" w-full shadow-md shadow-zinc-900 flex flex-col items-center p-5">
              <Image
                src={'/hand-shake.png'}
                width={50}
                height={50}
                alt="team"
              />
              <h2 className="font-light text-sm tracking-widest mb-5">PARTNERSHIPS</h2>
              <p className="p-2 leading-7 tracking-wide">
                Research and surveys are conducted in partnership with professional personnel
                and institutions to provide quality data. The public is also encouraged to contribute prices.
              </p>
            </div>
            <div className=" w-full shadow-md shadow-zinc-900 flex flex-col items-center p-5">
              <Image
                src={'/career.png'}
                width={50}
                height={50}
                alt="team"
              />
              <h2 className="font-light text-sm tracking-widest mb-5 mt-1">CAREERS</h2>
              <p className="p-2 pb-12 leading-7 tracking-wide">
                We are committed to enabling individuals to develop fulfilling careers through a
                supportive and inclusive atmosphere that nurtures personal growth, continuous learning,
                and professional advancement.
              </p>
            </div>
            <div className=" w-full shadow-md shadow-zinc-900 flex flex-col items-center p-5">
              <Image
                src={'/leader.png'}
                width={50}
                height={50}
                alt="team"
              />
              <h2 className="font-light text-sm tracking-widest mb-5 mt-1">LEADERSHIP</h2>
              <p className="p-2 pb-12 leading-7 tracking-wide">
                Within our company, exceptional leadership prevails, as our visionary team inspires
                and motivates us towards unparalleled accomplishments, propelling us to reach new heights of success.
              </p>
            </div>
          </div>
          <div className="w-4/5 mx-auto mt-32">
            <h1 className="text-center font-light text-2xl tracking-widest">FOUNDER</h1>
            <div className=" flex flex-col md:flex-row items-center">
              <Image
                src={'/meinyellow.png'}
                width={400}
                height={400}
                alt="founder"
              />
              <p className="leading-7 tracking-wide pl-5">I am the founder and the CEO of SAVORi. I love travelling and photography thus my motivation of founding SAVORi.
                Here, I feel at home. Other than travelling, my mission is to provide job opportunities for the youth through technology.
                <br /> <br />
                I am currently a student at African Leadership College, Mauritius, pursuing BSc(Hons) Computing. I love programming,
                network technology and cyber security. I am good in java, python, html, css and android development. I am a freelance
                programmer when taking a break from school work and I enjoy it so much.
                <br /><br />
                My personal contact is
                <a href="mailto: j.chemirmir@alustudent.com" className="hover:text-secondary hover:border-b-2 border-b-secondary"> j.chemirmir@alustudent.com</a>.
              </p>
            </div>
          </div>
          <div className="w-3/5 mx-auto mt-16">
            <h1 className="text-center font-light text-2xl tracking-widest mb-6">PROJECT OVERVIEW</h1>
            <div className=" flex flex-col items-center">
              <p className="leading-7 tracking-wide pl-5">
                The project is aimed at developing and designing a web application that will help tourists to locate restaurants within specific countries.
                The website should be user-friendly, responsive and make use various APIs to get information about restaurants. Different visualisation techniques
                should be used to present data. <br /><br />
              </p>
              <div className="md:flex">
                <span className="font-semibold pr-3">Key Functionalities:</span> <br />
                <ul>
                  <li className="pl-2">&#8226; API Integration</li>
                  <li className="pl-2">&#8226; Mapping Software</li>
                  <li className="pl-2">&#8226; Visualization Techniques</li>
                  <li className="pl-2">&#8226; User Interaction</li>
                  <li className="pl-2">&#8226; APIs and Data Sources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutUs