/** 深度合并对象
 * @param target 目标对象
 * @param source 源对象
 */
function mergeObj(target, source) {
  if (!source) {
    return target;
  } else if (!target) {
    return source;
  }

  for (const i in source) {

    if (source[i] != null && source[i].constructor === Object) {
      target[i] = mergeObj(target[i], source[i]);
    } else if (source[i] != null && (source[i] instanceof Array) && source[i].length > 0) {
      if (source[i][0].constructor === Object) {
        const newobjs = [];
        const objids = {};
        for (let x = 0, l = target[i].length; x < l; x++) {
          objids[target[i][x].id] = x;
        }

        for (let x = 0, l = source[i].length; x < l; x++) {
          const newobj = source[i][x];
          if (objids[newobj.id] !== undefined) {
            target[i][x] = mergeObj(target[i][x], newobj);
          } else {
            newobjs.push(newobj);
          }
        }

        for (let x = 0, l = newobjs.length; x < l; x++) {
          target[i].push(newobjs[x]);
        }
      } else {
        for (let x = 0; x < source[i].length; x++) {
          const idxObj = source[i][x];
          if (target[i].indexOf(idxObj) === -1) {
            target[i].push(idxObj);
          }
        }
      }
    } else {
      target[i] = source[i];
    }
  }
  return target;
}

export default mergeObj;
