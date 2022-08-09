export interface Duck{
    name: string;
    legCount: number;
    makeSound:(sound: string) => void;
}


const duck1: Duck = {
    name: 'Ducky',
    legCount: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: 'Mucky',
    legCount: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound('Quack');

export const ducks = [duck1, duck2]