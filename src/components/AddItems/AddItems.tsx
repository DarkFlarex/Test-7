import React from 'react';
import './AddItems.css';

interface AddItemsProps {
    id: string;
    image: string;
    name:string;
    price:number;
    onAddItems:React.MouseEventHandler;
}

const AddItems: React.FC<AddItemsProps> = ({
    image,
    name    ,
    price,
    onAddItems
}) => {
    return (
        <div className={"Items"} onClick={onAddItems}>
            <img src={image} alt={name} className="Item-image"/>
            <div className={"Items-info"}>
                <span className={"Item-name"}>{name}</span>
                <span className={"Item-price"}>Price {price} KGS</span>
            </div>
        </div>
    );
};

export default AddItems;
