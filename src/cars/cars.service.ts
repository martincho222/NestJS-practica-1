import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { createCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [];

   findAll() {
        return this.cars;
    }

    findOneById(id:string) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
        
        return car;
    }

    create( createCarDto: createCarDto) {
        const newCar: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model,
            year: createCarDto.year, // Assuming year is part of the DTO
        };
        //validate if the car already exists
        const existingCar = this.cars.find(car => car.brand === newCar.brand && car.model === newCar.model && car.year === newCar.year);
        if (existingCar) {
            throw new NotFoundException(`Car with brand ${newCar.brand}, model ${newCar.model}, and year ${newCar.year} already exists`);
        }
        // Add the new car to the cars array
        if (!newCar.brand || !newCar.model || !newCar.year) {
            throw new NotFoundException(`Car with brand ${newCar.brand}, model ${newCar.model}, and year ${newCar.year} is not valid`);
        }
        this.cars.push(newCar);
        console.log(`Car created: ${JSON.stringify(newCar)}`);
        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
       let carDB = this.findOneById(id);
       console.log(carDB)

           if(updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Car ID mismatch: ${updateCarDto.id} does not match ${id}`);
           }

       this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB,...updateCarDto, id };
                return carDB; // Return the updated car
            }
            return car; // Return the unchanged car
        });
        console.log("after",carDB)
        return carDB;
    }

    delete(id: string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        console.log(`Car deleted: ${JSON.stringify(car)}`);
        // const carIndex = this.cars.findIndex(car => car.id === id);
        // if (carIndex === -1) {
        //     throw new NotFoundException(`Car with ID ${id} not found`);
        // }
        // const deletedCar = this.cars[carIndex];
        // this.cars.splice(carIndex, 1);
        // console.log(`Car deleted: ${JSON.stringify(deletedCar)}`);
        return {
            message: `Car with ID ${id} has been deleted successfully`,
            method: 'DELETE',
            id: id,
        };
    }

    fillCarsWithSeedData(cars: Car[]) {
        return this.cars = cars;
    }
}
