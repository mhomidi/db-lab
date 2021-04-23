import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import BooksModule from './book/book.module';
import { BookService } from './book/book.service';
import GenreController from './genre/genre.controller';
import GenreModule from './genre/genre.module';
import GenreService from './genre/genre.service';
import { HelloModule } from './hello/hello.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [HelloModule, BooksModule, UserModule, GenreModule, BooksModule],
  controllers: [AppController, UserController, BookController, GenreController],
  providers: [AppService, UserService, GenreService, BookService],
})
export class AppModule {}
