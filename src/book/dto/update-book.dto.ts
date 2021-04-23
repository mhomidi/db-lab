export default class UpdateBookDto {
    readonly id: string;
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
}