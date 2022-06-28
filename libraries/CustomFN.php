<?php
class CustomFN
{
    //valu
    static function ch_value($data){
        //去除使用者輸入資料中不必要的字元（多餘的空格、製表符、換行）
        $data = trim($data);
        //刪除使用者輸入資料中的反斜槓（\）
        $data = stripslashes($data);
        //把特殊字元轉換為 HTML 實體
        $data = htmlspecialchars($data);
        return $data;
    }
    static function ch_email($data){
        $v = self::ch_value($data);
        if (empty($v)) {
            return array('re'=>false,'me'=>'帳號未填');
        }
        if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$v)) {
            return array('re'=>false,'me'=>'格式錯誤');
        }
        return array('re'=>true,'me'=>$v);
    }
    static function isv($str){
        if(isset($str) && !empty($str)){
            return $str;
        }else{
            return null;
        }
    }
    //img
    static function imgAdd($dataName,$image,$range='0'){
        $imgName = $dataName.date(time()+$range).'.jpg';
        // print_r($imgName);
        $path = 'page/img/baimg/'.$imgName;//圖片路徑
        // chmod($path,0777);
        file_put_contents($path, base64_decode(str_replace('data:image/jpeg;base64,','', $image)));//返回的是字节数
        return $imgName;
    }
    static function imgEdite($dataName,$id,$img){
        $condition = "id = :id";
        $order_by='';
        $fields='Image';
        $limit="";
        $data_array = array("id" => $id);
        $path = Database::get()->query2($dataName,$condition,$order_by,$fields,$limit,$data_array);
        if(empty($path[0]['Image'])){ //值為空
            $data_array = array("Image" =>CustomFN::imgAdd($dataName,$img));
            Database::get()->update2($dataName,$data_array,'id',$id);
            return;
        }
        if($path[0]['Image'] != $img){//有更改圖片才更新
            // if($path[0]['Image']=='baprescription.jpg'){
            if($path[0]['Image']=='errorimg.jpg'){
                $data_array = array("Image" => self::imgAdd('baprescription',$img));
                Database::get()->update2($dataName,$data_array,'id',$id);
            }else{
                $path = 'page/img/baimg/'.$path[0]['Image'];//圖片路徑
                // chmod($path,0777);
                file_put_contents($path, base64_decode(str_replace('data:image/jpeg;base64,','', $img)));//返回的是字节数
            }
        }
    }
    static function imgDelet($img){
        // if($img !='bamember.jpg' && $img !='baprescription.jpg'){
        if($img !='bamember.jpg' && $img !='errorimg.jpg'){
            $imgName = 'page/img/baimg/'.$img;
            // chmod($imgName,0777);
            if(file_exists($imgName) && is_file($imgName)){
                unlink($imgName);
            }
        }
    }
}
