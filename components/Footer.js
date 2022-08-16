import Facebook from 'components/icons/facebook';
import Linkedin from 'components/icons/linkedin';
import Logo from 'components/icons/logo';
import Link from 'components/ui/Link';
import Text from 'components/ui/Text';

const Footer = ({ navItems }) => {
  return (
    <footer className="mx-auto w-full bg-black py-20 px-16 text-white">
      <div className="mx-auto grid-rows-2 space-y-16 text-center lg:grid lg:grid-cols-24 lg:space-y-0 lg:text-left">
        <div className="col-2/4 row-start-1 row-end-2 mx-auto mt-0 h-[70px] w-[134px]">
          <Link href={'https://rebenagesta.com'}>
            <Logo className="h-full w-full  fill-white" />
          </Link>
        </div>
        <div className="col-10/14 row-start-1 row-end-2">
          <h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white lg:before:right-auto">
            Biuro{' '}
          </h3>
          <p className="mt-5 text-sm !leading-loose !text-white subpixel-antialiased md:text-base">
            Chełmska 21,
            <br />
            Warsaw, Poland
          </p>
          <p className="mt-5 text-sm !leading-loose !text-white subpixel-antialiased md:text-base">
            Zobacz nas na Google Maps
          </p>
        </div>

        <div className="col-16/20 row-start-1 row-end-2">
          <h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white lg:before:right-auto">
            Mapa strony
          </h3>

          <ul className="mt-5 text-sm !leading-loose md:text-base">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.id}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-10/14 row-start-2 row-end-3">
          <h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white lg:before:right-auto">
            Social media
          </h3>
          <div className="mt-10 flex justify-center space-x-8 lg:justify-start">
            <Link href="https://www.facebook.com/rebenagesta/">
              <Facebook />
            </Link>
            <Link href="https://pl.linkedin.com/company/rebenagesta">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="col-2/9 row-start-2 row-end-3 border-t border-white pt-10 text-sm !leading-loose md:text-base lg:border-none lg:pt-4">
          <p>Re Bena Gesta 2022. Wszystkie prawa zastrzeżone.</p>
          <Link href={'https://rebenagesta.com/informacje/polityka-prywatnosci'}>
            Polityka prywatności
          </Link>
          <br />
          <Link href={'https://rebenagesta.com/informacje/rodo'}>RODO</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
