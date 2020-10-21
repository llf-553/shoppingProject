<?php

header('content-type:text/html;charset=utf-8;');
$uname=$_POST['username'];
$upass=$_POST['password'];
$conn=mysqli_connect('127.0.0.1','root','root','users');
$sql="INSERT INTO `info` VALUES (null,'$uname','$upass')";
$res=mysqli_query($conn,$sql);
mysqli_close($conn);
// 告诉前端是否注册成功,我决定如果注册成功就给前端返回{code:1},如果注册失败就给前端返回{code:0}
if($res){
    $arr = array('code'=>1);//注册成功
    $json = json_encode($arr);

  echo $json;
}else{
    $arr = array('code'=>0);//注册失败
    $json = json_encode($arr);

  echo $json;
}

?>