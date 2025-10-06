import { useContext } from 'react'
import { MainContext } from './MainContext'
import { FaCircle } from 'react-icons/fa'
import { TbCodeCircleFilled } from 'react-icons/tb'
import { HiPlayCircle } from 'react-icons/hi2'
import { SiGoogletasks } from 'react-icons/si'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, SplitText)


const Projects = () => {

    const { data, lang } = useContext(MainContext)


    const projectCards = Object.entries(data.projects.cards).map(([key, value]) => ({ id: key, ...value }))




    useGSAP(() => {
        gsap.killTweensOf(".cool-0, .cool-1, .cool-2");

        const tX = lang === 'en' ? 100 : -100
        let splittitle
        let splitSec

        document.fonts.ready.then(() => {
            document.querySelectorAll('.title').forEach(el => {
                splittitle = new SplitText(el, { type: 'words' })
                gsap.from(splittitle.words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 95%",
                        scroller: 'main',
                        //? toggleActions: 'enter leave enterback leaveback',
                        toggleActions: 'restart none reverse none',
                        // scrub: true,
                    },
                    x: tX,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'sine.out',
                }, 1)
            });

            document.querySelectorAll('.description').forEach(el => {
                splitSec = new SplitText(el, { type: 'words' })
                gsap.from(splitSec.words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 95%",
                        scroller: 'main',
                        //? toggleActions: 'enter leave enterback leaveback',
                        toggleActions: 'restart none reverse none',
                        // scrub: true,
                    },
                    opacity: 0,
                    duration: 1,
                    stagger: 0.07,
                    ease: 'sine.out',
                }, 1)
            });


            //? left col
            //? col-0
            document.querySelectorAll('.cool-0').forEach(el => {
                gsap.fromTo(el,
                    {
                        x: () => lang === 'en' ? -100 : 100,
                        scale: 0.85,
                        opacity: 0.15,
                    },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "bottom 95%",
                            scroller: "main",
                            // toggleActions: 'restart none reverse none',
                            scrub: true,
                        },
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out"
                    });
            });

            //? middle col
            //? col 1
            document.querySelectorAll('.cool-1').forEach(el => {
                gsap.fromTo(el,
                    {
                        scale: 0.85,
                        opacity: 0.15,
                    },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "bottom 97%",
                            scroller: "main",
                            // toggleActions: 'restart none reverse none',
                            scrub: true,
                        },
                        // y: 0,
                        scale: 0.999,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out"
                    });
            });

            //? right col
            //? col 2
            document.querySelectorAll('.cool-2').forEach(el => {
                gsap.fromTo(el,
                    {
                        x: () => lang === 'en' ? 100 : -100,
                        scale: 0.85,
                        opacity: 0.15,
                    },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "bottom 95%",
                            scroller: "main",
                            // toggleActions: 'restart none restart none',
                            scrub: true,
                        },
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out"
                    });
            });
        });

        return (() => {
            ScrollTrigger.getAll().forEach(st => st.kill());
            if (splittitle) splittitle.revert();
            if (splitSec) splitSec.revert();
        })
    }, [lang])









    return (
        <section id='projects' dir={lang === 'en' ? 'ltr' : 'rtl'}
            className='bg-[url("images/water.jpg")] bg-cover bg-repeat py-[64px] relative
            z-0 snap-start flex bg-radial text-white from-black/90 via-black/95 to-black
            overflow-x-hidden
            ' >
            <div className="layer absolute top-0 left-0 size-full z-[-1] bg-black/70"></div>
            <div className='container mx-auto max-w-[95%] xl:max-w-[1200px] 2xl:max-w-[1440px] flex flex-col justify-evenly items-center'>
                <div className={`main-title capitalize flex items-center gap-3 my-10 text-white
                                    ${lang === 'en' ? 'font-fugaz' : 'font-changa'}
                                    font-bold text-4xl`}>
                    <div className="icon text-theme-700 flex w-fit justify-between text-lg h-full items-center gap-1">
                        <FaCircle className='animate-[bounce_1.8s_0.3s_infinite]' size={12} />
                        <FaCircle className='animate-[bounce_1.8s_0.6s_infinite]' size={12} />
                        <FaCircle className='animate-[bounce_1.8s_0.9s_infinite]' size={12} />
                    </div>
                    {data.projects.title[lang]}
                    <div className="icon text-theme-700 text-4xl">
                        <SiGoogletasks />
                    </div>
                </div>
                <div className="cards grid gap-6
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                auto-rows-fr
                w-full
                px-2 sm:px-0
                ">
                    {projectCards.map((card, i) => {
                        return (
                            <div key={card.id} className={`projectcard cool-${i % 3} bg-white/5 h-full min-h-[300px]
                            backdrop-blur-md relative overflow-hidden card-shadow
                            shadow-md shadow-theme-500/20 border border-theme-500 rounded-lg
                            bg-radial from-transparent from-[50%] to-theme-700/10 to-[100%]
                            flex flex-col items-center justify-start select-none cursor-pointer
                            hover:scale-[1.02] font-readex text-lg 
                            `}>
                                <div className="img">
                                    <img src={card.img} alt="" className='aspect-[16/9]' />
                                </div>
                                <div className="text p-5 flex gap-5 flex-col justify-between grow">
                                    <div className="title text-xl font-alexandria">
                                        {card.title[lang]}
                                    </div>
                                    <div className="description text-lg font-light">
                                        {card.description[lang]}
                                    </div>
                                    <div className="btns flex gap-3">
                                        <a className='flex items-center justify-center gap-2 rounded-lg text-center py-1.5 border border-theme-700
                                        bg-theme-700 basis-1/2 text-sm px-1 hover-shine shadow-md transition-colors duration-300 hover:bg-theme-800
                                        group
                                        '
                                            target="_blank" href={card.links.live.url}>
                                            <span className='group-hover:opacity-0 transition-opacity duration-300'>
                                                {card.links.live.label[lang]}
                                            </span>
                                            <div className={`icon rotate-[240deg] group-hover:scale-125
                                            transition-all duration-500 group-hover:-translate-x-[30px] group-hover:rotate-[0turn] -translate-x-[0px]
                                            ${lang === 'en' ? 'group-hover:-translate-x-5' : 'group-hover:translate-x-6.5'}
                                            `}>
                                                <HiPlayCircle size={20} />
                                            </div>
                                        </a>
                                        <a className='flex items-center justify-center gap-2 rounded-lg text-center py-1.5 border border-theme-700
                                        bg-white/5 card-shadow hover-shine hover:bg-white/10 transition-colors
                                        basis-1/2 text-sm px-1 group'
                                            target="_blank" href={card.links.source.url}>
                                            <span className='group-hover:opacity-0 transition-opacity duration-300'>
                                                {card.links.source.label[lang]}
                                            </span>
                                            <div className={`icon rotate-[180deg] text-theme-700 transition-all duration-500
                                            group-hover:rotate-[0turn] -translate-x-[0px] group-hover:scale-125
                                            ${lang === 'en' ? 'group-hover:-translate-x-5.5' : 'group-hover:translate-x-10'}
                                            `}>
                                                <TbCodeCircleFilled size={20} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>



            </div>
        </section >
    )
}

export default Projects