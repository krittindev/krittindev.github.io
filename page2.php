<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>layout</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
<script src="js/script.js"></script>
</head>

<body>
<div class="bg cl_bg_1">
  <div class="container">
  	<div style="width: 100%; padding: 20px 0; overflow: hidden;">
    	<? include("header.php"); ?>
    	<? include("nav.php"); ?>
    </div>
  	<div class="intro">
    	<div style="width: 40%; float: left;">
    		<h1>รหัสลับ</h1>
        <p>โลเล็ม อิปซัม โปสเตอร์คอรัปชันอุปนายิกา ใช้งานกาญจน์โอเลี้ยง เปียโนมินต์ดาวน์บัลลาสต์คองเกรส </p>
      </div>
      <img style="width: 60%; float: right;" src="img/bg/texture.jpg">
    </div>
  </div>
</div>
<div class="bg bgimg">
  <div class="container" style="padding: 5vh 0;">
    <!-- CONTENT -->
    <div class="g1 cl_bg_3">
        <div class="cl_2" style="margin: 50px 50px; text-align: center;">
            <h1>แป้นพิมพ์ภาษาไทย ↔ อังกฤษ</h1>
            <br>
            <input style="font-size: 20px;" id="rawdata" placeholder="ข้อความ">
            <br><br>
            <button type="button" style="font-size: 20px;" onclick="lg()"> แปลง </button>
            <br><br>
            <span style="font-size: 20px;" id="lg_result">ผลลัพธ์ : </span>
        </div>
    </div>
    <!-- END CONTENT -->
  </div>
</div>
<div class="bg cl_bg_1">
  <div class="container">
  	<? include("footer.php"); ?>
  </div>
</div>
</body>
<style>
    :root{
      --theme-bg-color-1: #212121;
      --theme-bg-color-2: #424242;
      --theme-bg-color-3: #F5F5F5;
      --theme-color-1: white;
      --theme-color-2: #212121;
    }
</style>
</html>