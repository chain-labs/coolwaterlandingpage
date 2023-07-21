import Image from 'next/image';
import React from 'react';
import Currency from '../../../../public/static/img/currencyeth.svg';

const Box1 = () => {
	return (
		<div className="md:w-[273px] md:h-[400px] relative w-[354px] h-[318px]">
			<div className="md:w-[273px] md:h-[400px] w-[354px] h-[318px] left-0 top-0 absolute bg-gray-50 rounded-lg border border-gray-100"></div>
			<div className="w-48 h-36 left-[38px] md:top-[70px] absolute opacity-40 bg-gray-100 rounded-lg"></div>
			<div className="w-52 h-40 left-[32px] md:top-[75px] absolute opacity-60 bg-gray-100 rounded-lg"></div>
			<div className="w-56 h-44 md:left-[23px] left-[18%] md:top-[83px] top-[40px] absolute bg-gray-100 rounded-xl border justify-start items-start inline-flex">
				<div className="grow shrink basis-0 self-stretch p-4 flex-col justify-start  items-start gap-4 inline-flex">
					<div className="w-8 h-8 px-2 py-1.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex">
						<Image
							src={Currency}
							alt=""
						/>
					</div>
					<div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-1 flex">
						<div className="self-stretch md:justify-start  items-center gap-1 inline-flex">
							<div className="text-neutral-400 text-xs font-semibold leading-none">
								Total Points accured
							</div>
						</div>
						<div className="self-stretch text-neutral-900 text-5xl font-medium leading-10">
							10,472
						</div>
						<div className="px-3 py-1 bg-neutral-50 rounded-3xl border border-slate-300 border-opacity-20 justify-center items-center gap-1 inline-flex">
							<div className="w-3 h-3 px-0.5 py-px justify-center items-center flex">
								<div className="w-2 h-2 relative flex-col justify-start items-start flex"></div>
							</div>
							<div>
								<span className="text-green-500 text-xs font-medium leading-none">
									37.8%{' '}
								</span>
								<span className="text-neutral-400 text-xs font-medium leading-none">
									this week
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="left-[20px] md:top-[329px] top-[260px]  absolute flex-col justify-start items-start gap-1 inline-flex ">
				<div className="text-gray-700 text-base font-semibold leading-tight">
					Monitor your contributions
				</div>
				<div className="w-60 text-gray-500 text-xs font-medium leading-none ">
					Passively accrue Blur points based on your contribution to the pool
				</div>
			</div>
		</div>
	);
};

export default Box1;
