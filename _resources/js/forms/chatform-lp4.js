$(function () {
    clp4.init();
});

var $w = $(window);
var baseUrl = window.location.origin;

var arrAnswers = [];
var blockedList = ['090-1234-5678',
    '070-1234-5678',
    '080-1234-5678',
    '070-0000-0001',
    '090-1111-2345',
    '070-1919-1919',
    '090-0001-0001',
    '090-0000-0000',
    '090-0000-1111',
    '090-0000-2222',
    '090-0000-3333',
    '090-0000-4444',
    '090-0000-5555',
    '090-0000-6666',
    '090-0000-7777',
    '090-0000-8888',
    '090-0000-9999',
    '090-1111-0000',
    '090-1111-1111',
    '090-1111-2222',
    '090-1111-3333',
    '090-1111-4444',
    '090-1111-5555',
    '090-1111-6666',
    '090-1111-7777',
    '090-1111-8888',
    '090-1111-9999',
    '090-2222-0000',
    '090-2222-1111',
    '090-2222-2222',
    '090-2222-3333',
    '090-2222-4444',
    '090-2222-5555',
    '090-2222-6666',
    '090-2222-7777',
    '090-2222-8888',
    '090-2222-9999',
    '090-3333-0000',
    '090-3333-1111',
    '090-3333-2222',
    '090-3333-3333',
    '090-3333-4444',
    '090-3333-5555',
    '090-3333-6666',
    '090-3333-7777',
    '090-3333-8888',
    '090-3333-9999',
    '090-4444-0000',
    '090-4444-1111',
    '090-4444-2222',
    '090-4444-3333',
    '090-4444-4444',
    '090-4444-5555',
    '090-4444-6666',
    '090-4444-7777',
    '090-4444-8888',
    '090-4444-9999',
    '090-5555-0000',
    '090-5555-1111',
    '090-5555-2222',
    '090-5555-3333',
    '090-5555-4444',
    '090-5555-5555',
    '090-5555-6666',
    '090-5555-7777',
    '090-5555-8888',
    '090-5555-9999',
    '090-6666-0000',
    '090-6666-1111',
    '090-6666-2222',
    '090-6666-3333',
    '090-6666-4444',
    '090-6666-5555',
    '090-6666-6666',
    '090-6666-7777',
    '090-6666-8888',
    '090-6666-9999',
    '090-7777-0000',
    '090-7777-1111',
    '090-7777-2222',
    '090-7777-3333',
    '090-7777-4444',
    '090-7777-5555',
    '090-7777-6666',
    '090-7777-7777',
    '090-7777-8888',
    '090-7777-9999',
    '090-8888-0000',
    '090-8888-1111',
    '090-8888-2222',
    '090-8888-3333',
    '090-8888-4444',
    '090-8888-5555',
    '090-8888-6666',
    '090-8888-7777',
    '090-8888-8888',
    '090-8888-9999',
    '090-9999-0000',
    '090-9999-1111',
    '090-9999-2222',
    '090-9999-3333',
    '090-9999-4444',
    '090-9999-5555',
    '090-9999-6666',
    '090-9999-7777',
    '090-9999-8888',
    '090-9999-9999',
    '080-0000-0000',
    '080-0000-1111',
    '080-0000-2222',
    '080-0000-3333',
    '080-0000-4444',
    '080-0000-5555',
    '080-0000-6666',
    '080-0000-7777',
    '080-0000-8888',
    '080-0000-9999',
    '080-1111-0000',
    '080-1111-1111',
    '080-1111-2222',
    '080-1111-3333',
    '080-1111-4444',
    '080-1111-5555',
    '080-1111-6666',
    '080-1111-7777',
    '080-1111-8888',
    '080-1111-9999',
    '080-2222-0000',
    '080-2222-1111',
    '080-2222-2222',
    '080-2222-3333',
    '080-2222-4444',
    '080-2222-5555',
    '080-2222-6666',
    '080-2222-7777',
    '080-2222-8888',
    '080-2222-9999',
    '080-3333-0000',
    '080-3333-1111',
    '080-3333-2222',
    '080-3333-3333',
    '080-3333-4444',
    '080-3333-5555',
    '080-3333-6666',
    '080-3333-7777',
    '080-3333-8888',
    '080-3333-9999',
    '080-4444-0000',
    '080-4444-1111',
    '080-4444-2222',
    '080-4444-3333',
    '080-4444-4444',
    '080-4444-5555',
    '080-4444-6666',
    '080-4444-7777',
    '080-4444-8888',
    '080-4444-9999',
    '080-5555-0000',
    '080-5555-1111',
    '080-5555-2222',
    '080-5555-3333',
    '080-5555-4444',
    '080-5555-5555',
    '080-5555-6666',
    '080-5555-7777',
    '080-5555-8888',
    '080-5555-9999',
    '080-6666-0000',
    '080-6666-1111',
    '080-6666-2222',
    '080-6666-3333',
    '080-6666-4444',
    '080-6666-5555',
    '080-6666-6666',
    '080-6666-7777',
    '080-6666-8888',
    '080-6666-9999',
    '080-7777-0000',
    '080-7777-1111',
    '080-7777-2222',
    '080-7777-3333',
    '080-7777-4444',
    '080-7777-5555',
    '080-7777-6666',
    '080-7777-7777',
    '080-7777-8888',
    '080-7777-9999',
    '080-8888-0000',
    '080-8888-1111',
    '080-8888-2222',
    '080-8888-3333',
    '080-8888-4444',
    '080-8888-5555',
    '080-8888-6666',
    '080-8888-7777',
    '080-8888-8888',
    '080-8888-9999',
    '080-9999-0000',
    '080-9999-1111',
    '080-9999-2222',
    '080-9999-3333',
    '080-9999-4444',
    '080-9999-5555',
    '080-9999-6666',
    '080-9999-7777',
    '080-9999-8888',
    '080-9999-9999',
    '070-0000-0000',
    '070-0000-1111',
    '070-0000-2222',
    '070-0000-3333',
    '070-0000-4444',
    '070-0000-5555',
    '070-0000-6666',
    '070-0000-7777',
    '070-0000-8888',
    '070-0000-9999',
    '070-1111-0000',
    '070-1111-1111',
    '070-1111-2222',
    '070-1111-3333',
    '070-1111-4444',
    '070-1111-5555',
    '070-1111-6666',
    '070-1111-7777',
    '070-1111-8888',
    '070-1111-9999',
    '070-2222-0000',
    '070-2222-1111',
    '070-2222-2222',
    '070-2222-3333',
    '070-2222-4444',
    '070-2222-5555',
    '070-2222-6666',
    '070-2222-7777',
    '070-2222-8888',
    '070-2222-9999',
    '070-3333-0000',
    '070-3333-1111',
    '070-3333-2222',
    '070-3333-3333',
    '070-3333-4444',
    '070-3333-5555',
    '070-3333-6666',
    '070-3333-7777',
    '070-3333-8888',
    '070-3333-9999',
    '070-4444-0000',
    '070-4444-1111',
    '070-4444-2222',
    '070-4444-3333',
    '070-4444-4444',
    '070-4444-5555',
    '070-4444-6666',
    '070-4444-7777',
    '070-4444-8888',
    '070-4444-9999',
    '070-5555-0000',
    '070-5555-1111',
    '070-5555-2222',
    '070-5555-3333',
    '070-5555-4444',
    '070-5555-5555',
    '070-5555-6666',
    '070-5555-7777',
    '070-5555-8888',
    '070-5555-9999',
    '070-6666-0000',
    '070-6666-1111',
    '070-6666-2222',
    '070-6666-3333',
    '070-6666-4444',
    '070-6666-5555',
    '070-6666-6666',
    '070-6666-7777',
    '070-6666-8888',
    '070-6666-9999',
    '070-7777-0000',
    '070-7777-1111',
    '070-7777-2222',
    '070-7777-3333',
    '070-7777-4444',
    '070-7777-5555',
    '070-7777-6666',
    '070-7777-7777',
    '070-7777-8888',
    '070-7777-9999',
    '070-8888-0000',
    '070-8888-1111',
    '070-8888-2222',
    '070-8888-3333',
    '070-8888-4444',
    '070-8888-5555',
    '070-8888-6666',
    '070-8888-7777',
    '070-8888-8888',
    '070-8888-9999',
    '070-9999-0000',
    '070-9999-1111',
    '070-9999-2222',
    '070-9999-3333',
    '070-9999-4444',
    '070-9999-5555',
    '070-9999-6666',
    '070-9999-7777',
    '070-9999-8888',
    '070-9999-9999'];

