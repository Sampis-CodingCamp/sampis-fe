import React from 'react'

const Visi = () => {
  return (
        <section className="px-6 max-w-7xl py-20 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-10">
        {/* Left Section - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {["Penelitian", "Edukasi", "Wisata", "Lingkungan"].map((title, index) => (
            <div key={index} className="bg-[#27667B] text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">
                Menyajikan informasi yang lebih jelas bagi masyarakat untuk meningkatkan pengetahuan.
              </p>
            </div>
          ))}
        </div>

        {/* Right Section - Vertically Centered */}
        <div className="flex-1 flex items-center">
          <div>
            <span class="inline-flex items-center justify-center rounded-full bg-green-apple px-3 py-1 font-semibold mb-2 text-emerald-700 ">
                <p class="text-sm whitespace-nowrap">Tujuan</p>
              </span>
            <h2 className="text-3xl text-hitam-manja font-bold mb-4">4 tujuan Sampis</h2>
            <p className="text-gray-600 leading-relaxed">
              Sampis adalah organisasi yang berkomitmen untuk melestarikan lingkungan dan meningkatkan kesadaran tentang
              pentingnya pelestarian alam. Melalui berbagai inisiatif dan program, kami bertujuan untuk menciptakan
              perubahan positif dalam lingkungan dan masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visi
