import { Box } from "@mui/material";
import Launch from "../Launch";
import React from "react";
import { ILaunch } from "interfaces/launch";
import styled from "@emotion/styled";
import { down } from "utils/breakpointHelpers";

interface LaunchesProps {
    launches: ILaunch[];
    loading: boolean;
}

const CardContainer = styled(Box)({
    display: "grid",
    gridTemplateColumns: 'repeat(auto-fill, minmax(max(345px, 100%/11), 1fr ))', 
    placeItems: 'center', 
    gridRowGap: '50px', 
    gridColumnGap: '16px',

    [down('md')]: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(max(320px, 100%/11), 1fr ))', 
    },
})

const Launches = ({ launches, loading }: LaunchesProps) =>  {
    return (
        <CardContainer>
            {launches.map((launch) => (
                <Launch 
                    key={launch?.id}
                    launch={launch} 
                    loading={loading} 
                />
            ))}
        </CardContainer>
    );
}


export default Launches