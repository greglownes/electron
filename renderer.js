// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

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
