import Footer from 'components/Footer';
import Header from 'components/Header';

const Layout = ({ children }) => {
  const menuitems = getMenuItems();

  return (
    <>
      <Header navItems={menuitems} />
      <main>{children}</main>
      <Footer navItems={menuitems} />
    </>
  );
};

function getMenuItems() {
  return [
    {
      id: '#zwieksz-sprzedaz',
      title: 'Zwiększ sprzedaż'
    },
    {
      id: '#rewolucyjne-efekty',
      title: 'Rewolucyjne efekty'
    },
    {
      id: '#skutecznosc',
      title: 'Skuteczność'
    },
    {
      id: '#opinie',
      title: 'Opinie'
    },
    {
      id: '#proces',
      title: 'Proces'
    },
    {
      id: '#case-studies',
      title: 'Case studies'
    },
    {
      id: '#re-bena-gesta-w-liczbach',
      title: 'Re Bena w liczbach'
    }
  ];
}

export default Layout;
