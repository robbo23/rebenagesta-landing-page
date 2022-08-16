import cn from 'clsx';
import s from './input.module.css';

const Input = ({ name, type = 'text', className, placeholder, ...props }) => {
  return (
    <label htmlFor={name}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={cn(s.input, 'leading-none ')}
        {...props}
      />
    </label>
  );
};

export default Input;
