import React from 'react'
import img1 from "./assets/single.png"
import img2 from "./assets/double.png"
import img3 from "./assets/triple.png"
import Card from './Card'

const Pricing = () => {

    const array = [
        {
            id:1,
            url: img1,
            title: "Single User",
            cost: "149",
            p1: "500 GB Storage",
            p2: "1 User Allowed",
            p3: "Send up to 2GB"
        },
        {
            id:2,
            url: img2,
            title: "Partnership",
            cost: "199",
            p1: "1 TB Storage",
            p2: "3 User Allowed",
            p3: "Send up to 10GB"
        },
        {
            id:3,
            url: img3,
            title: "Group Account",
            cost: "299",
            p1: "5 TB Storage",
            p2: "10 User Allowed",
            p3: "Send up to 20GB"
        }
    ]
  return (
    <div className='bg-white w-full py-9 px-9'>
        <div className='grid md:grid-cols-3 md:px-9 py-9 gap-9 my-24 md:mx-10 mx-5'>
        {array.map(item => <Card url={item.url} title={item.title} cost={item.cost} p1={item.p1} p2={item.p2} p3={item.p3} key={item.id} id={item.id} />)}
        </div>
    </div>
  )
}

export default Pricing