import React from 'react';
import './style.css';
export default function Content () {
    return (
    <section class='h-full w-full border-box bg-white'>
		<div class='content-2-1'>
			<div class='container lg:px-32 md:px-8 sm:px-12 px-5 pt-20 pb-12 mx-auto'>
				<div class='flex flex-col text-center w-full mb-12'>
					<h1 class='text-4xl font-semibold title-font mb-2.5 text-medium-black'>
						3 Keuntungan Menggunakan Sistem Skrining
					</h1>
					<h2
						class='text-base font-light title-font mx-12 lg:w-full md:w-full sm:w-3/6 sm:mx-auto text-medium-black'>
						Chat yang mudah digunakan
					</h2>
				</div>
				<div class='flex lg:flex-row flex-col -m-4'>
					<div class='px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
						<div class='flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-4 pb-12 flex-col'>
							<div class='items-center text-center'>
								<div class='inline-flex items-center justify-center rounded-full mb-6'>
									<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-4.png'
										alt='' />
								</div>
							</div>
							<div class='flex-grow'>
								<h4 class='font-medium text-center text-2xl mb-2.5 text-medium-black'>
									Fitur Chat
								</h4>
								<p class='leading-relaxed text-base text-center tracking-wide text-gray'>
									Mudah membantu anda untuk melakukan skrining penyakit
								</p>
							</div>
						</div>
					</div>
					<div class='px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
						<div class='flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-12 flex-col'>
							<div class='items-center text-center'>
								<div class='inline-flex items-center justify-center rounded-full mb-6'>
									<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-3.png'
										alt='' />
								</div>
							</div>
							<div class='flex-grow'>
								<h4 class='font-medium text-center text-2xl mb-2.5 text-medium-black'>
									Kecerdasan Buatan
								</h4>
								<p class='leading-relaxed text-base text-center tracking-wide text-gray'>
									Menerapkan metode forward chaining untuk memutuskan hasil skrining
								</p>
							</div>
						</div>
					</div>
					<div class='px-14 md:px-0 lg:px-4 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
						<div class='flex rounded-lg h-full lg:pt-8 lg:pb-8 md:pt-8 md:pb-8 pt-12 pb-6 flex-col'>
							<div class='items-center text-center'>
								<div class='inline-flex items-center justify-center rounded-full mb-6'>
									<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-2.png'
										alt='' />
								</div>
							</div>
							<div class='flex-grow'>
								<h4 class='font-medium text-center text-2xl mb-2.5 text-medium-black'>
									Multi platform
								</h4>
								<p class='leading-relaxed text-base text-center tracking-wide text-gray'>
									Kemudahan akses di semua platform browser dari OS apapun.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
    )
}