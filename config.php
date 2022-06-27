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
// const MYSQL_HOST="10.1.7.4";
// const MYSQL_USERNAME="medicine";
// const MYSQL_PASSWORD="mjAPpMe#DicinE!";
// const MYSQL_DBNAME="MJAPP_medicine";
const MYSQL_HOST="10.1.6.248";
const MYSQL_USERNAME="MJAPP_kingbottles";
const MYSQL_PASSWORD="MJAPP_kingbottles";
const MYSQL_DBNAME="MJAPP_kingbottles";
try{
     // 建立MySQL伺服器連接和開啟資料庫 
    $PDO=new PDO("mysql:host=".MYSQL_HOST.";charset=utf8mb4;port=3306;dbname=".MYSQL_DBNAME,MYSQL_USERNAME,MYSQL_PASSWORD);
    // 指定PDO錯誤模式和錯誤處理
    $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $PDO->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch(PDOException $e){
    print_r($e);
    exit;
}


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


//twitter
// if(isset($_SESSION['oauth_token']) && isset($_GET['oauth_verifier']) && isset($_GET['oauth_token'])){
//     require "./libraries/twitter.php";
//     exit();
// }
