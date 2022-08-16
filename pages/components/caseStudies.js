import PaginationArrow from 'components/icons/pagination-arrow';
import Button from 'components/ui/Button';
import Link from 'components/ui/Link';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { mapBreakpoints } from 'utils/breakpoints';

export default function CaseStudies({ cases }) {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <section id="case-studies" className="relative mx-auto w-full overflow-hidden">
      <div className="z-50 mx-auto grid h-full w-full max-w-screen-3xl grid-cols-24 lg:px-8 xl:px-12 2xl:gap-x-4 2xl:px-16 3xl:px-20">
        <div className="order-2 col-2/14 mt-8 flex h-full lg:order-1 lg:col-1/2 lg:mt-0 2xl:col-1/3 3xl:col-1/4">
          <div className="mt-4 flex h-full items-center space-x-5 md:mt-0 md:space-y-5 md:space-x-0 lg:-ml-2 2xl:ml-5 3xl:space-y-8">
            <div className="mb-8 flex space-x-5 lg:block lg:space-y-5 lg:space-x-0">
              <button className="md:block" ref={prevRef}>
                <PaginationArrow className="w-10 rotate-0 transition-opacity duration-300 hover:opacity-50 active:opacity-20 lg:rotate-90 3xl:w-12" />
              </button>

              <button className="md:block" ref={nextRef}>
                <PaginationArrow className="w-10 -rotate-180 transition-opacity duration-300 hover:opacity-50 active:opacity-20 lg:-rotate-90 3xl:w-12" />
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 col-2/25 h-full lg:order-2 2xl:col-3/25 3xl:col-4/25">
          <div className="w-screen">
            <Swiper
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              modules={[Pagination, Navigation, Controller]}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true
              }}
              spaceBetween={16}
              onResize={(swiper) => {
                swiper.update();
              }}
              swiper={(swiper) => {
                swiper.resize();
              }}
              breakpoints={mapBreakpoints({
                xs: {
                  width: 320,
                  spaceBetween: 16
                },
                sm: {
                  width: 520
                },
                md: {
                  width: 650
                },
                lg: {
                  width: 720
                },
                xl: {
                  width: 1020
                }
              })}>
              {cases.map((caseStudy) => {
                return (
                  <SwiperSlide key={caseStudy.uri}>
                    <div className="md:max-w-auto block h-[470px] bg-yellow sm:grid sm:h-[250px] sm:grid-cols-14 md:h-[300px] lg:h-[430px] 2xl:h-[500px]">
                      <div className="relative block !h-[200px] w-auto sm:col-1/5 md:col-1/6 md:!h-full">
                        <Image
                          src={caseStudy.acf_casestudies.cardPhoto.sourceUrl}
                          layout="fill"
                          objectFit="cover"
                          alt={caseStudy.title}
                        />
                      </div>
                      <div className="grid grid-cols-9 py-6 sm:col-5/15 md:col-6/15 md:py-10 md:px-6 lg:py-16 lg:px-0 2xl:pt-24 2xl:pb-16">
                        <div className="col-1/10 h-full self-end px-6 md:px-8 md:pl-4 lg:col-2/8">
                          <Link href={`https://rebenagesta.com${caseStudy.uri}`}>
                            <h3 className="mb-4 text-xl font-extrabold leading-snug antialiased line-clamp-2 lg:text-[28px] xl:mb-8">
                              {caseStudy.title}
                            </h3>
                          </Link>
                          <div className="columns-2">
                            {caseStudy.acf_casestudies?.metaInfo.tagsServices
                              .slice(0, 9)
                              .map((tag) => {
                                return (
                                  <Link
                                    href={`https://rebenagesta.com${caseStudy.uri}`}
                                    key={tag.uri}
                                    passHref>
                                    <p
                                      className="py-0.5 text-sm xl:py-1 xl:text-xl"
                                      key={tag.uri}>
                                      <span>#</span>
                                      {tag.title}
                                    </p>
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                        <Button
                          href={caseStudy.uri}
                          className="col-1/8 mt-8 self-end px-6 sm:col-1/7 md:pl-4 lg:col-2/5"
                          type="textlink">
                          Zobacz wiecej
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
