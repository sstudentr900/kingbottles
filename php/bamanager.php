<?php
$dataName= 'manager';
if(isset($_POST['seach'])){
    $condition= "";
    $order_by='';
    $fields='*';
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

    $customRow=array(
        'tableName'=>array(
            array('n'=>'#','i'=>'id'),
            array('n'=>'建立時間','i'=>'Create_Time'),
            array('n'=>'圖片(200*200)','i'=>'Image','t'=>'file','w'=>200,'h'=>200),
            array('n'=>'帳號','i'=>'Account','t'=>'text'),
            array('n'=>'姓名','i'=>'Name','t'=>'text'),
            array('n'=>'電話','i'=>'Phone','t'=>'number'),
            array('n'=>'狀態','i'=>'is_Release','t'=>'is_Release','yes'=>'發布','no'=>'停用'),
            array('n'=>'動作'),
        ),
        'validate'=>array(
            'rules'=>array(
                'Image'=>array('required'=>true),
                'Account'=>array('required'=>true,'email'=> true,'maxlength'=> 50,'remote'=>'?a=bamanager'),
                'Name'=>array('required'=>true,'maxlength'=>20),
                'Phone'=>array('required'=>true,'maxlength'=>20,'minlength'=>3),
                'Password'=>array('required'=>true,'maxlength'=>8,'minlength'=>5)
            ),
            'messages'=>array(
                'Image'=>array('required'=>'請上傳圖片'),
                'Account'=>array('required'=>'請填帳號','email'=>'格式錯誤','maxlength'=>'最多50個字','remote'=>'Email重複'),
                'Name'=>array('required'=>'請填姓名','maxlength'=>'最多20個字'),
                'Phone'=>array('required'=>'請填電話','minlength'=>'最少3個字','maxlength'=>'最多20個字'),
                'Password'=>array('required'=>'請輸入密碼','maxlength'=>'最多8個字','minlength'=>'最少5個字')
            )
        ),
        'ebp'=>array('ti'=>'更改密碼','n'=>'密碼','n1'=>'請輸入密碼'),   //更改密碼
        'ab'=>array('ti'=>'新增'),   
        'ed'=>array('ti'=>'修改'),  
        'de'=>array('ti'=>'刪除','co'=>'你確定刪除'), 
        'btCT'=>'取消',
        'btTT'=>'確認',
        'pl'=>'請輸入'
    );
    if(!empty($row)){
        echo json_encode(array('result'=>true,'row'=>$row,'totle'=>$totle,'customRow'=>$customRow,'pn'=>$pn));
    }else{
        echo json_encode(array('result'=>false,'message'=>'找不到相關資料'));
    }
    
    exit();
}

include('page/component/baTemplate.php');
