import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate,useParams } from 'react-router-dom'

const UpdateProduct = () => {
    let [product,setProduct]=useState({
        name:"",
        image:"",
        price:"",
        qty:"",
        info:""
    })
    let [isUpdated,setUpdated]=useState(false)
    let p_Id=useParams('id')

    let updateInput=(event)=>{
        setProduct({...product,[event.target.name]:event.target.value})
    }
    useEffect(()=>{
        console.log(p_Id);
        let url=`http://127.0.0.1:5000/api/products/${p_Id}`
        axios.get(url)
        .then((response)=>{
            setProduct(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    let submitHandler=(event)=>{
        event.preventDefault()
        let url=`http://127.0.0.1:5000/api/products/${p_Id.id}`
        axios.put(url,product)
        .then((response)=>{
            console.log(response.data);
            setUpdated(true)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return <>
    <div className="container">
    <pre>{JSON.stringify(product)}</pre>
    {
        isUpdated ? <><Navigate to='/admin'/></>:<>
                </>
    }
    <div className="row">
    <div className="col-md-5">
    <div className="card">
    <div className="card-header bg-primary text-white">
        <h3>Update Product</h3>
    </div>
    <div className="card-body">
    <form onSubmit={submitHandler}>
    <div className="form-group">
        <input type="text" onChange={updateInput} value={product.name} name='name' placeholder='Product Name' className='form-control' />                               
    </div>
    <div className="form-group">
        <input type="file" name='image' className='form-control'/>
    </div>
    <div className="form-group">
        <input type="numer" onChange={updateInput} value={product.price} name='price' placeholder='Price'  className='form-control' />
    </div>
    <div className="form-group">
        <input type="number" onChange={updateInput} value={product.qty} name='qty' placeholder='Qty' className='form-control' />
     </div>
    <div className="form-group">
        <input type="text" onChange={updateInput} value={product.info} name='info' placeholder='Additional Info' className='form-control'/>
    </div>
        <input type="submit" value='update Product' className='btn btn-primary' />
    </form>
    </div>
      </div>

    </div>
  </div>
</div>
  </>
}

export default UpdateProduct