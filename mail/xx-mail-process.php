<?php

require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer();

$mail->CharSet = "UTF-8";

$mail->isSMTP();

$mail->Host = 'sv255.xbiz.ne.jp';
$mail->SMTPAuth = true;
$mail->Username = 'saimu@saimukyusai-assist.com';
$mail->Password = 'koki1312';
$mail->SMTPSecure = 'STARTTLS';
$mail->Port = 587;

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

$emailFrom = 'saimu@saimukyusai-assist.com';
$emailReplyTo = 'saimu@assist-lpc.jp';

// send to admin
$mail->setFrom($emailFrom, '弁護士法人アシスト法律事務所');
$mail->addAddress($emailFrom);  // send to 2 email address 
$mail->addAddress($emailReplyTo); 
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
$adminMsg .= "©2021 弁護士法人アシスト法律事務所. All rights reserved.";

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
    
    $mail->setFrom($emailFrom, '弁護士法人アシスト法律事務所');
    $mail->addAddress($inqEmail); // send to user email
    $mail->addReplyTo($emailReplyTo, '弁護士法人アシスト法律事務所');   // admin email
    $mail->Subject = '【お問い合わせ頂き有難うございます】弁護士法人アシスト法律事務所です。';

    $msg = "弁護士法人アシスト法律事務所と申します。<br>";
    $msg .= "この度は借金減額シミュレーターよりお問い合わせ頂き有難うございました。<br><br>";
    $msg .= "まずは、ご相談者様の現状の債務状況を改善するために<br>";
    $msg .= "わかる範囲で下記内容を教えて頂けますでしょうか？<br><br>";
    $msg .= "～質問～<br>";
    $msg .= "【１】借入先の『会社名（銀行、クレジットカード含む）』<br>";
    $msg .= "【２】各会社の『借入金額（残高）』<br>";
    $msg .= "【３】各会社への『毎月の返済額』<br>";
    $msg .= "【４】各会社の『取引年数』<br><br>";
    $msg .= "～回答例～<br>";
    $msg .= "プロミス 　　借入 40万円　 返済 約1万2千円　 取引 約半年<br>";
    $msg .= "オリコカード 借入 90万円　 返済 4～5万円　   取引 2年以上<br>";
    $msg .= "○○銀行 　　 借入 150万円　返済 30000円　 　 取引 5年前後<br><br>";
    $msg .= "※上記内容は、わかる範囲で結構ですのでご回答ください。<br>";
    $msg .= "※ショッピング利用の返済分も対象となります。<br>";
    $msg .= "※他にも、過去に完済されている借入先がございましたら教えて頂ければと存じます。<br>";
    $msg .= "　『過払い金の無料診断』もさせていただきます。<br><br>";
    $msg .= "■メールでのご返信は　saimu@assist-lpc.jp　宛に、 <br>";
    $msg .= "必ず「ご登録頂いたメールアドレス」からのご連絡を宜しくお願い致します。<br><br>";
    $msg .= "ご相談は、平日10時～19時まで対応させていただきます。<br>";
    $msg .= "【土日祝日のご相談も事前にご連絡を頂ければ調整の上、対応させて頂きます】<br><br>";
    $msg .= "直接下記フリーダイヤル宛にお電話を頂くか、メールご返信時にお話が出来るご都合の良い日程をご返信いただければと存じます。 <br><br>";
    $msg .= "＊ 借金減額無料診断 専用ダイヤル⇒ 0120-919-960 ＊<br><br>";
    $msg .= "こちらからもご案内にあたり、お電話させていただければと思います。<br>";
    $msg .= "何卒、宜しくお願い致します。<br><br>";
    $msg .= "━━━━━━━━━━━━━━━━━━━━━━━━━ <br><br>";
    $msg .= "弁護士法人アシスト法律事務所 <br><br>";
    $msg .= "━━━━━━━━━━━━━━━━━━━━━━━━━ <br><br>";
    $msg .= "代表弁護士　鈴木 幸善(東京弁護士会所属) <br><br>";
    $msg .= "〒103-0023<br>";
    $msg .= "東京都中央区日本橋本町4丁目1番12号　日本橋秋山ビル8階<br><br>";
    $msg .= "無料減額診断専用フリーダイヤル： 0120-919-960<br><br>";
    $msg .= "FAX番号： 03-6281-9994<br><br>";
    $msg .= "Email: saimu@assist-lpc.jp<br><br>";
    $msg .= "オフィシャルHP： https://www.assist-lpc.jp/<br><br>";
    $msg .= "━━━━━━━━━━━━━━━━━━━━━━━━━";

    $mail->Body = $msg;

    if(!$mail->send()) {
        $output = json_encode(array(
            'type' => 'error', 
            'data' => $mail->ErrorInfo,
            'msg' => 'メールの送信に失敗しました',
        ));

        die($output);
    } else {
        // $uniqueId = getUniqueId($conn, $phoneNumber);
        
        $output = json_encode(array(
            'type' => 'success', 
            'data' => '',
            'msg' => 'メッセージは正常に送信されました',
            'uniqueId' => '',
        ));

        die($output);
    }
}

// function getUniqueId($conn, $phoneNumber)
// {
//     $length = 6;
//     $char = 0;
//     $type = 'd';
//     $stmt = $conn->prepare("SELECT id, contact_number FROM user_contacts where contact_number = '$phoneNumber' ");
//     $stmt->execute();
//     $contacts = $stmt->fetch();
//     return generateRandomString() . sprintf("%{$char}{$length}{$type}", (0000 + $contacts['id'])) . generateRandomString();
// }

// function generateRandomString($length = 4)
// {
//     return substr(str_shuffle(str_repeat($x = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length / strlen($x)))), 1, $length);
// }