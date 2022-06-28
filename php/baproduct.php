<?php
$dataName= 'baproduct';
if(isset($_POST['seach'])){
    // $condition= "is_Del = 'N'";
    // $order_by='';
    // $fields='id,Image,name AS bn';
    // $limit="";
    // $data_array= "";
    // $select =Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    // $totle = Database::get()->getTotle();

    // $pn =  8;
    // $p =  $_POST['p'];
    // $start = ($p - 1) * $pn;
    // $limit="$start,$pn";
    // $order_by='id ASC';
    // $row=Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    $pn = 8;
    // $r =CustomFN::booknameSeach($_POST['p'],$pn);
    $dataName= 'baproduct';
    $condition= "is_Del = 'N'";
    $order_by='';
    $fields='*';
    $limit="";
    $data_array= "";
    $select =Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    $totle = Database::get()->getTotle();

    $start = ($_POST['p'] - 1) * $pn;
    $limit="$start,$pn";
    $order_by='id ASC';
    $row=Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    // return array('totle'=>$totle,'row'=>$row);

    //customRow
    $customRow=array(
        'tableName'=>array(
            array('n'=>'#','i'=>'id'),
            array('n'=>'圖片(400*230)','i'=>'Image','t'=>'file','w'=>400,'h'=>230),
            array('n'=>'主標(tw)','i'=>'lg_title_tw','t'=>'text'),
            array('n'=>'副標(tw)','i'=>'sm_title_tw','t'=>'text'),
            array('n'=>'內文(tw)','i'=>'content_tw','t'=>'textarea'),
            array('n'=>'主標(en)','i'=>'lg_title_en','t'=>'text'),
            array('n'=>'副標(en)','i'=>'sm_title_en','t'=>'text'),
            array('n'=>'內文(en)','i'=>'content_en','t'=>'textarea'),
            array('n'=>'動作'),
        ),
        'validate'=>array(
            'rules'=>array(
                'Image'=>array('required'=>true),
                'lg_title_tw'=>array('required'=>true,'maxlength'=>30,'minlength'=>3),
                'sm_title_tw'=>array('required'=>true,'maxlength'=>30,'minlength'=>3),
                'content_tw'=>array('required'=>true,'maxlength'=>255,'minlength'=>5),
                'lg_title_en'=>array('required'=>true,'maxlength'=>30,'minlength'=>3),
                'sm_title_en'=>array('required'=>true,'maxlength'=>30,'minlength'=>3),
                'content_en'=>array('required'=>true,'maxlength'=>600,'minlength'=>5),
            ),
            'messages'=>array(
                'Image'=>array('required'=>'請上傳圖片'),
                'lg_title_tw'=>array('required'=>'請輸入文字','maxlength'=>'最多30個字','minlength'=>'最少3個字'),
                'sm_title_tw'=>array('required'=>'請輸入文字','maxlength'=>'最多30個字','minlength'=>'最少3個字'),
                'content_tw'=>array('required'=>'請輸入文字','maxlength'=>'最多255個字','minlength'=>'最少5個字'),
                'lg_title_en'=>array('required'=>'請輸入文字','maxlength'=>'最多30個字','minlength'=>'最少3個字'),
                'sm_title_en'=>array('required'=>'請輸入文字','maxlength'=>'最多30個字','minlength'=>'最少3個字'),
                'content_en'=>array('required'=>'請輸入文字','maxlength'=>'最多600個字','minlength'=>'最少5個字'),
            )
        ),
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
if(isset($_POST['add'])){
    $data_array = array(
        "Image" =>CustomFN::imgAdd($dataName,$_POST['Image2']),
        'lg_title_tw' => $_POST['lg_title_tw'],
        'sm_title_tw' => $_POST['sm_title_tw'],
        'content_tw' => $_POST['content_tw'],
        'lg_title_en' => $_POST['lg_title_en'],
        'sm_title_en' => $_POST['sm_title_en'],
        'content_en' => $_POST['content_en'],
    );
    Database::get()->insert2($dataName, $data_array);
    $row = Database::get()->getLastId();


    if($row){
        echo json_encode(array('result'=>true));
    }else{
        echo json_encode(array('result'=>false,'message'=>'資料庫錯誤'));
    }
    exit();
}
if(isset($_POST['edit'])){
    CustomFN::imgEdite($dataName,$_POST['id'], $_POST['Image2']);
    $data_array = array(
        'lg_title_tw' => $_POST['lg_title_tw'],
        'sm_title_tw' => $_POST['sm_title_tw'],
        'content_tw' => $_POST['content_tw'],
        'lg_title_en' => $_POST['lg_title_en'],
        'sm_title_en' => $_POST['sm_title_en'],
        'content_en' => $_POST['content_en']
    );
    $row = Database::get()->update2($dataName,$data_array,'id',$_POST['id']);
    echo json_encode(array('result'=>true));
    exit();
}
if(isset($_POST['Delete'])){
    $condition= "id=:id";
    $order_by='';
    $fields='Image';
    $limit="";
    $data_array= array('id'=>$_POST['id']);
    $image = Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
    if($image[0]['Image']){
        CustomFN::imgDelet($image[0]['Image']);
    }

    Database::get()->delete2($dataName,'id',$_POST['id']);
    echo json_encode(array('result'=>true));
    exit();

    // $data_array = array("is_Del" => 'Y');
    // $row = Database::get()->update2($dataName,$data_array,'id',$_POST['id']);
    // echo json_encode(array('result'=>true));
    // exit();
}

include('page/component/baTemplate.php');
