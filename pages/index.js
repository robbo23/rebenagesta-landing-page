import heroImage from 'assets/hero.jpg';
import rbgInNumbers from 'assets/re-bena-in-numbers.png';
import CaseStudies from 'components/CaseStudies';
import Form from 'components/Form';
import Effect1 from 'components/icons/effect-1';
import Effect2 from 'components/icons/effect-2';
import Effect3 from 'components/icons/effect-3';
import Effect4 from 'components/icons/effect-4';
import Layout from 'components/Layout';
import Process from 'components/Process';
import Reviews from 'components/Reviews';
import Button from 'components/ui/Button';
import Grid from 'components/ui/Grid';
import Heading from 'components/ui/Heading';
import Section from 'components/ui/Section';
import Text from 'components/ui/Text';
import Head from 'next/head';
import Image from 'next/image';
import { getCaseStudies } from 'utils/api/case-studies';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Propozycja wartości — Re Bena Gesta</title>
        <meta
          name="description"
          content="Re Bena Gesta z łaciny oznacza „dobrze wykonawszy pracę” i nie wyobrażamy
              sobie, żeby praca mogła być wykonywana inaczej niż dobrze. Dla nas kluczową
              wartością jest dostarczanie efektów dla Ciebie i Twojej firmy."
        />
      </Head>

      <Section id="zwieksz-sprzedaz" grey="right" className="!pt-24 md:!pt-40 xl:!pt-16">
        <Grid className="items-center ">
          <div className="order-2 col-2/11 flex flex-wrap items-end lg:order-1 lg:col-1/12 2xl:col-3/11">
            <span className="mt-9 mb-2.5 text-xs font-bold text-gray-300 sm:mt-16 sm:text-base lg:mb-6 lg:text-xl xl:mt-6">
              Re Bena Gesta
            </span>
            <Heading className="!leading-tight lg:tracking-tight xl:!pb-10">
              Chcesz zwiększyć swoją sprzedaż nawet o 300% w 3 miesiące?
            </Heading>

            <Text className="xl:-mt-6">
              Re Bena Gesta z łaciny oznacza „dobrze wykonawszy pracę” i nie wyobrażamy
              sobie, żeby praca mogła być wykonywana inaczej niż dobrze. Dla nas kluczową
              wartością jest dostarczanie efektów dla Ciebie i Twojej firmy.
            </Text>
            <Text>
              Chętnie bierzemy odpowiedzialność za wynik, rozliczając się od efektu i
              skalowania sprzedaży. W naszych case study możesz przeczytać o wzrostach
              sprzedaży rzędu 300-500%.
            </Text>
            <Text>
              To co wyróżnia nas na rynku to średni czas trwania współpracy, który wynosi
              26 miesięcy.
            </Text>
            <Button
              href="/#rewolucyjne-efekty"
              className="mt-1 w-[calc(5/8*100%)] lg:mt-4 xl:w-1/2">
              Czytaj dalej
            </Button>
          </div>
          <div className="relative order-1 col-2/12 pl-4 sm:pl-8 lg:order-2 lg:col-14/25 lg:pl-0">
            <span className="absolute left-0 -bottom-2 z-10 h-8 w-8 bg-yellow sm:-bottom-6  sm:h-16 sm:w-16 lg:-left-12 lg:-bottom-10 lg:h-24 lg:w-24" />
            <Image
              src={heroImage}
              width={798}
              height={636}
              alt="Zwieksz swoja sprzedaz w biznesie razem z Re Bena Gesta!"
              priority={true}
              placeholder="blur"
            />
          </div>
        </Grid>
      </Section>

      <Section grey="left" id="rewolucyjne-efekty">
        <div className="space-y-20 lg:flex lg:space-y-0 lg:space-x-5">
          <div className="sm:grid sm:grid-cols-12 lg:flex-1">
            <div className="sm:col-2/12 lg:col-1/11 xl:col-2/11 2xl:col-3/10">
              <Heading>Porozmawiajmy o tym, co wspólnie możemy zrobić dob[re]go!</Heading>
              <Form />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-12 lg:flex-1">
            <div className="xl:2/13 2xl:2/12 sm:col-2/12">
              {/*<div className="xl:2/13 2xl:2/12 sm:col-2/12 lg:col-2/13">*/}
              <Heading>Skąd taka skuteczność?</Heading>

              <Text>
                Stawiamy na efektywność działania i maksymalizujemy potencjał marek dzięki
                synergicznej pracy i dużym zasobom produktowym, które stworzyliśmy przez
                lata działań. Mocno skupiamy się na aspektach biznesowych, a nie wyłącznie
                działaniach marketingowych. Wiemy, że dopóki dostarczamy wartość w
                projekcie - głównie efekty sprzedażowe, współpraca jest korzystna dla obu
                stron.
              </Text>
              <Text>
                W swoich działaniach łączymy analitykę pochodzącą z audytów, ze
                skutecznymi strategiami marketingowymi, przez projektowanie, wdrażanie i
                utrzymanie, aż do skalowania sprzedaży za pomocą SEO i SEM. Z nami
                będziesz mógł liczyć na prawdziwie kompleksową współpracę.
              </Text>
              <div className="mt-14 items-center md:flex md:space-x-12">
                <Button
                  className="w-[calc(5/8*100%)] xl:w-5/12"
                  href="https://rebenagesta.com/o-nas">
                  Czytaj wiecej
                </Button>
                <Button
                  href="https://calendly.com/rebenagesta"
                  type="textlink"
                  className="mb-7 mt-5 md:w-[calc(5/8*100%)] xl:w-5/12">
                  Bezpłatna konsultacja
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section grey="right" id="skutecznosc">
        <div className="space-y-16 lg:flex lg:space-y-0 lg:space-x-5">
          <div className="sm:grid sm:grid-cols-12 lg:flex-1">
            <div className="sm:col-2/12 lg:col-1/12 xl:col-2/12 2xl:col-3/12">
              <Heading>Z czego korzystamy?</Heading>
              <Text>
                W swoich działaniach korzystamy z najwyższej jakości dostępnych na rynku
                narzędzi. Chcemy dać Ci wszystko to, co najlepsze. Z myślą o Twoim
                komforcie stworzyliśmy między innymi zaawansowane audyty user experience,
                holistyczne strategie dla marek, model efektywnościowy dla sklepów
                internetowych czy ultraszybką technologię dla stron internetowych.
              </Text>
              <Button
                className="mt-14 w-[calc(5/8*100%)] 2xl:w-5/12"
                href="https://calendly.com/rebenagesta">
                Bezpłatna konsultacja
              </Button>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-12 lg:flex-1">
            {/*<div className="xl:2/13 2xl:2/12 sm:col-2/12 lg:col-2/13">*/}
            <div className="xl:2/13 2xl:2/12 sm:col-2/12 ">
              <Heading>[re]wolucyjen efekty</Heading>
              <div className="space-y-10 px-1 lg:space-y-6 xl:space-y-12">
                <div className="flex items-center">
                  <div className="h-11 border-r border-gray-200 pr-7 md:pr-10 xl:h-14 2xl:h-16">
                    <Effect1 className="h-11 w-11 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16" />
                  </div>
                  <div className="mt-1 pl-7 md:pl-10">
                    <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                      600%
                    </span>
                    <p className="mt-1 text-sm md:text-base xl:text-lg">
                      o tyle może wzrosnąć Twoja sprzedaż
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-11 border-r border-gray-200 pr-7 md:pr-10 xl:h-14 2xl:h-16">
                    <Effect2 className="h-11 w-11 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16" />
                  </div>
                  <div className="mt-1 pl-7 md:pl-10">
                    <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                      2500%
                    </span>
                    <p className="mt-1 text-sm md:text-base xl:text-lg">
                      o tyle może wzrosnąć ruch na Twojej stronie
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-11 border-r border-gray-200 pr-7 md:pr-10 xl:h-14 2xl:h-16">
                    <Effect3 className="h-11 w-11 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16" />
                  </div>
                  <div className="mt-1 pl-7 md:pl-10">
                    <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                      300%
                    </span>
                    <p className="mt-1 text-sm md:text-base xl:text-lg">
                      o tyle możesz zwiększyć Twoją konwersje
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-11 border-r border-gray-200 pr-7 md:pr-10 xl:h-14 2xl:h-16">
                    <Effect4 className="h-11 w-11 xl:h-16 xl:w-16" />
                  </div>
                  <div className="mt-1 pl-7 md:pl-10">
                    <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                      400%
                    </span>
                    <p className="mt-1 text-sm md:text-base xl:text-lg">
                      o tyle może spaść Twój współczynnik odrzuceń
                    </p>
                  </div>
                </div>
              </div>
              <Button
                href="/#case-studies"
                className="mt-14 w-[calc(5/8*100%)] xl:w-5/12">
                Czytaj wiecej
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!py-8 sm:!py-16 xl:!py-20" yellow id="opinie">
        <Reviews />
      </Section>

      <Section id="proces">
        <Grid className="!my-0 h-full !py-4">
          <div className="h-full sm:col-1/13 lg:col-2/24 xl:col-3/23 3xl:col-4/22">
            <Heading>
              Poznaj nasz proces - dowiedz się jak możemy zwiększyć sprzedaż u Ciebie
            </Heading>
            <Process />
          </div>
        </Grid>
      </Section>

      <CaseStudies cases={data} />

      <Section id="re-bena-gesta-w-liczbach" className="!pb-0">
        <Grid>
          <div className="relative left-6 col-2/12 w-full max-w-xl lg:left-0 lg:col-2/14 lg:max-w-none 2xl:col-4/15">
            <div className="absolute top-0 bottom-0 -left-6 z-50 my-auto h-12 w-12 bg-yellow sm:-left-8 sm:h-24 sm:w-24 lg:-left-12 xl:h-28 xl:w-28 2xl:-left-16 2xl:h-32 2xl:w-32" />
            <Image
              src={rbgInNumbers}
              width={805}
              height={704}
              quality={90}
              placeholder="blur"
              alt="Re Bena Gesta w liczbach"
            />
          </div>
          {/*<div className="col-14/15 bg-red-500"></div>*/}
          <div className="col-2/12 ml-7 py-7 lg:col-14/25 lg:ml-0 xl:col-14/24 xl:py-0 2xl:col-15/24 2xl:mt-16 2xl:py-7">
            <Heading>Re Bena Gesta w liczbach</Heading>
            <div className="space-y-5 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 md:w-5/6 lg:w-full">
              <div className="mt-1">
                <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                  26 miesięcy
                </span>
                <p className="mt-1 text-sm md:text-base xl:text-lg">
                  średni czas trwania współpracy abonamentowej
                </p>
              </div>
              <div className="mt-1">
                <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                  100 000 000
                </span>
                <p className="mt-1 text-sm md:text-base xl:text-lg">
                  obroty firm, z którymi pracujemy
                </p>
              </div>
              <div className="mt-1">
                <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                  10 lat
                </span>
                <p className="mt-1 text-sm md:text-base xl:text-lg">
                  doświadczenie w digital marketingu
                </p>
              </div>
              <div className="mt-1">
                <span className="text-2xl font-extrabold xl:text-[26px] 2xl:text-3xl">
                  20
                </span>
                <p className="mt-1 text-sm md:text-base xl:text-lg">
                  specjaliści do Twojej dyspozycji
                </p>
              </div>
            </div>
            {/*Proces zwiększania sprzedaży*/}
            {/*<div className="absolute bottom-0 h-2 w-[150px] bg-yellow" />*/}
            <div className="mt-10 space-y-10">
              <Button className="w-3/5 md:w-1/2" href="https://rebenagesta.com/o-nas">
                Czytaj wiecej
              </Button>
              <Button type="textlink" href="https://calendly.com/rebenagesta">
                Bezpłatna konsultacja{' '}
              </Button>
            </div>
          </div>
        </Grid>
      </Section>
    </div>
  );
}

Home.Layout = Layout;

export async function getStaticProps() {
  const data = await getCaseStudies();

  return {
    props: {
      data
    }
  };
}
