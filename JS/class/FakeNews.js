class FakeNews {

    news_Content
    source_name
    real_source_name

    constructor(news_Content, source_name, real_source_name) {
        this.news_Content = news_Content
        this.source_name = source_name
        this.real_source_name = real_source_name
    }

    get news_Content() {
        return this.news_Content
    }

    get source_name() {
        return this.source_name
    }

    get real_source_name() {
        return this.real_source_name;
    }
}

export {FakeNews}