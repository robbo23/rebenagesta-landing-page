import cn from 'clsx';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mapBreakpoints } from 'utils/breakpoints';

//eslint-disable-next-line react/display-name
const SwiperSlider = React.forwardRef(
  (
    { children, className, navigation = true, breakpoints, blog, team, ...props },
    ref,
    ref1
  ) => {
    const prevRef = useRef();
    const nextRef = useRef();
    // const { lg } = useScreens();
    const mappedBreakpoints = mapBreakpoints(breakpoints);

    return (
      <div
        ref={ref}
        className={cn('flex h-full flex-col-reverse items-center', className)}>
        <div
          className={cn(
            'flex w-32 justify-between',
            (blog && 'ml-16 mt-12 pr-0 md:ml-32') || 'pr-4'
          )}>
          <div
            className="translate-z-0 cursor-pointer select-none p-3 transition-opacity hover:opacity-70"
            ref={prevRef}>
            <i className="las la-angle-left text-[2.5rem]" />
          </div>
          <div
            className="translate-z-0 cursor-pointer select-none p-3 transition-opacity hover:opacity-70"
            ref={nextRef}>
            <i className="las la-angle-right text-[2.5rem]" />
          </div>
        </div>
        <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={mappedBreakpoints}
          {...props}
          // className={cn("max-w-full mt-14 mb-8", blog && "!flex !w-full !overflow-visible")}>
          className={cn(
            'mt-14 mb-8 max-w-full',
            blog && '!flex !w-full !overflow-visible'
          )}>
          {React.Children.map(children, (item, i) => (
            <SwiperSlide key={i}>{item}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

export default SwiperSlider;
