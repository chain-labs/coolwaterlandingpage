import Image from 'next/image';
import React from 'react';
import Emoji from '../../../../public/static/img/024.svg';
import Emoji2 from '../../../../public/static/img/037-1.svg';
import TwitterLogo from '../../../../public/static/img/twitterlogo-1.svg';
import Globelogo from '../../../../public/static/img/globe.svg';
import Cursor from '../../../../public/static/img/cursor.svg';
import BannerImage from '../../../../public/static/img/thawdigital.png';

const BannerComp = () => {
	return (
		<div className="flex justify-center items-center relative md:top-[500px] top-[300px] overflow-hidden">
			<div
				className="md:w-[700px] md:h-[269px] w-[324px] h-[534px] relative rounded-lg overflow-hidden "
				style={{
					border: '4px solid rgba(53, 83, 242, 0.25)',
					borderRadius: '10px',
				}}
			>
				<div
					className="md:w-[700px] md:h-[269px] w-[334px] h-[534px] left-0 top-[-2px] absolute rounded-lg border-opacity-10"
					style={{
						background:
							'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #3351F2',

						boxShadow:
							'0px 0px 0px 1px #364ED1, 0px 1px 2px 0px rgba(32, 41, 129, 0.58)',
						borderRadius: '10px',
					}}
				></div>
				<div className="left-[24px] top-[32px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
					<div className="w-72 text-white text-2xl font-medium tracking-[-0.96px]">
						Coolwater is part of the Thaw Digital family
					</div>
					<div className="w-60 opacity-80 text-white text-sm font-medium leading-[14.4px]">
						Purpose built by leaders in NFT collateral management and credit.
					</div>
				</div>
				<div className="md:w-96 md:h-72 w-[367px] h-[281px] md:left-[384px] md:top-[20px] left-[50px] top-[259px] absolute bg-white bg-opacity-25 rounded-2xl shadow-inner  border-opacity-60 "></div>
				<Image
					className=" md:h-64 w-[305px] h-[272px] md:left-[398px] md:top-[33px] absolute object-contain hidden md:flex border rounded-2xl bg-white"
					src={BannerImage}
					alt="BannerImage"
				/>
				<Image
					className=" md:h-64 w-[255px] h-[272px] left-[65.5px] top-[272px] absolute rounded-lg md:hidden bg-cover bg-white object-contain"
					src={BannerImage}
					alt="BannerImage"
				/>
				<div className="w-[120px] h-[28px] md:left-[150px] md:top-[185px] top-[170px] left-[190px] absolute">
					<Image
						className="w-[26px] h-[26px] rounded-full relative top-[4px] right-[14px]"
						src={Cursor}
						alt="logo"
					/>
					<div className="w-[120px] h-[28px]  left-[2px] top-[23px] absolute bg-violet-50 rounded-3xl shadow-inner border border-zinc-300 justify-center items-center gap-1 inline-flex">
						<div className="text-blue-600 text-xs font-medium leading-normal">
							Find us on
						</div>
						<a
							className="w-4 h-4 relative"
							target="_blank"
							href=" https://twitter.com/Coolwater_xyz"
						>
							<Image
								src={TwitterLogo}
								alt=""
							/>
						</a>
						<a
							className="w-4 h-4 relative"
							target="_blank"
							href="https://thawdigital.com/"
						>
							<Image
								src={Globelogo}
								alt=""
							/>
						</a>
					</div>
				</div>
				<div className="w-11 h-11 left-[39px] md:top-[201.54px] top-[186.54px] absolute">
					<Image
						src={Emoji}
						alt="BannerImage"
					/>
				</div>
				<div className="w-11 h-9 left-[26px] md:top-[185px] top-[170px] absolute">
					<Image
						src={Emoji2}
						alt="BannerImage"
					/>
				</div>
			</div>
		</div>
	);
};

export default BannerComp;
