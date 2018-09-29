function updateWindowLocationHistoryState(paramObject) {
  if (!(paramObject == undefined)) {
    var newParams = $.param(paramObject);
  } else {
    var newParams = ''
  }

  if (history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + newParams;
    window.history.pushState({ path: newurl }, '', newurl);
  }

  return newParams;
}

function updateURLParams(){
  var options = ["#search_term", ".doer_categories", "#state", "#city", "#distance"];
  var paramObject = {};

  $.map(options, function(option){
    var value = $(option).val();

    if (option == '#distance') {
      value = (/\d+/).exec(value);
      if (!value) { return; }
      else { value = value[0] }
    }

    if ($(option).length && value.length) {
      var param = option.replace(/(#|\.)/, '');

      if ($(option).hasClass("job_categories") || $(option).hasClass("doer_categories")) {
        if (typeof value !== 'object') { value = [value] }
      }

      paramObject[param] = value;
    }
  });

  return updateWindowLocationHistoryState(paramObject);
}
