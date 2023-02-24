import React from 'react'
import { AboutUs } from '../../components/AboutUs';
import { ImgAboutUs } from '../../components/ImgAboutUs';

export const InforStored = () => {
  return (
    <section>
    <div className="flex">
        <AboutUs/>
        <div className="w-screen my-10 mx-16 h-96 ">
        <ImgAboutUs/>
        </div>
    </div>
    <div className="flex my-20">
        <div className="ml-20 mr-10">
            <h4 className="text-center text-blue-500">Visión</h4>
            <hr className="w-20 mx-28 mb-8"/>
            <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id quis quia impedit, quisquam vitae consequatur deleniti officiis placeat eveniet quaerat consectetur quas. Debitis dolorum, illum aperiam cumque ratione voluptates! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ex, sit, expedita error ad quos nam repudiandae id laborum praesentium illum, impedit optio aliquid ut vitae! Quisquam dolorum tempora omnis.</p>
        </div>
        <div className="mx-10">
            <h4 className="text-center text-blue-500">Misión</h4>
            <hr className="w-20 mx-28 mb-8"/>
            <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe, voluptatibus sequi dolor laudantium odit enim facere explicabo omnis possimus illo soluta magni pariatur iusto earum veniam quia officiis! Eaque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laborum fugit ullam omnis, fugiat deleniti ad impedit laboriosam autem nisi maiores aliquam accusantium earum numquam beatae, repellat harum inventore non!.</p>
        </div>
        <div className="mx-16">
            <h4 className="text-center text-blue-500">Valores</h4>
            <hr className="w-20 mx-32 mb-8"/>
            <p className="text-sm font-light"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, aliquid aperiam asperiores qui animi, nam maxime eaque veritatis, quisquam exercitationem vero sapiente nesciunt rerum magnam nostrum non quidem voluptate nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia tenetur assumenda. Illo rerum ipsam veritatis minima obcaecati eaque soluta nobis optio id nisi architecto debitis neque, aspernatur placeat eos.</p>
        </div>
    </div>
</section>
  )
}
