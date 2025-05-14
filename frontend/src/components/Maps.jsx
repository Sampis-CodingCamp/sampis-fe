import React from "react";

const Maps = () => {
  return (
    <div className="relative py-15 w-full h-screen ">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-green-apple px-3 py-1 font-semibold mb-2 text-emerald-700">
          <p className="text-sm whitespace-nowrap">Lokasi</p>
        </span>
        <p className="mb-2 text-5xl sm:text-3xl text-hitam-manja font-bold">
          Lokasi Sampis
        </p>
        <p className="text-lg font-extralight text-hitam-manja">
          Berita Terkini Tentang Alam Disekitar Kita
        </p>
      </div>

<div className="max-w-6xl mx-auto px-6">
    <div className="aspect-video h-[500px] w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Lokasi Bantar Gebang"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7991001370815!2d106.9768!3d-6.329383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992e8e2895c37%3A0x1b57c0e2c1e0a72b!2sTPST%20Bantar%20Gebang!5e1!3m2!1sid!2sid!4v1715524123456!5m2!1sid!2sid"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
    </div>
  );
};

export default Maps;
