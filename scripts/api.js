/* global $ */
'use strict';

const api = (function(){
  const base_URL="https://thinkful-list-api.herokuapp.com/cameron-janet";

  const getItems = function (callback){
    $.getJSON(`${base_URL}/items`, callback);
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({name});
    $.ajax({
      url: `${base_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };


  const updateItem = function (id, updateData, callback){
    $.ajax({
      url: `${base_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback

    });
  };




  return {
    getItems,
    createItem,
    updateItem
  };

})();