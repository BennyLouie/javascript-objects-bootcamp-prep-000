var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

const recipe = {eggs:3}

function updateObjectsWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}