var main = require('./getData')
var fs = require('fs')

function saveJson(data,file_path) {
  var output = JSON.stringify(data)
  fs.writeFile(file_path, output, function(err){
    if (err) throw err
    //else
    console.log(file_path + ' saved')
  }) 

}

main.getGroup(function(err,data){
  saveJson(data, '../app/data/groupInfo.json')
})

main.getTracks(function(err,data){
  saveJson(data, '../app/data/tracksList.json')
});