import { useState } from 'react'
import './App.css'
import AddItems from "./components/AddItems/AddItems";
import CheeseImage from './assets/Cheese.png';

interface Item {
    id: string;
    name: string;
    count: number;
    price: number;
    image: string;
}

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: '1', name: 'Hamburger', count: 0, price: 80, image: CheeseImage },
        { id: '2', name: 'Cheeseburger', count: 0, price: 90, image: CheeseImage },
        { id: '3', name: 'Fries', count: 0, price: 45, image: CheeseImage },
        { id: '4', name: 'Coffee', count: 0, price: 70, image: CheeseImage },
        { id: '5', name: 'Tea', count: 0, price: 50, image: CheeseImage },
        { id: '6', name: 'Cola', count: 0, price: 40, image: CheeseImage },
    ]);

    const addItem = (id: string) => {
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
        });
    };

    return (
        <div className="container">
            <div className="items-list">
                {items.map(item => (
                    <AddItems
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        onAddItems={() => addItem(item.id)}
                        name={item.name}
                        count={item.count}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
