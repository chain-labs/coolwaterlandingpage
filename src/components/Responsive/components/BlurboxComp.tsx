import React from 'react';

const BlurboxComp = () => {
	return (
		<div className="flex justify-center items-center relative top-[102px] -z-20">
			<div
				className="w-[263px] h-9 px-4 py-2.5 justify-center items-center gap-2.5 inline-flex -z-20"
				style={{
					border: '1px solid rgba(252, 253, 255, 0.60)',
					background: '#F8F6FF',
					boxShadow:
						'0px -4px 4px 0px rgba(0, 0, 0, 0.04) inset, 0px 4px 4px 0px #FFF inset',
					backdropFilter: 'blur(7px)',
					borderRadius: '20px',
				}}
			>
				<div className="text-center flex flex-row -z-20">
					<div className="text-blue-700 text-xs font-medium leading-none">
						$BLUR{' '}
					</div>
					<div className="text-[#36394A] text-xs font-medium leading-none ml-0.5">
						{' '}
						Lending taken to a different level
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlurboxComp;
