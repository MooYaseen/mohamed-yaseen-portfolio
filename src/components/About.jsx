import React, { useContext } from 'react'
import { MainContext } from './MainContext'
import { PiDotsSixVerticalThin } from 'react-icons/pi'
import { FaGraduationCap } from 'react-icons/fa6'
import { LuLanguages } from 'react-icons/lu'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)


const About = () => {

    const { data, lang } = useContext(MainContext)


    useGSAP(() => {
        let parSplit;

        const ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                parSplit = new SplitText('.paragraph', { type: 'lines' });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 10%',
                        end: 'bottom center',
                        scroller: 'main',
                        toggleActions: 'restart reset restart reset',
                    }
                })
                    .fromTo('.sec-title',
                        {
                            x: () => lang === 'en' ? 150 : -150,
                            opacity: 0
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: 0.1,
                            ease: "power1.out"
                        }
                    )
                    .fromTo(parSplit.lines,
                        {
                            y: 20,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            stagger: 0.2,
                            ease: "power1.out"
                        }
                    )
                    .fromTo('.moyaseen',
                        {
                            y: 100,
                            scale: 0.65
                        },
                        {
                            y: 0,
                            scale: 1,
                            duration: 2.1,
                            ease: 'expo.out'
                        }, 0
                    );

                gsap.to('.main-img', {
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top top',
                        end: 'bottom 20%',
                        scroller: 'main',
                        scrub: true,
                    },
                    y: 90,
                    stagger: 0.1
                });
                gsap.fromTo('.dots',
                    {
                        x: 0
                    },
                    {
                        scrollTrigger: {
                            trigger: '#about',
                            start: 'top top',
                            end: 'bottom 20%',
                            scroller: 'main',
                            scrub: true,
                        },
                        x: () => lang === 'en' ? -300 : 300,
                    }
                );
            });
        });

        // ✅ التنضيف هنا مش جوه then
        return () => {
            ctx.revert();
            if (parSplit) parSplit.revert();
            gsap.killTweensOf('*');
        };
    }, [lang]);




    return (
        <section id='about' dir={lang === 'en' ? 'ltr' : 'rtl'}
            className='min-h-dvh overflow-x-hidden relative overflow-y- z-0 snap-start flex items-center bg-radial text-white from-black/90 via-black/95 to-black'>

            <div className={`corner absolute top-0 w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-transparent
                ${lang === 'en' ? 'right-0' : 'left-0 -rotate-90'}
               border-r-[8px] md:border-r-[15px] md:border-t-[15px] border-t-[8px] border-theme-700`}></div>
            <div className={`corner absolute bottom-0 w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-transparent
                ${lang === 'en' ? 'left-0' : 'right-0 -rotate-90'}
               border-l-[8px] md:border-l-[15px] md:border-b-[15px] border-b-[8px] border-theme-700`}></div>

            {/* <div className={`line h-2 w-[300px] absolute bg-gradient-to-r top-[40px]
                z-[-1] ${lang === 'en' ? 'left-[0] from-theme-700 to-theme-950'
                    : 'right-[0] from-theme-950 to-theme-700'}`}>
            </div>
            <div className={`line h-2 w-[200px] absolute bg-gradient-to-r top-[80px]
                z-[-1] ${lang === 'en' ? 'left-[0] from-theme-700 to-theme-950'
                    : 'right-[0] from-theme-950 to-theme-700'}`}>
            </div>
            <div className={`line h-2 w-[100px] absolute bg-gradient-to-r top-[120px]
                z-[-1] ${lang === 'en' ? 'left-[0] from-theme-700 to-theme-950'
                    : 'right-[0] from-theme-950 to-theme-700'}`}>
            </div> */}

            <div className={`dots absolute bottom-9 text-[200px] hidden md:block
                ${lang === 'en' ? 'right-9' : 'left-9'}
                text-theme-700`}>
                <PiDotsSixVerticalThin />
            </div>


            <div className='container min-h-dvh max-w-[90%] xl:max-w-[1200px] 2xl:max-w-[1440px] overflow-hidden
            flex-col-reverse md:flex-row h-full md:h-fit
            mx-auto flex justify-end gap-5 md:justify-around items-center grow pt-[40px] md:pt-[64px]'>
                <div className="basis-1/2 h-full flex flex-col justify-center">
                    <div className="who">
                        <div className={`sec-title capitalize flex items-baseline gap-3 mb-2
                        ${lang === 'en' ? 'font-fugaz' : 'font-changa mb-6'}
                        font-bold text-2xl md:text-4xl`}>
                            <div className="dot h-4 w-4 rounded-full bg-theme-700"></div>
                            {data.about.maintitle[lang]}
                            <span className=' text-theme-700 font-alexandria text-4xl md:text-6xl'>
                                {lang === 'en' ? '?' : '؟'}
                            </span>
                        </div>
                        <div className={`paragraph text-sm md:text-xl leading-9 mb-3
                        ${lang === 'en' ? 'font-readex font-light capitalize' : 'font-changa'}
                        `}>
                            {data.about.job[lang]}
                        </div>
                    </div>
                    <div className="line h-1 w-[260px] bg-theme-700 my-3"></div>
                    <div className="education">
                        <div className="sec-title flex items-center gap-3 mb-2">
                            <div className="circle h-4 w-4 rounded-full bg-theme-700"></div>
                            <h3 className={`text-2xl md:text-4xl capitalize font-semibold
                            ${lang === 'en' ? 'font-fugaz' : 'font-changa'}
                            `}>
                                {data.about.subtitle[lang]}
                            </h3>
                            <div className="icon text-3xl md:text-4xl text-theme-700"><FaGraduationCap /></div>
                            <div className={`date grow text-end text-xsm
                                ${lang === 'en' ? 'font-ropa' : 'font-readex'}
                                `}>
                                {data.about.date[lang]}
                            </div>
                        </div>
                        <div className={`paragraph dagree text-sm md:text-xl leading-9
                        ${lang === 'en' ? 'font-readex font-light capitalize' : 'font-changa'}
                        `}>
                            {data.about.education[lang]}
                        </div>
                    </div>
                    <div className="line h-1 w-[360px] bg-theme-700 my-3"></div>
                    <div className="languages">
                        <div className="sec-title flex items-center gap-3 mb-2">
                            <div className="circle h-4 w-4 rounded-full bg-theme-700"></div>
                            <h3 className={`text-2xl md:text-4xl capitalize font-semibold
                            ${lang === 'en' ? 'font-fugaz' : 'font-changa'}
                            `}>
                                {data.about.languages.title[lang]}
                            </h3>
                            <div className="icon text-3xl md:text-4xl text-theme-700"><LuLanguages /></div>
                        </div>
                        <div className={`paragraph content text-sm md:text-xl leading-9
                        ${lang === 'en' ? 'font-readex font-light capitalize' : 'font-changa'}`}>
                            {data.about.languages.content[lang]}
                        </div>
                    </div>
                </div>
                <div className="main-img rounded-full overflow-hidden w-fit
                before:w-[12rem] md:before:w-[18rem] lg:before:w-[24rem] before:h-[12rem] md:before:h-[17.5rem] lg:before:h-[23.5rem] before:rounded-full
                before:absolute relative
                before:content-[''] before:z-[-1] before:-bottom-2 before:left-1/2
                before:-translate-x-1/2
                z-10">
                    <img src="images/me2-logo.png" alt="" className='moyaseen w-[13rem] md:w-[20rem] lg:w-[25rem]' />
                </div>

            </div >
        </section >
    )
}

export default About