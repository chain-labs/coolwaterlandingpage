import React from 'react';
import Vector from '../../../../public/static/img/vector.svg';
import Vector1 from '../../../../public/static/img/vector-1.svg';

import Image from 'next/image';

const TextComponent = () => {
	return (
		<div className="flex justify-center items-center relative top-[114px]">
			<div className="w-[680px] h-[200px] flex-col justify-center items-center gap-3 inline-flex">
				<div className="flex-col justify-center items-center flex">
					<div className="justify-start items-center gap-3 inline-flex">
						<div className="text-center text-black md:text-6xl font-medium md:leading-tight leading-[40px] tracking-[-0.32px] md:tracking-[-2.56px] text-[32px] ">
							The Platform{' '}
						</div>
						<div className="invisible md:visible hidden md:flex">
							<Image
								src={Vector}
								alt='="logo'
							/>
						</div>
						<div className="visible flex md:invisible md:hidden">
							<Image
								src={Vector1}
								alt='="logo'
							/>
						</div>
						<div className="text-center text-black md:text-6xl font-medium md:leading-tight leading-[40px] tracking-[-0.32px] md:tracking-[-2.56px] text-[32px] ">
							for
						</div>
					</div>
					<div className="text-center text-black md:text-6xl text-[32px] font-medium md:leading-tight leading-[40px] tracking-[-0.32px] md:tracking-[-2.56px]  relative top-[0px] ">
						Pooled Lending on Blur
					</div>
				</div>
				<div className="md:w-[400px] w-[354px] text-center text-[#666D80] text-sm font-normal leading-snug relative  md:text-lg tracking-[-0.36px]">
					Passively earn Blur points and ETH yield by contributing to
					established NFT lenders
				</div>
			</div>
		</div>
	);
};

export default TextComponent;