var arrQA = [
    {
        _id: 1,
        question: '<p>現在の借金の合計金額を教えてください<br><span class="note">※わからない場合はだいたいで大丈夫です</span></p>',
        label: '現在の借金の合計金額を教えてください',
        choices: [
            '0～49万円',
            '50～99万円',
            '100～199万円',
            '200万円以上',
        ],
    },
    {
        _id: 2,
        question: '<p>現在、何社ぐらいから借金がありますか？<br><span class="note">※わかる範囲で大丈夫です。</span></p>',
        label: '現在、何社ぐらいから借金がありますか？',
        choices: [
            '1社',
            '2社',
            '3～5社',
            '6社以上',
        ],
    },
    {
        _id: 3,
        question: '<p>最初に借金してからどのぐらいたちましたか？<br><span class="note">※覚えてる範囲で大丈夫です。</span></p>',
        label: '最初に借金してからどのぐらいたちましたか？',
        choices: [
            '0〜3ヶ月未満',
            '3ヶ月～1年未満',
            '1～6年未満',
            '6年以上',
        ],
    },
    {
        _id: 4,
        question: '<p>毎月の返済額を教えてください。<br><span class="note">※わかる範囲で大丈夫です。</span></p>',
        label: '毎月の返済額を教えてください。',
        choices: [
            '2万円以下',
            '2〜5万円',
            '5〜10万円',
            '10万円以上',
        ],
    },
];

