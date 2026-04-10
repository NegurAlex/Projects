<?
ini_set('session.use_trans_sid', 0);
ini_set('session.use_only_cookies', 1);


	session_name();
	session_start();
	
	include 'lib/index_page.php';

	$tpl->display($LOCALPATH.'modules/index/tpl/'.$base_template);
?>