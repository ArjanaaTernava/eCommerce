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

  filter() {
    const queryCopy = { ...this.queryStr };

    // console.log(queryCopy);

    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((element) => delete queryCopy[element]);

    // console.log(queryCopy);

    let queryStr = JSON.stringify(queryCopy);
    // greater, greater than equal to, less, less than equal to
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1; // by default = 1
    const skip = resPerPage * (currentPage - 1); // 10 * (4-1) = 30 => 31-40 will be shown
    // console.log(skip);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
