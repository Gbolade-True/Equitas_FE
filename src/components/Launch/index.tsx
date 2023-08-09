import React from 'react';
import { ILaunch } from 'interfaces/launch';
import moment from 'moment';
import { LaunchCard } from 'utils/card';
import { Box } from '@mui/material';
import { StledTooltip } from './styled';
import { ObjectMapSection } from 'utils/objectMap';

interface LaunchProps {
    launch: ILaunch;
    loading: boolean;
}

const Launch = ({ launch, loading }: LaunchProps) => {

    const launchObject = {
        'ID': launch.id,
        'Flight Number': launch.flight_number,
        'Launch Date': moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')
    }

    const generateTooltipContent = (contentArray: {[key: string]: any}[]) => {
        if(!contentArray.length) return null
        return(
            <Box sx={{ padding: '10px', maxWidth: '320px', color: '#000' }}>
                {contentArray.map((cO, index) => {
                    return(
                        <ObjectMapSection mapObj={cO} key={index} />
                    )
                })}
            </Box>
        )
    }

    const genericPopperProps = {
        sx: {
            "& .MuiTooltip-tooltip": {
                backgroundColor: 'transparent',
                maxwidth: 'max-content',
                fontFamily: "Montserrat"
            }
        }
    }

    const ExpandInfo = (
        <Box>
            <p>Hover over items to see quick info</p>
            <StledTooltip 
                PopperProps={genericPopperProps}
                title={generateTooltipContent(launch.capsules)} placement='bottom'>
                <b>Capsules ({launch.capsules.length})</b>
            </StledTooltip>
            <StledTooltip 
                PopperProps={genericPopperProps}
                title={generateTooltipContent(launch.crew)} placement='bottom'>
                <b>Crew ({launch.crew.length})</b>
            </StledTooltip>
            <StledTooltip 
                PopperProps={genericPopperProps}
                title={generateTooltipContent(launch.payloads)} placement='bottom'>
                <b>Payloads ({launch.payloads.length})</b>
            </StledTooltip>
        </Box>
    )

    return (
        <LaunchCard
            cardHeader={launch.name}
            cardObject={launchObject}
            headerImage={launch.links?.patch?.small}
            cardImage={launch.links?.patch?.large}
            isLoading={loading}
            ExpandInfo={ExpandInfo}
        />
    )
}

export default Launch