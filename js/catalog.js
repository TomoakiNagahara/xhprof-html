
/** xhprof-html:/js/catalog.js
 *
 * @created    2024-11-09
 * @version    1.0
 * @package    xhprof-html
 * @author     Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright  Tomoaki Nagahara All right reserved.
 */

/** Get catalog json object
 *
 * @created    2024-11-09
 * @version    1.0
 * @package    xhprof-html
 * @author     Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright  Tomoaki Nagahara All right reserved.
 */
function GetCatalog(){
	//	static value
	if( typeof GetCatalog.json === 'undefined'　){
		let text = $("#catalog").text();
		let json = JSON.parse(text);
		GetCatalog.json = json;
		$("#catalog").text('');
	}
	//	...
	return GetCatalog.json;
}

