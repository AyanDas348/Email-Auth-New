import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { UsersService } from './users.service';
  
  @Controller('products')
  export class UsersController {
    constructor(private readonly UsersService: UsersService) {}
      
        @Post()
        addProduct(
          @Body('email') email: string,
          @Body('name') name: string,
          @Body('password') password: string,
          @Body('hospitalCode') hospitalCode: string
        ) {
          const generatedId = this.UsersService.insertUser(
            //email,
            name,
            password,
            hospitalCode
          );
          return { id: generatedId };
        }
      
        @Get()
        getAllProducts() {
          return this.UsersService.getUsers();
        }
      
        @Get(':id')
        getProduct(@Param('id') prodId: string) {
          return this.UsersService.getUser(prodId);
        }
      
        @Patch(':id')
        updateProduct(
          @Param('id') prodId: string,
          @Body('title') prodTitle: string,
          @Body('description') prodDesc: string,
          @Body('price') prodPrice: number,
        ) {
          //this.UsersService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
          return null;
        }
      
        @Delete(':id')
        removeProduct(@Param('id') prodId: string) {
            //this.productsService.deleteProduct(prodId);
            return null;
        }
    }