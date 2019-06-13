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

console.log(updateObjectsWithKeyAndValue(recipe, 'chocolate', '1 cup'))
console.log(recipe)