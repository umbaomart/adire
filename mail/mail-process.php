<?php

require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$servername = "mysql207.xbiz.ne.jp";
$username = "xb731267_umxk23f";
$password = "UmxK23fc";
$dbname = "xb731267_umxk23f";
$phoneNumber = $_POST["phone"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT contact_number FROM user_contacts where contact_number = '$phoneNumber' ");
    $stmt->execute();
    $contacts = $stmt->fetch();

    if ($contacts != false) {
        $output = json_encode(array(
            'type' => 'error_number',
            'data' => '',
            'msg' => '',
        ));

        die($output);
    } else {
        $sql = "INSERT INTO user_contacts(contact_number) VALUES ('$phoneNumber')";
        $conn->exec($sql);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}

$mail = new PHPMailer();

$mail->CharSet = "UTF-8";

$mail->isSMTP();

$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'soudan.shibuya2@gmail.com';
$mail->Password = 'ivedyyrzdrcbiqqm';
$mail->SMTPSecure = 'TLS';
$mail->Port = 587;

// $mail->SMTPDebug = 3;

// Sanitize input data using PHP filter_var().
$inqPref = filter_var(trim($_POST["prefectures"]), FILTER_SANITIZE_STRING);
$inqAge = filter_var(trim($_POST["age"]), FILTER_SANITIZE_STRING);
$inqEmail = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$inqPhone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
$inqLastName = filter_var(trim($_POST["lastname"]), FILTER_SANITIZE_STRING);
$inqFormType = filter_var(trim($_POST["form"]), FILTER_SANITIZE_STRING);

$inqQ1Lbl = filter_var(trim($_POST["question_1"]), FILTER_SANITIZE_STRING);
$inqQ1Ans = filter_var(trim($_POST["answer_1"]), FILTER_SANITIZE_STRING);

$inqQ2Lbl = filter_var(trim($_POST["question_2"]), FILTER_SANITIZE_STRING);
$inqQ2Ans = filter_var(trim($_POST["answer_2"]), FILTER_SANITIZE_STRING);

$inqQ3Lbl = filter_var(trim($_POST["question_3"]), FILTER_SANITIZE_STRING);
$inqQ3Ans = filter_var(trim($_POST["answer_3"]), FILTER_SANITIZE_STRING);

$inqQ4Lbl = filter_var(trim($_POST["question_4"]), FILTER_SANITIZE_STRING);
$inqQ4Ans = filter_var(trim($_POST["answer_4"]), FILTER_SANITIZE_STRING);

if (!filter_var($inqEmail, FILTER_VALIDATE_EMAIL)) { // email validation
    $output = json_encode(array('type' => 'error', 'msg' => '有効なメールアドレスを入力してください！'));
    die($output);
}

$adminMailSubject = filter_var(trim($_POST["admin_subject"]), FILTER_SANITIZE_STRING);

$emailFrom = 'soudan@saimukyusai-shibuyahoumu.com';
$emailReplyTo = 'soudan.shibuya2@gmail.com';

// send to admin
$mail->setFrom($emailFrom, '渋谷法務総合事務所');
$mail->addAddress($emailReplyTo);  // send to admin address 
$mail->addReplyTo($inqEmail, $inqLastName); // user email
$mail->Subject = $adminMailSubject;

$mail->isHTML(true);

$adminMsg  = "新規のお問い合わせがございました。<br><br>";
$adminMsg .= $inqFormType . " <br><br>";
$adminMsg .= "都道府県を教えてください: " . $inqPref . " <br>";
$adminMsg .= "年齢を教えてください: " . $inqAge . " <br>";
$adminMsg .= "メールアドレス: " . $inqEmail . " <br>";
$adminMsg .= "電話番号: " . $inqPhone . " <br>";
$adminMsg .= "苗字（匿名可）: " . $inqLastName . " <br>";
$adminMsg .= $inqQ1Lbl . ": " . $inqQ1Ans . " <br>";
$adminMsg .= $inqQ2Lbl . ": " . $inqQ2Ans . " <br>";
$adminMsg .= $inqQ3Lbl . ": " . $inqQ3Ans . " <br>";
$adminMsg .= $inqQ4Lbl . ": " . $inqQ4Ans . " <br><br>";
$adminMsg .= "©2021 渋谷法務総合事務所. All rights reserved.";

$mail->Body = $adminMsg;

if(!$mail->send()) {

    $output = json_encode(array(
    	'type' => 'error', 
        'data' => $mail->ErrorInfo,
    	'msg' => 'メールの送信に失敗しました',
    ));

    die($output);

} else { // if sending mail to admin is successful.. 

    $mail->clearAddresses();
    $mail->clearReplyTos();
    
    $mail->setFrom($emailFrom, '渋谷法務総合事務所');
    $mail->addAddress($inqEmail); // send to user email
    $mail->addReplyTo($emailReplyTo, '渋谷法務総合事務所');   // admin email
    $mail->Subject = '【お問い合わせ頂き有難うございます】司法書士 渋谷法務総合事務所でございます。';

    $msg = "渋谷法務総合事務所<br>";
    $msg .= "渡邊と申します。<br><br>";
    $msg .= "無料減額シミュレーターよりご相談頂きありがとうございました。<br><br>";
    $msg .= "まずは、ご相談者様の現状の債務状況を改善するために<br>";
    $msg .= "わかる範囲で下記内容を教えて頂けますでしょうか？<br><br>";
    $msg .= "～質問～<br>";
    $msg .= "【１】借入先の『会社名（銀行、クレジットカード含む）』<br>";
    $msg .= "【２】各会社の『借入金額（残高）』<br>";
    $msg .= "【３】各会社への『毎月の返済額』<br>";
    $msg .= "【４】各会社の『取引期間』<br><br>";
    $msg .= "～回答例～<br>";
    $msg .= "アコム   借入60万円   返済2万円　6ヶ月<br>";
    $msg .= "モビット　　借入80万円　 返済3万円　2年<br>";
    $msg .= "○○銀行　　借入120万円  返済4万円　5年<br><br>";
    $msg .= "※上記内容は、わかる範囲で結構ですのでご回答ください。<br><br>";
    $msg .= "お電話でもご連絡をさしあげておりますが、<br>";
    $msg .= "ご希望のご連絡日時があればお伝え下さい。<br><br>";
    $msg .= "5～10分前後で減額に繋がるかどうか簡単に診断させて頂くことが出来ます。<br><br>";
    $msg .= "営業時間は下記となっております。<br><br>";
    $msg .= "平日　9時45分～22時<br>";
    $msg .= "土日祝9時45分～22時<br><br>";
    $msg .= "ご相談者様からも、5～10分程度お時間ある時に<br>";
    $msg .= "下記無料診断ダイヤルへ折り返しご連絡いただければ幸いです。<br><br>";
    $msg .= "-------------------------------------<br>";
    $msg .= "【無料診断専用ダイヤル】0120-456-493<br><br>";
    $msg .= "※相談費用は一切頂いておりませんので、<br>";
    $msg .= "お気軽にお問い合わせください。<br>";
    $msg .= "-------------------------------------<br><br>";
    $msg .= "他にも、気になること、（困っていること）がございましたら<br>";
    $msg .= "お気軽に遠慮なく、ご質問ください。<br><br>";
    $msg .= "-------------------------------------------------------------------------<br>";
    $msg .= "〒150-0011 東京都渋谷区東２丁目２２－１４ ロゼ氷川ビル6階<br>";
    $msg .= "渋谷法務総合事務所<br>";
    $msg .= "【無料診断専用】0120-456-493  FAX: 03-5766-8182<br>";
    $msg .= "URL：http://shibuya-houmu.com/<br>";
    $msg .= "-------------------------------------------------------------------------<br>";

    $mail->Body = $msg;

    if(!$mail->send()) {
        $output = json_encode(array(
            'type' => 'error', 
            'data' => $mail->ErrorInfo,
            'msg' => 'メールの送信に失敗しました',
        ));

        die($output);
    } else {
        $uniqueId = getUniqueId($conn, $phoneNumber);
        
        $output = json_encode(array(
            'type' => 'success', 
            'data' => '',
            'msg' => 'メッセージは正常に送信されました',
            'uniqueId' => $uniqueId,
        ));

        die($output);
    }
}

function getUniqueId($conn, $phoneNumber)
{
    $length = 6;
    $char = 0;
    $type = 'd';
    $stmt = $conn->prepare("SELECT id, contact_number FROM user_contacts where contact_number = '$phoneNumber' ");
    $stmt->execute();
    $contacts = $stmt->fetch();
    return generateRandomString() . sprintf("%{$char}{$length}{$type}", (0000 + $contacts['id'])) . generateRandomString();
}

function generateRandomString($length = 4)
{
    return substr(str_shuffle(str_repeat($x = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length / strlen($x)))), 1, $length);
}