import Image from 'next/image';
import React from 'react';
import Ellipse from '../../../../public/static/img/ellipse-2.png';
import ChevronRight from '../../../../public/static/img/chevron-right.svg';

const Box4 = () => {
	return (
		<div className="flex justify-center items-center relative md:top-[347px] top-[220px]">
			<div className="md:w-[481px] md:h-[230px] px-3.5 py-4 w-[322px] h-[318px] bg-neutral-50 rounded-2xl border border-[#ECEFF3]  flex-col justify-start items-start gap-9 inline-flex">
				<div className="self-stretch justify-start items-center gap-3 inline-flex">
					<Image
						className="w-12 h-12 rounded-full"
						src={Ellipse}
						alt="ellipse"
					/>
					<div className="flex-col justify-start items-start gap-1.5 inline-flex">
						<div className="opacity-40 text-stone-700 md:text-xs text-sm font-semibold leading-3">
							Presented by:
						</div>
						<div className="text-stone-700 text-xl font-semibold leading-tight">
							Homerfan33
						</div>
					</div>
				</div>
				<div className="self-stretch h-28 flex-col justify-start items-start gap-8 flex">
					<div className="self-stretch rounded-xl justify-start items-center gap-9 inline-flex flex-wrap">
						<div className="justify-start items-center gap-2.5 flex flex-auto">
							<div className="p-2.5 bg-orange-100 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
								<div className="text-stone-700 text-xl font-semibold leading-tight">
									🔥
								</div>
							</div>
							<div className="flex-col justify-start items-start gap-2 inline-flex">
								<div className="opacity-40 text-stone-700 text-xs font-semibold leading-3">
									Target APY
								</div>
								<div className="text-stone-700 text-base font-semibold leading-none">
									30%-70%
								</div>
							</div>
						</div>
						<div className="justify-start items-center gap-2.5 flex">
							<div className="p-2.5 bg-slate-200 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
								<div className="text-stone-700 text-xl font-semibold leading-tight">
									👽
								</div>
							</div>
							<div className="flex-col justify-start items-start gap-2 inline-flex">
								<div className="w-16 opacity-40 text-stone-700 text-xs font-semibold leading-3">
									ETH locked
								</div>
								<div className="text-stone-700 text-base font-semibold leading-none">
									2147
								</div>
							</div>
						</div>
						<div className="justify-start items-center gap-2.5 flex">
							<div className="p-2.5 bg-slate-200 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
								<div className="text-stone-700 text-xl font-semibold leading-tight">
									👽
								</div>
							</div>
							<div className="flex-col justify-start items-start gap-2 inline-flex">
								<div className="w-16 opacity-40 text-stone-700 text-xs font-semibold leading-3">
									ETH locked
								</div>
								<div className="text-stone-700 text-base font-semibold leading-none">
									2147
								</div>
							</div>
						</div>
					</div>
					<a
						className="self-stretch px-2.5 py-2 rounded-3xl shadow border border-white border-opacity-10 justify-center items-center gap-1.5 inline-flex cursor-pointer "
						style={{
							background:
								'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #3351F2',
							boxShadow:
								'0px 0px 0px 1px #364ED1, 0px 1px 2px 0px rgba(32, 41, 129, 0.58)',
						}}
						target="_blank"
						href="https://coolwater-xyz-web.vercel.app/dashboard"
					>
						<div className="text-center text-white md:text-xs text-sm font-medium leading-tight">
							Contribute to the pool{' '}
						</div>
						<div className="w-5 h-5 relative">
							<Image
								src={ChevronRight}
								alt="ellipse"
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Box4;
