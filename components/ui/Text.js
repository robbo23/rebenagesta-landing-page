import cn from 'clsx';

const Text = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        'text-sm font-normal leading-relaxed text-black antialiased sm:text-base md:leading-normal xl:text-xl',
        'mb-7',
        className
      )}
      {...props}>
      {children}
    </p>
  );
};

export default Text;
