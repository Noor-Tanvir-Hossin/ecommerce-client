import React from 'react';
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
const ProductTable = ({product, handleDelete}) => {






  // console.log(product);
    return (
        <tr className="hover">
       
        <td>{product.title}</td>
        <td>{product.brand}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td> <Link to={`/dashboard/updateProduct/${product._id}`}><button className='btn btn-grey'><CiEdit size={20} /></button></Link> </td>
        <td><button onClick={() => handleDelete(product._id)} className='btn btn-grey'><AiTwotoneDelete size={20} /></button></td>
        
      </tr>
    );
};

export default ProductTable;