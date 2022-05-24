type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// UNIÃO
type TAccount = TUser &TPayment;


interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// UNIÃO
interface IAccount extends IUser, IPayment {};
