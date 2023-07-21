import React from 'react';
import Vector from '../../../../public/static/img/vector.svg';
import Image from 'next/image';
import Vector1 from '../../../../public/static/img/vector-1.svg';

const TextComponent2 = () => {
	return (
		<div className="flex justify-center items-center relative md:top-[200px] top-[150px]">
			<div className="w-[710px] h-[200px] flex-col justify-center items-center gap-3 inline-flex relative top-10">
				<div className="flex-col justify-center items-center flex">
					<div className="justify-start items-center gap-2.5 inline-flex">
						<div className="text-center text-black text-4xl md:text-[64px] font-medium  md:leading-[-72px] md:tracking-[-2.56px]">
							Peer-
						</div>
						<div className="invisible md:visible hidden md:flex">
							<Image
								src={Vector}
								alt='="logo'
							/>
						</div>
						<div className="visible flex md:invisible md:hidden ">
							<Image
								src={Vector1}
								alt='="logo'
							/>
						</div>
						<div className="text-center text-black text-4xl md:text-[64px] font-medium  md:leading-[-72px] md:tracking-[-2.56px]">
							-Peer
						</div>
					</div>
					<div className="text-center text-black text-4xl md:text-[64px] font-medium  md:leading-[-72px] md:tracking-[-2.56px] relative md:top-6">
						portfolio management
					</div>
				</div>
				<div className="md:w-[568px] w-[354px] text-center text-[#666D80] md:text-lg md:tracking-[-0.045em] font-medium md:leading-[1.35em] relative text-sm md:top-7">
					Coolwater's innovative combination of smart contracts and a
					proprietary protocol ensures that ETH pooling is transparent,
					efficient, and secure.
				</div>
			</div>
		</div>
	);
};

export default TextComponent2;
