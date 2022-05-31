import GoodsItem from '../GoodsItem/GoodsItem';

function GoodsList({ goods, addToBasket }) {
  // function GoodsList(props){
  //   const { goods = []} = props
  // }
  // console.log(addToBasket);
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  // console.log(goods);
  return (
    <div className="goods">
      {goods.map((el) => <GoodsItem key={el.mainId} el={el} addToBasket={addToBasket} />)}
    </div>
  );
}
export default GoodsList;
