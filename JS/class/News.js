class News {

    news_Content
    source_name
    source_link

    constructor(news_Content, source_name, source_link) {
        this.news_Content = news_Content
        this.source_name = source_name
        this.source_link = source_link
    }

    get news_Content() {
        return this.news_Content
    }

    get source_name() {
        return this.source_name
    }

    get source_link() {
        return this.source_link;
    }
}

export {News}