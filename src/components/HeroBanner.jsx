import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

const HeroBanner = () => {
  const banners = [
    "https://variety.com/wp-content/uploads/2023/10/jenna-ortega.jpg?w=1002",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  ];

  return (
    <>
         <style>
    {`
      .swiper-button-prev,
      .swiper-button-next {
        color: white !important;
        padding: 10px;
        border-radius: 999px;
        transition: all 0.3s ease;
      }

      @media (max-width: 640px) {
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      }
    `}
  </style>

      <div className='bg-gray-100 md:pt-24 pb-6'>
        <div className='relative max-w-6xl  mx-auto md:rounded-2xl h-[500px] overflow-hidden'>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            className='h-full'
          >
            {banners.map((url, index) => (
              <SwiperSlide key={index}>
                <div
                  className='bg-cover bg-center h-[500px] w-full'
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundPosition: 'center'
                  }}
                >
                  <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                    <div className='text-center text-gray-100 px-4'>
                      <h1 className='text-3xl md:text-5xl lg:text-6xl sm:mb-5 font-bold'>Discover Your Style</h1>
                      <p className='text-lg md:text-xl mb-6'>Shop the latest and find your perfect look</p>
                      <button
                        onClick={() => {
                          const section = document.getElementById("NewCollection");
                          section?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className='bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'
                      >Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
