import React from 'react';
import Image from 'next/image';
import Divider from '../../../../public/static/img/divider-desktop.svg';

const FooterMobile = () => {
	return (
		<div className="relative top-[350px] flex justify-center items-center">
			<div className="w-[60%] h-16 flex-col justify-center items-center gap-4 inline-flex">
				<div className="w-[100%] justify-center items-center gap-6 inline-flex">
					<div className="text-center text-zinc-500 text-xs font-medium leading-none">
						Terms and Conditions
					</div>
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
