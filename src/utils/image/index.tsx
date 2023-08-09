import React, { useRef, useState } from 'react';
import image_placeholder from 'extras/images/image_placeholder.jpeg';
import N_A from 'extras/images/N_A.jpg';
import { Fullscreen } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import './index.scss';

interface CustomImageProps {
    src: string;
    defaultImg?: string;
    alt?: string;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
    onClick?: () => void;
    showToggleFullScreen?: boolean;
}

export const CustomImage = ({
    src,
    alt = '', 
    style,
    width,
    height,
    onClick = () => {},
    showToggleFullScreen,
}: CustomImageProps) => {

    const [ imageLoaded, setImageLoaded ] = useState(false);
    const [ errorImage, setErrorImage ] = useState('');
    const imageRef = useRef<HTMLImageElement>(null);
    
    const handleFullScreenClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(!imageRef.current) return
        imageRef.current.requestFullscreen()
    }

    <Button 
        variant='text'
        className='set_as_main_image'
    >
        Set as main Image
    </Button>

    return (
        <div 
            className="custom-image_placeholder"
            style={{ width: width || '100%', height: height || '100%' }}
        >
            <img 
                src={errorImage || (imageLoaded ? src : image_placeholder)} 
                alt={N_A}
                onLoad={() => setImageLoaded(true)}
                onError={() => setErrorImage(N_A)}
                style={style}
                width={width}
                height={height}
                className={imageLoaded ? 'main-image' : 'img-small'}
                onClick={onClick}
                ref={imageRef}
            />
            {showToggleFullScreen ?
                <IconButton 
                    className='fullscreen_icon'
                    onClick={handleFullScreenClick}
                >
                    <Fullscreen sx={{ color: '#fff' }} />
                </IconButton>
                : null
            }
        </div>
    )
};
