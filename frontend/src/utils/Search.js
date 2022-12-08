import SearchActions from '../actions/search_actions';

const SearchApi = {

  search(query, page) {
    $.ajax({
      url: '/api/search',
      type: 'GET',
      dataType: 'json',
      data: {query, page},
      success(data) {
        SearchActions.receiveResults(data);
      }
    });
  },

};

export default SearchApi;