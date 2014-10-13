var bform = Vue.extend({
  template: '<textarea v-model="bleatText" rows="3" cols="50" placeholder="Bleat something"></textarea><br><input type="text" v-model="bleatAuthor" placeholder="Author"><br><button id="postBleat" v-on="click: bleatHandler">Bleat!</button>'
});

var demo = new Vue({
  el: '#bleats',
  data: {
    title: 'Bleats',
    bleatText: '',
    bleatAuthor: '',
    bleats: [
      {
        author: "Don",
        content: "This is my first bleat."
      },
      {
        author: "Don",
        content: "This is my second bleat."
      },
      { author: "Bob",
        content: "Bleating is FUN!"
      }
    ]
  },
  methods: {
    removeBleat: function(idx) {
      demo.bleats.$remove(idx);
    },
    bleatHandler: function() {
     demo.bleats.push({content: demo.$data.bleatText, author: demo.$data.bleatAuthor});
     demo.$data.bleatText = '';
     demo.$data.bleatAuthor = '';
    }
  },
  components: {
    bleat: {
      template: '<span v-on="click: removeBleat($index)">&times;</span><p>{{content}}</p><small>Author: {{author}}</small>'
    },
    bform: bform
  }
});

