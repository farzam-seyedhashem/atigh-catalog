'use client'
import 'swiper/css'
import 'swiper/css/effect-creative'
import {useEffect, useRef, useState} from "react";
import Image from "next/image"
import HTMLFlipBook from 'react-pageflip';

export default function Home() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
 const [isOpen,setIsOpen] = useState(false);
    const bookD = useRef();
    const book = useRef();
    useEffect(() => {
        return () => {
            // bookcu.loadFromImages(["/1.jpg","/2.jpg"])
        }
    }, []);
    const changePage = (num)=> {
        bookD.current.pageFlip().flip(num)
    }
    const changePageMobile = async (num) => {
         book.current.pageFlip().flip(num)
    }

    return (

        <div dir="rtl" className="bg-zinc-900 h-screen w-full">
            {isOpen && <div className={"absolute top-0 right-0 h-screen w-[360px] bg-black z-[1001]"}>
                <div onClick={() => setIsOpen(false)} className={"h-[56px] flex items-center px-4"}>
                    {"X"}
                </div>
                <ul className={"md:hidden block"}>
                    <li onClick={() => changePageMobile((1))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        درباره ما
                    </li>
                    <li onClick={() => changePageMobile((8))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        امکانات رفاهی
                    </li>
                    <li onClick={() => changePageMobile((18))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        مدیریت بهره برداری
                    </li>
                    <li onClick={() => changePageMobile((19))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        پلان
                    </li>
                    <li onClick={() => changePageMobile(23)}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        تماس با ما
                    </li>
                </ul>
                <ul className={"md:block hidden"}>
                    <li onClick={() => changePage(25 - (1))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        درباره ما
                    </li>
                    <li onClick={() => changePage(25 - (8))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        امکانات رفاهی
                    </li>
                    <li onClick={() => changePage(25 - (18))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        مدیریت بهره برداری
                    </li>
                    <li onClick={() => changePage(25 - (19))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        پلان
                    </li>
                    <li onClick={() => changePage(25 - (23))}
                        className={"hover:bg-white/[4%] text-white font-medium px-6 py-4 text-[16px]"}>
                        تماس با ما
                    </li>
                </ul>
            </div>}
            <div onClick={() => setIsOpen(true)}
                 className={"z-[999] items-center flex px-4 bg-zinc-900/70 backdrop-blur border-b border-zinc-500 fixed top-0 h-[56px] w-full"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </div>
            <div dir={"rtl"}
                 className="md:flex hidden h-screen relative container md:mx-auto mr-auto  w-full  md:pr-0 sm:w-10/12 md:w-10/12  lg:w-9/12   items-center justify-center ">
                <HTMLFlipBook key={1} ref={bookD} clickEventForward={true} startZIndex={4} startPage={25} width={550}
                              height={733}
                              size="stretch"
                              minWidth={315}
                              maxWidth={1000}
                              minHeight={400}
                              maxHeight={1533}
                              maxShadowOpacity={0.5}
                              showCover={true}
                              mobileScrollSupport={true}
                    // className={"shadow-elevated-three-light"}
                    // onFlip={this.onPage}
                    // onChangeOrientation={this.onChangeOrientation}
                >
                    <div
                        className={"bg-[rgb(35,35,44)] relative md:px-6 px-4"}>
                        <div className={"!flex !h-full relative w-full items-center justify-center"}>
                            <Image quality={100} objectFit={"contain"} layout={"fill"} src={`/23.jpg`} alt={""}/>
                        </div>
                        <div
                            className={"absolute font-medium  text-black text-[14px] bottom-6 w-full text-center left-0"}>
                            {/*{index-index+1}*/}
                        </div>
                    </div>
                    <div
                        className={"bg-[rgb(35,35,44)] relative md:px-6 px-4"}>
                    </div>
                    {[22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((item, index) =>
                        <div key={index}
                             className={"bg-white relative md:px-6 px-4"}>

                            <div className={"!flex !h-full relative w-full items-center justify-center"}>
                                <Image quality={100} objectFit={"contain"} layout={"fill"} src={`/${item}.jpg`}
                                       alt={""}/>
                            </div>
                            <div
                                className={"absolute font-medium  text-black text-[14px] bottom-6 w-full text-center left-0"}>
                                {item + 1}
                            </div>
                        </div>)}

                    <div
                        className={"bg-[rgb(35,35,44)] relative md:px-6 px-4"}>
                        <div className={"!flex !h-full relative w-full items-center justify-center"}>
                            <Image quality={100} objectFit={"contain"} layout={"fill"} src={`/-1.jpg`} alt={""}/>
                        </div>
                        <div
                            className={"absolute font-medium  text-black text-[14px] bottom-6 w-full text-center left-0"}>
                            {/*{index-index+1}*/}
                        </div>
                    </div>
                </HTMLFlipBook>
            </div>
            <div dir={"rtl"}
                 className="md:hidden flex h-screen relative container md:mx-auto mr-auto  w-full  md:pr-0 sm:w-full  lg:w-8/12   items-center justify-center ">
                <HTMLFlipBook key={1} ref={book} clickEventForward={true} startPage={0} startZIndex={4} width={550}
                              height={733}
                              size="stretch"
                              minWidth={315}
                              maxWidth={1000}
                              minHeight={400}
                              maxHeight={1533}
                              maxShadowOpacity={0.5}
                              showCover={true}
                              mobileScrollSupport={true}
                    // className={"shadow-elevated-three-light"}
                    // onFlip={this.onPage}
                    // onChangeOrientation={this.onChangeOrientation}
                >
                    <div
                        className={"bg-[rgb(35,35,44)] relative md:px-6 px-4"}>
                        <div className={"!flex !h-full relative w-full items-center justify-center"}>
                            <Image quality={100} objectFit={"contain"} layout={"fill"} src={`/-1.jpg`} alt={""}/>
                        </div>
                        <div
                            className={"absolute font-medium  text-black text-[14px] bottom-6 w-full text-center left-0"}>
                            {/*{index-index+1}*/}
                        </div>
                    </div>


                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((item, index) =>
                        <div key={index}
                             className={"bg-white relative md:px-6 px-4"}>

                            <div className={"!flex !h-full relative w-full items-center justify-center"}>
                                <Image quality={100} objectFit={"contain"} layout={"fill"} src={`/${item}.jpg`}
                                       alt={""}/>
                            </div>
                            <div
                                className={"absolute font-medium  text-black text-[14px] bottom-6 w-full text-center left-0"}>
                                {item + 1}
                            </div>
                        </div>)}

                    <div
                        className={"bg-[rgb(35,35,44)] relative md:px-6 px-4"}>
                        <div className={"!flex !h-full relative w-full items-center justify-center"}>
                            <Image quality={100} objectFit={"contain"} layout={"fill"} src={`/23.jpg`} alt={""}/>
                        </div>
                        <div
                            className={"absolute font-medium  text-black text-[14px] bottom-6 w-full text-center left-0"}>
                            {/*{index-index+1}*/}
                        </div>
                    </div>

                </HTMLFlipBook>
            </div>

            <div
                className={"md:flex hidden fixed bottom-0 h-[72px] justify-end px-8 mx-auto w-full left-0 space-x-2 space-x-reverse"}>
                <button
                    className={"font-bold text-[24px] w-[48px] h-[48px] flex items-center justify-center rounded-full bg-black/50 backdrop-blur"}
                    onClick={() => book.current.pageFlip().flipNext()}>
                    {"→"}
                </button>
                <button
                    className={"font-bold text-[24px] w-[48px] h-[48px] flex items-center justify-center rounded-full bg-black/50 backdrop-blur"}
                    onClick={() => book.current.pageFlip().flipPrev()}>
                {"←"}
                </button>

            </div>
            {/*<div className={"h-screen grid grid-cols-12"}>*/}
            {/*    <div className={"col-span-6"}>*/}
            {/*        <Swiper*/}


            {/*            onSwiper={setFirstSwiper}*/}
            {/*            controller={{control: secondSwiper}}*/}
            {/*            className="h-screen w-full bg-zinc-900"*/}
            {/*            speed={1000}*/}
            {/*            modules={[Controller, EffectCreative]}*/}
            {/*            slidesPerView={1}*/}
            {/*            effect={"creative"}*/}

            {/*            // coverflowEffect={{*/}
            {/*            //     rotate:0,*/}
            {/*            //     depth:0,*/}
            {/*            //     slideShadows:false,*/}
            {/*            //     scale:0.5,*/}
            {/*            // }}*/}

            {/*            creativeEffect={{*/}

            {/*                // perspective: true,*/}
            {/*                limitProgress: 100,*/}
            {/*                progressMultiplier: 2,*/}

            {/*                prev: {*/}
            {/*                    // will set `translateZ(-400px)` on previous slides*/}
            {/*                    translate: [0, 0, 0],*/}
            {/*                    shadow: true,*/}
            {/*                },*/}
            {/*                next: {*/}
            {/*                    // will set `translateX(100%)` on next slides*/}

            {/*                    translate: ["100%", 10, 400],*/}
            {/*                    // opacity:0.8,*/}
            {/*                },*/}
            {/*                shadowPerProgress: true,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <SwiperSlide className={"pattern"}>*/}
            {/*                <div>*/}

            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*            <SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*/}
            {/*                <div className={"!flex !h-full relative w-full items-center justify-center"}>*/}
            {/*                    <Image objectFit={"contain"} layout={"fill"} src={"/1.jpg"} alt={""}/>*/}
            {/*                </div>*/}
            {/*                <div className={"absolute font-medium text-[12px] bottom-6 w-full text-center left-0"}>*/}
            {/*                    1*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}

            {/*            <SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*/}
            {/*                <div className={"flex  !h-full w-full  items-center justify-center"}>*/}
            {/*                    <div className={"w-full"}>*/}
            {/*                        /!*<h3 className={"px-4 mb-4 font-medium text-[16px]"}>*!/*/}
            {/*                        /!*    ENJOY PLAYING WITH YOUR*!/*/}
            {/*                        /!*    LOVED ONES AT THE BEACH*!/*/}
            {/*                        /!*</h3>*!/*/}
            {/*                        <div className={"relative aspect-video"}>*/}
            {/*                            <Image objectFit={"contain"} layout={"fill"} src={"/2.png"} alt={""}/>*/}
            {/*                        </div>*/}
            {/*                        <h3 className={" w-full px-4 text-[12px] text-right  font-medium mt-1 text-[#C3A66D]"}>*/}
            {/*                            PERSIAN LUXE*/}
            {/*                        </h3>*/}
            {/*                        <div className={"absolute text-[12px] bottom-6 w-full text-center left-0"}>*/}
            {/*                            2*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*            /!*<SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*!/*/}
            {/*            /!*    <div className={"flex  !h-full w-full  items-center justify-center"}>*!/*/}
            {/*            /!*        <div className={"w-full"}>*!/*/}
            {/*            /!*            /!*<h3 className={"px-4 mb-4 font-medium text-[16px]"}>*!/*!/*/}
            {/*            /!*            /!*    ENJOY PLAYING WITH YOUR*!/*!/*/}
            {/*            /!*            /!*    LOVED ONES AT THE BEACH*!/*!/*/}
            {/*            /!*            /!*</h3>*!/*!/*/}
            {/*            /!*            <div className={"relative aspect-video"}>*!/*/}
            {/*            /!*                <Image objectFit={"contain"} layout={"fill"} src={"/2.png"} alt={""}/>*!/*/}
            {/*            /!*            </div>*!/*/}
            {/*            /!*            <h3 className={" w-full px-4 text-[12px] text-right  font-medium mt-1 text-[#C3A66D]"}>*!/*/}
            {/*            /!*                PERSIAN LUXE*!/*/}
            {/*            /!*            </h3>*!/*/}
            {/*            /!*            <div className={"absolute text-[12px] bottom-6 w-full text-center left-0"}>*!/*/}
            {/*            /!*                2*!/*/}
            {/*            /!*            </div>*!/*/}
            {/*            /!*        </div>*!/*/}
            {/*            /!*    </div>*!/*/}
            {/*            /!*</SwiperSlide>*!/*/}
            {/*            /!*<SwiperSlide/>*!/*/}
            {/*        </Swiper>*/}
            {/*    </div>*/}
            {/*    <div className={"h-screen col-span-6"}>*/}
            {/*        <Swiper*/}
            {/*            // thumbs={{ swiper: thumbsSwiper }}*/}
            {/*            onSwiper={setSecondSwiper}*/}
            {/*            controller={{control: firstSwiper}}*/}
            {/*            className="h-screen w-full bg-zinc-900"*/}
            {/*            speed={1400}*/}
            {/*            modules={[Controller, EffectCreative]}*/}
            {/*            slidesPerView={1}*/}


            {/*            effect={"creative"}*/}

            {/*            creativeEffect={{*/}

            {/*                // perspective: true,*/}
            {/*                limitProgress: 100,*/}
            {/*                progressMultiplier: 2,*/}

            {/*                prev: {*/}
            {/*                    // will set `translateZ(-400px)` on previous slides*/}
            {/*                    translate: ["-100%", 10, 400],*/}
            {/*                    shadow: true,*/}
            {/*                },*/}
            {/*                next: {*/}
            {/*                    // will set `translateX(100%)` on next slides*/}
            {/*                    translate: [0, 0, 0],*/}

            {/*                    // opacity:0.8,*/}
            {/*                },*/}
            {/*                shadowPerProgress: true,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*/}
            {/*                <div className={"!flex !h-full relative w-full items-center justify-center"}>*/}
            {/*                    <Image objectFit={"contain"} layout={"fill"} src={"/1.jpg"} alt={""}/>*/}
            {/*                </div>*/}
            {/*                <div className={"absolute font-medium text-[12px] bottom-6 w-full text-center left-0"}>*/}
            {/*                    1*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*            /!*<SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*!/*/}
            {/*            /!*    <div className={"!flex !h-full relative w-full items-center justify-center"}>*!/*/}
            {/*            /!*        <Image objectFit={"contain"} layout={"fill"} src={"/1.jpg"} alt={""}/>*!/*/}
            {/*            /!*    </div>*!/*/}
            {/*            /!*    <div className={"absolute font-medium text-[12px] bottom-6 w-full text-center left-0"}>*!/*/}
            {/*            /!*        1*!/*/}
            {/*            /!*    </div>*!/*/}
            {/*            /!*</SwiperSlide>*!/*/}

            {/*            <SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*/}
            {/*                <div className={"flex  !h-full w-full  items-center justify-center"}>*/}
            {/*                    <div className={"w-full"}>*/}
            {/*                        /!*<h3 className={"px-4 mb-4 font-medium text-[16px]"}>*!/*/}
            {/*                        /!*    ENJOY PLAYING WITH YOUR*!/*/}
            {/*                        /!*    LOVED ONES AT THE BEACH*!/*/}
            {/*                        /!*</h3>*!/*/}
            {/*                        <div className={"relative aspect-video"}>*/}
            {/*                            <Image objectFit={"contain"} layout={"fill"} src={"/2.png"} alt={""}/>*/}
            {/*                        </div>*/}
            {/*                        <h3 className={" w-full px-4 text-[12px] text-right  font-medium mt-1 text-[#C3A66D]"}>*/}
            {/*                            PERSIAN LUXE*/}
            {/*                        </h3>*/}
            {/*                        <div className={"absolute text-[12px] bottom-6 w-full text-center left-0"}>*/}
            {/*                            2*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*            /!*<SwiperSlide className={"pattern shadow-2xl relative bg-zinc-950"}>*!/*/}
            {/*            /!*    <div className={"flex  !h-full w-full  items-center justify-center"}>*!/*/}
            {/*            /!*        <div className={"w-full"}>*!/*/}
            {/*            /!*            /!*<h3 className={"px-4 mb-4 font-medium text-[16px]"}>*!/*!/*/}
            {/*            /!*            /!*    ENJOY PLAYING WITH YOUR*!/*!/*/}
            {/*            /!*            /!*    LOVED ONES AT THE BEACH*!/*!/*/}
            {/*            /!*            /!*</h3>*!/*!/*/}
            {/*            /!*            <div className={"relative aspect-video"}>*!/*/}
            {/*            /!*                <Image objectFit={"contain"} layout={"fill"} src={"/2.png"} alt={""}/>*!/*/}
            {/*            /!*            </div>*!/*/}
            {/*            /!*            <h3 className={" w-full px-4 text-[12px] text-right  font-medium mt-1 text-[#C3A66D]"}>*!/*/}
            {/*            /!*                PERSIAN LUXE*!/*/}
            {/*            /!*            </h3>*!/*/}
            {/*            /!*            <div className={"absolute text-[12px] bottom-6 w-full text-center left-0"}>*!/*/}
            {/*            /!*                2*!/*/}
            {/*            /!*            </div>*!/*/}
            {/*            /!*        </div>*!/*/}
            {/*            /!*    </div>*!/*/}
            {/*            /!*</SwiperSlide>*!/*/}
            {/*            <SwiperSlide/>*/}
            {/*        </Swiper>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
}
