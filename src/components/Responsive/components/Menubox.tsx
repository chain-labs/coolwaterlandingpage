import Image from 'next/image';
import React from 'react';
import TwitterLogo from '../../../../public/static/img/twitterlogo-1.svg';

const Menubox = () => {
	return (
		<div className="w-[100%] h-[250px] absolute bg-[#364ED1] top-[50px] -z-10">
			<div className="justify-start items-center gap-6 flex flex-col">
				<div className="px-4 py-2 justify-center items-center flex">
					<a
						className="text-center text-white text-lg font-normal leading-snug cursor-pointer hover:text-black"
						target="_blank"
						href="https://coolwater-xyz-web.vercel.app/strategies"
					>
						Strategies
					</a>
				</div>
				<div className="px-4 py-2 justify-center items-center flex ">
					<a className="text-center text-white text-lg font-normal leading-snug cursor-pointer hover:text-black">
						My Loan
					</a>
				</div>
				<div className="px-4 py-2 justify-center items-center flex">
					<a
						className="text-center text-white text-lg font-normal leading-snug cursor-pointer hover:text-black"
						target="_blank"
						href="http://docs.coolwater.xyz/"
					>
						Docs
					</a>
				</div>
				<a
					className="px-2.5 py-2 bg-white rounded-3xl shadow border border-white border-opacity-10 justify-center items-center flex cursor-pointer hover:bg-blue-950"
					target="_blank"
					href="https://twitter.com/Coolwater_xyz"
				>
					<div className="text-[#364ED1] text-xs font-medium leading-normal">
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

export default Menubox;
