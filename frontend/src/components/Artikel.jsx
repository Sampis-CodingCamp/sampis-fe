import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { artikel } from '../assets/assets';

const Artikel = () => {
  return (
    <div className="relative py-20 w-full h-screen bg-[#F9FAFB]">
  <div className='mb-12 text-center'>
    <span className="inline-flex items-center justify-center rounded-full bg-green-apple px-3 py-1 font-semibold mb-2 text-emerald-700">
      <p className="text-sm whitespace-nowrap">Berita</p>
    </span>
    <p className='mb-2 text-5xl sm:text-3xl text-hitam-manja font-bold'>Berita Terkini</p>
    <p className='text-lg font-extralight text-hitam-manja'>Berita Terkini Tentang Alam Disekitar Kita</p>
  </div>

  {/* Swiper Carousel */}
  <div className="max-w-7xl mx-auto px-6">
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mt-8"
    >
      {artikel.map((item) => (
        <SwiperSlide key={item._id}>
          <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-lg bg-white">
            <img src={item.image} className="h-56 w-full object-cover" alt={item.title} />
            <div className="bg-white p-4 sm:p-6">
              <time dateTime={item.date} className="block text-xs text-gray-500">
                {new Date(item.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{item.title}</h3>
              </a>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination & Lihat Semua */}
    <div className="flex justify-between items-center mt-10">
      {/* Default Swiper pagination akan auto-inject di bawah Swiper */}
      <div></div> {/* Placeholder agar "Lihat semua" ke kanan */}
      <a href="#" className="text-[#BF9264] text-sm underline font-medium hover:text-orange-300">
        Lihat semua
      </a>
    </div>
  </div>
</div>
  )
}

export default Artikel

