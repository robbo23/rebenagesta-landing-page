import cn from 'clsx';
import CloseButton from 'components/icons/close';
import Logo from 'components/icons/logo';
import MenuButton from 'components/icons/menu';
import Button from 'components/ui/Button';
import Heading from 'components/ui/Heading';
import { useCallback, useEffect, useState } from 'react';

const Header = ({ navItems, className }) => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open, setOpen]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 mx-auto overflow-hidden px-5 transition-all duration-200',
        scrolled
          ? 'border-b-4 border-gray-200 bg-white bg-opacity-80 py-4 backdrop-blur-2xl backdrop-filter 2xl:py-6'
          : 'py-5 md:py-8 2xl:py-11',
        className
      )}>
      <div className="mx-auto flex w-full max-w-screen-3xl justify-between sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        <div
          className={cn(
            'z-[400] transition-all duration-200',
            scrolled ? 'w-16 md:w-[90px]' : 'w-[84px] md:w-[100px]'
          )}>
          <a href="#">
            <Logo className="h-full w-full" />
          </a>
        </div>
        <div className="z-[200] flex items-center space-x-32">
          <Button
            className="hidden justify-self-end !text-lg lg:flex"
            type="textlink"
            href="https://calendly.com/rebenagesta">
            Bezpłatna konsultacja
          </Button>
          <button onClick={() => setOpen(!open)}>
            {open ? <CloseButton /> : <MenuButton />}
          </button>
        </div>
        <div
          className={cn(
            'fixed inset-0 z-[100] h-full w-full bg-white transition-all duration-300',
            'grid grid-cols-8',
            open ? 'visible opacity-100' : 'invisible opacity-0'
          )}>
          <nav className="col-2/8 pt-40">
            <Heading className="before:w-12">Menu</Heading>
            <ul className="text-xl leading-loose">
              {navItems.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.id} onClick={() => setOpen(false)}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
