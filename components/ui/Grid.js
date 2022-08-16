import cn from 'clsx';

const Grid = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid sm:grid-cols-12 lg:my-20 lg:grid-cols-24 lg:py-8 xl:gap-x-4',
        className
      )}>
      {children}
    </div>
  );
};

export default Grid;
