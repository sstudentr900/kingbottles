<?php
// 不緩存 http://php.net/manual/zh/function.header.php
// header("Content-Type:text/html; charset=utf-8");
// header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
// header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

// ini_set('display_errors',true);
// ini_set('error_reporting',E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED);

// Session 存活時間
// ini_set('session.cookie_lifetime', 0);
// ini_set("session.gc_maxlifetime", 14400);

// ini Set
// 台灣時區
// date_default_timezone_set('Asia/Taipei');


// 資料庫
//1.
// const MYSQL_HOST="10.1.7.4";
// const MYSQL_USERNAME="medicine";
// const MYSQL_PASSWORD="mjAPpMe#DicinE!";
// const MYSQL_DBNAME="MJAPP_medicine";
// const MYSQL_HOST="10.1.6.248";
//2.
// const MYSQL_USERNAME="MJAPP_kingbottles";
// const MYSQL_PASSWORD="MJAPP_kingbottles";
// const MYSQL_DBNAME="MJAPP_kingbottles";
//3.
// mysql://b76525842fa062:919baab0@us-cdbr-east-05.cleardb.net/heroku_3ba40f4d37f77ea?reconnect=true
// const MYSQL_HOST="us-cdbr-east-05.cleardb.net";
// const MYSQL_USERNAME="b76525842fa062";
// const MYSQL_PASSWORD="919baab0";
// const MYSQL_DBNAME="heroku_3ba40f4d37f77ea";
//4.本地
const MYSQL_HOST="localhost";
const MYSQL_USERNAME="root";
const MYSQL_PASSWORD="";
const MYSQL_DBNAME="mjapp_kingbottles";
//5.遠振
// const MYSQL_HOST="localhost";
// const MYSQL_USERNAME="sstudent_sstudent";
// const MYSQL_PASSWORD="q29m3MCfb5";
// const MYSQL_DBNAME="sstudent_mjapp_kingbottles";

//const
const HEAD_TITLE='祥好塑膠股份有限公司';//title

//session
session_start();


//autoload
spl_autoload_register(function ($class_name) {
    $load_FileName = str_replace('\\', '/', $class_name);
    $file_name = __DIR__ ."/libraries/". $load_FileName .".php";
    if ( is_file($file_name) === true ) {
        require_once($file_name);
    }
});