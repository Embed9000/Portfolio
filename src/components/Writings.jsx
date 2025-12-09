import { Book, ExternalLink } from 'lucide-react'
import img1 from '../assets/images/photo_2025-12-09_18-42-23.jpg'
import img2 from '../assets/images/photo_2025-12-09_18-42-26.jpg'
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
              className=' w-full  object-cover'/></a>
              
            </article>
            <article
              className="group relative border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 hover:scale-[1.02]"
            >
              <a href="https://sites.google.com/view/novelscatakun/pagina-de-pornire?authuser=5" target='blank'><img 
              src={img2}         
              alt="" 
              className=' w-full object-cover'/></a>
            </article>
          
        </div>
        <p className='text-gray-300 max-w-6xl mx-auto flex justify-center pt-6'>Every element in these stories is my original creation, reflecting my ability to design complex narratives and immersive worlds from the ground up.

</p>
    </section>
);

export default Writings;


