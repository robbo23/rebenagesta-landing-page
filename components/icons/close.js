const CloseButton = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="z-[200] h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default CloseButton;
