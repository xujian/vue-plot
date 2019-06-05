const fs = require('fs')

fs.rename(
  'dist/chartlib.common.js',
  'dist/chartlib.js',
  (err)=>{
    console.log(err)
  }
)

