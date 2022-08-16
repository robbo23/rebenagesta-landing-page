import cn from 'clsx';
import s from './input.module.css';

const Textarea = ({ rows = 5, className, placeholder, ...props }) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={cn(s.input, 'leading-normal')}
      {...props}
    />
  );
};
export default Textarea;
