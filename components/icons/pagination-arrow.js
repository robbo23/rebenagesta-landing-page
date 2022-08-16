import cn from 'clsx';

const PaginationArrow = ({ size = 32, className, direction }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn(
        'h-full w-full',
        {
          ['rotate-90']: direction === 'up',
          ['rotate-180']: direction === 'right',
          ['-rotate-90']: direction === 'down',
          ['rotate-0']: direction === 'left'
        },
        className
      )}>
      <g data-name="Group 41" transform="translate(104 3277) rotate(180)">
        <path
          d="M5505.8,67.5l3.385,3.385L5505.8,74.27"
          transform="translate(-5418.802 3190)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <g transform="translate(72 3245)" fill="none" stroke="#000" strokeWidth="2">
          <circle cx="16" cy="16" r="16" stroke="none" />
          <circle cx="16" cy="16" r="15" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default PaginationArrow;
