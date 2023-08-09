interface ILinks {
    patch: {
        small: string;
        large: string;
    },
    reddit: {
        campaign: any;
        launch: string;
        media: any;
        recovery: any;
    },
    flickr: {
        small: string[];
        original: string[]
    },
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
}

interface IRocket {
    id: string;
    height: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    mass: {
        kg: number;
        lb: number;
    };
    flickr_images: string[];
    name: string;
    type: string;
    description: string;
}

interface ICrew {
    id: string;
    name: string;
    image: string;
    agency: string;
}

interface ICapsule {
    id: string;
    serial: string;
    status: string;
    type: string;
}

interface IPayload {
    id: string;
    name: string;
    type: string;
    orbit: string;
    reference_system: string;
    regime: string;
}

interface ILaunchpad {
    id: string;
    name: string;
    full_name: string;
    locality: string;
    region: string;
    latitude: number;
    longitude: number;
    details: string;
}

export interface ILaunch {
    id: string;
    name: string;
    flight_number: number;
    date_utc: string,
    links: ILinks;
    rocket: IRocket;
    crew: ICrew[];
    capsules: ICapsule[];
    payloads: IPayload[];
    launchpad: ILaunchpad;
}