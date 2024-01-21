import affogato from './assets/affogato.svg';
import americano from './assets/americano.svg';
import aulait from './assets/aulait.svg';
import cappuccino from './assets/cappuccino.svg';
import ColdBrew from './assets/ColdBrew.svg';
import espresso_con_panna from './assets/espresso-con-panna.svg';
import frappe from './assets/frappe.svg';
import freakshake from './assets/freakshake.svg';
import iris from './assets/iris.svg';
import latte from './assets/latte.svg';
import lungo from './assets/lungo.svg';
import mocha from './assets/mocha.svg';

const ProductsDrinks = () => {
  return (
    <>
      <div className="menu-item">
        <img src={affogato} alt="affogato" />
        <div className="order-detail">
          <h3>AFFOGATO</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={americano} alt="americano" />
        <div className="order-detail">
          <h3>AMERICANO</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={aulait} alt="aulait" />
        <div className="order-detail">
          <h3>CAFÈ AU LAIT</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={cappuccino} alt="cappuccino" />
        <div className="order-detail">
          <h3>CAPPUCCINO</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={ColdBrew} alt="ColdBrew" />
        <div className="order-detail">
          <h3>COLD BREW COFFEE</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={espresso_con_panna} alt="espresso-con-panna" />
        <div className="order-detail">
          <h3>ESPRESSO CON PANNA</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={frappe} alt="frappe" />
        <div className="order-detail">
          <h3>FRAPPÉ</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={freakshake} alt="freakshake" />
        <div className="order-detail">
          <h3>FREAKSHAKE</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={iris} alt="iris" />
        <div className="order-detail">
          <h3>IRISH COFFEE</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={latte} alt="latte" />
        <div className="order-detail">
          <h3>CAFFÈ LATTE</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={lungo} alt="lungo" />
        <div className="order-detail">
          <h3>LUNGO COFFEE</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <img src={mocha} alt="mocha" />
        <div className="order-detail">
          <h3>CAFFÈ MOCHA</h3>
          <div className="order-price">
            <p>ราคา :</p>
            <p>35 บาท</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsDrinks