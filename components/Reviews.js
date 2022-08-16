import reviewsImage from 'assets/reviews.png';
import cn from 'clsx';
import PaginationArrow from 'components/icons/pagination-arrow';
import Grid from 'components/ui/Grid';
import Heading from 'components/ui/Heading';
import Text from 'components/ui/Text';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews({ children }) {
  const prevRef = useRef();
  const nextRef = useRef();
  const reviews = getReviews();

  return (
    <Grid className="!my-0 !flex flex-col-reverse !py-0 md:!grid">
      <div className="col-1/2 flex h-full items-center md:col-1/2">
        <div className="mt-8 flex space-x-5 md:block md:space-y-5 md:space-x-0 lg:-ml-2 xl:ml-5 3xl:space-y-8">
          <button className="md:block" ref={prevRef}>
            <PaginationArrow className="w-10 rotate-0 transition-opacity duration-300 hover:opacity-50 active:opacity-20 md:rotate-90 3xl:w-12" />
          </button>

          <button className="md:block" ref={nextRef}>
            <PaginationArrow className="w-10 -rotate-180 transition-opacity duration-300 hover:opacity-50 active:opacity-20 md:-rotate-90 3xl:w-12" />
          </button>
        </div>
      </div>
      <div className="lg:2/25 relative pt-6 pb-2 md:col-2/24 md:grid md:grid-cols-20 md:py-8 xl:col-3/23">
        <div className="absolute top-[300px] right-0 z-10 h-12 w-12 bg-yellow md:top-0 md:-right-8 md:h-16 md:w-16" />
        <div className="h-[300px] sm:col-1/7 md:h-full lg:col-1/8">
          <div className="relative h-full w-full">
            <Image
              src={reviewsImage}
              objectFit="cover"
              objectPosition="left"
              layout="fill"
              alt="Re Bena Gesta – opinie"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-full bg-background px-4 pt-5 pb-6 sm:col-7/21 sm:py-12 sm:px-12 lg:col-8/21 2xl:px-16 2xl:pt-20 2xl:pb-24 3xl:px-24 3xl:pt-16">
          <Heading>Opinie klientów</Heading>
          <div className="3xl:pr-8">
            <Swiper
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              modules={[Pagination, Navigation, Controller]}
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true
              }}
              slidesPerView={1}>
              {reviews.map((review) => {
                return (
                  <SwiperSlide key={review.author}>
                    <h3 className="mb-5 text-xl font-extrabold antialiased md:text-2xl 2xl:text-[28px]">
                      {review.author}
                    </h3>
                    <Text className="!leading-relaxed">{review.content}</Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Grid>
  );
}

function getReviews() {
  return [
    {
      content:
        'Miałam okazje poznać model działania firmy Re Bena Gesta w ramach Akademii Menedżera Innowacji. Wywarł na mnie spore wrażenie, ze względu na to, że w centrum działania stawia klienta i osiągnięcie przez niego wymiernych korzyści. Trzymam kciuki za rozwój.',
      author: 'Dr hab. Agnieszka Skala'
    },
    {
      content:
        'Zobaczyłem z bliska, w jaki sposób pracuje cały team Re Bena Gesta. To ludzie pełni dobrej energii, którzy stawiają na jakość, rzetelność i kreatywność. Jestem przekonany, że razem zrobimy jeszcze nie jedną rzecz. Polecam!',
      author: 'Paweł Pewny'
    },
    {
      content:
        'Rzetelność, profesjonalizm, efektywność i odwaga w zastosowaniu innowacyjnych rozwiązań. Te cechy zdecydowanie definiują markę Re Bena Gesta. Jestem bardzo zadowolony ze współpracy i proaktywności po stronie zespołu - wiem, że nie zdarza się to często. Kiedyś to będzie WIELKA firma.',
      author: 'Przemysław Wojciech Paw'
    },

    {
      content: `Pan Jakub z pełnym profesjonalizmem podchodzi do przygotowania oferty dla klienta, przedstawiając szczegółowo wszystkie etapy. Ma szeroką wiedzę w swojej branży. Posiada również kompetentny zespół odpowiedzialny za poszczególne etapy realizacji.`,
      author: 'Marcin Głąb'
    },

    {
      content: `Polecam i rekomenduje do współpracy Team "profesorów" pod przewodnictwem Jakuba Szloska. Jakub okazał się być osobą sumienną, rzetelną, pełną zaangażowania. Ustalenia z umowy wykonane były terminowo zgodnie z ustalonymi warunkami. Serdecznie polecam. Adam Włodarczyk`,
      author: 'Adam Włodarczyk'
    },

    {
      content: `Re Bena Gesta wykonała dla naszej firmy kompleksowy projekt strony internetowej w oparciu o indywidualny projekt graficzny. Prace zostały przeprowadzone wzorcowo i bardzo sprawnie, dzięki czemu szybko doszło do wdrożenia, a my mogliśmy cieszyć się nową stroną www.
Rekomendujemy współpracę z tą firmą!`,
      author: 'Dawid Rakoczy'
    },

    {
      content: `Re Bena Gesta stworzyli dla mnie stronę internetową, za którą dostaję bardzo dużo komplementów. Firma stawia na nowoczesny design, klasyczny minimalizm i przyjazne korzystanie dla użytkownika. Polecam wszystkim, którzy chcą się wyróżnić stroną www w swojej branży!`,
      author: 'Ilona Brzozowska'
    },

    {
      content: `Fachowo i na czas wykonany audyt UX. Polecam`,
      author: 'Oleksii Czerwatiuk'
    },

    {
      content: `Profesjonalizm, nazywanie rzeczy po imieniu, innowacyjność i masa energii na każdym etapie projektu :) polecam`,
      author: 'Bartłomiej Pawlaczyk'
    }
  ];
}
