<?php
if (isset($_POST) && !empty($_POST)){
    $error = array();
    $account = ch_email($_POST['account']);
    $password = ch_value($_POST['password']);


    //帳號
    if($account['re']==false){
        array_push($error,$account['me']);
    }else{
        $account = $account['me'];
    }


    //密碼
    if (empty($password)) {
        array_push($error,"密碼未填");
    }
}
include('page/component/balogin.php');

