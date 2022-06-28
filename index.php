<?php
require( __DIR__ .'/config.php');
$getA= CustomFN::ch_value($_GET['a']);

if (!empty($getA) && is_file(__DIR__ . "/php/" . $getA . ".php") == true ){
    
    if(preg_match("/^balogout$/", $getA) || preg_match("/^balogin$/", $getA) || preg_match("/^fn/", $getA)){
        //後台登出 後台登入 前台
        include(__DIR__.'/php/'.$getA.'.php');
        // exit();
    }else if(preg_match("/^ba/", $getA) && isset($_SESSION['baMemberID']) && !empty($_SESSION['baMemberID'])){
        //後台
        include(__DIR__.'/php/'.$getA.'.php');
        // exit();
    }else{
        header('Location:?a=fnhome');
        // exit();
    }

}else{
    //無指定 ?a 顯示預設首頁
    header('Location:?a=fnhome');
    // exit();
}

