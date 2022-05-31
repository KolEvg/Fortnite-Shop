function GoodsItem({ el, addToBasket }) {
  const {
    mainId, displayName, displayDescription, price, displayAssets,
  } = el;
  // console.log(el);
  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>
          {displayDescription}
        </p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({
            mainId,
            displayName,
            price,
          })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.5rem' }}>
          {price.finalPrice}
          руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
