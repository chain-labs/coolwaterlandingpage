import Image from 'next/image';
import React from 'react';
import Divider from '../../../../public/static/img/divider-desktop.svg';

const Footer = () => {
	return (
		<div className="relative top-[600px]">
			<div className="w-[100%] h-20 flex-col justify-center items-center gap-6 inline-flex top-[20%]">
				<div className="justify-center items-center gap-6 inline-flex">
					<a
						className="w-50 text-center text-slate-500 text-sm font-medium leading-none cursor-pointer"
						href="/termsandconditions"
						target="_blank"
					>
						Coolwater Service Agreement
					</a>
				</div>
			</div>
			<Image
				className="w-[100%]"
				src={Divider}
				alt="divider"
			/>
			<div className="w-[100%] h-20 text-center flex-col justify-center items-center inline-flex text-slate-500 text-xs font-normal leading-none">
				Copyright Thaw Digital, Inc. All rights reserved.{' '}
			</div>
		</div>
	);
};

export default Footer;
