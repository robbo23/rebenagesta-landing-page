import cn from 'clsx';
import ChevronRight from 'components/icons/chevron-right';
import Link from 'components/ui/Link';

const Button = ({
  href,
  type = 'button',
  color = 'black',
  className,
  children,
  loading,
  ...props
}) => {
  const Loader = () => {
    return (
      <svg
        className="-ml-1 mr-3 h-4 w-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-50"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
  };

  const style = cn(
    'flex items-center justify-center text-sm sm:text-base 2xl:text-lg 3xl:text-xl antialiased font-extrabold leading-tight xl:leading-loose pt-3 pb-3.5 xl:pt-3.5 2xl:pb-4 transition-all ease-out duration-300 active:opacity-50 cursor-pointer text-center',
    {
      ['bg-black text-yellow hover:text-black hover:bg-yellow']: color === 'black',
      ['bg-yellow text-black hover:text-yellow hover:bg-black']: color === 'yellow'
    },
    className
  );

  if (href && type !== 'textlink') {
    return (
      <Link href={href} className={style} {...props}>
        {children}
      </Link>
    );
  }

  if (type === 'textlink') {
    return (
      <Link
        href={href}
        className={cn(
          'group inline-flex cursor-pointer items-baseline text-sm font-extrabold transition-all duration-300 ease-out hover:text-yellow sm:text-base 2xl:text-xl',
          className
        )}
        {...props}>
        {children}
        <ChevronRight className="transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:stroke-yellow" />
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={loading}
      className={cn(style, loading && '!bg-gray-400 !text-gray-600')}
      {...props}
      //onClick={() => setLoading(!loading)}>
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};

export default Button;
