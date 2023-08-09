import React from 'react';
import { isImageUrl, isNull, splitCamelString } from 'utils/helpers';
import { Card } from '@mui/material';
import { CustomImage } from 'utils/image';
import './index.scss';

interface ObjectSectionProps {
	mapObj: {[key: string]: any};
	title?: string;
}

export const ObjectMapSection = ({ mapObj, title = '' }: ObjectSectionProps) => {
	return (
		<Card>
			<div
				style={{
					textAlign: 'center',
					width: '100%',
					paddingBottom: '5px',
					marginBottom: '15px',
				}}
			>
				<p style={{ margin: 0, fontWeight: 600, letterSpacing: '.2em', fontSize: '.85em' }}>
					{title}
				</p>
			</div>
			<div className='flex-wrapper-main' style={{ marginBottom: '20px', width: '100%' }}>
				{mapObj && Object.keys(mapObj).map((item, index) => {
					return (
						!isNull(mapObj[item]) && item !== 'id' &&
						<div className='content-card' key={index} style={{ paddingRight: '10px' }}>
							<p className='card-label'>{splitCamelString(item)}</p>
							<p className='card-text'>
								{
									isImageUrl(mapObj[item])
									? <CustomImage src={mapObj[item]} width='40px' height='40px' style={{ borderRadius: '20px' }}  />
									:
									mapObj[item]
								}
							</p>
						</div>
					);
				})}
			</div>
		</Card>
	);
};
