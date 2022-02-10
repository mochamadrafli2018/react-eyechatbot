import React, { useState} from 'react';
import '../index.css';

// export Crud function
export default function Crud() {
    // product name just only contain name data
    const [allProduct, setAllProduct] = useState(['Samsung','Vivo','Iphone','Poco']);
    const [productName, setProductName] = useState('');
    // set current index of allProduct array
    const [currentIndex, setCurrentIndex] = useState(-1);

    // handle enter after input product name
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            // if product didn't exist before
            if (currentIndex === -1) {
                // save product name
                setAllProduct([...allProduct, productName])
            } 
            else {
                allProduct[currentIndex] = productName;
            }
            setProductName('')
        }
    }

    // create product data with button after input product name
    const handleSubmit = (event) => {    
        event.preventDefault()
        // if product didn't exist before
        if (currentIndex === -1) {
            // save product name
            setAllProduct([...allProduct, productName])
        } 
        else {
            // change product's name
            allProduct[currentIndex] = productName;
        }    
        // set input to ""  
        setProductName("")
    }

    // update product name handler
    const updateProduct = (event) => {
        setCurrentIndex(event.target.value)
        setProductName(allProduct[currentIndex])
        //setCurrentIndex(event.target.value)    
    }

    // delete product name handler
    const deleteProduct = (event) => {
        setCurrentIndex(event.target.value)
        // delete data in array
        allProduct.splice(currentIndex)
    };

    return (
        <div className='App'>
            {/* Add data HTML section */}
            <div 
                className='container border-2 hover:border-blue-400 my-3 mx-auto p-2 rounded-lg shadow-md w-100'
                style={{maxWidth:'600px'}}
            >
                <h4 class='text-center text-primary'>Tambahkan data produk</h4>
                <div className='mx-auto my-2'>
                    <p className='form-label my-1'>Input Nama Produk</p>
                    <input TN
                        className='border form-control rounded my-1 py-1 w-2/5'
                        type='text'
                        value={productName}
                        onChange={(event) => setProductName(event.target.value )}
                        onKeyPress={handleEnter}
                    />
                    <button 
                        className='btn btn-primary ml-auto my-1 w-1/5' 
                        onClick={handleSubmit}
                    >
                        Tambah
                    </button>
                </div>
            </div>
            {/* Get all data HTML section */}
            <div 
                class='container border-2 hover:border-blue-400 my-2 mx-auto p-2 rounded-lg shadow-md   w-100'
                style={{maxWidth:'600px'}}
            >
                <h4 class='text-center text-primary'>Semua data produk</h4>
                {allProduct.map((item, index) => (
                    <Card 
                        index={index}
                        item={item} 
                        deleteProduct={deleteProduct} 
                        updateProduct={updateProduct} 
                    />
                ))}
            </div>
        </div>
    );
}

// Card component
const Card = ({ deleteProduct, index, item, updateProduct }) => {
    return (
        <tr className='my-1 mx-auto p-2 border-2 hover:border-blue-400 rounded-lg w-100'>
            <td className='m-1 p-1 w-4/5'>
                <p className='inline text-dark'>{index+1}.) Nama : {item}</p>
            </td>
            <td className='m-1 p-1'>
                <button 
                    className='inline btn btn-outline-primary' 
                    onClick={updateProduct}
                    value={index}
                >Edit</button> 
            </td>
            <td className='m-1 p-1'>
                <button 
                    className='inline btn btn-outline-primary' 
                    onClick={deleteProduct}
                    value={index}
                >Delete</button>
            </td>
        </tr>
    );
};  