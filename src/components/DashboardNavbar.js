import OverlayItem from '../components/Overlay';

export default function DashboardNavbar() {
  return (
    <div
      style={{position:'fixed',top:'0','z-index':'1'}}  
      className='bg-blue-600 flex flex-row justify-center lg:justify-start py-1 space-x-1 md:space-x-2 lg:space-x-3 shadow-sm w-full'
    >
      <OverlayItem
        text={(
          <span className='text-white'>
            <i className="bi bi-info-square"></i> Sistem Pakar?
          </span>
        )}
        explanation={(
          <div>
            <p>sistem pakar, menurut <a href='https://kbbi.kemdikbud.go.id/entri/sistem%20pakar' className='text-blue-600'>KBBI</a> adalah :</p>
            <p>Program komputer yang menggunakan informasi, heuristik, dan simpulan yang tersedia untuk menyarankan solusi terhadap masalah tertentu.</p>
          </div>
        )}
      />
        <OverlayItem
          text={(
            <span className='text-white'>
              <i className="bi bi-info-square"></i> Skrining
            </span>
          )}
          explanation={(
          <div>
            <p>skri.ning, menurut <a href='https://kbbi.kemdikbud.go.id/entri/skrining' className='text-blue-600'>KBBI</a> adalah :</p>
            <p>1. Identifikasi dini penyakit berdasarkan serangkaian tes dan pemeriksaan.</p>
            <p>2. Evaluasi yang dilakukan sebagai bagian dari survei atau tes untuk melihat kesesuaian seseorang pada pekerjaan tertentu.</p>
            <p>3. Penilaian mental dan ideologi seseorang.</p>
          </div>
        )}
      />
    </div>
  )
}