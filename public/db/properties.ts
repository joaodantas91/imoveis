import { Properties } from "@/types/properties";

const localDB: Properties[] = [
    {
        id: "1",
        title: "Ed. Via Venetto",
        type: "apartamento",
        price: '56000000',
        transactionType: "venda",
        details: {
            area: '310',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Andar alto
            m2;
            3 suítes com sacadas individuais, sendo 1 master com closet;
            Sala íntima com sacada;
            Cozinha grande;
            Dependência de funcionárias completa;
            Escritório;
            Lavabo;
            Sala social para 3 ambientes;
            Sacada gourmet com churrasqueira; 
            
            Área condominial: passando por reforma, (taxa extra referente a esta reforma paga - imagem 3D) com projeto da Arquiteta Larissa Chady, para os ambientes a seguir:
            Térreo: entrada, Guarita, salão de festas, hall social, brinquedoteca, sala de Motoristas;
            G2: 
            Área lazer composta por piscina adulto e infantil, Churrasuqeira e academia. (Conforme imagens 3D do projeto)
        `,
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg"],
    },
    {
        id: "2",
        title: "Casa no  Condomínio Gran Paraíso. ",
        type: "casa de condomínio",
        price: '54000000',
        transactionType: "venda",
        details: {
            area: '98',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Lote 7x20
            3 quartos sendo uma  suíte com jardim de inverno. 
            Pé direito alto na sala
            integrada com a sala de jantar e a   cozinha
            
            Entregue com iluminação técnica e paisagismo 
            
            Casa com muita iluminação e ventilação natural. 
            Bem próxima da Augusto Montenegro
        `,
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg"]
    },
    {
        id: "3",
        title: "Casa no  Condomínio Gran Paraíso. ",
        type: "casa de condomínio",
        price: '65000000',
        transactionType: "venda",
        details: {
            area: '110',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Lote 8x20
            3 quartos sendo uma suíte
            Pé direito alto na sala
            Área gourmet integrada à cozinha
            Sala dois ambientes 
            Entregue com iluminação técnica e paisagismo 
            
            Casa com muita iluminação e ventilação natural. 
            Bem próxima da Augusto Montenegro
        `,
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]
    },
    {
        id: "4",
        title: "Casa no Condomínio Gran Paraíso",
        type: "casa de condomínio",
        price: '54000000',
        transactionType: "venda",
        details: {
            area: '98',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Lote 7x20
          3 quartos 2 suítes sendo 1 reversível
          Pé direito alto na sala  integrada com a sala de jantar com jardim de inverno.              
          Área gourmet integrada à cozinha.
          Entregue com iluminação técnica e paisagismo 
          Casa com muita iluminação e ventilação natural. 
          Bem próxima da Augusto Montenegro`,
        images: ["1.jpeg", "2.jpeg"]
    },
    {
        id: "5",
        title: "Excelente casa no Condomínio Gran Paraíso",
        type: "casa de condomínio",
        price: "62000000",
        transactionType: "venda",
        details: {
            area: '125',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Lote 8x20
        3 quartos sendo duas suítes
        Pé direito alto na sala
        Área gourmet integrada à cozinha
        Sala dois ambientes 
        Chuveiro no quintal
        Entregue com iluminação técnica e paisagismo 
        
        Casa com muita iluminação e ventilação natural. 
        Bem próxima da Augusto Montenegro
        `,
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"]
    },
    {
        id: "6",
        title: "Excelente  casa no Condomínio  Gran Paraíso.",
        type: "casa de condomínio",
        price: "62000000",
        transactionType: "venda",
        details: {
            area: '125',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Lote 8x20
        3 quartos sendo 1  suíte master  e 1 banheiro  privativo para os dois quartos. 
        Pé direito alto na sala e sala de jantar
        Área gourmet integrada à cozinha
        Entregue com iluminação técnica e paisagismo 
        Próxima da Augusto Montenegro
        `,
        images: ["1.jpeg", "2.jpeg"]
    },
    {
        id: "7",
        title: "Excelente  casa no Condomínio  Gran Paraíso.",
        type: "casa de condomínio",
        transactionType: "venda",
        price: "62000000",
        details: {
            area: '0',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Lote 8x20
            2 Pavimentos 
            Lote 8x20
            1 pavimento 
            Sendo 1 quarto.
            Pé direito alto na sala banheiro
            Área gourmet integrada à cozinha
            Sala dois ambientes 
            Piscina no quintal        2 Pavimento                 3 suíte sendo 1 Master
            Entregue com iluminação técnica e paisagismo 

            Casa com muita iluminação e ventilação natural. 
            Bem próxima da Augusto Montenegro

            Valor 
        `,
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg",]
    },
    {
        id: "8",
        title: "Terreno Comercial",
        price: "130000000",
        type: "terreno",
        transactionType: "venda",
        details: {
            area: '300',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: ` localizado  na Augusto  Montenegro  enfrente ao Cidade Jardim                
            metragem 10x30                    
        `,
        images: ["1.jpeg", "2.jpeg"]
    },
    {
        id: "9",
        title: "Terreno Icoaraci",
        price: "280000000",
        type: "terreno",
        transactionType: "venda",
        details: {
            area: '24000000',
            bath: '-',
            room: '-',
            garage: '-'
        },
        description: `Rua da Macacacuera`,
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg"]
    },
];

export default localDB;