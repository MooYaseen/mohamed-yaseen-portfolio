import { FaCss3Alt, FaFacebookSquare, FaGithub, FaGithubSquare, FaGraduationCap, FaPhoneAlt, FaReact } from "react-icons/fa";
import { FaFacebookF, FaGithubAlt, FaHtml5, FaLinkedin, FaLinkedinIn, FaSquareWhatsapp, FaSquareXTwitter, FaUsersViewfinder, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { GiPuzzle, GiSpellBook } from "react-icons/gi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdEmail, MdLocationPin, MdOutlineChangeCircle } from "react-icons/md";
import { RiLightbulbFlashLine, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

const data = {
    "nav": {
        "links": {
            "home": { "en": "home", "ar": "الرئيسية" },
            "about": { "en": "about", "ar": "عني" },
            "skills": { "en": "skills", "ar": "المهارات" },
            "projects": { "en": "projects", "ar": "المشاريع" },
            "contact": { "en": "contact", "ar": "تواصل معي" }
        },
        "themes": {
            "gray": "text-gray-200",
            "red": "text-red-700",
            "orange": "text-orange-700",
            "rose": "text-rose-700",
            "sky": "text-sky-700",
            "teal": "text-teal-700",
            "emerald": "text-emerald-700",
            "green": "text-green-700"
        }
    },
    "home": {
        "hi": {
            "en":
            {
                "a": 'hi',
                "b": ',',
                "c": "I'm",
            },
            "ar": {
                "a": 'مرحباً',
                "b": '،',
                "c": 'أنا',
            },
        },
        "firstname": {
            "en": "mohamed",
            "ar": "محمد"
        },
        "lastname": {
            "en": "yaseen",
            "ar": "يـس"
        },
        "jobtitle": {
            "en": "front-end developer",
            "ar": "مطــــور واجـهـــات أمـاميـــة"
        },
        "btns": {
            "cv": {
                "en": "resume",
                "ar": "السيرة الذاتية"
            },
            "contact": {
                "en": "contact me",
                "ar": "تواصل معي"
            }
        }
    },
    "about": {
        "maintitle": {
            "en": "who am i",
            "ar": "من أكون"
        },
        "job": {
            "en": "A Front-End Developer specializing in building modern, user-friendly websites with a unique and engaging user experience. I focus on writing clean, organized code and am always eager to keep up with the latest web technologies.",
            "ar": "مطور واجهات أمامية متخصص في بناء مواقع عصرية، سهلة الاستخدام، وذات تجربة تفاعلية مميزة. أهتم بكتابة أكواد نظيفة ومرتبة، وأحرص دائماً على مواكبة أحدث تقنيات الويب."
        },
        "subtitle": {
            "en": "education",
            "ar": "التعليم"
        },
        "date": {
            "en": "October 2020 – June 2025",
            "ar": "أكتوبر ٢٠٢٠ – يونيو ٢٠٢٥"
        },
        "education": {
            "en": "B.Sc. in Electrical Engineering (Computers & Systems) – Faculty of Engineering, Kafrelsheikh University, Egypt, with overall grade Very Good with Honors.",
            "ar": "بكالوريوس الهندسة الكهربائية (حاسبات ونظم) – كلية الهندسة، جامعة كفر الشيخ، مصر، بتقدير عام جيد جدًا مع مرتبة الشرف."
        },
        "languages": {
            "title": {
                "en": "Languages",
                "ar": "اللغات"
            },
            "content": {
                "en": "Arabic ( Native ), English ( Upper-Intermediate )",
                "ar": "العربية ( اللغة الأم )، الإنجليزية ( متقدم متوسط )"
            }
        }
    },
    "skills": {
        "maintitle": {
            "en": "my skills",
            "ar": "مهاراتي"
        },
        "tech": {
            "techtitle": {
                "en": "technical skills",
                "ar": "المهارات التقنية"
            },
            "cards": {
                "HTML": {
                    "icon": <FaHtml5 size={40} color="#E34F26" />,
                    "color": "text-[#E34F26]",
                    "title": "HTML5",
                    "precent": "90"
                },
                "CSS": {
                    "icon": <FaCss3Alt size={40} color="#663399" />,
                    "color": "text-[#663399]",
                    "title": "CSS",
                    "precent": "85"
                },
                "JavaScript": {
                    "icon": <SiJavascript size={40} color="#F7DF1E" />,
                    "color": "text-[#F7DF1E]",
                    "title": "JavaScript",
                    "precent": "75"
                },
                "React": {
                    "icon": <FaReact size={48} color="#61DAFB" />,
                    "color": "text-[#61DAFB]",
                    "title": "React",
                    "precent": "70"
                },
                "Tailwind": {
                    "icon": <RiTailwindCssFill size={40} color="#06B6D4" />,
                    "color": "text-[#06B6D4]",
                    "title": "Tailwind CSS",
                    "precent": "80"
                },
                "GitHub": {
                    "icon": <FaGithub size={40} color="white" />,
                    "color": "text-[white]",
                    "title": "GitHub",
                    "precent": "40"
                }
            }
        },
        "soft": {
            "softtitle": {
                "en": "soft skills",
                "ar": "المهارات الشخصية"
            },
            "cards": {
                "teamwork": {
                    "icon": <FaUsersViewfinder size={48} />,
                    "title": {
                        "en": "Teamwork",
                        "ar": "العمل الجماعي"
                    },
                    "description": {
                        "en": "I enjoy sharing ideas and learning from my team.",
                        "ar": "أستمتع بمشاركة الأفكار والتعلم من فريقي."
                    }
                },
                "communication": {
                    "icon": <HiOutlineChatBubbleLeftRight size={44} />,
                    "title": {
                        "en": "Communication",
                        "ar": "التواصل الفعال"
                    },
                    "description": {
                        "en": "I explain my ideas clearly and listen carefully to others.",
                        "ar": "أوضح أفكاري بوضوح وأستمع جيدًا للآخرين."
                    }
                },
                "problem": {
                    "icon": <GiPuzzle size={48} />,
                    "title": {
                        "en": "Problem Solving",
                        "ar": "حل المشكلات"
                    },
                    "description": {
                        "en": "I look for practical solutions and creative ideas.",
                        "ar": "أبحث عن حلول عملية وأفكار مبتكرة."
                    }
                },
                "time": {
                    "icon": <LiaUserClockSolid size={44} />,
                    "title": {
                        "en": "Time Management",
                        "ar": "إدارة الوقت"
                    },
                    "description": {
                        "en": "I value completing tasks on time with focus.",
                        "ar": "أهتم بإنهاء المهام في وقتها مع التركيز."
                    }
                },
                "adapt": {
                    "icon": <MdOutlineChangeCircle size={44} />,
                    "title": {
                        "en": "Adaptability",
                        "ar": "القدرة على التكيف"
                    },
                    "description": {
                        "en": "I stay flexible and handle changes smoothly.",
                        "ar": "أبقى مرنًا وأتعامل مع التغيرات بسهولة."
                    }
                },
                "creative": {
                    "icon": <RiLightbulbFlashLine size={48} />,
                    "title": {
                        "en": "Creativity",
                        "ar": "الإبداع"
                    },
                    "description": {
                        "en": "I bring fresh ideas and think outside the box.",
                        "ar": "أطرح أفكارًا جديدة وأفكر بطريقة مبتكرة."
                    }
                },
                "learning": {
                    "icon": <GiSpellBook size={48} />,
                    "title": {
                        "en": "Continuous Learning",
                        "ar": "التعلم المستمر"
                    },
                    "description": {
                        "en": "I constantly seek to learn and improve my skills.",
                        "ar": "أسعى باستمرار للتعلم وتطوير مهاراتي."
                    }
                }
            }
        }
    },
    "projects":
    {
        "title": {
            "en": "my projects",
            "ar": "مشاريعي",
        },
        "cards": {

            "rest_countries-api": {
                "img": "images/countries.jpeg",
                "title": {
                    "en": "REST Countries Explorer",
                    "ar": "مستكشف الدول"
                },
                "description": {
                    "en": "A React app that lets you explore countries with filters, search, and theme toggle.",
                    "ar": "تطبيق يتيح لك استكشاف الدول باستخدام البحث والفلاتر مع التبديل بين الوضع الليلي والنهاري."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/rest_countries-api",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/rest_countries-api/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "Weather_App": {
                "img": "images/weather.jpeg",
                "title": {
                    "en": "Egypt Weather App",
                    "ar": "تطبيق الطقس لمصر"
                },
                "description": {
                    "en": "A simple app that shows current weather, hourly updates, and a 7-day forecast.",
                    "ar": "تطبيق بسيط يعرض حالة الطقس الحالية مع تحديثات لكل ساعة وتوقعات لمدة 7 أيام."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/Weather_App",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/Weather_App/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "space_tourism_website": {
                "img": "images/space.jpeg",
                "title": {
                    "en": "Space Tourism Website",
                    "ar": "موقع سياحة فضائية"
                },
                "description": {
                    "en": "A modern website design for a space tourism company with multiple pages and sections.",
                    "ar": "موقع عصري مصمم لشركة سياحة فضائية يحتوي على عدة صفحات وأقسام."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/space_tourism_website",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/space_tourism_website/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "multi-step-form": {
                "img": "images/multi-step-form.jpeg",
                "title": {
                    "en": "Multi-Step Form",
                    "ar": "نموذج متعدد الخطوات"
                },
                "description": {
                    "en": "A form that guides users through multiple steps with validation at each stage.",
                    "ar": "نموذج يوجّه المستخدم عبر خطوات متعددة مع التأكد من صحة البيانات في كل مرحلة."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/multi-step-form",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/multi-step-form/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "Products_List_With_Cart": {
                "img": "images/product-list.jpeg",
                "title": {
                    "en": "Products List with Cart",
                    "ar": "قائمة منتجات مع سلة تسوق"
                },
                "description": {
                    "en": "An app that displays products with the ability to add items to a shopping cart.",
                    "ar": "تطبيق يعرض المنتجات مع إمكانية إضافة العناصر إلى سلة التسوق."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/Products_List_With_Cart",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/Products_List_With_Cart/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "rock_paper_scissors": {
                "img": "images/rps-game.jpeg",
                "title": {
                    "en": "Rock Paper Scissors Game",
                    "ar": "لعبة حجر ورقة مقص"
                },
                "description": {
                    "en": "A simple browser game where users can play Rock, Paper, Scissors against the computer.",
                    "ar": "لعبة بسيطة على المتصفح تتيح للمستخدم اللعب ضد الكمبيوتر."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/rock_paper_scissors",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/rock_paper_scissors/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "Browser_extension_manager_UI": {
                "img": "images/extension.jpeg",
                "title": {
                    "en": "Browser Extension Manager UI",
                    "ar": "واجهة إدارة إضافات المتصفح"
                },
                "description": {
                    "en": "A clean user interface concept for managing browser extensions.",
                    "ar": "تصميم واجهة مستخدم واضحة وبسيطة لإدارة إضافات المتصفح."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/Browser_extension_manager_UI",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/Browser_extension_manager_UI/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "E-commerce_product_page": {
                "img": "images/product-page.jpeg",
                "title": {
                    "en": "E-commerce Product Page",
                    "ar": "صفحة منتج متجر إلكتروني"
                },
                "description": {
                    "en": "A product detail page design for an e-commerce website.",
                    "ar": "تصميم صفحة تفاصيل منتج لموقع متجر إلكتروني."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/E-commerce_product_page",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/E-commerce_product_page/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "HTML_CSS_Template_Four": {
                "img": "images/temp-4.jpeg",
                "title": {
                    "en": "Blog Template",
                    "ar": "قالب مدونة"
                },
                "description": {
                    "en": "A minimal blog template designed for articles and posts.",
                    "ar": "قالب مدونة بسيط مصمم لعرض المقالات والمنشورات."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/HTML_CSS_Template_Four",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/HTML_CSS_Template_Four/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "HTML_CSS_Template_Three": {
                "img": "images/temp-3.jpeg",
                "title": {
                    "en": "Agency Website Template",
                    "ar": "قالب موقع وكالة"
                },
                "description": {
                    "en": "A modern template suitable for creative agencies and service providers.",
                    "ar": "قالب حديث يناسب الوكالات الإبداعية ومقدمي الخدمات."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/HTML_CSS_Template_Three",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/HTML_CSS_Template_Three/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "HTML_CSS_Template_Two": {
                "img": "images/temp-2.jpeg",
                "title": {
                    "en": "Portfolio Template",
                    "ar": "قالب بورتفوليو"
                },
                "description": {
                    "en": "A clean and responsive template designed for personal portfolios or resumes.",
                    "ar": "قالب نظيف ومتجاوب مخصص لعرض السيرة الذاتية أو الأعمال الشخصية."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/HTML_CSS_Template_Two",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/HTML_CSS_Template_Two/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            },
            "HTML_CSS_Template_One": {
                "img": "images/temp-1.jpeg",
                "title": {
                    "en": "Business Landing Page",
                    "ar": "صفحة هبوط للأعمال"
                },
                "description": {
                    "en": "A simple landing page template suitable for small businesses or startups.",
                    "ar": "قالب صفحة هبوط بسيط يناسب الشركات الصغيرة أو المشاريع الناشئة."
                },
                "links": {
                    "source": {
                        "url": "https://github.com/MooYaseen/HTML_CSS_Template_One",
                        "label": {
                            "en": "Code",
                            "ar": "عرض الكود"
                        }
                    },
                    "live": {
                        "url": "https://mooyaseen.github.io/HTML_CSS_Template_One/",
                        "label": {
                            "en": "Preview",
                            "ar": "معاينة"
                        }
                    }
                }
            }
        }
    },
    "contact": {
        "maintitle": {
            "en": "get in touch",
            "ar": "تواصل معي"
        },
        "introtext": {
            "en": "I am passionate about creating unique user interfaces and seamless experiences, and I am always looking for new opportunities to grow. If you have a web development project or are looking for a developer to help bring your idea to life, I would be happy to collaborate with you.",
            "ar": "أهتم بإنشاء واجهات مستخدم مميزة وتجارب سلسة، وأبحث دائمًا عن فرص جديدة للتطوير, إذا كان لديك مشروع في مجال تطوير الويب أو تبحث عن مطور يمكنه مساعدتك في بناء فكرتك، فسأكون سعيدًا بالتعاون معك."
        },
        "info": {
            "address": {
                "title": {
                    "en": "address",
                    "ar": "العنوان",
                },
                "value": {
                    "en": "kafr elsheikh, egypt",
                    "ar": "كفرالشيخ, مصر"
                },
                "icon": <MdLocationPin />
            },
            "phone": {
                "title": {
                    "en": "phone",
                    "ar": "الهاتف"
                },
                "value": {
                    "en": "+201010736950",
                    "ar": "+201010736950"
                },
                "href": "tel:+201010736950",
                "icon": <FaPhoneAlt />
            },
            "email":
            {
                "title": {
                    "en": "email",
                    "ar": "البريد",
                },
                "value": {
                    "en": "mo.yasee.74@gmail.com",
                    "ar": "mo.yasee.74@gmail.com",
                },
                "href": "mailto:mo.yasee.74@gmail.com",
                "icon": <MdEmail />
            }
        },
        "socials": {
            "title": {
                "en": "Say hi,,",
                "ar": "قل مرحبا,,"
            },
            "links": {
                "whatsapp": {
                    "link": "https://wa.me/201010736950",
                    "icon": <FaWhatsapp />,
                    "color": "bg-[#25D366]",
                    "text": "text-[white]",
                },
                "facebook": {
                    "link": "https://www.facebook.com/MoYaseen74/",
                    "icon": <FaFacebookF />,
                    "color": "bg-[#0866FF]",
                    "text": "text-[white]",
                },
                "linkedin": {
                    "link": "https://www.linkedin.com/in/mo-yaseen/",
                    "icon": <FaLinkedinIn />,
                    "color": "bg-[#0A66C2]",
                    "text": "text-[white]",
                },
                "github": {
                    "link": "https://github.com/MooYaseen",
                    "icon": <FaGithub />,
                    "color": "bg-[#282828]",
                    "text": "text-[white]",
                },
                "x": {
                    "link": "https://twitter.com/_Mo_Yaseen",
                    "icon": <FaXTwitter />,
                    "color": "bg-[white]",
                    "text": "text-[black]",
                }
            }
        },
        "form": {
            "formtitle": {
                "en": "Send me a message",
                "ar": "اترك لي رسالة"
            },
            "clear": {
                "en": "reset",
                "ar": "إعادة تعيين"
            },
            "inputs": {
                "name": {
                    "holder": {
                        "en": "name",
                        "ar": "الاسم"
                    },
                    "required": {
                        "en": "Please enter your name",
                        "ar": "من فضلك أدخل اسمك"
                    }
                },
                "email": {
                    "holder": {
                        "en": "email",
                        "ar": "البريد"
                    },
                    "required": {
                        "en": "Please enter your email",
                        "ar": "من فضلك أدخل بريدك الإلكتروني"
                    },
                    "invalid": {
                        "en": "Please enter a valid email",
                        "ar": "أدخل بريدًا إلكترونيًا صحيحًا"
                    }
                },
                "subject": {
                    "holder": {
                        "en": "subject",
                        "ar": "الموضوع",
                    },
                    "required": {
                        "en": "Please enter a subject",
                        "ar": "من فضلك أدخل الموضوع"
                    }
                },
            },
            "msg": {
                "holder": {
                    "en": "Write your message here...",
                    "ar": "اكتب رسالتك هنا..."
                },
                "required": {
                    "en": "Please enter your message",
                    "ar": "من فضلك أدخل رسالتك"
                },
                "success": {
                    "en": "Your message has been sent successfully",
                    "ar": "تم إرسال رسالتك بنجاح"
                },
                "error": {
                    "en": "Something went wrong, please try again",
                    "ar": "حدث خطأ ما، حاول مرة أخرى"
                }
            },
            "submit": {
                "en": "submit",
                "ar": "إرسال"
            }
        }
    }
}

export default data