var _ssFormDetails = sessionStorage.getItem('ss_backupform');

var clp4 = {
    init: function () {

        var setup = this.setup;

        setup.prefectures();

        if(_ssFormDetails) {
            setup.existingData();
        } else {
            setup.selection();
        }

        setup.form();

        setup.header();
    },

    setup: {
        prefectures: function () {
            var selectPref = $('.field-prefectures');
            selectPref.on('click', function (e) {
                e.preventDefault();

                var modal = helperModal.getId($(this));
                modal.addClass('is-active');

                enableChooseCategory(modal);

                return false;
            });


            function enableChooseCategory(modal) {
                var category = $('.cf-prefectures__category'),
                    list = $('.cf-prefectures__list');

                category.on('click', function (e) {
                    e.preventDefault();

                    category.removeClass('is-active');
                    list.removeClass('is-active');

                    var categoryId = $(this).attr('data-prefectures-id');

                    $(this).addClass('is-active');
                    $('#' + categoryId).addClass('is-active');

                    enableChooseArea(modal);

                    return false;
                });
            }

            function enableChooseArea(modal) {
                var area = $('.cf-prefectures__list-item');
                area.on('click', function (e) {
                    e.preventDefault();

                    var currentVal = $(this).attr('data-value');

                    var fieldPrefectures = $('input[name="prefectures"]');
                    fieldPrefectures.val(currentVal);

                    modal.removeClass('is-active');
                });
            }
        },

        selection: function () {
            divRender(arrQA[0]); // initial qa set => first array

            function divRender(data) {
                var renderBox = $('.cf-box__dynamic'),
                    output = '';

                var idNextQA = data._id + 1;

                output += '<div id="qset-' + data._id + '" class="cf-row is-active">';
                    output += '<div class="cf-question display__inline align--t">';
                        output += '<div class="cf-question__col col--1 cf-question__asst">';
                            output += '<img class="img-fit" src="_resources/images/forms/adire/icon-prof.png" alt="">';
                        output += '</div>';
                        output += '<div class="cf-question__col col--2">';
                            output += '<p class="cf-question__asstname">アディーレ法律事務所</p>';
                            output += '<div class="cf-question__bubble cf-chatbubble chatbubble--asst">' + data.question + '</div>';
                        output += '</div>';
                    output += '</div>';
                    output += ' <div class="cf-answer display__inline font--right">';
                        output += '<p class="cf-answer__isread">既読</p>';
                        output += '<div class="cf-answer__bubble cf-chatbubble chatbubble--you font--left">';
                            output += '<p></p>';
                        output += '</div>';
                    output += '</div>';
                    output += '<div class="cf-choices display__inline by-2 border--l align--t">';

                        $.each(data.choices, function (i, x) {
                            output += '<div class="cf-choice choice--1" data-value="' + x + '" data-nextqa="' + idNextQA + '">';
                                output += '<p class="cf-choice__text">' + x + '</p>';
                            output += '</div>';
                        });

                    output += '</div>';
                output += '</div>';

                output += '<div class="cf-loader loader-' + data._id + '"></div>';

                renderBox.append(output);

                var obj = {
                    qsetId: data._id,
                    qsetAns: null
                };

                arrAnswers.push(obj);

                enableAnsSelection(data._id);
            }

            function enableAnsSelection(parentId) {
                var parent = $('#qset-' + parentId),
                    btnAnswer = $('.cf-choice', parent);

                btnAnswer.off('click');
                btnAnswer.on('click', function (e) {
                    e.preventDefault();

                    var selectedVal = $(this).attr('data-value'),
                        nextQASetId = $(this).attr('data-nextqa');

                    nextQASetId = parseFloat(nextQASetId);

                    var findObj = arrAnswers.find(x => x.qsetId === parentId);
                    findObj.qsetAns = selectedVal;

                    // console.log(arrAnswers);

                    // change ui => append value
                    var holderAnswer = $('.cf-answer', parent),
                        lblAnswer = $('.cf-answer__bubble p', holderAnswer),
                        holderChoices = $('.cf-choices', parent);

                    lblAnswer.text(selectedVal);
                    holderAnswer.addClass('is-active');
                    holderChoices.addClass('is-hidden');

                    if (nextQASetId === 5) { // show form
                        var loader = $('.cf-loader.loader-' + parentId);
                        loader.addClass('is-active');

                        setTimeout(function () {
                            loader.removeClass('is-active');

                            var form = '#qset-5';
                            $(form).addClass('is-active');

                            clp4.setup.form();

                            scrollToBottom(form);

                        }, 600);

                    } else { // show next question
                        var findNextQa = arrQA.find(qa => qa._id === nextQASetId);

                        if (findNextQa) {
                            var loader = $('.cf-loader.loader-' + parentId);
                            loader.addClass('is-active');

                            setTimeout(function () {
                                loader.removeClass('is-active');
                                divRender(findNextQa);

                                var nextDiv = '#qset-' + nextQASetId;
                                scrollToBottom(nextDiv);

                            }, 600);
                        }
                    }

                });
            }

            function scrollToBottom(nextDiv) {
                // var topY = form.offset().top;
                TweenMax.to($w, 0.7, {
                    scrollTo: {
                        y: nextDiv,
                        autoKill: false
                    },
                    ease: Power1.easeOut,
                });
            }
        },

        existingData: function() {
            var _formDetails = JSON.parse(_ssFormDetails);
            arrAnswers = _formDetails.answers;

            $.each(_formDetails.answers, function(i, qa) {
                var getQuestion = arrQA.find(x => x._id === qa.qsetId);

                var renderBox = $('.cf-box__dynamic'),
                    output = '';

                output += '<div id="qset-' + qa.qsetId + '" class="cf-row is-active">';
                    output += '<div class="cf-question display__inline align--t">';
                        output += '<div class="cf-question__col col--1 cf-question__asst">';
                            output += '<img class="img-fit" src="_resources/images/forms/chatbot-lp.png" alt="">';
                        output += '</div>';
                        output += '<div class="cf-question__col col--2">';
                            output += '<p class="cf-question__asstname">渋谷法務総合事務所</p>';
                            output += '<div class="cf-question__bubble cf-chatbubble chatbubble--asst">' + getQuestion.question + '</div>';
                        output += '</div>';
                    output += '</div>';
                    output += ' <div class="cf-answer is-active display__inline font--right">';
                        output += '<p class="cf-answer__isread">既読</p>';
                        output += '<div class="cf-answer__bubble cf-chatbubble chatbubble--you font--left">';
                            output += '<p>'+ qa.qsetAns +'</p>';
                        output += '</div>';
                    output += '</div>';
                output += '</div>';

                renderBox.append(output);
            });

            var form = $('#qset-5');
            form.addClass('is-active');

            var fieldPrefectures = $('input[name="prefectures"]', form),
                fieldAge = $('select[name="age"]', form),
                fieldEmail = $('input[name="email"]', form),
                fieldPhonePrefix = $('select[name="phone_prefix"]', form),
                fieldPhoneNum1 = $('input[name="phone_num1"]', form),
                fieldPhoneNum2 = $('input[name="phone_num2"]', form),
                fieldLastname = $('input[name="lastname"]', form);

            fieldPrefectures.val(_formDetails.prefectures);
            fieldAge.val(_formDetails.age);
            fieldEmail.val(_formDetails.email);
            fieldPhonePrefix.val(_formDetails.phonePrefix);
            fieldPhoneNum1.val(_formDetails.phoneNum1);
            fieldPhoneNum2.val(_formDetails.phoneNum2);
            fieldLastname.val(_formDetails.lastname);

            clp4.setup.form();

            sessionStorage.removeItem('ss_backupform');
        },

        form: function () {
            var form = $('.cf-form'),
                formErrs = 0;

            form.off('submit');
            form.on('submit', function (e) {
                e.preventDefault();

                sessionStorage.removeItem('ss_analytics');

                formErrs = 0;

                var isRedirectToWarning = false;

                var fieldCb = $('input[name="iagree"]', form);

                var fieldPrefectures = $('input[name="prefectures"]', form).val(),
                    fieldAge = $('select[name="age"]', form).val(),
                    fieldEmail = $('input[name="email"]', form).val(),
                    fieldPhonePrefix = $('select[name="phone_prefix"]', form).val(),
                    fieldPhoneNum1 = $('input[name="phone_num1"]', form).val(),
                    fieldPhoneNum2 = $('input[name="phone_num2"]', form).val(),
                    fieldLastname = $('input[name="lastname"]', form).val(),
                    fieldIAgree = fieldCb[0].checked;

                var errPref = $('.field-prefectures .form__error', form),
                    errAge = $('.field-age .form__error', form),
                    errEmail = $('.field-email .form__error', form),
                    errPhone = $('.field-phone .form__error', form);

                var errPhoneTxts = $('.phone-err', errPhone),
                    errPhoneTxt1 = $('.err--1', errPhone),
                    errPhoneTxt2 = $('.err--2', errPhone),
                    errPhoneTxt3 = $('.err--3', errPhone);

                errPhoneTxts.removeClass('is-active');

                if (!/\S/.test(fieldPrefectures)) {
                    errPref.show();
                    formErrs += 1;
                } else {
                    errPref.hide();
                }

                if (!/\S/.test(fieldAge)) {
                    errAge.show();
                    formErrs += 1;
                } else {
                    if(fieldAge === '19歳以下') isRedirectToWarning = true;
                    errAge.hide();
                }

                if (!/\S/.test(fieldEmail)) {
                    errEmail.text('メールアドレスを入力してください');
                    errEmail.show();
                    formErrs += 1;

                } else {
                    if (!/\S+@\S+\.\S+/.test(fieldEmail)) {
                        errEmail.text('メールアドレスの形式が正しくありません');
                        errEmail.show();
                        formErrs += 1;
                    } else {
                        errEmail.hide();
                    }
                }

                if(!fieldIAgree) {
                    formErrs += 1;
                    Swal.fire({
                        html: 'プライバシーポリシーの同意がチェックされていません。',
                        icon: 'error'
                    });
                }


                if(!/\S/.test(fieldPhonePrefix)) {
                    errPhone.show();
                    errPhoneTxt1.addClass('is-active');
                    formErrs += 1;

                } else {
                    var isNum1Ok = false,
                        isNum2Ok = false;

                    if(!/\S/.test(fieldPhoneNum1)) {
                        errPhone.show();
                        errPhoneTxt1.addClass('is-active');
                        formErrs += 1;

                    } else {
                        if(/^[0-9]+$/.test(fieldPhoneNum1)) {
                            if(fieldPhoneNum1.length === 4) {
                                isNum1Ok = true;

                            } else {
                                errPhone.show();
                                errPhoneTxt2.text('4桁の数字を入力してください。');
                                errPhoneTxt2.addClass('is-active');
                                formErrs += 1;
                            }
                        } else {
                            errPhone.show();
                            errPhoneTxt2.text('正しい番号を入力してください');
                            errPhoneTxt2.addClass('is-active');
                            formErrs += 1;
                        }
                    }

                    if(!/\S/.test(fieldPhoneNum2)) {
                        errPhone.show();
                        errPhoneTxt1.addClass('is-active');
                        formErrs += 1;

                    } else {
                        if(/^[0-9]+$/.test(fieldPhoneNum2)) {
                            if(fieldPhoneNum2.length === 4) {
                                isNum2Ok = true;

                            } else {
                                errPhone.show();
                                errPhoneTxt3.text('4桁の数字を入力してください。');
                                errPhoneTxt3.addClass('is-active');
                                formErrs += 1;
                            }
                        } else {
                            errPhone.show();
                            errPhoneTxt3.text('正しい番号を入力してください');
                            errPhoneTxt3.addClass('is-active');
                            formErrs += 1;
                        }
                    }

                    if(isNum1Ok && isNum2Ok) {
                        var phoneNum = fieldPhonePrefix + '-' + fieldPhoneNum1 + '-' + fieldPhoneNum2

                        if(blockedList.includes(phoneNum)) {
                            errPhone.show();
                            errPhoneTxt1.text('正しい番号を入力してください');
                            errPhoneTxt1.addClass('is-active');
                            formErrs += 1;

                        } else {
                            errPhone.hide();
                        }
                    }
                }

                if (formErrs === 0) {
                    if(!isRedirectToWarning) {
                        var formData = new FormData();

                        var phoneNum = fieldPhonePrefix + '' + fieldPhoneNum1 + '' + fieldPhoneNum2

                        formData.append('prefectures', fieldPrefectures);
                        formData.append('age', fieldAge);
                        formData.append('email', fieldEmail);
                        formData.append('phone', phoneNum);
                        formData.append('lastname', fieldLastname);
                        formData.append('form', 'チャットフォーム4');
                        formData.append('admin_subject', '司法書士 渋谷法務総合事務所 | お問い合わせメール');
                        formData.append('question_set', arrQA.length);

                        $.each(arrAnswers, function (i, x) {
                            var key1 = 'question_' + x.qsetId,
                                key2 = 'answer_' + x.qsetId;

                            var findObj = arrQA.find(qa => qa._id === x.qsetId);

                            formData.append(key1, findObj.label);
                            formData.append(key2, x.qsetAns);
                        });

                        // console.log(...formData)

                        send(formData);

                        var prepAnalytics = {
                            answers: arrAnswers,
                            prefectures: fieldPrefectures,
                            age: fieldAge,
                            phone: phoneNum,
                            email: fieldEmail,
                        };

                        sessionStorage.setItem('ss_analytics', JSON.stringify(prepAnalytics));

                    } else {
                        var objBackup = {
                            answers: arrAnswers,
                            prefectures: fieldPrefectures,
                            age: fieldAge,
                            phonePrefix: fieldPhonePrefix,
                            phoneNum1: fieldPhoneNum1,
                            phoneNum2: fieldPhoneNum2,
                            email: fieldEmail,
                            lastname: fieldLastname,
                        };

                        // console.log(objBackup)

                        sessionStorage.setItem('ss_backupform', JSON.stringify(objBackup));
                        window.location.href = baseUrl + '/warning?fr=102';
                    }
                }
            });

            function send(formData) {
                Swal.fire({
                    text: '送信中・・・',
                    allowOutsideClick: () => !Swal.isLoading(),
                    onOpen: function () {
                        Swal.showLoading()
                    }
                });

                $.ajax({
                    url: baseUrl + '/mail/mail-process.php',
                    async: true,
                    cache: false,
                    type: 'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        var res = JSON.parse(data);

                        if (res.type === 'success') {
                            Swal.close();
                            sessionStorage.setItem("uniqueId", res.uniqueId);
                            window.location.href = baseUrl + '/mail/success.html?g=lp4&fr=102';

                        } else if (res.type === 'error_number') {
                            Swal.close();

                            Swal.fire({
                                icon: 'error',
                                text: '入力いただいた番号からは既にお問い合わせいただいております。',
                            });
                        } else {
                            Swal.fire({
                                html: res.msg,
                                icon: 'error'
                            });
                        }
                    }
                });
            }
        },

        header: function () {
            var headerLogo = $('.header__logo');
            headerLogo.on('click', function () {
                location.reload();
            });
        },
    },
};