import cn from 'clsx';

const Heading = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'relative mb-7 pb-7 text-3xl font-bold leading-snug',
        'sm:text-5xl',
        'md:text-4xl',
        'lg:ml-0 lg:text-4xl',
        'xl:mb-14 xl:pb-9 xl:text-5xl xl:!leading-[1.1]',
        '2xl:pb-14 2xl:text-6xl',
        '3xl:text-7xl',
        'before:absolute before:bottom-0 before:h-2 before:w-[160px] before:bg-yellow',
        'xl:before:h-2.5 xl:before:max-w-[350px] 2xl:before:h-4 2xl:before:w-full',
        className
      )}>
      {children}
    </h2>
  );
};

export default Heading;
