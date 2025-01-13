import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BoxReveal } from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";



export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% ...">
    <nav className="m-0 p-0 fixed top-0 w-full z-10 ">
          <div className="mx-auto">
            <div className="flex justify-between items-center py-4 px-4 md:px-16 bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% ...">
              <div className="w-40 md:w-64">
                <Image src="/logo.svg" alt="Logo" width="250" height="150" />
              </div>
              <div>
                <Link href="/login" className="text-[#ff6600] font-eurostile-bold">
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="ml-2 bg-[#ff6600] font-eurostile-bold hover:!bg-cyan-700 text-black">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex md:flex-row md-0 md:mb-32 flex-col md:mt-32 mt-16 px-3 md:px-32 mx-auto font-eurostile-bold">
          <div className="h-full w-full max-w-[40rem] items-center justify-center overflow-hidden pt-8 font-eurostile-bold">
            <BoxReveal boxColor={"#04BFAD"} duration={0.5}>
              <p className="md:text-[3rem] text-[1.75rem] font-eurostile-bold text-black">
              Ace Your Interviews with AI-Powered Mock Sessions{" "}
                <span className="text-[#00f7d6]">!</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#ff6600"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem] text-black">
              Simulate real-life interviews, get feedback from AI, and{" "}
                <span className="text-[#ff6600]">boost your confidence to land your dream job!</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#ff6600"} duration={0.5}>
              <div className="mt-[1.5rem] text-black">
                <p>
                  -&gt; <span className="font-semibold text-[#ff6600]">AI-Powered Interview Simulation : </span>Practice interviews with AI-generated questions tailored to your job role. <br />
                  -&gt; <span className="font-semibold text-[#ff6600]">Detailed Feedback:</span>Get real-time feedback on your answers, including strengths and areas for improvement. <br />
                  -&gt; <span className="font-semibold text-[#ff6600]">Customizable Mock Sessions:</span>Set the job role, experience level, and specific topics to focus on. <br />
                  -&gt; <span className="font-semibold text-[#ff6600]">Analytics Dashboard:</span>Track your progress and improve over time <br />
                  -&gt; <span className="font-semibold text-[#ff6600]">Industry-Specific Questions:</span>Prepare for roles in tech, finance, marketing, and more. <br />
                  
                </p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#00f7d6"} duration={0.5}>
              <Link href={"/dashboard"}>
                <Button className="mt-[1.6rem] bg-[#00f7d6] hover:!bg-cyan-700 text-black">
                Start Your Free Trial
                </Button>
              </Link>
              <Link href={"/GLBAT.apk"} download="GLBAT.apk" passHref>
                <Button className="mt-[1.6rem] bg-[#00f7d6] hover:!bg-cyan-700 ml-2 text-black">
                Learn More
                </Button>
              </Link>
            </BoxReveal>
          </div>
          <BlurFade delay={0.25 * 2} inView>
            <div id="main-image" className="md:px-8 py-16 md:py-0">
              <img
                src="/mainpic.webp"
                width={1000}
                height={800}
                alt="mainpic-image"
              ></img>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.25 * 4} inView>
        <div className="flex flex-col justify-center items-center gap-4 md:mt-16 !mt-0 md:p-0 px-4 py-4 bg-black">
          <p className="md:text-[3rem] text-[1.75rem] font-bold text-white">
             How it works <span className="text-[#00f7d6]">.</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <div className="box">
                <p className="text-white text-[1.5rem] font-bold">Step 1:</p>
                <p className="text-white text-[1.5rem] font-semibold">Sign up and select your job role.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <div className="box">
                <p className="text-white text-[1.5rem] font-bold">Step 2:</p>
                <p className="text-white text-[1.5rem] font-semibold">Start a mock interview tailored to your preferences.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <div className="box">
                <p className="text-white text-[1.5rem] font-bold">Step 3:</p>
                <p className="text-white text-[1.5rem] font-semibold">Receive detailed feedback and actionable insights.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <div className="box">
                <p className="text-white text-[1.5rem] font-bold">Step 4:</p>
                <p className="text-white text-[1.5rem] font-semibold">Improve your performance with practice and analytics.</p>
              </div>
            </div>
          </div>
          {/* <h2 className="mt-[.5rem] text-[0.3] md:text-[1rem] text-center font-semibold text-white">
             Say goodbye to manual attendance with our automated GPS tracking functionality app GLBAT.{" "}
              <br />
              Its a user friendly app that aims at managing the workhours of your workforce seamlessly {" "}
              <br />
              ensuring accuracy and reliability with GPS enabled check-ins and time tracking.{" "}
          </h2> */}
        </div>
        </BlurFade>

        {/* <div className="s-placer">
          <div className="editor socials">
            <div className="content-wrapper">
              <div className="mobile-icons top">
                <img className="i-8 aos-init aos-animate lazyloaded" data-aos-once="true" data-aos="zoom-in" data-aos-delay="900" src="/assets/icons/a-icon.png" alt="icon" data-ll-status="loaded"></img>
                <img className="i-2 aos-init lazyloaded aos-animate" data-aos-once="true" data-aos="zoom-in" data-aos-delay="700" src="/assets/icons/airnb-icon.png" alt="icon" data-ll-status="loaded"></img>
                <img className="i-12 aos-init aos-animate lazyloaded" data-aos-once="true" data-aos="zoom-in" data-aos-delay="900" src="/assets/icons/ap-icon.png" alt="icon" data-ll-status="loaded"></img>
                <img className="i-7 aos-init aos-animate lazyloaded" data-aos-once="true" data-aos="zoom-in" data-aos-delay="900" src="/assets/icons/facebook-icon.png" alt="icon" data-ll-status="loaded"></img>
              </div>
              <h3>Thousands of Questions</h3>
              <h2>We've got questions</h2>
              <p>
                "Interview"<br />
              </p>
            </div>
          </div>
        </div> */}
    </main> 
    </>
  );
}
