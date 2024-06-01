import React from 'react';
import './OrderDetails.css';

interface Item {
    id: string;
    name: string;
    count: number;
    price: number;
    image: string;
}

interface OrderDetailsProps {
    items: Item[];
    onRemoveItem: (id: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ items, onRemoveItem }) => {

    const ItemPrice = (item: Item): number => {
        return item.price * item.count;
    };

    return (
        <div className="order-details">
                <div className="order-Add">
                        {items.map(item => (
                            <div className={"order-Add-info"} key={item.id}>
                                <span className={"order-Add-info-name"}>{item.name}</span>
                                <span className={"order-Add-info-count"}>x{item.count}</span>
                                <span className={"order-Add-info-price"}>{ItemPrice(item)} KGS</span>
                                <button className="order-Add-info-button-remove" onClick={() => onRemoveItem(item.id)}>Удалить</button>
                            </div>
                        ))}
                </div>
            </div>

    );
};

export default OrderDetails;
