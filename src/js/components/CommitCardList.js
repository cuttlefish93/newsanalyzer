export default class CommitCardList {
  constructor(node) {
    this._commitContainer = node;
  }

  _addCommitCard = (card) => {
    this._commitContainer.append(card);
  }

  renderCommitCards = (responseData, createCommitCard) => {
    responseData.forEach((data) => {
      this._addCommitCard(
        createCommitCard({
          commitUrl: data.html_url,
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
