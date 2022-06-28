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
const MYSQL_HOST="us-cdbr-east-05.cleardb.net";
const MYSQL_USERNAME="b76525842fa062";
const MYSQL_PASSWORD="919baab0";
const MYSQL_DBNAME="heroku_3ba40f4d37f77ea";
// try{
//      // 建立MySQL伺服器連接和開啟資料庫 
//     $PDO=new PDO("mysql:host=".MYSQL_HOST.";charset=utf8mb4;port=3306;dbname=".MYSQL_DBNAME,MYSQL_USERNAME,MYSQL_PASSWORD);
//     // 指定PDO錯誤模式和錯誤處理
//     $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $PDO->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
// } catch(PDOException $e){
//     print_r($e);
//     exit;
// }


//const
const HEAD_TITLE='祥好塑膠股份有限公司';//title

//session
session_start();


//autoload
spl_autoload_register(function ($class_name) {
    $load_FileName = str_replace('\\', '/', $class_name);
    print_r($load_FileName);
    echo '<br>';
    $file_name = __DIR__ ."/libraries/". $load_FileName .".php";
    print_r($file_name);
    echo '<br>';
    if ( is_file($file_name) === true ) {
        require_once($file_name);
    }
    exit();
});



function ch_value($data){
    //去除使用者輸入資料中不必要的字元（多餘的空格、製表符、換行）
    $data = trim($data);
    //刪除使用者輸入資料中的反斜槓（\）
    $data = stripslashes($data);
    //把特殊字元轉換為 HTML 實體
    $data = htmlspecialchars($data);
    return $data;
}
function ch_email($data){
    $v = ch_value($data);
    if (empty($v)) {
        return array('re'=>false,'me'=>'帳號未填');
    }
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$v)) {
        return array('re'=>false,'me'=>'格式錯誤');
    }
    return array('re'=>true,'me'=>$v);
}
function isv($str){
    if(isset($str) && !empty($str)){
        return $str;
    }else{
        return null;
    }
}
//img
function imgAdd($dataName,$image,$range='0'){
    $imgName = $dataName.date(time()+$range).'.jpg';
    // print_r($imgName);
    $path = 'page/img/baimg/'.$imgName;//圖片路徑
    // chmod($path,0777);
    file_put_contents($path, base64_decode(str_replace('data:image/jpeg;base64,','', $image)));//返回的是字节数
    return $imgName;
}
function imgEdite($dataName,$id,$img){
    $condition = "id = :id";
    $order_by='';
    $fields='Image';
    $limit="";
    $data_array = array("id" => $id);
    $path = Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    if(empty($path[0]['Image'])){ //值為空
        $data_array = array("Image" =>imgAdd($dataName,$img));
        Database::get()->update2($dataName,$data_array,'id',$id);
        return;
    }
    if($path[0]['Image'] != $img){//有更改圖片才更新
        // if($path[0]['Image']=='baprescription.jpg'){
        if($path[0]['Image']=='errorimg.jpg'){
            $data_array = array("Image" => imgAdd('baprescription',$img));
            Database::get()->update2($dataName,$data_array,'id',$id);
        }else{
            $path = 'page/img/baimg/'.$path[0]['Image'];//圖片路徑
            // chmod($path,0777);
            file_put_contents($path, base64_decode(str_replace('data:image/jpeg;base64,','', $img)));//返回的是字节数
        }
    }
}
function imgDelet($img){
    // if($img !='bamember.jpg' && $img !='baprescription.jpg'){
    if($img !='bamember.jpg' && $img !='errorimg.jpg'){
        $imgName = 'page/img/baimg/'.$img;
        // chmod($imgName,0777);
        if(file_exists($imgName) && is_file($imgName)){
            unlink($imgName);
        }
    }
}




//twitter
// if(isset($_SESSION['oauth_token']) && isset($_GET['oauth_verifier']) && isset($_GET['oauth_token'])){
//     require "./libraries/twitter.php";
//     exit();
// }
