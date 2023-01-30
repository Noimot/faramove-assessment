export interface IAddProperty {

}

export interface IPropertyDetails {
propertyCategory: string;
propertyName: string;
beds: number;
bluraFinance: 'yes' | 'no';
propertyCondition: string;
serviceCharge?: number;
aboutProperty: string;
}

export interface IBluraFinance {
partPayment: number;
duration: number;
recurringAmount: number;
description?: string;
}

export interface IAddressDetails {
    propertyAddress: string;
    state: string;
    city: string;
    appointmentNumber?: number;
}

export interface IAddProperty extends IPropertyDetails, IBluraFinance, IAddressDetails {
amenities: string[];
photos: string[];
}

export interface IProperty {
    handleReduceStep?: () => void;
    handleIncreaseStep?: () => void;
}