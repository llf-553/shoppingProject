<?php
header('content-type:text/html;charset=utf-8;');
$uname = $_POST['username'];
$upass = $_POST['password'];
$conn=mysqli_connect('127.0.0.1','root','root','users');
$sql ="SELECT * FROM `info` WHERE `username`='$uname' AND `password`='$upass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn);

if($row){
    $arr = array('code'=>1);//登录成功
    $json = json_encode($arr);
    setcookie('uname',$uname);
  echo $json;
}else{
    $arr = array('code'=>0);//登录失败
    $json = json_encode($arr);

  echo $json;
}
?>