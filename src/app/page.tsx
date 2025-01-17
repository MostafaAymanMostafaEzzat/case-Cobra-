import MaxWidthWithWrapper from "@/components/MaxwidthWithWrapper";
import Image from "next/image";

export default function Home() {
      return (
  <div className="bg-slate-50 grainy-light">

    <section>
        <MaxWidthWithWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative flex flex-col justify-center items-center lg:items-start mx-auto text-center
              lg:text-left">
                <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                  <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28 '/>
                  <img src='/snake-1.png' className='w-full' />
                </div>
                <h1 className="relative w-fit tracking-tighter !leading-tight mt-16 font-bold text-balance text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                    Your Image on a{' '}
                    <span className='bg-green-600 px-2 text-white inline-block mt-1 '>Custom</span>{' '}
                    Phone Case
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-slate-700">
                Capture your favorite memories with your own,{' '}
                <span className='font-semibold'>one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
                </p>
              </div>
            </div>
            <div className=" lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit"></div>

        </MaxWidthWithWrapper>
    </section>
  </div>
  );
}
