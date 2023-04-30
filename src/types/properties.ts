export type Properties = {
    id: string;
    type?: 'sell' | 'rent'; 
    title: string;
    description: string;
    details?: {
        rooms: number;
        baths: number;
        garage: number;
        area: number;
    }
    images: string[];
}