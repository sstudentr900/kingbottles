<?php
$error ='';
if (isset($_POST) && !empty($_POST)){
    $account = CustomFN::ch_email($_POST['account']);
    $password = CustomFN::ch_value($_POST['password']);
    $error = array();

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
        $condition = "password=:password AND account=:account AND is_release = 'y'";
        $order_by = "";
        $fields = "id,Name";
        $limit='';
        $passwrd = md5('@#mj'.$password.'app!');
        //$passwrd = $password;
        $data_array = array('account'=>$account,'password'=>$passwrd);
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
include('page/component/balogin.php');

