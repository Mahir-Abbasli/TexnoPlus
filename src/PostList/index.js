import React, { useEffect, useState } from 'react';
import { addToCard, getProducts } from '../services/api';

 const PostList = () => {
  const [products, setProducts] = useState();
  const [ids, setIds] = useState([]);


  useEffect( () => {

    // load products
    getProductList();    

  }, []);

  const getProductList = async () => {
    const get_products = await getProducts();
    setProducts(old_data => get_products);
  }

  const updateIds = (e) => {
    const {value, checked} = e.target;

    if (checked) {
 
      setIds(old_ids => [...old_ids, value]);

    }else{
      ids.splice(ids.indexOf(value), 1);

      setIds(old_ids => ids);
    }
  }

  const addToBasket = () => {
    let create_basket_ids=ids.map(id => {
      return {
        productId: Number(id), 
        quantity: 1
      }
    })
    console.log(ids, create_basket_ids)

    let request_data={
      userId: 5,
      date: new Date(),
      products: create_basket_ids
    }

    addToCard(request_data).then(res => {
      // console.log(res);
    });
  }

  return (
    <>

    <button type='button' >Add new product</button>

    <table width={'60%'} align="center" cellPadding='0' cellSpacing={'0'} border='1'>

      <thead>
        <tr>
          <th>ID</th>
          <th>
            <label>
              <input type={'checkbox'} />
              <span>Check All</span>
            </label>
          </th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Operation</th>
        </tr>
      </thead>

      <tbody>
        {
          products?.map(product => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <label>
                    <input type={'checkbox'} onChange={updateIds}  value={product.id} />
                  </label>
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td><img src={product.image} width='100' /></td>
              </tr>
            )
          })
        }
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={'6'} align='right'>
            <button type='button' onClick={addToBasket}>Add to card</button>
          </td>
        </tr>
      </tfoot>
    </table>
       
    </>
  )
}

export default PostList;





const [products, setProducts] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect( () => {

    // load products
    getProductList();    

  }, []);

  const getProductList = async () => {
    const get_products = await getProducts('https://dummyjson.com/products')
    setProducts(old_data => get_products);
  }

  
  const updateIds = (e) => {
    const {value, checked} = e.target;

    if (checked) {

      setIds(old_ids => [...old_ids, value]);

    }else{
      ids.splice(ids.indexOf(value), 1);

      setIds(old_ids => ids);
    }
  }

  const addToBasket = () => {
    let create_basket_ids=ids.map(id => {
      return {
        productId: Number(id),
        quantity: 1
      }
    })
    console.log(ids,products, create_basket_ids)

    let request_data={
      userId: 5,
      date: new Date(),
      products: create_basket_ids
    }

    addToCard(request_data).then(res => {
      console.log(res);
    });
  }

  return (
    <>

    <button type='button' >Add new product</button>

    <table width={'60%'} align="center" cellPadding='0' cellSpacing={'0'} border='1'>

      <thead>
        <tr>
          <th>ID</th>
          <th>
            <label>
              <input type={'checkbox'} />
              <span>Check All</span>
            </label>
          </th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Operation</th>
        </tr>
      </thead>

      <tbody>
        {
          products?.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <label>
                    <input type={'checkbox'} onChange={updateIds}  value={product.id} />
                  </label>
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.mahir}</td>
                <td><img src={product.image} width='100' /></td>
              </tr>
            )
          })
        }
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={'6'} align='right'>
            <button type='button' onClick={addToBasket}>Add to card</button>
          </td>
        </tr>
      </tfoot>
    </table>
       
    </>
  )