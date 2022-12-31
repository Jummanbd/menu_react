import './Style/App.css';
import data from './Data';
import Menu from './Menu';
import Categories from './Categories'
import React, {useState} from 'react';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if(category === 'all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories = {categories} filterItem={filterItem}  />
        <Menu  items={menuItems} />
      </section>
    </main>
  );
}

export default App;
