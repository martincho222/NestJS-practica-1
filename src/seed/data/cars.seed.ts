import { Car } from "src/cars/interfaces/car.interface";
import {v4 as uuid} from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Camry',
        year: "2023"
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
        year: "2022"
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'X5',
        year: "2023"
    },
    {
        id: uuid(),
        brand: 'Mercedes-Benz',
        model: 'C-Class',
        year: "2023"
    },
    {
        id: uuid(),
        brand: 'Volkswagen',
        model: 'Golf',
        year: "2022"
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang',
        year: "2023"
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Corvette',
        year: "2023"
    },
    {
        id: uuid(),
        brand: 'Audi',
        model: 'A4',
        year: "2022"
    },
    {
        id: uuid(),
        brand: 'Hyundai',
        model: 'Elantra',
        year: "2023"
    },
    {
        id: uuid(),
        brand: 'Mazda',
        model: 'CX-5',
        year: "2023"
    },
]