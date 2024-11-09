
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

/** Catalog
 *
 * @created    2024-11-09
 * @version    1.0
 * @package    xhprof-html
 * @author     Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright  Tomoaki Nagahara All right reserved.
 */
function Catalog(){
	//	Init catalog json
	let json = GetCatalog();

	//	Get catalog filter form
	let form_php = $('form[name="filter"] select[name="php"]');
	let form_end = $('form[name="filter"] select[name="end"]');
//	let form_url = $('form[name="filter"]  input[name="url"]');
	form_php.append(new Option("All", ""));
	form_end.append(new Option("All", ""));

	//	Change event
	form_php.change( Filter );
	form_end.change( Filter );

	//	Append values
	for(let hash in json ){
		let data =  json[hash];
		let php  = data['php'];
		let end  = data['endpoint'];

		//	...
		if( form_php.find('option[value="' + php + '"]').length === 0 ){
			form_php.append(new Option(php, php));
		}
		if( form_end.find('option[value="' + end + '"]').length === 0 ){
			form_end.append(new Option(end, end));
		}
	}

	//	Remove original link
	$('ul').empty();

	//	Display all prof link
	Filter();
};

