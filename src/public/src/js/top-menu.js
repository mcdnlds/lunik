/**
 * Top Menu
 * @constructor
*/
function _TopMenu () {
  this.vue = new App.Vue({
    el: '.top-menu',
    data: {
      actions: [
        {
          id: 'download',
          icon: 'fa-download',
          state: 'hide'
        },
        {
          id: 'rename',
          icon: 'fa-pencil',
          state: 'hide'
        },
        {
          id: 'remove',
          icon: 'fa-times',
          state: 'hide'
        },
        {
          id: 'info',
          icon: 'fa-info',
          state: 'hide'
        }
      ],
      ariane: [],
      folderSize: 0
    }
  })
}

/**
 * Update actions buttons
 * @param {object} actions - List of actions to update with states
*/
_TopMenu.prototype.setActions = function (actions) {
  var self = this
  $.each(self.vue.$data.actions, function (index, value) {
    if (actions[value.id]) {
      value.state = actions[value.id]
    }
  })
}

/**
 * Update Ariane link
 * @param {object} list - List sorted of directories
*/
_TopMenu.prototype.setAriane = function (list) {
  var self = this
  self.vue.$data.ariane = []
  var profDir = ''
  for (var key in list) {
    profDir += list[key] + '/'
    self.vue.$data.ariane.push({
      path: profDir,
      name: list[key]
    })
  }
}

_TopMenu.prototype.setFolderSize = function (size) {
  self.vue.$data.folderSize = size
}

App.TopMenu = new _TopMenu()
