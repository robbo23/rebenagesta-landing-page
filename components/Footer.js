import Facebook from 'components/icons/facebook';
import Linkedin from 'components/icons/linkedin';
import Logo from 'components/icons/logo';
import Link from 'components/ui/Link';

const Footer = ({ navItems }) => {
  return (
    <footer className="mx-auto w-full bg-black py-20 px-16 text-white lg:py-32">
      <div className="mx-auto space-y-16 text-center md:grid md:grid-cols-24 md:space-y-0 md:text-left">
        <div className="row-start-1 row-end-2 mx-auto mt-0 h-[70px] w-[134px] md:col-1/3 xl:col-2/4">
          <Link href={'https://rebenagesta.com'}>
            <Logo className="h-full w-full  fill-white" />
          </Link>
        </div>
        <div className="row-start-1 row-end-2 md:col-11/17 lg:col-10/15 2xl:col-10/14">
          <h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white md:before:right-auto">
            Biuro{' '}
          </h3>
          <p className="mt-5 text-sm !leading-loose !text-white subpixel-antialiased md:text-base">
            Chełmska 21,
            <br />
            Warsaw, Poland
          </p>
          <div className="mt-14">
            <h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white md:before:right-auto">
              Social media
            </h3>
            <div className="mt-10 flex justify-center space-x-8 md:justify-start">
              <Link href="https://www.facebook.com/rebenagesta/">
                <Facebook />
              </Link>
              <Link href="https://pl.linkedin.com/company/rebenagesta">
                <Linkedin />
              </Link>
            </div>
          </div>
          {/*<p className="mt-5 text-sm !leading-loose !text-white subpixel-antialiased md:text-base">*/}
          {/*  Zobacz nas na Google Maps*/}
          {/*</p>*/}
        </div>

        <div className="row-start-1 row-end-2 md:col-19/24 2xl:col-15/20">
          <h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white md:before:right-auto">
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
        {/*<div className="row-start-2 row-end-3 md:col-11/17 lg:col-10/14">*/}
        {/*<h3 className="relative pb-3 text-xl font-extrabold text-white before:absolute before:left-0 before:right-0 before:bottom-0 before:mx-auto before:h-px before:w-16 before:bg-white md:before:right-auto">*/}
        {/*  Social media*/}
        {/*</h3>*/}
        {/*<div className="mt-10 flex justify-center space-x-8 md:justify-start">*/}
        {/*  <Link href="https://www.facebook.com/rebenagesta/">*/}
        {/*    <Facebook />*/}
        {/*  </Link>*/}
        {/*  <Link href="https://pl.linkedin.com/company/rebenagesta">*/}
        {/*    <Linkedin />*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*</div>*/}
        <div className="row-start-1 row-end-3 border-t border-white pt-10 text-sm !leading-loose md:col-1/9 md:border-none md:pt-28 md:text-base xl:col-2/9">
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
