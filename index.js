/* @Author: zhujian 
* @Date: 2017-08-12 13:58:13 
* @Last Modified by: zhujian
* @Last Modified time: 2017-12-11 11:52:01
*/
var express =require('express') ;

const app = express();


app.use(express.static('./'));
app.listen(8081);