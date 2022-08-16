import cn from 'clsx';

const ChevronRight = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9.5"
      viewBox="0 0 5.798 10"
      className={cn('ml-2.5 stroke-black', className)}>
      <path
        d="M5505.8,67.5l3.385,3.385L5505.8,74.27"
        transform="translate(-5504.388 -66.086)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.75"
      />
    </svg>
  );
};

export default ChevronRight;
