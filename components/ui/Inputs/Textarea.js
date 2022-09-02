import cn from 'clsx';
import s from './input.module.css';

const Textarea = ({ id, name, rows = 5, className, placeholder, ...props }) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={cn(s.input, 'leading-normal')}
      {...props}
    />
  );
};
export default Textarea;
