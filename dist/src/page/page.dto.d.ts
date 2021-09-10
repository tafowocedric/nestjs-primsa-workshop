import { Edge } from './edge-dto';
import { PageInfo } from './page-info.dto';
export declare class Page<Record> {
    egdes: Edge<Record>[];
    pageInfo: PageInfo;
    totalCount: number;
    constructor(partial: Partial<Page<Record>>);
}
