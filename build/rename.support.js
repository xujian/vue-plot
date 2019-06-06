const fs = require('fs')

fs.rename(
  'dist/support.common.js',
  'dist/support.js',
  (err)=>{
    console.log(err)
  }
)

fs.rename(
  'dist/support.common.js.map',
  'dist/support.js.map',
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Rename 已完成')
    }
  }
)
