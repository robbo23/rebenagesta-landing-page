import cn from 'clsx';
import Process1 from 'components/icons/process/process-1';
import Process10 from 'components/icons/process/process-10';
import Process11 from 'components/icons/process/process-11';
import Process12 from 'components/icons/process/process-12';
import Process2 from 'components/icons/process/process-2';
import Process3 from 'components/icons/process/process-3';
import Process4 from 'components/icons/process/process-4';
import Process5 from 'components/icons/process/process-5';
import Process6 from 'components/icons/process/process-6';
import Process7 from 'components/icons/process/process-7';
import Process8 from 'components/icons/process/process-8';
import Process9 from 'components/icons/process/process-9';
import Text from 'components/ui/Text';
import s from './process.module.css';

const Process = () => {
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
      description: 'Pierwszy kontakt - mail, telefon lub konsultacja online'
    },
    {
      icon: <Process2 />,
      description: 'Wypełnisz brief, abyśmy mogli lepiej poznać Twoje potrzeby'
    },
    {
      icon: <Process3 />,
      description: 'Przeprowadzimy analizę i wybierzemy rozwiązanie dla Ciebie\n'
    },

    {
      icon: <Process4 />,
      description: 'Przygotujemy kompleksową ofertę dla Ciebie'
    },

    {
      icon: <Process5 />,
      description:
        'Umówimy się na omówienie, żeby upewnić się, że dobrze zrozumieliśmy Twoje oczekiwania'
    },
    {
      icon: <Process6 />,
      description: `Podpiszemy umowę na wdrożenie i`
    },
    {
      icon: <Process7 />,
      description: `Optymalizujemy witrynę lub podejmujemy się kompleksowego procesu projektowego`
    },
    {
      icon: <Process8 />,
      description: `Wdrażamy zalecenia lub rozpoczynamy projektowanie ux oraz tworzenie treści`
    },
    {
      icon: <Process9 />,
      description: `Kodujemy i wdrażamy, a następnie optymalizujemy projekt`
    },
    {
      icon: <Process10 />,
      description: `Po wdrożeniu lub optymalizacji rozpoczynamy działania marketingowe`
    },
    {
      icon: <Process11 />,
      description: `Otrzymujesz regularne raporty z analityką i obszernymi komentarzami`
    },
    {
      icon: <Process12 />,
      description: `Jesteśmy do Twojej dyspozycji - telefonicznie, mailowo i na żywo`
    }
  ];
}

export default Process;
