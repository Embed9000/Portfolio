import { Book, ExternalLink } from 'lucide-react'
import img1 from '../assets/38d91215da70a0248f54142a067ac9ab.jpg'
import img2 from '../assets/pixlr-image-generator-0ff488c8-f060-4e8d-b4a7-708fba2ba619-modified.png'
const Writings = () => (
 <section className="relative py-16 sm:py-20" id='writings'>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
        aria-hidden
      />

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex justify-center">Creative Writing</h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>

        <p className='text-gray-300 max-w-6xl mx-auto flex justify-center'>I have written two unfinished novellas entirely from scratch, including all storylines, character interactions, events, and world-building:</p>


        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-12 md:grid-cols-2 p-8">
            <article
              className="group relative rounded-2xl border border-gray-200 bg-white  shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 hover:scale-[1.02] "
            >
              <a href="https://sites.google.com/view/cata-kun/home/theplayerblack?authuser=0" target='blank'><img 
              src={img1} 
              alt="" 
              className='rounded-2xl w-full h-full object-cover'/></a>
              <a href='https://sites.google.com/view/cata-kun/home/theplayerblack?authuser=0' target='blank' className='flex justify-center text-white pt-3  '><Book/>The Player Black – 15 chapters</a>
              
            </article>
            <article
              className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 hover:scale-[1.02]"
            >
              <a href="https://sites.google.com/view/novelscatakun/pagina-de-pornire?authuser=5" target='blank'><img 
              src={img2}         
              alt="" 
              className='rounded-2xl w-full h-full object-cover'/></a>

              <a href='https://sites.google.com/view/novelscatakun/pagina-de-pornire?authuser=5' target='blank' className='flex justify-center text-white pt-3'><Book/>Black Moon – 21 chapters</a>


            </article>
          
        </div>
        <p className='text-gray-300 max-w-6xl mx-auto flex justify-center pt-6'>Every element in these stories is my original creation, reflecting my ability to design complex narratives and immersive worlds from the ground up.

</p>
    </section>
);

export default Writings;


