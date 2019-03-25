export class Quote {
  public showQuoteDetails: boolean;
  public highestUpvote: boolean;
  constructor(public id: number, public quote: string, public author: string,
    public submittor: string, public upvote: number, public downvote: number,
    public quoteDate: Date) {
    this.showQuoteDetails = false;
    this.highestUpvote = false;
    this.upvote = 0;
    this.downvote = 0;
  }
}
