import React from 'react';
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
const ProductTable = ({product}) => {
    return (
        <tr className="hover">
       
        <td>{product.title}</td>
        <td>{product.brand}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td><button className='btn btn-grey'><CiEdit size={20} /></button></td>
        <td><button className='btn btn-grey'><AiTwotoneDelete /></button></td>
        
      </tr>
    );
};

export default ProductTable;