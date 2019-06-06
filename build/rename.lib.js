const fs = require('fs')
const newName = 'dist/chartlib.js'

if (fs.existsSync(newName)) {
  fs.unlinkSync(newName)
}

fs.rename(
  'dist/chartlib.common.js',
  newName,
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Rename 已完成')
    }
  }
)

fs.rename(
  'dist/chartlib.common.js.map',
  newName + '.map',
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Rename 已完成')
    }
  }
)
