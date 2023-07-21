import React from 'react';

const Box2 = () => {
	return (
		<div className="md:w-[411px] w-[354px] h-48 relative">
			<div className="md:w-[411px] w-[354px] h-48 left-0 top-0 absolute bg-gray-50 rounded-lg border border-[#ECEFF3]"></div>
			<div className="left-[20px] top-[135px] absolute flex-col justify-start items-start gap-1 inline-flex">
				<div className="text-[#36394A] text-base font-semibold leading-tight tracking-[-0.64px]">
					Calculate your $BLUR value
				</div>
				<div className="text-[#666D80] text-xs font-medium leading-[-14.4px] tracking-[-0.48px]">
					Calculate your expected returns using our calculator
				</div>
			</div>
			<div className="left-[20px] top-[45px] absolute flex-col justify-start items-end gap-2 inline-flex">
				<div className="w-44 text-zinc-950 text-xl font-medium leading-normal">
					1.0123 ETH
				</div>
				<div className="md:w-96 justify-start items-center gap-2 inline-flex">
					<div className="text-center text-neutral-400 text-xs font-normal leading-3">
						0.00 ETH
					</div>
					<div className="grow shrink basis-0 pr-28 bg-zinc-100 rounded-full flex-col justify-center items-start inline-flex">
						<div className="md:w-48 w-[8rem] h-1.5 relative bg-gray-700 rounded-full">
							<div className="w-5 h-5 md:left-[184px] left-[120px] top-[-7px] absolute bg-white rounded-full border-2 border-gray-700"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Box2;
