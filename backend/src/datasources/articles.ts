import _ from 'lodash';

const articles = await import('./../data/emoji-articles-export.json', {
    assert: {type: 'json'}
})

export class ArticlesDataSource {
    constructor() {
    }

    init() {}

    getArticles(args) {
        return _.filter(articles, args);
    }

    getArticleById(id) {
        const article = _.filter(articles, {id: id});
        return article[0];
    }
}