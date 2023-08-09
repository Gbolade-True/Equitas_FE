import { ILaunch } from "./launch";

export interface IResponse {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number
    nextPage: number | null;
    page: number;
    pagingCounter: number
    prevPage: number | null;
    totalDocs: number
    totalPages: number;
    docs: ILaunch[];
}