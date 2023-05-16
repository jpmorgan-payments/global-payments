// Code taken from: https://stackoverflow.com/a/71315057
export function form2json(data) {
    let method = function (object, pair) {
      let keys = pair[0].replace(/\]/g, "").split("[");
      let key = keys[0];
      let value = pair[1];
  
      if (keys.length > 1) {
        let i, x, segment;
        let last = value;
        let type = isNaN(keys[1]) ? {} : [];
  
        value = segment = object[key] || type;
  
        for (i = 1; i < keys.length; i++) {
          x = keys[i];
  
          if (i == keys.length - 1) {
            if (Array.isArray(segment)) {
              segment.push(last);
            } else {
              segment[x] = last;
            }
          } else if (segment[x] == undefined) {
            segment[x] = isNaN(keys[i + 1]) ? {} : [];
          }
  
          segment = segment[x];
        }
      }
  
      object[key] = value;
  
      return object;
    };
  
    let object = Array.from(data).reduce(method, {});
  
    return JSON.stringify(object);
  }