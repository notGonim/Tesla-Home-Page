import './App.css';
import { Header } from './components/Header';


import pic1 from "../src/assets/Desktop-Accessories.jpg"
import pic2 from "../src/assets/Desktop-Model3.jpg"
import pic3 from "../src/assets/Desktop-ModelS.jpg"
import pic4 from "../src/assets/Desktop-ModelX.jpg"
import pic5 from "../src/assets/Desktop-ModelY.jpg"
import pic6 from "../src/assets/Desktop-SolarPanels.jpg"
import pic7 from "../src/assets/Desktop-SolarRoof.jpg"

import { Item } from './components/Item';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemContainer">
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=""
          bg={pic2}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoBtn='true'
          first
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          bg={pic3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoBtn='true'
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          bg={pic4}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoBtn='true'
        />
        <Item
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          bg={pic5}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoBtn='true'
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          bg={pic6}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoBtn='true'
        />
        <Item
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          bg={pic1}
          leftBtnText="SHOP NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
        />
     

      </div>
    </div>
  );
}

export default App;
