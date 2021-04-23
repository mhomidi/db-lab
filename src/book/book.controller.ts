import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) {}


    @Post('post')
    postGenre( @Body() genre: CreateBookDto) {
    return this.bookService.insert(genre);
    }
    @Get()
    getAll() {
    return this.bookService.getAllBooks();
    }
}
