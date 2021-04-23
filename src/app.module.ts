import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { BooksModule } from './books/books.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { GenreService } from './genre/genre.service';
import { GenreModule } from './genre/genre.module';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';

@Module({
  imports: [HelloModule, BooksModule, UserModule, GenreModule, BookModule],
  controllers: [AppController, UserController, BookController],
  providers: [AppService, UserService, GenreService],
})
export class AppModule {}
