<?php
if(isset($_POST['seach'])){
    $dataName= 'baproduct';
    $condition= "";
    $order_by='';
    $fields='id,Image,lg_title_'.$_POST['lang'].',sm_title_'.$_POST['lang'].',content_'.$_POST['lang'];
    $limit="";
    $data_array= "";
    Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    $totle = Database::get()->getTotle();
    $pn =  8;
    $p =  $_POST['p'];
    $start = ($p - 1) * $pn;
    $limit="$start,$pn";
    $order_by='id ASC';
    $row=Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);

    if(!empty($row)){
        echo json_encode(array('result'=>true,'row'=>$row,'totle'=>$totle,'pn'=>$pn));
    }else{
        echo json_encode(array('result'=>false,'message'=>'找不到相關資料'));
    }
    
    exit();
}
include('page/component/fnTemplate.php');