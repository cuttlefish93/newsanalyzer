export default class CommitCardList {
  constructor(node) {
    this.commitContainer = node;
  }

  addCommitCard = (card) => {
    this.commitContainer.append(card);
  }

  renderCommitCards = (responseData, createCommitCard) => {
    responseData.forEach((data) => {
      this.addCommitCard(
        createCommitCard({
          commitUrl: data.commit.url,
          commitDate: data.commit.committer.date,
          authorImg: data.author ? data.author.avatar_url : './assets/images/author-img.png',
          authorName: data.commit.committer.name,
          authorEmail: data.commit.committer.email,
          commitText: data.commit.message,
        })
      );
    });
  }
}
