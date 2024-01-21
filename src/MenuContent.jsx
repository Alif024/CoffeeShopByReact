import ProductsDrinks from './ProductsDrinks'
import ProductsDessert from './ProductsDessert'
import './MenuContent.css'

// eslint-disable-next-line react/prop-types
const MenuContent = ({ onSelectMenuContent, selectedMenuContent }) => {
  return (
    <div className="menu-content">
      <div className="menu-list">
        <div className="products-menu">
          {selectedMenuContent === 'DRINKS' ? <ProductsDrinks /> : <ProductsDessert />}
        </div>
      </div>
      <div className="menu-category">
        <button className={`${selectedMenuContent === 'DRINKS' ? 'active' : ''}`} id="drinks-category" onClick={() => onSelectMenuContent('DRINKS')}>DRINKS</button>
        <button className={`${selectedMenuContent === 'DESSERTS' ? 'active' : ''}`} id="desserts-category" onClick={() => onSelectMenuContent('DESSERTS')}>DESSERTS</button>
      </div>
    </div>
  )
}

export default MenuContent