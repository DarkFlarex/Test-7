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
    totalPrice: number;
    onRemoveItem: (id: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ items, totalPrice, onRemoveItem }) => {

    const ItemPrice = (item: Item): number => {
        return item.price * item.count;
    };

    const showOrderItems = items.filter(item => item.count > 0);

    return (
        <div className="order-details">
            {showOrderItems.length === 0 ? (
                <div className="order-details-empty">
                    <span>Order is empty!</span>
                    <span>Please add some items!</span>
                </div>
            ) : (
                <div className="order-Add">
                    {showOrderItems.map(item => (
                        <div className="order-Add-info" key={item.id}>
                            <span className="order-Add-info-name">{item.name}</span>
                            <span className="order-Add-info-count">x{item.count}</span>
                            <span className="order-Add-info-price">{ItemPrice(item)} KGS</span>
                            <button className="order-Add-info-button-remove" onClick={() => onRemoveItem(item.id)}>Удалить
                            </button>
                        </div>
                    ))}
                    <span className="total-price">Total price: {totalPrice} KGS</span>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
