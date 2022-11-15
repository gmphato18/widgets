export interface ITableBase {
    displayMessage: string
    items: IItem[]
}

export interface IItem {
    id: number
    brandId: number
    brand: string
    title: string
    summary: string
    imageSrc: string
    varianceTitle: string | null
    partnerProductId: number | null
    columns: IColumn[]
    url: IURL
    weighting: IWeighting
    statistics?: IStatistics
}

export interface IColumn {
    sortOrder: number
    attributes: any[]
    isAdvertised: boolean
    stackNumber: number | null
    isCalculated: boolean
    label: string
    primaryMessage: string
    secondaryMessage: string
    additionalInfo: string | null
    description: string | null
}

export interface IStatistics {
    showStats: boolean
    rating: null
    numberOfReviews: null
}

export interface IURL {
    enableDrillDown: boolean
    brand: string
    product: string
    status: number
    naturalLinkUrl: string
    trackingUrl: null | string
    partnerProductUrl: null
}

export interface IWeighting {
    promotedId: number | null
    code: string
    defaultPosition: number
    promotedPosition: number | null
    popularity: number
    brand: number
    creativeType: number | null
    creativeSrc: null
    commercialStatus: number
    value: null
    position: number
}
