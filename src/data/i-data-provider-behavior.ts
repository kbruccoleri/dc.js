import { CFGrouping, MinimalCFDimension } from '../core/index.js';

export interface IDataProviderBehavior {
    applyFilters(dimension: MinimalCFDimension, filters: any[]): void;
    storageKey(provider: any): any;
    getGroupings(dimension: any, group: any, chartId: string): ReadonlyArray<CFGrouping>;
}
