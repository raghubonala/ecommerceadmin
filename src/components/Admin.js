import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Admin = () => {

    const [products, setproducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])


    const getData = async() => {
        try {
            const result = await axios.get("https://ecommercebackend-d2fs.onrender.com/show_product")
            setproducts(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async(id)=>{
        try {
            const result = await axios.delete(`https://ecommercebackend-d2fs.onrender.com/single_product/${id}`)
            getData()
            Swal.fire({
              title: 'Success!',
              text: 'Deleted',
              icon: 'success',
              
            })
            
        } catch (error) {
            console.log(error);
        }

    }

    const EditProduct = (id) => {
        navigate(`/single-product-edit/${id}`)
    }


  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
     {products.map((doc)=>(
         <div className="p-4 md:w-1/3">
         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           <img
             className="lg:h-48 md:h-36 w-full object-contain object-center"
             src={doc.image}
             alt="blog"
           />
           <div className="p-6">
             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
               Rs .{doc.price}
             </h2>
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             {doc.name}
             </h1>
             <p className="leading-relaxed mb-3">
             {doc.description}
             </p>
             <div className="flex items-center flex-wrap ">
             <button onClick={()=>EditProduct(doc._id)} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Edit
           </button>
           <button onClick={()=>deleteProduct(doc._id)} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Delete
           </button>
             </div>
           </div>
         </div>
       </div>
     ))}
    </div>
  </div>
</section>

  )
}

export default Admin