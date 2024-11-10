import React from 'react';

const MenuData = [
    {
        id: "1",
        title: "Fresh Red Apple",
        link: "/",
        price: "$3.00",
        imageSrc: '/apple.png'
    },
    {
        id: "2",
        title: "Fresh Oranges",
        link: "/",
        price: "$4.00",
        imageSrc: '/orange.png'
    },
    {
        id: "3",
        title: "Fresh Avocado",
        link: "/",
        price: "$5.00",
        imageSrc: '/avocado.png'
    },
    {
        id: "4",
        title: "Fresh Cherries",
        link: "/",
        price: "$2.00",
        imageSrc: '/cherry.png'
    },
];

function Menu() {
    return (
        <section>
            <div className='container pt-12 pb-20'>
                <h1 className='text-2xl font-bold text-left pb-10 uppercase'>
                    Our Menu
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {MenuData.map((menu) => (
                        <div
                            key={menu.id}
                            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-col justify-around items-center gap-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50'
                        >
                            <img
                                src={menu.imageSrc}
                                alt={menu.title}
                                className='w-[60px] mb-4 scale-110 transform translate-y-6'
                            />
                            <div className='text-center'>
                                <h1 className='text-lg font-semibold'>{menu.title}</h1>
                                <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;
