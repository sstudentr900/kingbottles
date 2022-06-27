<?php
    //官網 https://developer.twitter.com/en/apps/17042752  
    //官網註冊開發者取得以下資料
    $CONSUMER_KEY='y6swbhTSe833VFki2wzet7Gq2'; 
    $CONSUMER_SECRET='jUmVeJf42BFUKeD3TXELzrh8TPzhg3xTrjYwbAZ7JfEokJWcnm';
    $access_token='3578150593-luDebW0ZgTV76ZtdMtAAICXxUULgdpXRiuRr190';
    $access_token_secret='0Hl5zAwfwkBsyhGPv9A3NP3kqVLkvRwGY4zZsTzJVe6uq';
    //**登入後回到該網址(該網址必須註冊在=>回調網址)
    $OAUTH_CALLBACK='https://med.mj-app.com.tw';
    require "./libraries/twitteroauth-master/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth;

    
    //測試取到資料
    // $connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $access_token, $access_token_secret);
    // // $content = $connection->get("account/verify_credentials");
    // $content = $connection->get("account/verify_credentials",['include_email'=>'true']);
    // print_r($content);
    // echo '<br>';
    // echo '<br>';
    // exit();

    $connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET);
    if(isset($_SESSION['oauth_token']) && isset($_GET['oauth_verifier']) && isset($_GET['oauth_token'])){
        unset($_SESSION['oauth_token']);

        //取得twitter回傳值
        $params=array("oauth_verifier" => $_GET['oauth_verifier'],"oauth_token"=>$_GET['oauth_token']);
        $access_tokens = $connection->oauth("oauth/access_token", $params);
        $connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $access_tokens['oauth_token'], $access_tokens['oauth_token_secret']);
        //取得個資
        $user = $connection->get("account/verify_credentials",['include_email'=>'true']);//有mail
        $img = $user->profile_image_url;
        $account = $user->email;
        $name = $user->name;
        $id = $user->id;
        
        $row = FN::fnloginOther($id,$img,$account,$name,'t');
        header("Location: ./");
    }else{
        //登入twitter跳轉 fnlogin
        $request_token = $connection->oauth( 'oauth/request_token', array( 'oauth_callback' => $OAUTH_CALLBACK));
        $_SESSION['oauth_token'] = $request_token['oauth_token']; //隨機出
        // $_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret']; //隨機出
        $url = $connection->url( 'oauth/authorize', array( 'oauth_token' => $request_token['oauth_token'] ) );
        header('Location: ' . $url); 
    }
?>

