import cn from 'clsx';

const Section = ({ id, children, className, grey = 'none', yellow = false }) => {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full pt-8 pb-0 sm:py-20 xl:py-28',
        'before:absolute before:top-0 before:h-full',
        {
          ['before:left-0 before:w-[61%] before:bg-background sm:before:w-[60%] lg:before:w-[72%]']:
            grey === 'left',
          ['before:right-0 before:w-[39%] before:bg-background sm:before:w-[40%] lg:before:w-[28%]']:
            grey === 'right',
          ['before:left-0 before:w-[61%] before:bg-yellow sm:before:w-[60%] lg:before:w-[72%]']:
            yellow === true
        },
        className
      )}>
      <div
        className={cn(
          'relative mx-auto w-full max-w-screen-3xl overflow-hidden px-5 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20'
        )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
