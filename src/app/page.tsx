import Image from 'next/image'
import { BsDiscord, BsDownload, BsHeadphones } from 'react-icons/bs';
import { IoAddSharp, IoCompass } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io'
import { BiSolidMicrophone, BiRadioCircleMarked } from 'react-icons/bi';
import { RiSettings5Fill } from 'react-icons/ri';


export default function Home() {
  return (
    <div className='flex'>
      <aside className="bg-eerie-black h-screen w-20 text-cadet-gray flex flex-col items-center pt-3">
        <div className='discord-icon p-3 rounded-2xl bg-nebula-blue h-14 justify-center items-center'>
          <BsDiscord color='#fff' size='2rem' />
        </div>
        <div className='mt-5 grid gap-3'>
          <div className='discord-icon p-3 rounded-full bg-dark-charcoal h-14 justify-center items-center'>
            <IoAddSharp color='#23A559' size='2rem' />
          </div>
          <div className='discord-icon p-3 rounded-full bg-dark-charcoal h-14 justify-center items-center flex'>
            <IoCompass color='#23A559' size='1.5rem' />
          </div>
          <div className='discord-icon flex p-3 rounded-full bg-dark-charcoal h-14 justify-center items-center'>
            <BsDownload color='#23A559' size='1.5rem' />
          </div>

        </div>
      </aside>
      <aside className='bg-dark-charcoal h-screen w-[16.7rem] text-cadet-gray font-medium pt-3 relative'>
        <div className='border-b-2 border-eerie-black h-11'>
          <input placeholder='Найти или начать беседу' className='bg-eerie-black p-2 rounded-md ml-3 h-8 w-60 text-sm' />
        </div>
        <div className='mt-2 gap-1 flex flex-col'>
          <div className='flex gap-5 w-60 ml-3 justify-start items-center  p-2'>
            <svg aria-hidden="true" role="img" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
            <p>Друзья</p>
          </div>
          <div className='flex gap-5 w-60 ml-3 justify-start items-center  p-2'>
            <svg aria-hidden="true" role="img" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"></path></svg>
            <p>Nitro</p>
          </div>
          <div className='flex gap-5 w-60 ml-3 justify-start items-center  p-2'>
            <svg aria-hidden="true" role="img" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12.0002 10.823L20.9652 5.26C20.6772 5.1 20.3522 5 20.0002 5H4.00016C3.64816 5 3.32216 5.1 3.03516 5.26L12.0002 10.823Z" fill="currentColor"></path><path d="M12.527 12.8489C12.366 12.9489 12.183 12.9999 12 12.9999C11.817 12.9999 11.634 12.9489 11.473 12.8499L2.003 6.97292C2.003 6.98192 2 6.99092 2 6.99892V15.9989C2 17.1009 2.897 17.9989 4 17.9989H20C21.103 17.9989 22 17.1009 22 15.9989V6.99892C22 6.98992 21.997 6.98092 21.997 6.97192L12.527 12.8489Z" fill="currentColor"></path></svg>
            <p>Запросы общения</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between mt-5 uppercase text-xs w-60 ml-3'>
            <p>
              Личные сообщения
            </p>
            <IoMdAdd color='#fff' size='1rem' />
          </div>
          <div className='mt-2'>
            <div className='flex gap-2 w-60 ml-3 justify-start items-center  p-2'>
              <div className='bg-nebula-blue rounded-full p-2'>
                <BsDiscord color='#fff' size='1.25rem' />
              </div>
              <p>Username</p>
            </div>
            <div className='flex gap-2 w-60 ml-3 justify-start items-center  p-2'>
              <div className='rounded-full p-2 bg-orange-500'>
                <BsDiscord color='#fff' size='1.25rem' />
              </div>
              <p>Username</p>
            </div>
            <div className='flex gap-2 w-60 ml-3 justify-start items-center  p-2'>
              <div className='rounded-full p-2 bg-gray-500'>
                <BsDiscord color='#fff' size='1.25rem' />
              </div>
              <p>Username</p>
            </div>
            <div className='flex gap-2 w-60 ml-3 justify-start items-center  p-2'>
              <div className='rounded-full p-2 bg-green-600'>
                <BsDiscord color='#fff' size='1.25rem' />
              </div>
              <p>Username</p>
            </div>
          </div>
        </div>
        <footer className='absolute bottom-0 h-14 bg-raisin-black w-full flex items-center px-2 gap-5'>
          <div className='flex items-center gap-2'>
            <div className='avatar rounded-full p-2 bg-gray-500'>
              <BsDiscord color='#fff' size='1.25rem' />
            </div>
            <div className='flex flex-col text-xs'>
              <p className=' text-white text-sm'>my_username</p>
              <p>my_status</p>
            </div>
          </div>
          <div className='flex gap-3'>
            <BiSolidMicrophone color='#B5BAC1' size='1.35rem' />
            <BsHeadphones color='#B5BAC1' size='1.35rem' />
            <RiSettings5Fill color='#B5BAC1' size='1.35rem' />
          </div>
        </footer>
      </aside>
      <section>
        <nav className='flex border-b-2 border-eerie-black h-14 text-cadet-gray'>
          <div className='flex gap-5 w-60 ml-3 justify-start items-center  p-2'>
            <svg aria-hidden="true" role="img" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
            <p>Друзья</p>
          </div>
          <div className='flex  ml-3 justify-start items-center  p-2'>
            <p>В сети</p>
          </div>
          <div className='flex  ml-3 justify-start items-center  p-2'>
            <p>Все</p>
          </div>
          <div className='flex  ml-3 justify-start items-center  p-2'>
            <p>Ожидание</p>
          </div>
          <div className='flex   ml-3 justify-start items-center  p-2'>
            <p>Заблокированные</p>
          </div>
          <div className='flex   ml-3 justify-start items-center  p-2'>
            <p>Добавить в друзья</p>
          </div>
        </nav>
        <main>
          <section>

          </section>
          <aside>

          </aside>
        </main>
      </section>
    </div>
  )
}
