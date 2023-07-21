import React from 'react';
import Image from 'next/image';
import Divider from '../../../../public/static/img/divider-desktop.svg';

const FooterMobile = () => {
	return (
		<div className="relative top-[350px] flex justify-center items-center">
			<div className="w-[330px] h-16 flex-col justify-center items-center gap-4 inline-flex">
				<div className="w-[330px] justify-center items-center gap-6 inline-flex">
					<a
						className="text-center text-zinc-500 text-xs font-medium leading-none"
						href="/termsandconditions"
					>
						Terms and Conditions
					</a>
				</div>
				<Image
					className="w-[100%] "
					src={Divider}
					alt="divider"
				/>
				<div className="w-[80%] text-center text-zinc-500 text-xs font-medium leading-none">
					©2023 Coolwater. All Rights Reserved.
				</div>
			</div>
		</div>
	);
};

export default FooterMobile;
