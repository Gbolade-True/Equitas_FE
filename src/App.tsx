import {useState, useEffect} from "react";
import Launches from "./components/Launches";
import {Button, Container} from "@mui/material";
import './App.css';
import { IResponse } from "interfaces/response";
import React from "react";

function App() {

    const [data, setData] = useState<IResponse>();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const apiUrl = 'https://api.spacexdata.com/v4/launches/query';

    function getQueryBody(pageNumber: number) {
        return  {
            query: {
                upcoming: false,
                success: true
            },
            options: {
                page: pageNumber,
                select: {
                    id: 1,
                    name: 2,
                    links: 3,
                    date_utc: 4,
                    flight_number: 5,
                },
                populate: [
                    {
                        path: 'rocket',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            description: 4,
                            height: 5,
                            diameter: 6,
                            mass: 7,
                            flickr_images: 8,
                        },
                    },
                    {
                        path: 'crew',
                        select: {
                            id: 1,
                            name: 2,
                            agency: 3,
                            image: 4,
                        },
                    },
                    {
                        path: 'payloads',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            orbit: 4,
                            reference_system: 5,
                            regime: 6
                        }
                    },
                    {
                        path: 'capsules',
                        select: {
                            id: 1,
                            type: 2,
                            status: 3,
                            serial: 4
                        }
                    },
                    {
                        path: 'launchpad',
                        select: {
                            id: 1,
                            name: 2,
                            full_name: 3,
                            locality: 4,
                            region: 5,
                            latitude: 6,
                            longitude: 7,
                            details: 8
                        }
                    }
                ],
                sort: {
                    flight_number: 'desc',
                },
            },
        };

    }

    const fetchData = async (pageNumber: number) => {
        try {
            setLoading(true)
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(getQueryBody(pageNumber)),
            });

            if (!response.ok) {
                console.log('Network response was not ok');
            };

            const responseData = await response.json() as IResponse;
            console.log(responseData);
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const nextPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(currentPage + 1)
        fetchData(currentPage + 1)
    }
    const prevPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(currentPage - 1)
        fetchData(currentPage - 1)
    }

    return (
        <div>
            <Container sx={{ marginBottom: '20px' }}>
                <h2>Welcome!</h2>
                <p>Total Launches: <b>{data?.totalDocs}</b></p>
                {data?.docs ? (
                    <div>
                        <Launches launches={data?.docs} loading={loading} />
                        <p>Page {data["page"]} / {data["totalPages"]} </p>
                        <Button variant="outlined" onClick={prevPage} disabled={currentPage === 1}>Prev Page</Button>
                        <Button variant="outlined" onClick={nextPage} disabled={currentPage === data["totalPages"]}>Next
                           Page</Button>
                   </div>
                ) : (
                    <div>Loading...</div>
                )}

            </Container>

        </div>
    );
}
export default App;
