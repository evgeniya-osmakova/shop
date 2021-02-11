import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Item = (props) => {
  const {
    header,
    description,
    text,
    type,
    img,
  } = props;

  Item.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };

  const itemClass = cn('item', `item__${img}`);

  return (
    <div className="item-wrapper">
      <div className={itemClass}>
        <div className="item-data">
          <h2 className="item-data__header">{header}</h2>
          <div className="item-data__description">{description}</div>
          <div className="item-data__text">{text}</div>
          <div className="item-data__type">{type}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
