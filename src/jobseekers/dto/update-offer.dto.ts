export default class UpdateOfferDto {
    readonly id: number;
    readonly freelancerEmail: string;
    readonly projectId: number;
    readonly cost: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}