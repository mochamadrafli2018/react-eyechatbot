export default function DashboardContent() {
  return (
    <div class='bg-blue-100 border-2 border-blue-300 h-full w-full border-box p-3 mx-auto'>
      <p class='flex flex-col text-center w-full my-2 text-xl font-semibold title-font text-black'>
        3 Keuntungan Menggunakan Sistem Skrining
      </p>
      <div class='flex lg:flex-row flex-col'>
        {[
          {
            icon:'http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-4.png',
            text: `Memberikan kemudahan untuk melakukan skrining penyakit mata.`,
            title:`Fitur Chat`,
          },
          {
            icon:'http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-3.png',
            text:`Hasil skrining ditentukan dengan metode forward chaining.`,
            title:`Kecerdasan Buatan`,
          },
          {
            icon:'http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-2.png',
            text:`Kemudahan akses di semua platform browser dari perangkat apapun.`,
            title:`Multi platform`,              
          }
        ].map((item, index) => (
          <div key={index} class='p-2 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
            <div class='flex rounded-lg h-full flex-col'>
              <div class='items-center text-center'>
                <div class='inline-flex items-center justify-center rounded-full mb-2'>
                  <img src={ item.icon } alt='' />
                </div>
              </div>
              <div class='flex-grow'>
                <h4 class='font-bold text-center text-lg mb-2 text-medium-black'>
                  { item.title }
                </h4>
                <p class='leading-relaxed text-base text-center tracking-wide text-gray'>
                  { item.text }
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  )
}