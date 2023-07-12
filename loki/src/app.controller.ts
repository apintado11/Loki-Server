import {Body, Controller, Get, Param, Patch} from '@nestjs/common';
import {UpdateTaxCategoryDto} from './dto/updateTaxCategoryDto'

import { AppService } from './app.service';

@Controller('transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('/getAll')
  getHello()  {
    return this.appService.findAll();
  }

  @Get('/getTotals')
  getTotals()  {
    return this.appService.getTotals();
  }



  @Get('/getTotals/gns')
  getTotalsTwo()  {
    return this.appService.getTotalsTwo();
  }

  @Get('/setClient')
  setClientForGroupOfTransactions()  {
    return this.appService.setTransactionClientTwo();
  }

  @Patch('/:id')
  updateCategory(@Param('id') id: string,
           @Body () body: UpdateTaxCategoryDto)  {
    return this.appService.markTransactionCategory(id, body);
  }

}
