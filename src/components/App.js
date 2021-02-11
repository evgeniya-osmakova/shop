import React, { useState } from 'react';
import cn from 'classnames';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import Item from './Item/Item';
import Search from './Search/Search';
import { data } from './data';

const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState('Каталог');
  const [menuIsHidden, setMenuIsHidden] = useState(true);

  const asideClassTablet = cn('aside', 'aside__tablet', {
    'aside__tablet--shown': !menuIsHidden,
  });

  const asideClassPhone = cn('aside', 'aside__phone', {
    'aside__phone--shown': !menuIsHidden,
  });

  return (
    <div className="page">
      <aside className="aside aside__desktop">
        <Aside setCurrentMenuItem={setCurrentMenuItem}
               menuIsHidden={menuIsHidden}
               setMenuIsHidden={setMenuIsHidden}
               type={'desktop'} />
      </aside>
      <aside className={asideClassTablet}>
        <Aside setCurrentMenuItem={setCurrentMenuItem}
               menuIsHidden={menuIsHidden}
               setMenuIsHidden={setMenuIsHidden}
               type={'tablet'} />
      </aside>
      <aside className={asideClassPhone}>
        <Aside setCurrentMenuItem={setCurrentMenuItem}
               menuIsHidden={menuIsHidden}
               setMenuIsHidden={setMenuIsHidden}
               type={'phone'} />
      </aside>
      <Header currentMenuItem={currentMenuItem} />
      <Search />
      <main className="main">
        <div className="main-wrapper container">
          {data.map(({
            header,
            description,
            text,
            type,
            img,
          }, index) => <Item key={index} img={img} header={header}
                                        description={description} text={text} type={type}/>)}
        </div>
      </main>
    </div>
  );
};

export default App;
