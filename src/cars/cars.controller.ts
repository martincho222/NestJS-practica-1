import { Controller, Get, Param, ParseIntPipe, Post, Patch, Delete , Body, Put, ParseUUIDPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto, UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
    
    constructor(
        private readonly CarsService: CarsService,
    ) {}

    @Get()
    getAllCars() {
        return this.CarsService.findAll();
    }
    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        console.log(`Fetching car with ID: ${id}`);
        return this.CarsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarDto: createCarDto) {
        //@Body() carData: CreateCarDto
        this.CarsService.create(createCarDto)
        return createCarDto; // Placeholder for actual creation logic
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() UpdateCarDto: UpdateCarDto) {
        
        return this.CarsService.update(id, UpdateCarDto); // Placeholder for actual update logic
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.CarsService.delete(id);
         
    }
} 