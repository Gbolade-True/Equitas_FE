import React, { ReactNode, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardActions, CardContent, CardHeader, Collapse } from "@mui/material";
import N_A from 'extras/images/N_A.jpg';
import { CustomImage } from 'utils/image';
import { ExpandMore } from './styled';
import './card.scss';
interface ICardProps {
  cardImage: string;
  cardHeader: ReactNode;
  headerImage: string;
  cardObject?: { [key: string]: any };
  isLoading: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  ExpandInfo?: React.ReactNode | null;
}

export const LaunchCard = ({ cardImage, cardHeader, headerImage, cardObject, isLoading, onClick, ExpandInfo }: ICardProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const loadS1 = '#ececec';
  const loadS2 = '#f5f5f5';
  const loadS3 = '#ececec';

  const loaderStyle = {
      background: isLoading ? `linear-gradient(110deg, ${loadS1} 8%, ${loadS2} 18%, ${loadS3} 33%)` : ''
  };

  return (
    <Card className={`card-container ${isLoading ? 'isLoading' : ''}`}>
      <CardHeader
        avatar={
          <CustomImage src={headerImage || N_A} width='40px' height='40px' style={{ borderRadius: '5px' }}  />
        }
        title={
          <div className='card-header'>
            <p className='card-label'>{cardHeader}</p>
          </div>
        }
        action={null}
      />
      <div className={expanded ? 'image expanded' : ''} onClick={!isLoading ? onClick : () => {}} style={loaderStyle}>
        <CustomImage
            height={expanded ? '100%' : '250'}
            src={cardImage || N_A}
            alt="vehicle image"
            style={{ cursor: 'pointer', objectFit: 'contain' }}
        />
      </div>
      <CardContent className='card-body'>
        {cardObject ?
          Object.keys(cardObject).map((item, index) => {
              return (
                <div className='card-info' style={loaderStyle} key={index}>
                    <p className='card-label'>{item}:</p>
                    <p className='card-text'>{cardObject[item] || 'N/A'}</p>
                </div>
              );
          })
          :
          null
        }
      </CardContent>
      <CardActions disableSpacing>
        {ExpandInfo ?
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          : null
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {ExpandInfo}
        </CardContent>
      </Collapse>
    </Card>
  );
}
