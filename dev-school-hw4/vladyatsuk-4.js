class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    const pageCount = this.pageCount();
    const itemCount = this.itemCount();

    if (pageIndex < 0 || pageIndex >= pageCount) {
      return -1;
    }
    if (pageIndex < pageCount - 1) {
      return this.itemsPerPage;
    }
    return itemCount % this.itemsPerPage === 0
      ? this.itemsPerPage
      : itemCount % this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
