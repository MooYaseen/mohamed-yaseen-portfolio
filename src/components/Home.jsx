import { useContext } from 'react'
import { MainContext } from './MainContext'
import { FaLinkedin, FaQuoteRight, FaSquareFacebook } from 'react-icons/fa6'
import { FaAngleDoubleDown, FaGithubSquare } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(SplitText, ScrollTrigger)

const Home = () => {
    const { lang, data } = useContext(MainContext)

    const homeData = data["home"]

    let contactX
    let resumeX
    let socialX
    let arStagger


    useGSAP(() => {

        let jobSplit, timeline;

        gsap.killTweensOf(['.hi', '.firstname', '.lastname', '.job', '.contact', '.resume', '.social a']);
        gsap.set(['.hi', '.firstname', '.lastname', '.job', '.contact', '.resume', '.social a'], {
            clearProps: "all",
        });



        document.fonts.ready.then(() => {

            contactX = lang === 'en' ? 100 : -100;
            resumeX = lang === 'en' ? -100 : 100;
            socialX = lang === 'en' ? -80 : 80;
            arStagger = lang === 'en' ? 0.06 : 0.12;

            jobSplit = new SplitText('.job', { type: lang === 'en' ? 'chars' : 'words' });
            const job = lang === 'en' ? jobSplit.chars : jobSplit.words;

            timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#home',
                    start: 'top 1%',
                    end: 'bottom 2%',
                    scroller: 'main',
                    toggleActions: 'restart none restart none',
                }
            });

            const social = document.querySelectorAll('.social a');

            timeline
                .fromTo('.hi',
                    { y: -80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: 'bounce.out' }, 0.5
                )
                .fromTo('.resume',
                    { x: resumeX, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.9, ease: 'bounce.out' }, '<'
                )
                .fromTo('.contact',
                    { x: contactX, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.9, ease: 'bounce.out' }, '<'
                )
                .fromTo(social,
                    { x: socialX, opacity: 0 },
                    { x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'sine.out' }, '<'
                )
                .fromTo('.firstname',
                    { x: 120, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: 'power1.out' }
                )
                .fromTo('.lastname',
                    { x: -120, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: 'power1.out' }, '<'
                )
                .fromTo(job,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, ease: 'expo.out', duration: 0.8, stagger: arStagger }
                )
                .to('.job',
                    { opacity: 1, ease: 'expo.out', duration: 0.5, stagger: arStagger }, 0
                )
        });

        return () => {
            if (timeline) timeline.kill();
            if (jobSplit) jobSplit.revert();
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === '#home') trigger.kill();
            });
        };
    }, [lang]);

    return (
        <section id='home' dir={lang === 'en' ? 'ltr' : 'rtl'}
            className={`h-dvh relative text-gray-50 snap-start w-full 
             ${lang === "en" ? "bg-[url('images/home-en.jpg')] bg-[70%]" : "bg-[url('images/home-ar.jpg')] bg-[30%]"}
            md:bg-center
         bg-cover bg-no-repeat flex flex-col z-0 overflow-x-hidden select-none
         `}
        >
            <div className='absolute w-full h-full top-0 left-0 bg-black/65 md:bg-black/40 z-[-1]'></div>
            <div className="content container mx-auto grow flex flex-col gap-2 md:gap-0
            justify-center items-start relative max-w-[90%] xl:max-w-[1200px] 2xl:max-w-[1440px]
            ">
                <h1 className={`hi opacity-0 uppercase text-2xl md:text-3xl flex font-semibold italic text-theme-700
                ${lang === 'en' ? 'font-quantico items-start' : 'font-alexandria items-end'}
                `}
                >
                    <span>{homeData.hi[lang].a}</span>
                    <span className='text-white mx-1'>{homeData.hi[lang].b}</span>
                    <span>{homeData.hi[lang].c}</span>

                </h1>
                <h2 className={`firstname opacity-0 uppercase text-3xl md:text-5xl flex font-bold italic
                ${lang === 'en' ? 'font-quantico items-start' : 'font-changa leading-0 items-end'}
                `}
                >
                    <span className={`text-3xl text-theme-700
                    ${lang === 'en' ? '-scale-x-100' : ''}`}>
                        <FaQuoteRight />
                    </span>
                    {homeData.firstname[lang]}
                </h2>
                <h2 className={`lastname opacity-0 uppercase flex items-baseline gap-2 text-6xl md:text-8xl font-bold italic
                ${lang === 'en' ? 'font-quantico' : 'font-changa'}

                `}
                >{homeData.lastname[lang]}
                    <span className='block text-theme-700 w-5 h-5 bg-theme-700 rounded-sm -skew-x-4 shadow-[1px_1px_white] size-fit shadow-white'></span>
                </h2>
                <h3 className={`job opacity-0 text-2xl md:text-3xl capitalize tracking-[5px] font-thin my-6
                 font-changa
                `}
                >{homeData.jobtitle[lang]}</h3>
                <div className={`btns flex gap-8 w-full md:w-fit
                ${lang === 'en' ? 'font-quantico font-semibold text-xl' : 'font-cairo font-bold text-md'}
                `}>
                    <a
                        href="cv/MY-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`resume opacity-0 basis-1/2 block px-2 min-w-34 md:min-w-42 text-center py-2 border-1 border-white text-white
                            rounded-lg cursor-pointer shadow-2xs backdrop-blur-xs bg-white/5 hover:bg-white/10
                            hover:text-blac/85 hover:border-white
                            active:scale-[0.97] hover-shine
                        `}
                    >
                        {homeData.btns.cv[lang]}
                    </a>
                    <a className={`contact opacity-0 basis-1/2 block px-2 min-w-34 md:min-w-42 text-center py-2 text-white
                    bg-gradient-to-b from-theme-700 from-95% hover:from-0% hover:to-0% to-100% to-theme-800 rounded-lg cursor-pointer  
                    shadow-2xs shadow-white
                    active:scale-[0.98]
                    active:shadow-none
                     `}
                        href='#contact'
                    >
                        {homeData.btns.contact[lang]}
                    </a>
                </div>
                <div className={`icons flex gap-3 w-full items-end md:items-baseline justify-between text-4xl absolute
                    bottom-10 ${lang === 'en' ? 'left-1/2 -translate-x-1/2' : '-right-1/2 -translate-x-1/2'}`}>
                    <div className="small flex items-center gap-2">
                        <div className='h-1 w-[50px] rounded-full bg-theme-700'></div>
                    </div>
                    <a href='#about' className="scroll block text-theme-700 animate-bounce">

                        <FaAngleDoubleDown />
                    </a>
                    <div className="social flex flex-col md:flex-row gap-3">
                        <a href="https://github.com/MooYaseen" target="_blank" rel="noopener noreferrer"
                            className='opacity-0'
                        >
                            <FaGithubSquare />
                        </a>
                        <a href="https://www.linkedin.com/in/mo-yaseen/" target="_blank" rel="noopener noreferrer"
                            className='opacity-0'
                        >
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/MoYaseen74/" target="_blank" rel="noopener noreferrer"
                            className='opacity-0'
                        >
                            <FaSquareFacebook />
                        </a>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Home