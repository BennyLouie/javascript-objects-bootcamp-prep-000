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
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
recipe