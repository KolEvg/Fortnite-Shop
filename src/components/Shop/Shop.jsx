import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';

import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BasketList from '../BasketList/BasketList';
import Alert from '../Alert/Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  // console.log(goods);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId); // если id элемента с id в нашем заказе найдется - получим индекс элемента массива
    // console.log(itemIndex);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]); // когда товар добавляется в первый раз
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        }
        return orderItem;
      });
      setOrder(newOrder); // отправляем новый массив в стейт
    }
    setAlertName(item.displayName);
  };
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      }
      return el;
    });
    setOrder(newOrder);
  };
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      }
      return el;
    });
    setOrder(newOrder);
  };
  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
      });
  }, []);
  // console.log(order);
  return (
    <main
      className="container content"
    >
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      { loading ? <Preloader />
        : <GoodsList goods={goods} addToBasket={addToBasket} /> }
      {isBasketShow && (
      <BasketList
        order={order}
        handleBasketShow={handleBasketShow}
        removeFromBasket={removeFromBasket}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
      />
      )}
      {
        alertName && <Alert displayName={alertName} closeAlert={closeAlert} />
      }
    </main>
  );
}

export default Shop;
