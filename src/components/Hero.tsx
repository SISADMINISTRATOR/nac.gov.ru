export default function Hero() {
  return (
    <section className="bg-gray-100 py-8 border-b border-gray-300">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-blue-900">
          <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900">
            <div className="text-center text-white">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <p className="text-xl font-bold">Национальный антитеррористический комитет</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block w-max mb-3 rounded-sm">
              Важное
            </span>
            <h2 className="text-3xl font-serif font-bold text-white leading-tight mb-2 group-hover:underline decoration-2 underline-offset-4">
              Состоялось заседание Национального антитеррористического комитета
            </h2>
            <p className="text-gray-200 text-sm">
              В Москве под руководством Председателя НАК, Директора ФСБ России А.В. Бортникова рассмотрены вопросы профилактики терроризма...
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex h-[188px] cursor-pointer group">
            <div className="w-2/5 bg-blue-800 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="w-3/5 p-4 flex flex-col justify-center">
              <span className="text-blue-900 text-xs font-semibold uppercase mb-1">
                Деятельность НАК
              </span>
              <h3 className="font-bold font-serif text-gray-800 text-sm leading-snug group-hover:text-blue-700 transition">
                Подведены итоги деятельности антитеррористических комиссий за 2025 год
              </h3>
              <span className="text-gray-500 text-xs mt-3 block">
                12 Февраля 2026
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex h-[188px] cursor-pointer group">
            <div className="w-2/5 bg-red-600 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
              </svg>
            </div>
            <div className="w-3/5 p-4 flex flex-col justify-center">
              <span className="text-blue-900 text-xs font-semibold uppercase mb-1">
                Деятельность НАК
              </span>
              <h3 className="font-bold font-serif text-gray-800 text-sm leading-snug group-hover:text-blue-700 transition">
                Выявлена и пресечена деятельность ячейки международных террористов
              </h3>
              <span className="text-gray-500 text-xs mt-3 block">
                12 Февраля 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
