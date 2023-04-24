class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          // if exists search in the database
          name: {
            $regex: this.queryStr.keyword,
            $options: "i", // case insensitive
          },
        } // if not return an empty obj
      : {};

    // console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
}

module.exports = APIFeatures;
