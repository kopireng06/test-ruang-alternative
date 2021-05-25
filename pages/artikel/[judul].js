import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import {Navbar,Footer,CardArticle} from '../index'
import Image from 'next/image'
import {useState} from 'react'

const GridArticle = () =>{

    const [dataArticle,setDataArticle] = useState({
        "list_judul":[
            {"id":1,"judul":"Bahaya! Gaslighting Menghilangkan Rasa Percaya Dirimu"},
            {"id":2,"judul":"Pakar Hukum UNAIR Ungkap Tiga Kejahatan Internasional yang Dilakukan Israel"},
            {"id":3,"judul":"Sering Diabaikan, Rumah Potong Hewan Lahan Bisnis yang sangat Menjanjikan"},
            {"id":4,"judul":"Dr. Lina Hastuti: Pernyataan Bahwa Israel itu Di Atas Hukum Tidak Terlalu Salah"}
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

const Artikel = () => {
    const router = useRouter();
    const { judul } = router.query;
    return ( 
        <>
            <Navbar/>
            <div className="w-10/12 lg:w-6/12 flex justify-center mx-auto mt-36 flex-col">
                <div className="text-3xl flex-1 font-semibold">{judul}</div>
                <div className="flex flex-1 mt-10">
                    <div className="text-blue-400 text-sm">Tips dan Trik</div>
                    <div className="text-gray-300 text-sm ml-10">12 September 2021</div>
                </div>
            </div>
            <div className="w-10/12 lg:w-8/12 h-96 mx-auto relative mt-10">
                <Image src="/merdeka.jpg" layout="fill" objectFit="cover"/>
            </div>
            <div className="w-10/12 lg:w-6/12 mx-auto">
                <p className="my-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, 
                    magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. 
                    Numquam placeat molestias aperiam unde incidunt.
                </p>
                <p className="my-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, 
                    magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. 
                    Numquam placeat molestias aperiam unde incidunt.
                </p>
                <p className="my-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, 
                    magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. 
                    Numquam placeat molestias aperiam unde incidunt.
                </p>
                <p className="my-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, 
                    magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. 
                    Numquam placeat molestias aperiam unde incidunt.
                </p>
                <p className="my-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, 
                    magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. 
                    Numquam placeat molestias aperiam unde incidunt.
                </p>
                <p className="my-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione, similique odit, 
                    magnam saepe reprehenderit harum, accusamus provident aut modi ipsum dignissimos aliquid nesciunt. 
                    Numquam placeat molestias aperiam unde incidunt.
                </p>
            </div>
            <div className="font-bold w-10/12 lg:w-8/12 text-2xl mx-auto">Related</div>
            <GridArticle/>
            <Footer/>
        </>
    );
}
 
export default Artikel;