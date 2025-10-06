import { useContext } from 'react'
import { MainContext } from './MainContext'
import { FaLaptopCode, FaRegHandshake } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa6';
import { TbTargetArrow } from 'react-icons/tb';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText)


const Skills = () => {

    useGSAP(() => {

        gsap.killTweensOf('.softcard', '.techcard')
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
                end: 'bottom 20%',
                scroller: 'main',
                //? toggleActions: 'enter leave enterback leaveback',
                toggleActions: 'restart none restart none',
                // scrub: true,
            }
        },);

        tl1.from('.softcard', {
            transformOrigin: "center center",
            y: 50,
            duration: 0.6,
            opacity: 0,
            ease: "sine.out",
            stagger: 0.2,
        }, 0)
            .from('.techcard', {
                transformOrigin: "center center",
                x: -150,
                duration: 0.6,
                opacity: 0,
                ease: "sine.out",
                stagger: 0.2,
            }, 0)
    })



    const { data, lang } = useContext(MainContext)

    const techCards = Object.entries(data.skills.tech.cards).map(([key, value]) => ({ id: key, ...value }))
    const softCards = Object.entries(data.skills.soft.cards).map(([key, value]) => ({ id: key, ...value }))

    return (
        <section id='skills' dir={lang === 'en' ? 'ltr' : 'rtl'}
            className='min-h-dvh relative snap-start overflow-hidden
        bg-[url("images/skills2.png")] bg-no-repeat bg-cover
        items-center justify-center z-0 pt-[64px]
        '>
            <div className="ov absolute top-0 left-0 bg-black/25 size-[100%] z-[-1]"></div>

            <div className="content container max-w-[90%] xl:max-w-[1200px] 2xl:max-w-[1440px]
            mx-auto h-full flex flex-col items-center justify-start md:justify-evenly">
                <div className={`main-title capitalize flex items-center gap-1 my-6 text-white
                    ${lang === 'en' ? 'font-fugaz' : 'font-changa mb-6'}
                    font-bold text-3xl md:text-4xl`}>
                    <div className="icon text-theme-700 flex w-fit justify-between text-lg h-full items-center gap-1">
                        <FaCircle className='animate-[bounce_1.8s_0.3s_infinite]' size={12} />
                        <FaCircle className='animate-[bounce_1.8s_0.6s_infinite]' size={12} />
                        <FaCircle className='animate-[bounce_1.8s_0.9s_infinite]' size={12} />
                    </div>
                    {data.skills.maintitle[lang]}
                    <div className="icon text-theme-700">
                        <TbTargetArrow />
                    </div>
                </div>
                <div className='all flex flex-col lg:flex-row justify-evenly w-full gap-5'>
                    <div className="tech">
                        <div className="tech-title flex items-center gap-3 mb-3">
                            <div className="text-3xl md:text-5xl text-theme-700 mx-1">
                                <FaLaptopCode />
                            </div>
                            <h3 className={`text-2xl md:text-4xl capitalize font-semibold text-white
                            ${lang === 'en' ? 'font-fugaz' : 'font-changa'}
                            `}>
                                {data.skills.tech.techtitle[lang]}
                            </h3>
                        </div>
                        <div className="tech-holder justify-center items-center content-center gap-5
                        grid grid-cols-2 md:grid-cols-[auto_auto_auto] md:grid-rows-[auto_auto]">
                            {techCards.map(card => {
                                return (
                                    <div key={card.id}
                                        className="techcard bg-white/5 h-fit w-full md:w-[130px] backdrop-blur-xs relative
                                        overflow-hidden card-shadow
                                        shadow-md shadow-theme-500/20 border border-theme-500 rounded-md
                                        bg-radial from-transparent from-[50%] to-theme-700/10 to-[100%]
                                        flex flex-col items-center justify-center md:py-3 py-1
                                        select-none cursor-pointer
                                        font-fugaz text-lg
                                        hover-shine
                                        hover:scale-[1.06
                                        relative z-20
                                        "
                                    >
                                        <div className={`name text-white mb-1 text-center font-quantico font-bold text-xs md:text-sm px-3 w-full`}>
                                            {card.id}
                                        </div>
                                        <div className="icon size-[30px] md:size-[40px] p-0.5 text-white grow flex justify-center items-center">
                                            {card.icon}
                                        </div>
                                        <div className="num font-quantico -mb-1 md:mt-2 text-xs md:text-sm font-extrabold text-white">
                                            {card.precent}
                                            <span className='text-theme-500'>%</span>
                                        </div>
                                        <div className="progress h-1 w-20 bg-white flex items-center rounded-full my-2">
                                            <div style={{ width: `${card.precent}%` }}
                                                className={`h-full bg-theme-700 rounded-sm
                                            ${lang === 'en' ? '-translate-x-0.5' : 'translate-x-.5'}
                                                `}>
                                            </div>
                                            <div className={`size-2 rounded-full bg-theme-500
                                                 ${lang === 'en' ? '-translate-x-1.5' : 'translate-x-1.5'}
                                                 before:size-2
                                                 before:absolute relative
                                                 before:bg-white/50
                                                 before:top-1/2
                                                 before:left-1/2
                                                 before:-translate-1/2
                                                 before:rounded-full
                                                 before:animate-ping
                                                 `}></div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="soft">
                        <div className="soft-title flex items-center gap-3 mb-3">
                            <div className="text-theme-700 text-3xl md:text-5xl mx-1">
                                <FaRegHandshake />
                            </div>
                            <h3 className={`text-2xl md:text-4xl capitalize font-semibold text-white
                            ${lang === 'en' ? 'font-fugaz' : 'font-changa'}
                            `}>
                                {data.skills.soft.softtitle[lang]}
                            </h3>
                        </div>
                        <div className="cards-holder justify-center items-center content-center gap-5
                        grid grid-cols-2 md:grid-cols-[auto_auto_auto] md:grid-rows-[auto_auto]">
                            {softCards.map(card => {
                                const Myicon = card.icon
                                return (
                                    <div key={card.id}
                                        className="softcard bg-white/5 h-fit w-full md:w-[165px] backdrop-blur-xs relative
                                        overflow-hidden inset-shadow-xs inset-shadow-theme-500/50 gap1.5 md:gap-3 p-1.5 md:p-3
                                        shadow-md shadow-theme-500/20 border border-theme-500 rounded-md
                                        bg-radial from-transparent from-[50%] to-theme-700/10 to-[100%]
                                        flex flex-row md:flex-col items-center justify-center py-3
                                        select-none cursor-pointer hover:scale-[1.04] text-lg
                                        hover-shine card-shadow
                                        ">
                                        <div className={`name text-white text-center text-xs md:text-sm w-full
                                        ${lang === 'en' ? 'font-quantico font-normal capitalize' : 'font-readex'}
                                        `}
                                        >
                                            {card.title[lang]}
                                        </div>
                                        <div className="icon size-[30px] md:size-[40px] p-0.5 text-theme-500 grow flex justify-center items-center">
                                            {Myicon}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div >
        </section >
    )
}

export default Skills