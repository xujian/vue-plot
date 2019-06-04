const fs = require('fs')

fs.rename(
  'dist/chartlib.common.js',
  'dist/lib.js',
  (err)=>{
    console.log(err)
  }
)

