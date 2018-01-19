export default {
  getCategories() {
    let queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setSortBy( [ "sort" ] );
    return Backendless.Data.of("Category").find(queryBuilder)
      .then(response => response)
      .catch(error => error);
  },
  getProducts(slug) {
    let queryBuilder = Backendless.DataQueryBuilder.create();
    if(slug) {
      queryBuilder.setWhereClause( `category.slug = '${slug}'`);
    }
    return Backendless.Data.of( "Products" ).find( queryBuilder )
      .then(response => response)
      .catch(error => error);
  },
  searchProducts(query) {
    let queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(`post_title LIKE '%${query}%'`);
    return Backendless.Data.of( "Products" ).find( queryBuilder )
      .then(response => response)
      .catch(error => error);
  },
  isAuth(){
    return Backendless.UserService.getCurrentUserSync();
  }
  /*getFiles(dataToSend) {
    return Vue.axios({
      method: 'POST',
      url: URLS.getFiles,
      data: dataToSend,
    })
      .then(response => response)
      .catch(error => error);
  },*/
};
