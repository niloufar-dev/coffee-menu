import ProductDetail from '@/app/component/details';
import drinks from '@/app/data/drink';
import React, { Suspense } from 'react'


async function Getdetail({para}) {
    let myparam= await para
    myparam=myparam.slugpage
    console.log(myparam);
    let temp=drinks.find((item)=>{
        return item.slug==myparam
    })
    console.log(temp);
    return(
        <ProductDetail
      menuname={temp.category}
      name={temp.name}
      img={temp.image}
      price={temp.price}
      desc={temp.description}
      details={temp.details}
      rating={temp.rating}
      reviews={temp.reviews}
      subtitle={temp.subtitle}
      ingredients={temp.ingredients}
      preparationTime={temp.preparationTime}
      temperature={temp.temperature}
      intensity={temp.intensity}
    />
    )
    
}
export default async function page({params}) {
    
    

    
  return (
    <Suspense fallback={<p>loaDING.....</p>}>
        <Getdetail  para={params} />
    </Suspense>
  )
}
