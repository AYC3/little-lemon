import menuList from "../menuList.js";

const Menu = () => {
  return (
    <>
      <section className="menu-container">
        <div className="menu-header">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="cards-container">
          {menuList.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img
                  className="card-img"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="title-price-card">
                  <h2>{recipe.title}</h2>
                  <p>${recipe.price}</p>
                </div>
                <h3>{recipe.description}</h3>
                <button>Order a Delivery</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Menu;
