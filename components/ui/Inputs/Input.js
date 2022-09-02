import cn from 'clsx';
import s from './input.module.css';

const Input = ({ id, name, type = 'text', className, placeholder, ...props }) => {
  return (
    <label htmlFor={name}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={cn(s.input, 'leading-none ')}
        {...props}
      />
    </label>
  );
};

export default Input;
