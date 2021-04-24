export default class CreateFreelancerDto {
    readonly freelancerEmail: string;
    readonly university: string;
    readonly resumeUrl: string;
    readonly point: number;
    readonly description: string;
    readonly abilities: Array<number>;
}