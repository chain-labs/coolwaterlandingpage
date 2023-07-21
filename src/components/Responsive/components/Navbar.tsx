import React from 'react';
import TwitterLogo from '../../../../public/static/img/twitterlogo.svg';
import Logo from '../../../../public/static/img/logo.svg';

import Image from 'next/image';

const Navbar = () => {
	return (
		<div className="w-[100%] h-[54px] lg:px-[130px] md:px-[4px] py-2 bg-white bg-opacity-80 border border-slate-300 border-opacity-30 backdrop-blur-xl flex-col justify-center items-center gap-2.5 inline-flex z-10 fixed">
			<div className="w-[100%] justify-between items-center gap-44 inline-flex bg-[rgba(255, 255, 255, 0.80)]">
				<div className="justify-center items-center gap-8 flex">
					<div className="justify-start items-end gap-0.5 flex">
						<Image
							className="object-contain"
							src={Logo}
							alt="logo"
						/>
					</div>
					<div className="justify-start items-center gap-6 flex">
						<div className="px-4 py-2 justify-center items-center flex">
							<a
								className="text-center text-neutral-400 text-lg font-normal leading-snug cursor-pointer hover:text-black"
								target="_blank"
								href="https://coolwater-xyz-web.vercel.app/strategies"
							>
								Strategies
							</a>
						</div>
						<div className="px-4 py-2 justify-center items-center flex ">
							<a className="text-center text-neutral-400 text-lg font-normal leading-snug cursor-pointer hover:text-black">
								My Loan
							</a>
						</div>
						<div className="px-4 py-2 justify-center items-center flex">
							<a
								className="text-center text-neutral-400 text-lg font-normal leading-snug cursor-pointer hover:text-black"
								target="_blank"
								href="http://docs.coolwater.xyz/"
							>
								Docs
							</a>
						</div>
					</div>
				</div>
				<a
					className="px-2.5 py-2 bg-[#3351F2] rounded-3xl shadow border border-white border-opacity-10 justify-center items-center flex cursor-pointer hover:bg-blue-950"
					target="_blank"
					href="https://twitter.com/Coolwater_xyz"
				>
					<div className="text-white text-xs font-medium leading-normal">
						Find us on
					</div>
					<div className="w-4 h-4 relative ml-1.5">
						<Image
							src={TwitterLogo}
							alt="twitter"
						/>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
