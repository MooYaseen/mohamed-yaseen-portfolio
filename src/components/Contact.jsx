import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaCircle } from 'react-icons/fa6';
import { MainContext } from './MainContext';
import { SiGoogletasks } from 'react-icons/si';
import { PiShareNetworkBold } from 'react-icons/pi';
import { BiSolidNetworkChart } from 'react-icons/bi';

const Contact = () => {
    const { lang, data } = useContext(MainContext)

    const info = Object.entries(data.contact.info).map(([key, value]) => ({ key, ...value }))
    const inputs = Object.entries(data.contact.form.inputs).map(([key, value]) => ({ id: key, ...value }))
    const socials = Object.entries(data.contact.socials.links).map(([key, value]) => ({ id: key, ...value }))


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ve2ja4b",   // service id
                "template_qgq853j",  // template id
                form.current,        // form
                "LQKj1RaMkSvxpmlLQ"  // public key

            )
            .then(
                () => {
                    alert("تم إرسال رسالتك بنجاح");
                    resetForm();
                },
                () => {
                    alert("حدث خطأ حاول مرة تانية");
                }
            );
    }

    const [req, setReq] = useState({ name: false, email: false, subject: false, })

    // email test
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    function emailTest(email) {
        return emailRegex.test(email)
    }
    const [invalid, setInvalid] = useState(false)

    // reset form
    const form = useRef();
    function resetForm() {
        const formEl = form.current;
        if (formEl) {
            Array.from(formEl.elements).forEach(el => {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.value = "";
                }
            });
        }
        setReq({
            name: false,
            email: false,
            subject: false,
        });
        setInvalid(false);
    }


    return (
        <section id='contact' dir={lang === 'en' ? 'ltr' : 'rtl'}
            className="min-h-dvh z-10 relative snap-mandatory pt-[64px] pb-3 snap-start bg-black flex flex-col gap-8     
            ">
            <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full z-[-1] h-full object-cover"
            >
                <source src="/images/squares.mp4" type="video/mp4" />
            </video>
            <div className="layer absolute size-full top-0 left-0 bg-zinc-950/75 z-[-1]"></div>


            <div className="content container grow mx-auto flex flex-col items-center justify-evenly">

                <div className={`contact-title capitalize flex items-center gap-3 my-5 md:my-10 text-white
                                                    ${lang === 'en' ? 'font-fugaz' : 'font-changa'}
                                                    font-bold text-2xl md:text-4xl`}>
                    <div className="icon text-theme-700 flex text-xl gap-2">
                        <div className="icon text-theme-700 flex w-fit justify-between text-lg h-full items-center gap-1">
                            <FaCircle className='animate-[bounce_1.8s_0.3s_infinite]' size={12} />
                            <FaCircle className='animate-[bounce_1.8s_0.6s_infinite]' size={12} />
                            <FaCircle className='animate-[bounce_1.8s_0.9s_infinite]' size={12} />
                        </div>
                    </div>
                    {data.contact.maintitle[lang]}
                    <div className="icon text-theme-700 text-2xl">
                        <PiShareNetworkBold />
                    </div>
                </div>

                <div className="content gap-2 grow mx-auto flex flex-col-reverse md:flex-row items-center justify-around w-full">
                    <div className="info flex flex-col md:gap-6">
                        <div className="info flex flex-col gap-1 md:gap-4 text-theme-700">
                            {info.map(card => {
                                return (
                                    <div className={card.key} key={card.key}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="text-white text-2xl lg:text-4xl p-2 md:p-3 bg-theme-700 rounded-lg">
                                                {card.icon}
                                            </div>
                                            <div className={`grow
                                                ${lang === 'en' ? 'font-quantico font-light' : 'font-changa font-semibold'}
                                                `}>
                                                <div className="capitalize text-theme-500 text-lg">{card.title[lang]}</div>
                                                <div className={`text-white font-light md:text-xl ${lang === 'en' ? '' : 'text-end'}`} dir='ltr'>
                                                    {!card.href ?
                                                        card.value[lang]
                                                        :
                                                        <a href={card.href} className='cursor-pointer'>
                                                            {card.value[lang]}
                                                        </a>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="my-socials mt-4 flex flex-col gap-2 text-white">
                            <div className={`subtitle md:text-2xl capitalize font-bold
                                ${lang === 'en' ? 'font-readex' : 'font-changa'}
                                `}>
                                {data.contact.socials.title[lang]}
                            </div>
                            <div className="links flex gap-3">
                                {socials.map(link => {
                                    return (
                                        <a href={link.link} target="_blank" key={link.id} className={`texl-lg md:text-3xl rounded-lg p-2 ${link.color} ${link.text}`}>
                                            {link.icon}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form w-[95%] md:w-[400px] font-alexandria">
                        <form ref={form} onSubmit={sendEmail}
                            className='flex flex-col p-2 md:p-6 rounded-lg gap-3 card-shadow border
                            border-theme-500 w-full text-black backdrop-blur-md
                            bg-radial from-transparent from-[30%] to-theme-700/10 to-[100%]'
                        >
                            <div className="text-xl md:text-3xl uppercase text-white md:mb-4 text-center">
                                <h3>
                                    {data.contact.form.formtitle[lang]}
                                </h3>
                            </div>
                            {inputs.map((input, index) => {
                                return (
                                    <label htmlFor={input.id} key={input.id} className='relative w-full'>
                                        <div key={index}
                                            className={`error text-end bottom-3 text-red-500 text-sm absolute
                                            ${(req[input.id] || (invalid && input.id === 'email')) ? "block animate-bounce" : "hidden"}
                                            ${lang === 'en' ? 'right-1' : 'left-1'}`}
                                        >
                                            {(invalid && input.id === 'email')
                                                ? input.invalid[lang]
                                                : input.required[lang]}
                                        </div>
                                        <input
                                            type={input.id === 'email' ? 'email' : 'text'}
                                            name={input.id} id={input.id} placeholder="" required
                                            className={`peer text-white border-b py-1 px-2
                                            placeholder:text-white text-md tracking-wide w-full font-changa font-extralight
                                            focus:outline-none h-[40px] my-1
                                            ${(req[input.id] || (invalid && input.id === 'email')) ? "border-red-500" : "border-white"}`}
                                            onBlur={(e) => {
                                                const value = e.currentTarget.value.trim()
                                                if (!value) {
                                                    // في حالة عدم وجود قيمة
                                                    setReq(prev => ({ ...prev, [input.id]: true }))
                                                    // عدم وجود قيمة والحقل ايميل
                                                    if (input.id === 'email') setInvalid(false)
                                                } else {
                                                    // في حالة وجود قيمة والحقل كان ايميل
                                                    if (input.id === 'email') {
                                                        const tt = emailTest(value)
                                                        setInvalid(!tt)
                                                        setReq(prev => ({ ...prev, [input.id]: false }))
                                                    } else {
                                                        // في حالة وجود قيمة والحقل كان غير الايميل
                                                        setReq(prev => ({ ...prev, [input.id]: false }))
                                                    }
                                                }
                                            }}
                                            onChange={() => {
                                                setReq(prev => ({ ...prev, [input.id]: false }))
                                                if (input.id === 'email') setInvalid(false)
                                            }}
                                        />
                                        <span className='text-theme-500 place-holder'>
                                            {input.holder[lang]}
                                        </span>
                                    </label>
                                )
                            })}
                            <label htmlFor="message" className='relative'>
                                <textarea name="message" id="message"
                                    placeholder={data.contact.form.msg.holder[lang]}
                                    required
                                    className='border text-white rounded-md py-2 px-3 border-theme-500 placeholder:text-white
                                min-h-[100px] resize-none w-full font-extralight focus:outline-none
                                bg-radial from-transparent from-[0%] to-theme-700/10 to-[100%]
                            ' />
                            </label>
                            <div className='flex justify-between gap-4'>

                                <button className={`text-white transition-all basis-[30%]
                                    cursor-pointer hover:bg-white/5 hover-shine backdrop-blur-md md:backdrop-blur-lg duration-200 px-2 py-2.5 border
                                    border-theme-500 rounded-lg active:scale-98
                                    ${lang === 'en' ? '' : ' text-sm'}`}
                                    type="button"
                                    onClick={() => {
                                        resetForm();
                                    }}
                                    aria-label="Clear form"
                                >
                                    {data.contact.form.clear[lang]}
                                </button>
                                <button type="submit" className='basis-[70%] bg-theme-700 py-2.5 rounded-lg text-white cursor-pointer active:scale-98 transition-transform duration-200'>
                                    {data.contact.form.submit[lang]}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact