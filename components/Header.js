import cn from 'clsx';
import CloseButton from 'components/icons/close';
import Logo from 'components/icons/logo';
import MenuButton from 'components/icons/menu';
import Heading from 'components/ui/Heading';
import Link from 'components/ui/Link';
import Section from 'components/ui/Section';
import { useEffect, useState } from 'react';

const Header = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => (document.body.style.overflow = 'auto');
  }, [open, setOpen]);

  return (
    <header className="fixed left-0 right-0 z-50 mx-auto flex w-full max-w-screen-3xl justify-between overflow-hidden py-5 px-5 sm:px-6 md:py-11 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
      <div className="z-[200] w-[84px] md:w-[100px]">
        <Logo className="h-full w-full" />
      </div>
      <button className="z-[200]" onClick={() => setOpen(!open)}>
        {open ? <CloseButton /> : <MenuButton />}
      </button>
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
    </header>
  );
};

export default Header;
