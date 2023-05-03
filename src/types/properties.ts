export type Properties = {
    id: string;
    transactionType: 'venda' | 'aluguel';
    type: "terreno" | "apartamento" | "terreno" | "casa" | "casa de condomínio",
    price: `${number}`;
    title: string;
    description: string;
    details: {
        room?: `${number}` | '-';
        bath?: `${number}` | '-';
        garage?: `${number}` | '-';
        area?: `${number}` | '-';
    }
    images: string[];
}