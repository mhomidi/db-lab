import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) {}


    @Post('post')
    postBook( @Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }

    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }

    @Put('update')
    updateBook( @Body() book: UpdateBookDto) {
        return this.bookService.update(book);
    }

    @Delete('delete')
    deleteBook( @Query("id") id) {
        return this.bookService.delete(id);
    }
}
