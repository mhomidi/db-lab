export default class UpdateProjectDto {
    readonly id: number;
    readonly employerEmail: string;
    readonly minOffer: number;
    readonly maxOffer: number;
    readonly freelancerEmail: string;
    readonly deadline: Date;
    readonly active: boolean;
    readonly type: number;
    readonly abilities: Array<number>;
}