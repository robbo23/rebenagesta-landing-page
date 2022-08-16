import cn from 'clsx';
import Process1 from 'components/icons/process-1';
import Process2 from 'components/icons/process-2';
import Process3 from 'components/icons/process-3';
import Process4 from 'components/icons/process-4';
import Process5 from 'components/icons/process-5';
import Process6 from 'components/icons/process-6';
import Process7 from 'components/icons/process-7';
import Process8 from 'components/icons/process-8';
import Process9 from 'components/icons/process-9';
import Process10 from 'components/icons/process-10';
import Process11 from 'components/icons/process-11';
import Process12 from 'components/icons/process-12';
import Text from 'components/ui/Text';
import s from './process.module.css';

const Process = ({ className, ...props }) => {
  const process = getProcessCards();
  return (
    <div className={cn('sm:mt-16 sm:grid 3xl:pb-32', s.grid)}>
      {process.map((proces, i) => {
        const number = i + 1;
        const odd = number % 2 === 0;

        return (
          <>
            <div
              key={`process` + i}
              className="sm relative h-[280px] bg-background px-10 pt-16 pb-8 md:pb-14 lg:pt-[104px] lg:pb-[71px] 2xl:px-12">
              <span className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center bg-yellow text-xl">
                {number}
              </span>
              <div className="relative h-full">
                {proces.icon}
                <Text className="mt-7 h-full !text-base 2xl:!text-xl">
                  {proces.description}
                </Text>
                <div className="absolute bottom-0 left-0 h-px w-24 bg-gray-300" />
              </div>
            </div>
            <div
              className={cn(
                'flex items-center justify-center sm:h-full',
                odd && 'sm:hidden lg:flex',
                number === 3 && 'lg:hidden',
                number === 6 && 'lg:hidden',
                number === 9 && 'lg:hidden',
                number === 12 && '!hidden'
              )}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="18.406"
                viewBox="0 0 38 18.406"
                className="-mt-5 h-8 rotate-90 sm:rotate-0">
                <g
                  id="right-arrow_1_"
                  data-name="right-arrow (1)"
                  transform="translate(0 -132)">
                  <g id="Group_73" data-name="Group 73" transform="translate(0 132)">
                    <path
                      id="Path_92"
                      data-name="Path 92"
                      d="M37.565,140.152h0l-7.756-7.719a1.484,1.484,0,0,0-2.094,2.1l5.207,5.182H1.484a1.484,1.484,0,1,0,0,2.969H32.92l-5.207,5.182a1.484,1.484,0,0,0,2.094,2.1l7.756-7.719h0A1.486,1.486,0,0,0,37.565,140.152Z"
                      transform="translate(0 -132)"
                      fill="#fbe80c"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </>
        );
      })}
    </div>
  );
};

function getProcessCards() {
  return [
    {
      icon: <Process1 />,
      description:
        'Poprosimy, abyś wypełnić brief, abyśmy mogli poznać Twoje potrzeby, aby porozmawiać o konkretach.'
    },
    {
      icon: <Process2 />,
      description: 'Analiza - dobieramy produkt dla Ciebie'
    },
    {
      icon: <Process3 />,
      description:
        'Oferta - przygotowujemy optymalne rozwiązania, aby wspierać sprzedaż Twoich produków w internecie'
    },

    {
      icon: <Process4 />,
      description:
        'Omówienie - rozmawiamy, aby przedstawić propozycję działań i upewnić się, że dobrze zrozumieliśmy Twoje oczekiwania'
    },

    {
      icon: <Process5 />,
      description: 'Tworzymy makiety, a następnie widoki graficzne i koncepcje treści'
    },
    {
      icon: <Process6 />,
      description: `Wdrażamy audyt lub projektujemy od zera`
    },
    {
      icon: <Process7 />,
      description: `Przeprowadzamy audyt i przygotowujemy strategię wraz z timeline projektu`
    },
    {
      icon: <Process8 />,
      description: `Podpisujemy umowę - na czas nieokreślony -  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.`
    },
    {
      icon: <Process9 />,
      description: `Kodujemy lub optymalizujemy pod kątem SEO i konwersji`
    },
    {
      icon: <Process10 />,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`
    },
    {
      icon: <Process11 />,
      description: `Rozpoczynamy działania marketingowe`
    },
    {
      icon: <Process12 />,
      description: `Otrzymujesz raporty i Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`
    }
  ];
}

export default Process;
