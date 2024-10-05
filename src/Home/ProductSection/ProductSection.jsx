import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UseAlldata from '../../UseHooks/UseAlldata';
import about from '../../assets/about.jpg';
import ab2 from '../../assets/ab2.jpg';
import ab3 from '../../assets/image.png';
import ab4 from '../../assets/ab4.png';

const ProductSection = () => {

    const {data} = UseAlldata();

    useEffect(() => {
        AOS.init({
            duration: 2000, // Slower animations
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div>
            <div className='main grid md:grid-cols-6'>
                <div className='col1 col-span-4 p-5'>
                    <div className='bg-white'>
                        {data.map(item => (
                            <div
                                className='space-y-5 mb-10 bg-slate-50 pb-5'
                                key={item.title}
                                data-aos="fade-up"  // Slow animation applied
                            > 
                                <img src={item.img} alt="" />
                                <h1 className='text-center text-gray-400'>{item.date}</h1>
                                <h1 className='text-center text-2xl font-semibold'>{item.title}</h1>
                                <h1 className='text-center'>{item.author}</h1>
                                <h1 className='text-center text-gray-400'>{item.description}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='col2 col-span-2 m-5'>
                    {/* Selected section with 3 unique images */}
                    <div className='child1 bg-white p-4 shadow-2xl space-y-5'>
                        <h1 className='uppercase text-xl'>Selected</h1>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/mtGPrjW/d1jpg.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Minimal Wall Decoration 1</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/t3dRPKf/d2.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Minimal Wall Decoration 2</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/8g97x96/11-1140x570.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Minimal Wall Decoration 3</span>
                        </div>
                    </div>

                    <div className='chil2 my-10 bg-white' data-aos="fade-right">
                        <h1 className='text-2xl p-2 hover:bg-cyan-500 hover:text-white bg-white'>About Me</h1>
                        <img src={about} alt="" />
                    </div>

                    <div className='child3 my-10'>
                        <input
                            className='w-[300px] py-2 ml-1 px-2 bg-white shadow-2xl border rounded-md'
                            type="search"
                            placeholder='search your Favorite'
                            name=""
                            id=""
                            data-aos="fade-up"
                        />
                    </div>

                    <div className='child4 p-1 bg-white shadow-2xl' data-aos="fade-left">
                        <img src={ab2} alt="" />
                        <h1 className='p-4 hover:bg-cyan-500 hover:text-white'>
                            Make your room Fresh with Plants
                        </h1>
                    </div>

                    {/* Don't Miss This section with 6 unique images */}
                    <div className='child5 bg-white p-4 shadow-2xl space-y-5 my-10'>
                        <h1 className='uppercase text-xl'>Don't Miss This</h1>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/mtGPrjW/d1jpg.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Wall Decoration 1</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/t3dRPKf/d2.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Wall Decoration 2</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/8g97x96/11-1140x570.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Wall Decoration 3</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/t3dRPKf/d2.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Wall Decoration 4</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/mtGPrjW/d1jpg.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Wall Decoration 5</span>
                        </div>
                        <div className='md:flex'>
                            <img className='w-2/5' src="https://i.ibb.co/t3dRPKf/d2.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Wall Decoration 6</span>
                        </div>
                    </div>

                    <div className='child6 bg-white p-5 my-10 shadow-2xl' data-aos="zoom-in">
                        <h1 className='text-2xl'>Instagram Feed</h1>
                        <img className='md:px-10 w-full mt-5' src={ab3} alt="" />
                    </div>

                    <div className='ch7'>
                        <img className='w-full p-10' src={ab4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
