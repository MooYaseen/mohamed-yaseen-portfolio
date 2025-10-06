import { useContext, useEffect, useState, useRef } from 'react'
import { MainContext } from './MainContext'
import { FaCircleHalfStroke, FaXmark } from 'react-icons/fa6'
import { LuAlignJustify } from 'react-icons/lu'
import { PiListBold } from 'react-icons/pi'
const Nav = () => {

    const { lang, setLang, data, links, currentTheme, setCurrentTheme, activeSection } = useContext(MainContext)

    const [showThemes, setShowThemes] = useState(false)
    const [showNav, setShowNav] = useState(false)


    const bgThemes = Object.entries(data.nav.themes).map(([key, val]) => ({ key, val }))




    const navRef = useRef(null);
    const themeRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setShowNav(false);
            }
            if (themeRef.current && !themeRef.current.contains(e.target)) {
                setShowThemes(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div dir='ltr' className='nav container max-w-[90%] xl:max-w-[1200px] 2xl:max-w-[1440px]
        w-full mx-auto top-0 text-white flex justify-between items-center
        px-8 bg-white/10 rounded-bl-4xl rounded-br-4xl backdrop-blur-lg
        z-30 fixed left-1/2 -translate-x-1/2'>
            <div className="logo">
                <a href="#home" className='block'>
                    <img src="images/my.png" alt="" className='w-10' />
                </a>
            </div>
            <ul ref={navRef} className={`md:gap-6 rounded-lg flex-col bg-black/95 md:bg-transparent transition-all duration-200
            ${showNav ?
                    'absolute opacity-100 top-[100%] pointer-events-auto'
                    :
                    'absolute md:static opacity-0 top-[-100%] pointer-events-none md:opacity-100 md:pointer-events-auto'
                }
            md:flex-row w-full left-0 md:flex md:justify-center`}
                dir={lang === 'en' ? 'ltr' : 'rtl'}>
                {links.map(link => {
                    return (
                        <li key={link.id}
                            onClick={() => {
                                setShowNav(false)
                            }}
                        >
                            <a href={`#${link.id}`}
                                className={`block px-2 text-center py-5 uppercase relative 
                            before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                            before:h-1 before:bg-white hover:before:w-full before:transition-all
                            before:duration-300 before:rounded-lg
                            ${lang === 'en' ? 'font-fugaz' : 'font-semibold font-changa'}
                            ${activeSection === link.id ?
                                        'before:w-full link text-theme-500 text-shadow-sm text-shadow-black'
                                        : 'before:w-0 text-white text-shadow-2xs text-shadow-black'
                                    }
                            `}
                            >
                                {link.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="toggles flex items-center gap-3">
                <div className="langs relative w-fit flex items-center bg-transparent">
                    <ul className='flex gap-1 justify-between items-center rounded-full border border-theme-700
                     text-[12px] font-bold uppercase select-none'
                    >
                        <li
                            className={`en px-3 py-1 cursor-pointer rounded-full font-fugaz
                                ${lang === 'en' ? 'text-white bg-theme-700' : 'text-white/45'}`}
                            onClick={() => {
                                setLang('en')
                            }}
                        >
                            en
                        </li>
                        <li
                            className={`ar px-2 py-1 cursor-pointer rounded-full font-cairo
                                ${lang === 'ar' ? 'text-white bg-theme-700' : 'text-white/45'}`}
                            onClick={() => {
                                setLang('ar')
                            }}
                        >
                            عربي
                        </li>
                    </ul>
                </div>
                <div className="themes">
                    <div className="sub relative rounded-full cursor-pointer"
                        onClick={() => {
                            setShowThemes(p => !p)
                        }}
                    >
                        <div className='text-theme-700 text-2xl -rotate-135'>
                            <FaCircleHalfStroke />
                        </div>
                        <ul ref={themeRef} className={`w-fit h-fit rounded-xl bg-white/10 backdrop-blur-lg absolute top-[45px] gap-2 p-2 
                        cursor-auto flex flex-row-reverse z-0 transition-all duration-500
                        ${showThemes ?
                                'opacity-100 pointer-events-auto right-0'
                                :
                                'opacity-0 pointer-events-none right-[200px]'}
                                `}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {bgThemes.map(({ key, val }) => {
                                return (
                                    <li key={key}
                                        className={`${val}
                                         ${currentTheme === key ? 'ring-2 ring-white/40' : ''}
                                        cursor-pointer rounded-full`}
                                        onClick={() => {
                                            setCurrentTheme(key)
                                        }}
                                    >
                                        <div className='w-full h-ful rounded-full -rotate-135'>
                                            <FaCircleHalfStroke size={24} />
                                        </div>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className="list text-2xl md:hidden cursor-pointer"
                    onClick={() => {
                        setShowNav(p => !p)
                    }}
                >
                    {showNav ?
                        <FaXmark />
                        :
                        <PiListBold />
                    }
                </div>
            </div>
        </div >
    )
}

export default Nav