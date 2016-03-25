var _ = require('lodash');
var request = require('request');
var ID = '33c73dacce84dddddbc15117e071b6ce';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getGroupInfo(callback) {
  var group_url = 'http://api.soundcloud.com/groups/51127.json?client_id=' + ID;
  var groupInfo = {};
  request.get(group_url, function(err,res,data){ 
    if (err) throw err;
    var data = JSON.parse(data);
    _.forEach(data, function(val,key){
      groupInfo[key] = val;
    });
    return callback(null, groupInfo);
  });
}

function getTracks(callback) {
  var tracks_url = 'http://api.soundcloud.com/groups/51127/tracks.json?client_id=' + ID + '&limit=200';
  var tracks = [];

  request.get(tracks_url, function(err,res,data){
    if (err) throw err;
    //var data = shuffle(JSON.parse(data))
    var data = JSON.parse(data);
    //console.log(data[0])
    _.forEach(data, function(val,key){
      tracks[key] = {
        id: val.id,
        title: val.title,
        username: val.user.username,
        permalink: val.permalink,
        uri: val.uri,
        artwork_url: val.artwork_url || "https://i1.sndcdn.com/avatars-000003754197-qxr8rw-large.jpg",
        waveform_url: val.waveform_url,
        duration: val.duration,
        stream_url: 'https://soundcloud.com/' + val.user.permalink + '/' + val.permalink,
        description: val.description
      };
    });
    return callback(null, tracks);
  }) ;
}

module.exports = {
  getGroup: getGroupInfo,
  getTracks: getTracks 
}
;
