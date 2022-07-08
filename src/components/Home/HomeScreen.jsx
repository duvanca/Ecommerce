
import {  useSelector } from 'react-redux'


import ProductCard from './ProductCard'
import './style/homeScreen.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const HomeScreen = () => {

  const [search, setSearch] = useState()

  const {handleSubmit, register, reset} = useForm()
 let nameProduct 

  const submit = data => {
    
    if(data.searchText === ""){

      alert("campo vacio")
    }else{
      setSearch(data.searchText)
    }
    reset({
      searchText: ""
  })
 
  }

  console.log(search)


 

  const products = useSelector(state => state.products)

  console.log(products)

  const productSearch = products?.filter(item => item.title === search)

  console.log(productSearch)



 

  return (
    <div className='home'>
      <div className="container-form">
      
      <form onSubmit={handleSubmit(submit)} className='form-home'>
        <input className="input-search"placeholder='Name product' type="text" {...register('searchText')} />
        <button className="btn-form">Search</button>
      </form>
      </div>
      <div className='products-container'>
        {
          search===undefined?
          products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
          :
          productSearch.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen