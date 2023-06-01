import React from 'react';
import delivery from '../img/delivery.png';

const HomeContainer = () => (

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
      <div className="flex items-center justify-center gap-2 px-4 py-1 bg-orange-100 rounded-full">
        <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
          <img src={delivery} className="w-full h-full object-contain bg-white" alt="delivery" />
        </div>
      </div>

      <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
        The Fastest Delivery in
        <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facere, veniam ipsam exercitationem nostrum mollitia fugit
        similique, fuga quasi perspiciatis deleniti dolores magnam
        ipsum accusamus aliquid ad corporis perferendis, iure cupiditate?
      </p>
      <button
        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500
        w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all
        ease-in-out duration-100 md:w-auto"
      >
        Order now

      </button>
    </div>

    <div className="py-2 bg-blue-400 flex-1">i</div>
  </div>
);

export default HomeContainer;