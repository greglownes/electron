window.navigation = window.navigation || {},
function(n) {
  navigation.menu = {
    constants: {
      sectionTemplate: '.section-template',
      contentContainer: '#wrapper',
      startSection: '#versions'
    },
    importSectionsToDOM: function() {
      const links = document.querySelectorAll('link[rel="import"]')
      Array.prototype.forEach.call(links, function (link) {
        let template = link.import.querySelector(navigation.menu.constants.sectionTemplate)
        let clone = document.importNode(template.content, true)
        document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone)
      })
    },
    setMenuOnClickEvent: function () {
      document.body.addEventListener('click', function (event) {
        if (event.target.dataset.section) {
          navigation.menu.hideAllSections()
          navigation.menu.showSection(event)
        }
      })
    },
    showSection: function(event) {
      const sectionId = event.target.dataset.section
      $('#' + sectionId).show()
      $('#' + sectionId + ' section').show()
    },
    showSection2: function(sectionId) {
      navigation.menu.hideAllSections()
      $('#' + sectionId).show()
      $('#' + sectionId + ' section').show()
    },
    showStartSection: function() {
      navigation.menu.hideAllSections()
      $(this.constants.startSection).show()
      $(this.constants.startSection + ' section').show()
    },
    hideAllSections: function() {
      $(this.constants.contentContainer + ' section').hide()
    },
    init: function() {
      this.importSectionsToDOM()
      this.setMenuOnClickEvent()
      this.showStartSection()
    }
  };
  n(function() {
    navigation.menu.init()
    let count = 0
    $('#click-counter').text(count.toString())
    $('#countbtn').on('click', () => {
       count ++
       $('#click-counter').text(count)
    })
    $('#myTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    $('#myTab a:first').tab('show') // Select first tab
    const submitFormButton = document.querySelector("#ipcForm2");
    submitFormButton.addEventListener("submit", function(event){
      event.preventDefault();   // stop the form from submitting
      let firstname = document.getElementById("firstname").value;
      let lastname = document.getElementById("lastname").value;
      const ipcRenderer = require('electron').ipcRenderer;
      ipcRenderer.send('form-submission', firstname, lastname)
    });
  })
}(jQuery);
