export type Contato = {
    id: number;
    nome: string;
    email: string;
    fone: string
}

export type ContatoPage = {
    content: Contato[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}