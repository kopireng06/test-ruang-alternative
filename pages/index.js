import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'
import {useState,useEffect} from 'react'

export const Navbar = () => {
    return (
        <div className="w-full bg-white shadow md:px-0 px-3 fixed top-0 z-10">
            <nav className="h-20 container mx-auto flex items-center justify-between">
                <div className="flex-1 md:flex hidden flex-col md:justify-center justify-between">
                    <ul className="flex items-center">
                        <Link href={{pathname: '/'}}>
                            <li className="text-yellow-500 cursor-pointer font-bold text-3xl mr-10">Designate.</li>
                        </Link>
                        <li className="mx-4 font-semibold">Event</li> 
                        <li className="mx-4 font-semibold">Blog</li> 
                        <Image src="/flag-400.png" alt="Picture of the author" width={15} height={10}/>
                        <select name="language" id="">
                            <option className="font-semibold" value="indonesia">ID</option>
                        </select>
                    </ul>
                </div>
                <div className="flex-1 md:flex hidden justify-end">
                    <ul className="flex items-center">
                        <li className="mx-4 font-semibold">Masuk</li>
                        <li className="mx-4 font-semibold">Daftar</li>
                        <li className="ml-4 font-semibold text-yellow-500 border-2 border-yellow-500 py-1 px-3 border-r-2">Perusahaan</li>
                    </ul>
                </div>
                <div className="text-yellow-500 md:hidden font-bold text-3xl mr-10">Designate.</div>
                <button onClick={()=>alert('HALO')} className="md:hidden relative top-2">
                    <Image src="/menu.png" width={30} height={30}/>
                </button>
            </nav>
        </div>
    );
}

const SearchArtikel = ()=>{

    const [dataSearch,setDataSearch] = useState();

    const handleSubmit = (event)=>{
        alert(dataSearch);
        event.preventDefault();
    }

    const handleChangeSearch = (event)=>{
        setDataSearch(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit} className="w-10/12 lg:w-8/12 mx-auto flex md:flex-row flex-col mt-36">
            <div className="flex-1 h-12 flex md:mx-0 mx-4">
                <input type="text" placeholder="Masukkan Judul Artikel" className="flex-1 border-2 border-gray-400 p-3 shadow" onChange={handleChangeSearch}/>
                <button onClick={handleSubmit} className="bg-yellow-500 w-36 text-white">CARI</button>
            </div>
            <select name="Kategori" id="" className="border-2 h-12 md:w-36 px-3 mx-4 md:my-0 my-3 border-gray-400">
                <option value="Kategori">Kategori</option>
            </select>
            <select name="Urutkan" id="" className="border-2 h-12 md:w-36 px-3 mx-4 md:my-0 my-1 border-gray-400">
                <option value="Urutkan">Urutkan</option>
            </select>
        </form>
    )
}

const GridArticle = () =>{

    const [dataArticle,setDataArticle] = useState({
        "list_judul":[
            {"id":1,"judul":"Bahaya! Gaslighting Menghilangkan Rasa Percaya Dirimu"},
            {"id":2,"judul":"Pakar Hukum UNAIR Ungkap Tiga Kejahatan Internasional yang Dilakukan Israel"},
            {"id":3,"judul":"Sering Diabaikan, Rumah Potong Hewan Lahan Bisnis yang sangat Menjanjikan"},
            {"id":4,"judul":"Dr. Lina Hastuti: Pernyataan Bahwa Israel itu Di Atas Hukum Tidak Terlalu Salah"},
            {"id":5,"judul":"Webinar DPKKA UNAIR Bahas Tips Lolos Proses Rekrutmen Bersama HRGA Manajer PT. Kosme"},
            {"id":6,"judul":"AUBMO UNAIR Banyuwangi Kenalkan Dunia Wirausaha Lewat Webinar dan Talkshow Kewirausahaan"},
            {"id":7,"judul":"Prodi Kedokteran Hewan UNAIR Banyuwangi Adakan Halal Bihalal Virtual"},
            {"id":8,"judul":"Beasiswa ADS Upaya UNAIR Mengentaskan Kemiskinan Global"},
            {"id":9,"judul":"Meski Terbatas Ekonomi, Mahasiswa Bidikmisi UNAIR Mampu Raih Segudang Prestasi"},
            {"id":10,"judul":"S1 Kedokteran UNAIR Terapkan Kuliah Hybrid dan Blended"},
            {"id":11,"judul":"Departemen Teknik Fakultas Vokasi Fokus Hasilkan Paten dan HAKI"},
            {"id":12,"judul":"FKG UNAIR Kembali Mengambil Sumpah 51 Dokter Gigi Dan 7 Dokter Gigi Spesialis Via Daring"}
        ]
    })

    return(
        <div className="w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            {
                (()=>dataArticle.list_judul.map((data,i)=><CardArticle key={i} judul={data.judul} id={data.id}/>))()
            }
        </div>
    )
}

export const CardArticle = ({judul}) => {
    return(
        <Link href={{
            pathname: '/artikel/'+judul}}>
            <a className="h-48 flex bg-white shadow rounded">
                <div className="flex-1 relative">
                    <Image src="/merdeka.jpg" layout="fill" objectFit="cover"/>
                </div>
                <div className="flex-1 flex flex-col justify-between p-3">
                    <div className="font-semibold text-sm mt-2">
                        {judul}
                    </div>
                    <div>
                        <div className="text-blue-400 text-xs">Tips dan Trik</div>
                        <div className="text-gray-300 text-xs mt-3">12 September 2021</div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export const Footer = ()=>{
     return(
         <div className="w-full bg-yellow-500 mt-10">
            <div className="lg:container p-5 mx-auto bg-yellow-500 flex lg:flex-row flex-col">
                <div className="flex-1 mb-5">
                    <div className="text-white text-2xl font-bold">Designate.</div>
                    <div className="text-white text-sm w-60 mt-5">Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Nisi inventore culpa quidem harum sed blanditiis nam quas maxime, magnam perferendis?</div>
                </div>
                <div className="flex-1 flex lg:flex-row flex-col">
                    <div className="flex-1 flex-col">
                        <div className="text-white text-xl font-bold lg:mb-5 mb-2">Feature</div>
                        <div className="text-white text-sm my-2">Overview</div>
                        <div className="text-white text-sm my-2">Design</div>
                        <div className="text-white text-sm my-2">Programming</div>
                        <div className="text-white text-sm my-2">Collaborate</div>
                    </div>
                    <div className="flex-1 flex-col">
                        <div className="text-white text-xl font-bold lg:mb-5 mb-2">Know Us More</div>
                        <div className="text-white text-sm my-2">About Us</div>
                        <div className="text-white text-sm my-2">Testimonial</div>
                        <div className="text-white text-sm my-2">FAQ</div>
                        <div className="text-white text-sm my-2">Terms & Condition</div>
                    </div>
                    <div className="flex-1 flex-col">
                        <div className="text-white text-xl font-bold lg:mb-5 mb-2">About Us</div>
                        <div className="text-white text-sm my-2">Stories</div>
                        <div className="text-white text-sm my-2">Community</div>
                        <div className="text-white text-sm my-2">Careers</div>
                    </div>
                    <div className="flex-1 flex-col">
                        <div className="text-white text-xl font-bold lg:mb-5 mb-2">Find Us On</div>
                    </div>
                </div>
            </div>
         </div>
     )
}

const RootPage = () => {
    return (
        <>
            <Navbar/>
            <SearchArtikel/>
            <GridArticle/>
            <Footer/>
        </>
    )
}



  
  export default RootPage