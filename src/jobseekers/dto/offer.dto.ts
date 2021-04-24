export default class CreateOfferDto {
    readonly freelancerEmail: string;
    readonly projectId: number;
    readonly cost: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}