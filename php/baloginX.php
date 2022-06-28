<?php
if (isset($_POST) && !empty($_POST)){
    $error = array();
    $account = CustomFN::ch_email($_POST['account']);
    $password = CustomFN::ch_value($_POST['password']);


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


    //驗證帳號密碼
    if(empty($error)){
        $dataName='manager';
        $condition = "Password=:Password AND Account=:Account AND is_Release = 'Y'";
        $order_by = "";
        $fields = "id,Name";
        $limit='';
        $passwrd = md5('@#mj'.$password.'app!');
        $data_array = array('Account'=>$account,'Password'=>$passwrd);
        $manager = Database::get()->query2($dataName, $condition, $order_by, $fields, $limit, $data_array);
        $row = Database::get()->getTotle();

        if($row){
            $_SESSION['baMemberID']= $manager[0]['id'];
            header("Location: ?a=bamanager");
            exit();
        }else{
            array_push($error,"帳號或密碼錯誤");
        }
    }
    $error = implode(',',$error);
}
include(__DIR__.'/page/balogin.php');

