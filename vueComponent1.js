Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

// https://catalog.data.gov/dataset?res_format=JSON
var app7 = new Vue({
  el: '#app-7',
  // props: ['groceryList']
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  mounted: function () {
    var self = this;

    let url = 'https://data.cityofnewyork.us/api/views/kku6-nxdu/rows.json?accessType=DOWNLOAD';
    
    $.ajax({
      url: url, //'http://gworldapi.azurewebsites.net/api/Words/Random?count=30',
      method: 'GET',
      success: function (data) {
        console.log(data);
        let dArr = data.meta.view.columns;
        console.log(dArr);
        self.groceryList = dArr.map((d, idx) => {
          return {
            id: d.id,
            text: d.name
          }
        });
      },
      error: function (error) {
        console.log(JSON.stringify(error));
      }
    });
  }
});