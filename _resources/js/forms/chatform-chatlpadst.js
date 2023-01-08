$(function () {
    clp3.init();
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

var isRedirectToWarning = false;

var _ssFormDetails = sessionStorage.getItem('ss_backupform');

var clp3 = {
    init: function () {

        var setup = this.setup;

        setup.comics();

        if(_ssFormDetails) {
            setup.existingData();
        } else {
            setup.selection();
        }

        // setup.form();

        setup.header();

        utils.inputAcceptNumOnly();
    },

    setup: {
        comics: function() {
            var $btn = $('.cf-comics__btn');
            $btn.on('click', function(e) {
                e.preventDefault();

                TweenMax.to($w, 0.7, {
                    scrollTo: {
                        y: '.cf-box',
                    },
                    ease: Power1.easeOut,
                });
            });
        },

        selection: function () {
            divRender(arrQA[0]); // initial qa set => first array

            function divRender(data) {
                var renderBox = $('.cf-box__dynamic'),
                    output = '';

                var idNextQA = data._id + 1;

                output += '<div id="qset-' + data._id + '" class="cf-row is-active">' +
                    '<div class="cf-question display__inline align--t">' +
                        '<div class="cf-question__col col--1 cf-question__asst">' +
                            '<img class="img-fit" src="_resources/images/forms/chatbot-lp.png" alt="">' +
                        '</div>' +
                        '<div class="cf-question__col col--2">' +
                            '<p class="cf-question__asstname">渋谷法務総合事務所</p>' +
                            '<div class="cf-question__bubble cf-chatbubble chatbubble--asst">' + 
                                data.question + 
                                '<div class="cf-dotfallingholder loader-' + data._id + '">' +
                                    '<div class="cf-dotfalling"></div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="cf-answer display__inline font--right">' +
                        '<p class="cf-answer__isread">既読</p>' +
                        '<div class="cf-answer__bubble cf-chatbubble chatbubble--you font--left">' +
                            '<p></p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="cf-choices display__inline by-2 border--l align--t">';

                        $.each(data.choices, function (i, x) {
                            output += '<div class="cf-choice choice--1" data-value="' + x + '" data-nextqa="' + idNextQA + '">';
                                output += '<p class="cf-choice__text">' + x + '</p>';
                            output += '</div>';
                        });

                    output += '</div>';
                '</div>';

                renderBox.append(output);

                var obj = {
                    qsetId: data._id,
                    qsetAns: null
                };

                arrAnswers.push(obj);

                var loader = $('.cf-dotfallingholder.loader-' + data._id);
                loader.addClass('is-active');

                setTimeout(function () {
                    loader.removeClass('is-active');

                    var $parent = $('#qset-' + data._id);

                    var $questionText = $('.cf-question__bubble p', $parent),
                        $answers = $('.cf-choices', $parent);

                    $questionText.show();
                    $answers.show();
                    
                    enableAnsSelection(data._id);

                }, 600);
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
                    holderChoices.hide();

                    if (nextQASetId === 5) { // show form
                        var form = '#qset-5';
                        $(form).addClass('is-active');
                        
                        var loader = $('.cf-dotfallingholder.loader-5');
                        loader.addClass('is-active');

                        setTimeout(function () {
                            loader.removeClass('is-active');

                            var $questionText = $('.cf-question__bubble .main', form);
                            $questionText.show();

                            clp3.setup.fieldsRenderQuestion(1); // proceed with form fields animation & validation
                                
                            utils.scrollToBottom(form);
                        }, 600);

                    } else { // show next question
                        var findNextQa = arrQA.find(qa => qa._id === nextQASetId);

                        if (findNextQa) {
                            divRender(findNextQa);
                          
                            var loader = $('.cf-dotfallingholder.loader-' + nextQASetId);
                            loader.addClass('is-active');

                            setTimeout(function () {
                                loader.removeClass('is-active');

                                var nextDiv = '#qset-' + nextQASetId;
                                utils.scrollToBottom(nextDiv);
                            }, 600);
                        }
                    }

                });
            }
        },

        fieldsRenderQuestion: function(id) {
            var $fieldHolder = $('#lpfield-' + id);

            $fieldHolder.show();

            var loader = $('.cf-dotfallingholder', $fieldHolder);
            loader.addClass('is-active');

            setTimeout(function () {
                loader.removeClass('is-active');

                var $questionText = $('.cf-question__bubble p', $fieldHolder),
                    $answers = $('.cf-choices', $fieldHolder);

                $questionText.show();
                $answers.show();

                if(id === 1) { // if prefectures field
                    var $img = $('.img-fit', $fieldHolder),
                        $assistName = $('.cf-question__asstname', $fieldHolder);
                    
                    $img.hide();
                    $assistName.hide();

                    clp3.setup.choosePrefectures(id);
                    
                } else if(id === 2) { // if age field
                    clp3.setup.chooseAge(id);

                } else if(id === 3) { // if email field
                    clp3.setup.setEmail(id);

                } else if(id === 4) { // if phone field
                    clp3.setup.setPhone(id);

                } else if(id === 5) {
                    clp3.setup.setLastname(id);
                }

                utils.scrollToBottom($fieldHolder);

            }, 600);
        },

        fieldsRenderAnswer: function(id, value) {
            var $fieldHolder = $('#lpfield-' + id);

            // change ui => append value
            var holderAnswer = $('.cf-answer', $fieldHolder),
                lblAnswer = $('.cf-answer__bubble p', $fieldHolder),
                holderChoices = $('.cf-choices', $fieldHolder);

            lblAnswer.text(value);
            holderAnswer.addClass('is-active');
            holderChoices.hide();

            // render next question
            var nextFieldId = id + 1;
            clp3.setup.fieldsRenderQuestion(nextFieldId);
        },

        choosePrefectures: function (id) {
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

                    var $fieldPrefectures = $('input[name="prefectures"]');
                    $fieldPrefectures.val(currentVal);

                    modal.removeClass('is-active');

                    clp3.setup.fieldsRenderAnswer(id, currentVal);
                });
            }
        },

        chooseAge: function(id) {
            var $fieldHolder = $('#lpfield-' + id),
                $select = $('select[name="age"]', $fieldHolder);

            $select.on('change', function(e) {
                e.preventDefault();

                var currentVal = $(this).val();
                clp3.setup.fieldsRenderAnswer(id, currentVal);
              
                if(currentVal === '19歳以下') {
                    isRedirectToWarning = true;
                } else {
                    isRedirectToWarning = false;
                }
            });
        },
        
        setEmail: function(id) {
            var $fieldHolder = $('#lpfield-' + id),
                $error = $('.form__error', $fieldHolder),
                $btn = $('.btn', $fieldHolder);

            $btn.on('click', function(e) {
                e.preventDefault();

                var $inputEmail = $('input[name="email"]', $fieldHolder).val();

                var fieldErr = 0;

                if (!/\S/.test($inputEmail)) {
                    $error.text('メールアドレスを入力してください');
                    $error.show();
                    fieldErr += 1;

                } else {
                    if (!/\S+@\S+\.\S+/.test($inputEmail)) {
                        $error.text('メールアドレスの形式が正しくありません');
                        $error.show();
                        fieldErr += 1;
                    } else {
                        $error.hide();
                    }
                }

                if(fieldErr === 0) {
                    clp3.setup.fieldsRenderAnswer(id, $inputEmail);
                }
            });
        },

        setPhone: function(id) {
            var $fieldHolder = $('#lpfield-' + id),
                $error = $('.form__error', $fieldHolder),
                errPhoneTxts = $('.phone-err', $fieldHolder),
                errPhoneTxt1 = $('.err--1', $fieldHolder),
                errPhoneTxt2 = $('.err--2', $fieldHolder),
                errPhoneTxt3 = $('.err--3', $fieldHolder),
                $btn = $('.btn', $fieldHolder);

            errPhoneTxt1.text('必須の入力項目です');
            errPhoneTxts.removeClass('is-active');

            $btn.on('click', function(e) {
                e.preventDefault();

                var $inputPhonePrefix = $('select[name="phone_prefix"]', $fieldHolder).val(),
                    $inputPhoneNum1 = $('input[name="phone_num1"]', $fieldHolder).val(),
                    $inputPhoneNum2 = $('input[name="phone_num2"]', $fieldHolder).val();

                var fieldErr = 0;

                var phoneNum = '';

                if(!/\S/.test($inputPhonePrefix)) {
                    $error.show();
                    errPhoneTxt1.addClass('is-active');
                    fieldErr += 1;

                } else {
                    var isNum1Ok = false,
                        isNum2Ok = false;

                    if(!/\S/.test($inputPhoneNum1)) {
                        $error.show();
                        errPhoneTxt1.addClass('is-active');
                        fieldErr += 1;

                    } else {
                        if(/^[0-9]+$/.test($inputPhoneNum1)) {
                            if($inputPhoneNum1.length === 4) {
                                isNum1Ok = true;

                            } else {
                                $error.show();
                                errPhoneTxt2.text('4桁の数字を入力してください。');
                                errPhoneTxt2.addClass('is-active');
                                fieldErr += 1;
                            }
                        } else {
                            $error.show();
                            errPhoneTxt2.text('正しい番号を入力してください');
                            errPhoneTxt2.addClass('is-active');
                            fieldErr += 1;
                        }
                    }

                    if (!$error.hasClass("by-3")) {
                        $error.addClass('by-3 border--l');
                    }

                    if(!/\S/.test($inputPhoneNum2)) {
                        $error.show();
                        errPhoneTxt1.addClass('is-active');
                        fieldErr += 1;

                    } else {
                        if(/^[0-9]+$/.test($inputPhoneNum2)) {
                            if($inputPhoneNum2.length === 4) {
                                isNum2Ok = true;

                            } else {
                                $error.show();
                                errPhoneTxt3.text('4桁の数字を入力してください。');
                                errPhoneTxt3.addClass('is-active');
                                fieldErr += 1;
                            }
                        } else {
                            $error.show();
                            errPhoneTxt3.text('正しい番号を入力してください');
                            errPhoneTxt3.addClass('is-active');
                            fieldErr += 1;
                        }
                    }

                    if(isNum1Ok && isNum2Ok) {
                        phoneNum = $inputPhonePrefix + '-' + $inputPhoneNum1 + '-' + $inputPhoneNum2
    
                        if(blockedList.includes(phoneNum)) {
                            $error.show();
                            errPhoneTxt1.text('正しい番号を入力してください');
                            errPhoneTxt1.addClass('is-active');
                            fieldErr += 1;
                            
                        } else {
                            $error.hide();
                        }
                    }
                }

                if(fieldErr === 0) {
                    clp3.setup.fieldsRenderAnswer(id, phoneNum);
                }
            });
        },

        setLastname: function(id) {
            var $fieldHolder = $('#lpfield-' + id),
                $error = $('.form__error', $fieldHolder),
                $btn = $('.cf-form__btn', $fieldHolder);

            $btn.on('click', function(e) {
                e.preventDefault();

                // var $inputLastname = $('input[name="lastname"]', $fieldHolder).val();

                var fieldErr = 0;

                // if (!/\S/.test($inputLastname)) {
                //     $error.show();
                //     fieldErr += 1;
                // } else {
                //     $error.hide();
                // }

                if(fieldErr === 0) {
                    clp3.setup.sendForm();
                }
            });
        },

        sendForm: function() {
            sessionStorage.removeItem('ss_analytics');

            var $form = $('#chatlp3-form');

            var fieldPrefectures = $('input[name="prefectures"]', $form).val(),
                fieldAge = $('select[name="age"]', $form).val(),
                fieldEmail = $('input[name="email"]', $form).val(),
                fieldPhonePrefix = $('select[name="phone_prefix"]', $form).val(),
                fieldPhoneNum1 = $('input[name="phone_num1"]', $form).val(),
                fieldPhoneNum2 = $('input[name="phone_num2"]', $form).val(),
                fieldLastname = $('input[name="lastname"]', $form).val();

            if(!isRedirectToWarning) {
                var formData = new FormData();

                var phoneNum = fieldPhonePrefix + '' + fieldPhoneNum1 + '' + fieldPhoneNum2

                formData.append('prefectures', fieldPrefectures);
                formData.append('age', fieldAge);
                formData.append('email', fieldEmail);
                formData.append('phone', phoneNum);
                formData.append('lastname', fieldLastname);
                formData.append('form', 'チャットフォームlp3');
                formData.append('admin_subject', '司法書士 渋谷法務総合事務所 | お問い合わせメール');
                formData.append('question_set', arrQA.length);

                $.each(arrAnswers, function (i, x) {
                    var key1 = 'question_' + x.qsetId,
                        key2 = 'answer_' + x.qsetId;

                    var findObj = arrQA.find(qa => qa._id === x.qsetId);

                    formData.append(key1, findObj.label);
                    formData.append(key2, x.qsetAns);
                });
                
                send(formData);

                // console.log(...formData);

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
                window.location.href = baseUrl + '/warning?fr=104';
            }

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
                            window.location.href = baseUrl + '/mail/success.html?g=lp2&fr=101';

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

        existingData: function() {
            var _formDetails = JSON.parse(_ssFormDetails);
            arrAnswers = _formDetails.answers;

            $.each(_formDetails.answers, function(i, qa) {
                var getQuestion = arrQA.find(x => x._id === qa.qsetId);

                var renderBox = $('.cf-box__dynamic'),
                    output = '';

                output += '<div id="qset-' + qa.qsetId + '" class="cf-row is-active has-existing">' +
                    '<div class="cf-question display__inline align--t">' +
                        '<div class="cf-question__col col--1 cf-question__asst">' +
                            '<img class="img-fit" src="_resources/images/forms/chatbot-lp.png" alt="">' +
                        '</div>' +
                        '<div class="cf-question__col col--2">' +
                            '<p class="cf-question__asstname">渋谷法務総合事務所</p>' +
                            '<div class="cf-question__bubble cf-chatbubble chatbubble--asst">' + getQuestion.question + '</div>' +
                        '</div>' +
                    '</div>' +
                    ' <div class="cf-answer is-active display__inline font--right">' +
                        '<p class="cf-answer__isread">既読</p>' +
                        '<div class="cf-answer__bubble cf-chatbubble chatbubble--you font--left">' +
                            '<p>'+ qa.qsetAns +'</p>' +
                        '</div>' +
                    '</div>' +
                '</div>';

                renderBox.append(output);
            });

            var form = $('#qset-5');
            form.addClass('is-active');

            var $formMainText = $('.main', form);
            $formMainText.show();

            var fieldEmail = $('input[name="email"]', form),
                fieldPhonePrefix = $('select[name="phone_prefix"]', form),
                fieldPhoneNum1 = $('input[name="phone_num1"]', form),
                fieldPhoneNum2 = $('input[name="phone_num2"]', form),
                fieldLastname = $('input[name="lastname"]', form);

            fieldEmail.val(_formDetails.email);
            fieldPhonePrefix.val(_formDetails.phonePrefix);
            fieldPhoneNum1.val(_formDetails.phoneNum1);
            fieldPhoneNum2.val(_formDetails.phoneNum2);
            fieldLastname.val(_formDetails.lastname);

            clp3.setup.fieldsRenderQuestion(1); // proceed with form fields animation & validation

            // sessionStorage.removeItem('ss_backupform');
        },

        header: function () {
            var headerLogo = $('.header__logo');
            headerLogo.on('click', function () {
                location.reload(true);
            });
        },
    },
};

var utils = {
    scrollToBottom: function(nextDiv) {
        // var topY = form.offset().top;
        TweenMax.to($w, 0.7, {
            scrollTo: {
                y: nextDiv,
                autoKill: false
            },
            ease: Power1.easeOut,
        });
    },
    
    inputAcceptNumOnly: function() {
        $('input[type="number"]').keypress(function (e) {
            if('0123456789'.indexOf(e.key) == -1) {
                e.preventDefault();
            }
        });
    },
}