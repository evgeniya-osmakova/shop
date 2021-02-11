import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Logo from './images/logo.svg';
import Beauty from './images/beauty.svg';
import Car from './images/car.svg';
import Catalog from './images/catalog.svg';
import Enjoy from './images/enjoy.svg';
import Health from './images/health.svg';
import Btn from './images/btn.svg';
import Burger from './images/burger.svg';
import Exit from './images/exit.svg';

const Aside = ({
  setCurrentMenuItem, type, setMenuIsHidden, menuIsHidden,
}) => {
  Aside.propTypes = {
    setCurrentMenuItem: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    setMenuIsHidden: PropTypes.func.isRequired,
    menuIsHidden: PropTypes.bool.isRequired,
  };

  // useEffect(() => {
  //   if (type === 'desktop') {
  //     setMenuIsHidden(false);
  //   } else {
  //     setMenuIsHidden(true);
  //   }
  // }, [type]);

  const selectNewMenuItem = (title) => () => {
    setCurrentMenuItem(title);
  };

  const changeMenuVisibility = () => {
    setMenuIsHidden(!menuIsHidden);
  };

  const btnClass = cn('aside-header__btn', {
    'aside-header__btn--tablet-shown': !menuIsHidden && type === 'tablet',
    'aside-header__btn--phone-shown': !menuIsHidden && type === 'phone',
  });

  return (
    <div className="aside-wrapper">
      <div className="aside-header">
        { (menuIsHidden && type === 'phone') ? '' : <Logo className="aside-header__logo"/>}
        {(type === 'desktop' || !menuIsHidden)
          ? <div className="aside-header__text">BECO</div>
          : ''
        }
        { (type !== 'desktop')
          ? (<div className={btnClass} onClick={changeMenuVisibility}>
              <Btn />
              { (menuIsHidden)
                ? (
                  <div className="aside-header__show">
                    <Burger />
                  </div>
                )
                : (
                  <div className="aside-header__close">
                    <Exit />
                  </div>
                )
              }
            </div>)
          : ''
        }
      </div>
      <div className="menu">
        <div className="menu-item menu-item--first" onClick={selectNewMenuItem('Каталог')}>
          {(type !== 'phone') ? <Catalog className="menu-item__img menu-item__img--not-black" /> : ''}
          {(!menuIsHidden || type === 'desktop') ? <div className="menu-item__title">Каталог</div> : ''}
        </div>
        <div className="menu-item menu-item--second" onClick={selectNewMenuItem('Здоровье')}>
          {(type !== 'phone') ? <Health className="menu-item__img" /> : ''}
          {(!menuIsHidden || type === 'desktop') ? <div className="menu-item__title">Здоровье</div> : ''}
        </div>
        <div className="menu-item menu-item--third" onClick={selectNewMenuItem('Красота')}>
          {(type !== 'phone') ? <Beauty className="menu-item__img" /> : ''}
          {(!menuIsHidden || type === 'desktop') ? <div className="menu-item__title">Красота</div> : ''}
        </div>
        <div className="menu-item menu-item--fourth" onClick={selectNewMenuItem('Развлечения')}>
          {(type !== 'phone') ? <Enjoy className="menu-item__img" /> : ''}
          {(!menuIsHidden || type === 'desktop') ? <div className="menu-item__title">Развлечения</div> : ''}
        </div>
        <div className="menu-item" onClick={selectNewMenuItem('Авто')}>
          {(type !== 'phone') ? <Car className="menu-item__img" /> : ''}
          {(!menuIsHidden || type === 'desktop') ? <div className="menu-item__title">Авто</div> : ''}
        </div>
      </div>
    </div>
  );
};

export default Aside;
