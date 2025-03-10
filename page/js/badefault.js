function creatFormBtn(o) {
    //取消
    var bottomC = '';
    if (o.btCT) {
        bottomC = $('<button class="btn">' + o.btCT + '</button>');
        bottomC.on('click', function(e) {
            modalHide();
            if (o.btcfn) o.btcfn();
            return false; //阻止上傳
        });
    }

    //確認
    var bottomT = $('<button class="btn" type="submit">' + o.btTT + '</button>');
    bottomT.on('click', o.btTFn);

    return $('<div class="bottom"></div>').append(bottomC, bottomT);
}
function creatForm(o) {
    //to=>總數, ad=>加入hidden自訂值, se=>select值
    var to = o.to || '',
        formId = o.id || 'myForm',
        plt = o.pl || '',
        ad = o.ad || '';
    var form = $('<form id="' + formId + '" autocomplete="off"></form>');
    

    //ro
    $.each(o.ro.tableName, function(k, v) {
        if (!v.t) return;
        var formRow = $('<div class="row"></div>');
        var formLabel = $('<label class="col-3 col-form-label"></label>');
        var formInputP = $('<div class="col-9"></div>');
        var pl = plt + v.n;

        if (v.t == 'text' || v.t == 'number' || v.t == 'date' || v.t == 'password') {

            var formInput = $('<input type="text" class="form-control">');
            formLabel.append(v.n).attr('for', v.i); //label name
            if (v.t == 'number') formInput.attr('type', v.t); //type
            if (v.t == 'date') formInput.attr('type', v.t); //type
            if (v.t == 'password') {
                formInput.attr('type', v.t); //type
                formInput.attr('autocomplete', 'off'); //autocomplete
            }
            if (v.i == 'sort') formInput.attr('value', to + 1) //sort
            formInput.attr('id', v.i).attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
            if (v.v) formInput.val(v.v); //value
            formInputP.append(formInput);
            formRow.addClass('form-group');
        }

        if (v.t == 'checkbox') {
            var label = $('<label>' + v.tx + '</label>');
            var checkbox = $('<input type="checkbox" value="Y">');
            var checkboxDiv = $('<div class="checkboxDiv">')
            formLabel.append(v.n);
            label.attr('for', v.i)
            checkbox.attr('id', v.i).attr('name', v.i); //label name
            checkboxDiv.append(checkbox, label)
            formInputP.append(checkboxDiv);
        }

        if (v.t == 'file') {
            var w = v.w;
            var h = v.h;
            // var pl = v.pl || '檔案大小限制1M，建議長寬';
            var fileDiv = $('<div class="' + v.t + '"></div>');
            var file = $('<input class="cove" type="' + v.t + '" accept=".jpg, .jpeg, .png" name="Image">');
            var hidden = $('<input class="coveInput" type="hidden" name="Image2">');
            var label = $('<label for="cove" class="coverLabel"></label>');
            var relative = $('<div class="position-relative"></div>');
            // var small = $('<small class="form-text text-muted pl-3">' + pl + w + 'px*' + h + 'px</small>');
            var small = '';
            file.on('change', function() {
                preview(this, w, h);
            })
            formLabel.append(v.n).attr('for', v.i); //label name
            label.append(file, hidden);
            relative.append(label);
            fileDiv.append(relative, small);
            formInputP.append(fileDiv);
            formRow.addClass('form-group');
            if (v.v) {
                var imgUrl = v.v;
                if (imgUrl.search('htt') != 0) {
                    imgUrl = getImgHref() + imgUrl + '?v=' + new Date().getMilliseconds()
                }
                var Jcrophtml = "<div class='imgdiv'>" +
                    "<div class='imgW'>" +
                    "<img class='imgclass' src='" + imgUrl + "'>" +
                    "<i onclick='closeImg(this);'><svg viewBox='0 0 24 24'><path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'/></svg></i>" +
                    "</div></div>";
                label.addClass('active').after(Jcrophtml);
                hidden.val(v.v);
                file.attr('name', 'ImageX'); //不驗證
            }
        }

        if (v.t == 'link') {
            var link = $('<div class="link"></div>');
            var input = $('<input class="form-control form-control-lg" name="' + v.i + '" type="text" id="' + v.i + '">');
            var showLink = $('<div class="showLink"></div>');
            var content = $('<div class="content"></div>');
            var i = $('<i class="fa fa-close imgclose"></i>');
            var iframe = $('<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            var youtubeUrl = /https:\/\/www.youtube.com\/watch\?v=/;
            var showVideo = function(o) {
                var video = o.v;
                if (video.match(youtubeUrl)) {
                    var urlName = video.replace(youtubeUrl, '')
                    link.addClass('active');
                    iframe.attr('src', 'https://www.youtube.com/embed/' + urlName);
                    content.append(iframe);
                }
            };
            input.on('change', function() {
                showVideo({ 'v': input.val() })
            });
            i.on('click', function() {
                link.removeClass('active');
                content.html('');
                input.val('');
            });
            if (v.v) {
                showVideo({ 'v': v.v })
                input.val(v.v)
            } else {
                input.attr('placeholder', pl);
            }
            showLink.append(i, content);
            link.append(input, showLink);
            formLabel.append(v.n).attr('for', v.i); //label name
            formInputP.append(link);
            formRow.addClass('form-group');
        }

        if (v.t == 'select') {
            var select = $('<select class="form-control"></select>');
            formLabel.append(v.n).attr('for', v.i); //label name
            select.attr('id', v.i).attr('name', v.i);
            $.each(v.se, function(seK, seV) {
                var option = $('<option></option>');
                option.attr('value', seV.id).text(seV.Name); //value,text
                select.append(option);
            })

            // if (v.v) select.val(v.v); //value
            if (v.v) {
                $.each(v.se, function(key, value) {
                    if (value['Name'] == v.v) {
                        select.val(value['id']);
                    }
                })
            }
            formInputP.append(select);
            formRow.addClass('form-group');
        }

        if (v.t == 'textarea') {
            var formInput = $('<textarea rows="5" class="form-control"></textarea>');
            formLabel.append(v.n).attr('for', v.i); //label name
            formInput.attr('id', v.i).attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
            if (v.v) {
                // var reg=new RegExp("<br />","g");
                // var stt= v['v'].replace(reg,"\r\n");
                // formInput.val(stt);
                formInput.val(v.v);
            } //value
            formInputP.append(formInput);
            formRow.addClass('form-group');
        }

        if (v.t == 'is_Release') {
            var releasePY = $('<div class="form-check form-check-inline">');
            var releasePN = $('<div class="form-check form-check-inline">');
            var releaseInputY = $('<input type="radio" class="form-check-input" id="Y" name="' + v.i + '" value="Y">');
            var releaseInputN = $('<input type="radio" class="form-check-input" id="N" name="' + v.i + '" value="N">');
            var releaseLabelY = $('<label class="form-check-label" for="Y">' + v.yes + '</label>');
            var releaseLabelN = $('<label class="form-check-label" for="N">' + v.no + '</label>');
            formLabel.append(v.n);
            if (!v.v || v.v == 'Y') {
                releaseInputY.prop('checked', true);
                releaseInputN.prop('checked', false);
            } else {
                releaseInputN.prop('checked', true);
                releaseInputY.prop('checked', false);
            }
            releasePY.append(releaseInputY, releaseLabelY);
            releasePN.append(releaseInputN, releaseLabelN);
            formInputP.append(releasePY, releasePN);
        }

        if (v.t == 'textadd') {
            var divRow = $('<div class="baprescriptionTextRow">');

            var baprescriptionText = function(o) {
                var divFlex = $('<div class="baprescriptionTextFlex">');
                var addBtn = $('<a class="addBtn"><i class="fa fa-plus fa-fw"></i></a>');
                var deletBtn = $('<a class="deletBtn"><i class="fa fa-trash fa-fw"></i></a>');
                var formInput = $('<input type="text" class="form-control">');
                formInput.attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
                var oValue = o ? o.v : ''
                if (oValue) {
                    oValue = oValue.split(',')
                    formInput.val(oValue[1]); //value
                    formInput.attr('data-id', oValue[0]);
                    divFlex.append(formInput)
                } else {
                    divFlex.append(formInput, addBtn, deletBtn)
                }
                divRow.append(divFlex)
            }
            if (v.v) {
                var vv = v.v.split(';')
                $.each(vv, function(key, value) {
                    baprescriptionText({ v: value })
                })
            } else {
                baprescriptionText()
            }
            formInputP.append(divRow);
            formLabel.append(v.n).attr('for', v.i); //label name
            $(document).off("click", ".baprescriptionTextRow .addBtn");
            $(document).off("click", ".baprescriptionTextRow .deletBtn");
            $(document).on("click", ".baprescriptionTextRow .addBtn", function(e) {
                e.stopPropagation();
                $(this).parents('.baprescriptionTextRow').append($(this).parents('.baprescriptionTextFlex').clone())
            })
            $(document).on("click", ".baprescriptionTextRow .deletBtn", function(e) {
                e.stopPropagation();
                if ($(this).parents('.baprescriptionTextRow').find('.baprescriptionTextFlex').length > 1) {
                    $(this).parents('.baprescriptionTextFlex').remove()
                }
            })
            formRow.addClass('form-group');
        }
        if (v.t == 'color') {
            formLabel.append(v.n).attr('for', v.i); //label name
            var formInput = $('<input type="text" class="form-control">');
            formInput.attr('type', v.t).attr('name', v.i); //id,name
            if (v.v) formInput.val(v.v);
            formInputP.append(formInput);
            formRow.addClass('form-group');
            // <input type="color" name="color" value="#f6b73c"></input>
        }
        if (v.t == 'selectadd') {
            var divRow = $('<div class="selectadd">');
            var objs = $('<div class="objs">');
            var selectDiv = $('<div class="selectDiv">');
            var addBtn = $('<a class="addBtn"><i class="fa fa-plus fa-fw"></i></a>');
            var selectControl = $('<div class="selectControl">');
            var selectOptions = $('<div class="selectOptions">');
            var addObj = function(o) {
                var deletBtn = $('<a class="deletBtn"><i class="fa fa-times fa-fw"></i></a>');
                var p = $('<p class="' + v.i + '"  data-value="' + o.i + '">')
                var flex = $('<div class="flex">');
                p.text(o.n);
                flex.append(p, deletBtn);
                objs.append(flex)
                deletBtn.on("click", function() {
                    $(this).parents('.flex').remove()
                })
            }
            selectControl.append(selectOptions);
            selectDiv.append(addBtn, selectControl)
            divRow.append(objs, selectDiv)
            formInputP.append(divRow);
            formLabel.append(v.n).attr('for', v.i); //label name
            formRow.addClass('form-group');

            $.each(v.se, function(index, val) {
                var option = $('<span class="option" data-value="' + val.id + '">' + val.Name + '</span>');
                selectOptions.append(option)
            })
            addBtn.on("click", function(e) {
                e.stopPropagation();
                selectControl.toggleClass('open');
                $(".selectOptions .option").off("click")
                $(".selectOptions .option").on("click", function() {
                    var p = $(this).parents('.selectadd').find('.objs p')
                    var pValue = this.dataset.value
                    var addObjBoolean = 1
                    if (p.length) {
                        $.each(p, function(index, val) {
                            if ($(val).data('value') == pValue) {
                                addObjBoolean = 0
                                return false;
                            }
                        })
                    }
                    if (addObjBoolean) {
                        addObj({ 'i': pValue, 'n': this.textContent })
                    }
                    selectControl.toggleClass('open');
                })
            })

            if (v.v) {
                var vv = v.v.split(';')
                $.each(vv, function(key, value) {
                    value = value.split(',')
                    addObj({ 'i': value[0], 'n': value[1] })
                })
            }

        }

        formRow.append(formLabel, formInputP);
        form.append(formRow);
    })

    //加入密碼
    if (o.ro.ebp) {
        var password = $('<div class="row form-group">' +
            '<label class="col-3 col-form-label" for="Password">' + o.ro.ebp.n + '</label>' +
            '<div class="col-9">' +
            '<input type="password" class="form-control" id="Password" name="Password" placeholder="' + o.ro.ebp.n1 + '" autocomplete="off">' +
            '</div>' +
            '</div>');

        var parent = form.find('.row').eq(1);

        if (parent.length) {
            //新增密碼放在第二個位子
            parent.after(password);
        } else {
            //修改密碼
            form.append(password);
        }
    }

    //加入hidden自訂值
    $.each(ad, function(k, v) {
        form.append($('<input type="hidden" name="' + v.n + '" value="' + v.v + '">'));
    })

    //按鈕
    if (o.btTFn) {
        form.append(creatFormBtn(o));
    }
    return form;
}
//圖片---------------------------------------------------
function preview(input, imgWidth, imgHight) {
    var imgSize = imgSize || 1048576;
    var imgWidth = imgWidth || 640;
    var imgHight = imgHight || 210;

    var file = input.files[0];
    var type = file.type.split('/')[1]; //類型
    var fileReader = new FileReader();
    var img = new Image();
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var inImage = function (o) {
        var Jcrophtml = "<div class='imgdiv'>" +
            "<div class='imgW'>" +
            "<img class='imgclass' src='" + o.img + "'>" +
            "<i onclick='closeImg(this);'><svg viewBox='0 0 24 24'><path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'/></svg></i>" +
            "</div></div>";
        var parent = $(o.obj).parent('label')
        var coveInput = parent.find('.coveInput')
        parent.addClass('active').after(Jcrophtml);
        coveInput.val(o.img);
    }

    fileReader.readAsDataURL(file); //讀取檔案內容,以DataURL格式回傳結果
    fileReader.onload = function(event) { //讀取完後執行的動作
        img.src = event.target.result;
        img.onload = function() {
            //判斷圖片尺寸,圖片大小,圖片類型
            // if(this.width>=imgWidth && this.height>=imgHight && file.size<imgSize && type =='jpeg' || type =='jpg'){
            if (file.size < imgSize) {
                if (type == 'jpeg' || type == 'jpg' || type == 'png') {
                    canvas.width = imgWidth;
                    canvas.height = imgHight;
                    var imageWidth = img.width;
                    var imageHeight = img.height;
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    if ((imageWidth / imgWidth) > (imageHeight / imgHight)) {
                        context.drawImage(img, imgWidth / 2 - (imgHight * imageWidth / imageHeight) / 2, 0, imgHight * imageWidth / imageHeight, imgHight);
                    } else {
                        context.drawImage(img, 0, imgHight / 2 - (imgWidth * imageHeight / imageWidth) / 2, imgWidth, imgWidth * imageHeight / imageWidth);
                    }
                    var data = canvas.toDataURL("image/jpeg", 0.9);
                    inImage({ 'obj': input, 'img': data })
                } else {
                    alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
                    $('.coverLabel').find("input").val('');
                }
            } else {
                alert('錯誤 : 圖片大小不能超過: 1M');
                $('.coverLabel').find("input").val('');
            }
        }
    };
}
function closeImg(obj) {
    $(obj).closest('.position-relative').find('.cove').attr('name', 'Image')
    var imgdiv = $(obj).closest('.imgdiv');
    imgdiv.prev('.coverLabel').removeClass('active').find("input").val('');
    imgdiv.remove();
}
//load---------------------------------------------------------
function loadShow() {
    $('body').append('<div class="load"><div class="cp-spinner cp-round"></div></div>');
}
function loadHide(fn) {
    $('.load').remove();
    if (fn) {
        fn();
    }
}
//modal---------------------------------------------------------
function modal(o) {
    var obj = $('<div class="overlaymodal ' + getUrl('a') + '">\n' +
        '        <div class="box">\n' +
        '            <div class="top">\n' +
        '                <h4></h4>\n' +
        '                <i class="fa fa-times"></i>\n' +
        '            </div>\n' +
        '            <div class="middle"></div>\n' +
        '        </div>\n' +
        '    </div>');
    var middle = $(obj.find('.middle'));
    var bti = $(obj.find('.top>i'));
    var title = $(obj.find('.top>h4'));

    //X
    bti.on('click', function() {
        modalHide();
        if (o.btifn) o.btifn();
    });

    //標題ti
    title.html(o.ti);


    //內容co
    middle.html(o.co);


    //確定和取消(X)
    if (o.btTFn) {
        middle.append(creatFormBtn(o));
    }

    //html
    modalHide();
    $('body').addClass('overflow')
    $('body').append(obj);
}
function modalHide(o) {
    $('body').removeClass('overflow')
    $('.overlaymodal').remove();
    if (o && o.fn) {
        fn();
    }
}
function validateFn(o) {
    var id = o.id ? '#' + o.id : '#myForm';
    $(id).validate({
        debug: true,
        rules: o.rules,
        messages: o.messages,
        submitHandler: function(form) {
            loadShow(); //send load
            o.handler(form);
        }
    })
}
function send(o) {
    var form = o.form || '';
    getAjax({ 'form': form, 'value': o.value }).then(function(data) {
        loadHide(modalHide); //移除send load
        if (o.handler) {
            o.handler({ 'data': data, 'p': o.p });
        } else {
            if (data.result) {
                if (o.p) {
                    seach({ 'p': o.p });
                } else {
                    seach({ 'p': 1 });
                }
            } else {
                modal({
                    'co': data.message,
                    'btc': 'n',
                    'bte': function() {
                        modalHide()
                    }
                });
            }
        }
    })
}
function productsNav(o) {
    //標題
    var title = function() {
        var nav = function(o) {
            var a = o ? o.a : getUrl('a');
            var n = $('#leftNav');
            var link = n.find('.' + a);
            link.addClass('active');
            var b = n.find('.balanguage');
            //二級
            b.off('click');
            b.on('click', function(e) {
                e.stopPropagation()
                var ul = $(this).find('+ul');
                if (ul.hasClass('active')) {
                    ul.removeClass('active')
                } else {
                    ul.addClass('active')
                }
            })
            return link.find('p').html();
        }
        var ti = o.ti ? o.ti : nav({ 'a': o.a });
        return $('<div class="title"><h4>' + ti + '</h4></div>')
    }

    //按鈕
    var btnFn = function() {
        var ro = o.d['customRow'] || ''; //項目
        var to = o.d['totle'] || ''; //總數
        var p = o.p || ''; //頁
        //新增
        var ProductsAdd = '';
        if (ro.ab) {
            var addFn = o.addFn ? o.addFn : function() {
                modal({
                    'ti': ro.ab.ti,
                    'co': creatForm({
                        'ro': ro,
                        'pl': ro.pl,
                        'to': to,
                        'btCT': ro.btCT,
                        'btTT': ro.btTT,
                        'btTFn': o.btTFn ? o.btTFn : function() {
                            validateFn({
                                'rules': ro.validate.rules,
                                'messages': ro.validate.messages,
                                'handler': function(form) {
                                    send({ 'form': form, 'value': [{ 'add': 0 }], 'p': p })
                                },
                            })
                        }
                    })
                })
            }

            ProductsAdd = $('<a class="btn"><i><svg viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></i>' + ro.ab.ti + '</a>').on('click', addFn)
        }

        //查詢(X)
        var ProductsSeach = '';
        if (ro.se) {
            var seachFn = function() {
                modal({
                    'ti': ro.se.ti,
                    'co': creatForm({
                        'ro': ro.se,
                        'pl': ro.pl,
                        'btCT': ro.btCT,
                        'btTT': ro.btTT,
                        'btTFn': function() {
                            validateFn({
                                'rules': ro.se.validate.rules,
                                'messages': ro.se.validate.messages,
                                'handler': function(form) {
                                    send({
                                        'form': form,
                                        'value': [{ 'seach': 0 }],
                                        'handler': function(o) {
                                            if (o.data.message) {
                                                modal({
                                                    'ti': ro.ti,
                                                    'co': o.data.message,
                                                });
                                            } else {
                                                seach2({ 'data': o.data });
                                            }
                                        }
                                    })
                                },
                            })
                        }
                    })
                })
            }
            var seach = o.seachFn ? o.seachFn : seachFn
            ProductsSeach = $('<a class="btn"><i class="fa fa-search"></i>' + ro.se.ti + '</a>').on('click', seach)
        }

        return $(' <div class="ProductsAdd"></div>').append(ProductsAdd, ProductsSeach);
    }

    return $('<div class="ProductsNav"></div>').append(title(),btnFn());
}
function productsContent(o) {
    var cr = o.d['customRow'] || ''; //項目
    var tableName = cr['tableName'];
    var ro = o.d['row'] || ''; //row
    var p = o.p || ''; //頁
    var ProductsContentUl = $('<ul></ul>');
    var ProductsContentLi = function(o) {
        var html = '';
        var newName = [];
        var n = o.n;
        var v = o.v;
    
        function imgSrc(o) {
            return '<img src="' + o + '" alt="">'
        }
    
        function imgSrcAb(o) {
            return '<img src="' + getImgHref() + o + '?v=' + new Date().getMilliseconds() + '" alt="">'
        }
    
        function isRelease(o) {
            var v = o.yes;
            if (o.v != 'Y') {
                v = o.no
                return '<p class="red">' + v + '</p>';
            } else {
                return '<p>' + v + '</p>';
            }
        }
    
        function isUndefined(o) {
            var v = o;
            if (v === null || v == undefined || v == 'undefined') {
                v = ''
            }
            return '<p>' + v + '</p>';
        }
    
        function isbaprescriptionBp(o) {
            var ps = '';
            o.split(';').forEach(e => {
                var value = e.split(',')
                ps += '<div class="flex"><div class="img">' + imgSrcAb(value[0]) + '</div>' +
                    '<div class="texts"><p>' + value[1] + '</p>' + '<p>' + value[2] + '</p>' + '<p>' + value[3] + '</p></div></div>'
            })
            return '<div class="customText">' + ps + '</div>'
        }
    
        function textadd(o) {
            var ps = ' ';
            if (o) {
                o.split(';').forEach(e => {
                    e = e.split(',')
                    ps += '<p class="color" style="background:' + e[2] + '">' + e[1] + '</p>'
                });
            }
            return '<div class="customText">' + ps + '</div>'
        }
    
        function isImage(o) {
            console.log(o)
            var imageUrl = imgSrc(o);
            if (o.search('htt') != 0) {
                imageUrl = imgSrcAb(o)
            }
            return imageUrl
        }
    
        function isLink(o) {
            var youtubeUrl = /https:\/\/www.youtube.com\/watch\?v=/;
            var urlName = o.replace(youtubeUrl, '');
            return '<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/' + urlName + '"></iframe>';
        }
    
        function source(o) {
            var img = ''
            if (o == 'm') {
                img = imgSrcAb('bamember-m.png')
            } else if (o == 'f') {
                img = imgSrcAb('bamember-f.png')
            } else if (o == 't') {
                img = imgSrcAb('bamember-t.png')
            } else if (o == 'g') {
                img = imgSrcAb('bamember-g.png')
            }
            return img
        }
    
        function color(o) {
            return '<div class="color" style="background:' + o + '"></div>'
        }
        $.each(n, function(j, a) {
            var value = '';
            // if (a['i'] && v[a.i] != undefined) {
            if (a['i']) {
                //i
                if (a['i'] == 'is_Release' || a['i'] == 'is_Email') {
                    value = isRelease({ 'v': v[a.i], 'yes': a.yes, 'no': a.no });
                } else if (a['i'] == 'Image') {
                    console.log(v,a['i'],v[a.i])
                    value = isImage(v[a.i]);
                } else if (a['i'] == 'Link') {
                    value = isLink(v[a.i]);
                } else if (a['i'] == 'source') {
                    value = source(v[a.i]);
                } else if (a['i'] == 'color') {
                    value = color(v[a.i]);
                } else {
                    value = isUndefined(v[a.i]);
                }
                html += '<div>' + value + '</div>';
    
                //物件深度拷貝，放入新陣列
                var copeName = JSON.parse(JSON.stringify(a)); //JOSON深度拷貝
                // if (copeName.i == 'Account') {
                //     copeName.i = 'email'
                // } //帳號修改改變Namea名
                // if (copeName.i == 'Date') {
                //     copeName.i = 'DateNo'
                // } 
                var objs = Object.assign(copeName, { 'v': v[a.i] }); //object.assign合併物件
                newName.push(objs);
            }
        })
        return { 'html': html, 'newName': newName }
    }

    //li-title
    var topLi = $('<li></li>');
    $.each(tableName, function(k, v) {
        if (v.n) topLi.append('<div><p>' + v.n + '</p></div>')
    })
    ProductsContentUl.append(topLi);

    //li-content
    $.each(ro, function(k, v) {
        var id = v.id;
        var li = $('<li></li>');

        //content
        var div = ProductsContentLi({ 'n': tableName, 'v': v });


        //修改
        var editShowHtml = $('<button><svg viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg></button>');
        editShowHtml.on('click', function() {
            var tableName = div.newName;

            //不顯示帳號
            if (cr.ebp) {
                tableName = tableName.filter(function(el) { return el.i != "Account"; });
            }

            var btTFn = o.btTFn ? o.btTFn : function() {
                validateFn({
                    'rules': cr.validate.rules,
                    'messages': cr.validate.messages,
                    'handler': function(form) {
                        send({ 'form': form, 'value': [{ 'edit': 0 }, { 'id': id }], 'p': p })
                    },
                })
            }

            modal({
                'ti': cr.ed.ti,
                'co': creatForm({
                    'ad': [{ n: 'id', v: id }],
                    'ro': { 'tableName': tableName },
                    'pl': cr.pl,
                    'btCT': cr.btCT,
                    'btTT': cr.btTT,
                    'btTFn': btTFn
                })
            })
        })

        //刪除
        var deleteShowHtml = '';
        // if (getUrl('a') != 'babookname') {
            deleteShowHtml = $('<button><svg viewBox="0 0 24 24"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/></svg></button>');
            deleteShowHtml.on('click', function() {
                modal({
                    'ti': cr.de.ti,
                    'co': cr.de.co,
                    'btCT': cr.btCT,
                    'btTT': cr.btTT,
                    'btTFn': function() {
                        send({ 'value': [{ 'Delete': 0 }, { 'id': id }], 'p': p })
                    }
                });
            })
        // }

        //改密碼
        var keyShowHtml = '';
        if (cr.ebp) {
            keyShowHtml = $('<button><svg viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/></svg></button>');
            keyShowHtml.on('click', function() {
                modal({
                    'ti': cr.ebp.ti,
                    'co': creatForm({
                        'ro': { 'ebp': { 'n': cr.ebp.n, 'n1': cr.ebp.n1 } },
                        'pl': cr.pl,
                        'btCT': cr.btCT,
                        'btTT': cr.btTT,
                        'btTFn': function() {
                            validateFn({
                                'rules': cr.validate.rules,
                                'messages': cr.validate.messages,
                                'handler': function(form) {
                                    send({ 'form': form, 'value': [{ 'passwordEdite': 0 }, { 'id': id }], 'p': p })
                                },
                            })
                        }
                    })
                })
            })
        }

        var ProductsModify = $('<div class="ProductsModify"></div>');
        ProductsModify.append(editShowHtml, keyShowHtml, deleteShowHtml); //編輯show
        li.append(div.html, ProductsModify);
        ProductsContentUl.append(li);
    });

    return $('<div class="ProductsContent"></div>').append(ProductsContentUl);
}
function creatNav(){
    return creatHtml({
        'tage': 'div',
        'cl':'baleft',
        'addHtml': [
            creatHtml({
                'tage': 'div',
                'cl':'logo',
                'addHtml': creatHtml({
                    'tage': 'a',
                    'attr': {'href':"?a=bamanager"},
                    'text': '<svg viewBox="0 0 100 115"><defs><linearGradient id="a" x1="50.24" y1="85.24" x2="50.24" y2="14.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aa8107"/><stop offset="0.09" stop-color="#9b6d08"/><stop offset="0.17" stop-color="#8b570a"/><stop offset="0.21" stop-color="#915f10"/><stop offset="0.29" stop-color="#a2761f"/><stop offset="0.38" stop-color="#be9a39"/><stop offset="0.39" stop-color="#c19e3c"/><stop offset="0.44" stop-color="#d1b34d"/><stop offset="0.52" stop-color="#e4ce62"/><stop offset="0.61" stop-color="#f2e272"/><stop offset="0.69" stop-color="#faed7b"/><stop offset="0.78" stop-color="#fdf17e"/><stop offset="0.82" stop-color="#f9ea78"/><stop offset="0.87" stop-color="#edd769"/><stop offset="0.94" stop-color="#dbb84f"/><stop offset="1" stop-color="#c3912f"/></linearGradient><linearGradient id="b" x1="1.8" y1="49.44" x2="98.33" y2="49.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cfa738"/><stop offset="0.02" stop-color="#c39a33"/><stop offset="0.06" stop-color="#ac812a"/><stop offset="0.1" stop-color="#9e7124"/><stop offset="0.13" stop-color="#996c22"/><stop offset="0.17" stop-color="#9e7227"/><stop offset="0.23" stop-color="#ab8233"/><stop offset="0.29" stop-color="#c19d49"/><stop offset="0.36" stop-color="#e0c366"/><stop offset="0.39" stop-color="#f2d977"/><stop offset="0.56" stop-color="#ffa"/><stop offset="0.7" stop-color="#e1ab39"/><stop offset="0.73" stop-color="#c99431"/><stop offset="0.78" stop-color="#a46f25"/><stop offset="0.84" stop-color="#86531b"/><stop offset="0.9" stop-color="#713e15"/><stop offset="0.95" stop-color="#643210"/><stop offset="1" stop-color="#602e0f"/></linearGradient></defs><path d="M10.43,110.91H8.72l-4-4.79a3,3,0,0,1-.28-.37h0v5.16H3.15V100.44H4.37v4.92h0a2.87,2.87,0,0,1,.28-.36l3.91-4.56h1.53l-4.49,5Z" style="fill:#eac954"/><path d="M14.07,100.44v1.05H13v8.37h1v1.05H10.8v-1.05h1v-8.37h-1v-1.05Z" style="fill:#eac954"/><path d="M24.24,110.91h-1.5l-5.39-8.35a3.45,3.45,0,0,1-.34-.66h0a10.91,10.91,0,0,1,.06,1.44v7.57H15.8V100.44h1.59l5.24,8.22c.22.34.36.57.42.7h0a11,11,0,0,1-.07-1.54v-7.38h1.23Z" style="fill:#eac954"/><path d="M34.82,110.2a7,7,0,0,1-3.51.89,4.79,4.79,0,0,1-3.63-1.45,5.3,5.3,0,0,1-1.38-3.83,5.44,5.44,0,0,1,1.54-4,5.24,5.24,0,0,1,3.9-1.56,6.63,6.63,0,0,1,2.87.55v1.36a5.51,5.51,0,0,0-3-.8,3.76,3.76,0,0,0-2.88,1.21,5.06,5.06,0,0,0-.08,6.26A3.66,3.66,0,0,0,31.46,110a4.38,4.38,0,0,0,2.13-.49v-2.94H31.3v-1.11h3.52Z" style="fill:#eac954"/><path d="M41.35,110.91V100.44h3a3.26,3.26,0,0,1,2.15.66,2.15,2.15,0,0,1,.8,1.73,2.55,2.55,0,0,1-.48,1.55,2.6,2.6,0,0,1-1.33.93v0a2.67,2.67,0,0,1,1.69.8,2.46,2.46,0,0,1,.64,1.76,2.74,2.74,0,0,1-1,2.18,3.59,3.59,0,0,1-2.43.83Zm1.23-9.36v3.38h1.26a2.38,2.38,0,0,0,1.58-.49,1.69,1.69,0,0,0,.58-1.37q0-1.53-2-1.53Zm0,4.48v3.77h1.66a2.5,2.5,0,0,0,1.68-.51,1.75,1.75,0,0,0,.6-1.4Q46.51,106,44,106Z" style="fill:#eac954"/><path d="M54.14,111.09a4.6,4.6,0,0,1-3.57-1.47,5.45,5.45,0,0,1-1.34-3.82,5.77,5.77,0,0,1,1.37-4,4.77,4.77,0,0,1,3.72-1.5,4.49,4.49,0,0,1,3.49,1.46,5.46,5.46,0,0,1,1.33,3.82,5.79,5.79,0,0,1-1.36,4.05A4.68,4.68,0,0,1,54.14,111.09Zm.09-9.71a3.37,3.37,0,0,0-2.68,1.19,5.29,5.29,0,0,0,0,6.24A3.27,3.27,0,0,0,54.14,110a3.44,3.44,0,0,0,2.72-1.12,4.6,4.6,0,0,0,1-3.15,4.8,4.8,0,0,0-1-3.21A3.31,3.31,0,0,0,54.23,101.38Z" style="fill:#eac954"/><path d="M67.38,101.55h-3v9.36H63.13v-9.36h-3v-1.11h7.27Z" style="fill:#eac954"/><path d="M75.22,101.55h-3v9.36H71v-9.36H68v-1.11h7.27Z" style="fill:#eac954"/><path d="M82.3,110.91H76.86V100.44h1.23v9.36H82.3Z" style="fill:#eac954"/><path d="M89.45,110.91H83.9V100.44h5.32v1.11H85.13V105h3.78v1.1H85.13v3.67h4.32Z" style="fill:#eac954"/><path d="M91,110.49V109a2.82,2.82,0,0,0,.6.39,4.79,4.79,0,0,0,.73.3,5.74,5.74,0,0,0,.77.19,4.29,4.29,0,0,0,.72.07,2.81,2.81,0,0,0,1.69-.42,1.58,1.58,0,0,0,.37-1.95,2.09,2.09,0,0,0-.51-.57,5.13,5.13,0,0,0-.78-.5l-1-.5c-.37-.19-.71-.37-1-.56a4.4,4.4,0,0,1-.83-.63,2.62,2.62,0,0,1-.55-.78,2.66,2.66,0,0,1,.11-2.26,2.67,2.67,0,0,1,.83-.87,3.73,3.73,0,0,1,1.16-.51,5.37,5.37,0,0,1,1.33-.17,5.13,5.13,0,0,1,2.26.37V102a4.09,4.09,0,0,0-2.38-.64,3.9,3.9,0,0,0-.8.08,2.26,2.26,0,0,0-.72.27,1.58,1.58,0,0,0-.51.49,1.3,1.3,0,0,0-.2.73,1.5,1.5,0,0,0,.15.69,1.7,1.7,0,0,0,.44.53,4.37,4.37,0,0,0,.71.47l1,.5q.56.28,1.07.58a4.81,4.81,0,0,1,.88.68,3,3,0,0,1,.6.82,2.32,2.32,0,0,1,.22,1,2.63,2.63,0,0,1-.3,1.31,2.48,2.48,0,0,1-.82.87,3.55,3.55,0,0,1-1.19.49,6.49,6.49,0,0,1-1.42.15,5.75,5.75,0,0,1-.61,0c-.24,0-.49-.07-.74-.12a6,6,0,0,1-.72-.19A2.26,2.26,0,0,1,91,110.49Z" style="fill:#eac954"/><path d="M4.39,93.5c-.94-1.4-.25-2.83-.24-4.21,0-.89-.3-1.87.36-2.69-.68-.82.4-1.75-.18-2.62-.17-.25.05-.75.08-1.14s.05-.66.06-1c0-.11-.1-.22-.1-.33,0-1.36,0-2.73,0-4.09a13.79,13.79,0,0,1,.33-1.84c0-.14.11-.34,0-.4-.71-.77-.25-1.66-.28-2.49-.07-2.36-.1-4.73-.11-7.09,0-1,.09-2,.1-3,0-1.86,0-3.72,0-5.58,0-1.24,0-2.49,0-3.73,0-.4-.06-.79-.07-1.19-.05-2.49-.11-5-.14-7.46,0-.45.16-.9.17-1.36,0-.72-.06-1.44-.05-2.16,0-2.18,0-4.36,0-6.54,0-.56-.16-1.13-.15-1.69,0-1,.07-2.08.1-3.12,0-.27-.07-.54-.06-.82,0-1.41.07-2.81.07-4.22,0-.48-.13-1-.16-1.43,0-.82.06-1.64.08-2.46,0-.24,0-.47,0-.71a5.23,5.23,0,0,0,0-.89c-.11-.51-.45-1,.07-1.52.09-.08,0-.49-.11-.6-.58-.5-.46-.91.12-1.28-.7-1.35.42-3-.79-4.17l.84-.32a5.24,5.24,0,0,1-.51-3.24c0-.32-.33-.66-.44-1S3,6,3.21,5.7A2,2,0,0,1,4.65,5.2c3,0,6,.22,9,.24,3.69,0,7.37,0,11.06,0,.91,0,1.82.14,2.73.13s1.76-.17,2.64-.23a1,1,0,0,1,1.07,1.11Q31,10.46,31,14.52c0,3.25-.08,6.49-.12,9.74,0,2.47-.06,4.94-.06,7.41a1.11,1.11,0,0,0,1.69,1c1.19-.74,2.48-1.42,2.87-3a.57.57,0,0,1,.21-.35A5.86,5.86,0,0,0,38,26.89c.18-.3.4-.54.84-.21s.54.08.57-.37a.82.82,0,0,1,.43-.59c1.23-.48,2.49-.88,3.72-1.37a2.2,2.2,0,0,0,.9-.75c.82-1.14,1.58-2.31,2.38-3.47.27-.4.55-.81.85-1.18a17.71,17.71,0,0,1,1.41-1.61c1.39-1.33,2.79-2.66,4.24-3.93.6-.52,1.4-.81,2-1.34.88-.78,1.64-1.7,2.49-2.51a4.85,4.85,0,0,1,4.87-1,8.29,8.29,0,0,1,1.08.35,3.43,3.43,0,0,1,2.12,2.4,61.82,61.82,0,0,0,2.47,5.83c.92,2.11,1.85,4.21,2.76,6.32a30,30,0,0,1,1.27,3.11,3.22,3.22,0,0,1-.71,2.83c-.13.18-.48.21-.75.33a2,2,0,0,1-1.45,1.7,21.83,21.83,0,0,1-5.85,1.48.87.87,0,0,0-.55.22A11.17,11.17,0,0,1,59.83,35a5,5,0,0,0-1.58,1.38q-1.79,2.34-3.45,4.78c-1,1.45-1.76,3-2.82,4.42a41.73,41.73,0,0,0-3,5.35,49.09,49.09,0,0,0-2.21,4.69c-.84,2-1.72,3.91-2.37,5.93-1,3,.56,6.64,4.23,7.09A6.67,6.67,0,0,0,53.51,67c1.3-1,2.67-1.83,4-2.76.84-.6,1.64-1.26,2.49-1.85,1-.72,2.11-1.38,3.17-2.07l.15-.09c1.05-.82,2.07-1.7,3.17-2.46.9-.62,1.92-1.06,2.83-1.66C70.91,55.1,72.38,53.84,74,53c.94-.5,1.5-1.32,2.33-1.84s2-1.11,2.93-1.71a12.52,12.52,0,0,0,2-1.47,1,1,0,0,1,1.52-.08c.67.6,1.28,1.26,2,1.85,1.11,1,1.24,1,2.49.24,1.59-.91,3.1.07,3.51,1.7a2.69,2.69,0,0,0,1.1,1.57c1.06.83,2,1.75,3,2.66a.78.78,0,0,1,.15.56c-.11,1.44.77,2.34,1.71,3.23a2,2,0,0,1,.54,1c0,.11-.47.35-.75.49-1.38.69-2.77,1.35-4.14,2s-2.74,1.36-4.06,2.12-2.42,1.57-3.64,2.35c-1.86,1.2-3.76,2.35-5.6,3.59-1,.7-2,1.55-3,2.3-1.18.87-2.4,1.67-3.57,2.56Q70.25,77.88,68,79.72c-1.48,1.2-2.93,2.45-4.39,3.68a2.17,2.17,0,0,0-.48.5c-1.51,2.52-3.93,3.57-6.65,4.07a34.18,34.18,0,0,1-5.56.71,29.8,29.8,0,0,1-6.66-.5,46.57,46.57,0,0,0-4.63-.93,5.46,5.46,0,0,1-1.69-.15c-.88-.43-1.64-1.12-2.5-1.61a20.36,20.36,0,0,0-2.56-1.17c-.44-.17-.64.12-.62.56.06,1.33.13,2.66.16,4s.05,2.54,0,3.8c0,.67-.71,1-1.61.91-2-.12-4-.16-6.06-.21s-3.88-.08-5.83-.1c-1.42,0-2.85,0-4.27,0-1.15,0-2.29.2-3.44.23-.52,0-1.05-.23-1.58-.24a7.69,7.69,0,0,0-1.23.25,1.69,1.69,0,0,1-.85,0A4.52,4.52,0,0,0,4.39,93.5Z" style="fill:url(#a)"/><path d="M4.39,93.5c-.94-1.4-.25-2.83-.24-4.21,0-.89-.3-1.87.36-2.69-.68-.82.4-1.75-.18-2.62-.17-.25.05-.75.08-1.14s.05-.66.06-1c0-.11-.1-.22-.1-.33,0-1.36,0-2.73,0-4.09a13.79,13.79,0,0,1,.33-1.84c0-.14.11-.34,0-.4-.71-.77-.25-1.66-.28-2.49-.07-2.36-.1-4.73-.11-7.09,0-1,.09-2,.1-3,0-1.86,0-3.72,0-5.58,0-1.24,0-2.49,0-3.73,0-.4-.06-.79-.07-1.19-.05-2.49-.11-5-.14-7.46,0-.45.16-.9.17-1.36,0-.72-.06-1.44-.05-2.16,0-2.18,0-4.36,0-6.54,0-.56-.16-1.13-.15-1.69,0-1,.07-2.08.1-3.12,0-.27-.07-.54-.06-.82,0-1.41.07-2.81.07-4.22,0-.48-.13-1-.16-1.43,0-.82.06-1.64.08-2.46,0-.24,0-.47,0-.71a5.23,5.23,0,0,0,0-.89c-.11-.51-.45-1,.07-1.52.09-.08,0-.49-.11-.6-.58-.5-.46-.91.12-1.28-.7-1.35.42-3-.79-4.17l.84-.32a5.24,5.24,0,0,1-.51-3.24c0-.32-.33-.66-.44-1S3,6,3.21,5.7A2,2,0,0,1,4.65,5.2c3,0,6,.22,9,.24,3.69,0,7.37,0,11.06,0,.91,0,1.82.14,2.73.13s1.76-.17,2.64-.23a1,1,0,0,1,1.07,1.11Q31,10.46,31,14.52c0,3.25-.08,6.49-.12,9.74,0,2.47-.06,4.94-.06,7.41a1.11,1.11,0,0,0,1.69,1c1.19-.74,2.48-1.42,2.87-3a.57.57,0,0,1,.21-.35A5.86,5.86,0,0,0,38,26.89c.18-.3.4-.54.84-.21s.54.08.57-.37a.82.82,0,0,1,.43-.59c1.23-.48,2.49-.88,3.72-1.37a2.2,2.2,0,0,0,.9-.75c.82-1.14,1.58-2.31,2.38-3.47.27-.4.55-.81.85-1.18a17.71,17.71,0,0,1,1.41-1.61c1.39-1.33,2.79-2.66,4.24-3.93.6-.52,1.4-.81,2-1.34.88-.78,1.64-1.7,2.49-2.51a4.85,4.85,0,0,1,4.87-1,8.29,8.29,0,0,1,1.08.35,3.43,3.43,0,0,1,2.12,2.4,61.82,61.82,0,0,0,2.47,5.83c.92,2.11,1.85,4.21,2.76,6.32a30,30,0,0,1,1.27,3.11,3.22,3.22,0,0,1-.71,2.83c-.13.18-.48.21-.75.33a2,2,0,0,1-1.45,1.7,21.83,21.83,0,0,1-5.85,1.48.87.87,0,0,0-.55.22A11.17,11.17,0,0,1,59.83,35a5,5,0,0,0-1.58,1.38q-1.79,2.34-3.45,4.78c-1,1.45-1.76,3-2.82,4.42a41.73,41.73,0,0,0-3,5.35,49.09,49.09,0,0,0-2.21,4.69c-.84,2-1.72,3.91-2.37,5.93-1,3,.56,6.64,4.23,7.09A6.67,6.67,0,0,0,53.51,67c1.3-1,2.67-1.83,4-2.76.84-.6,1.64-1.26,2.49-1.85,1-.72,2.11-1.38,3.17-2.07l.15-.09c1.05-.82,2.07-1.7,3.17-2.46.9-.62,1.92-1.06,2.83-1.66C70.91,55.1,72.38,53.84,74,53c.94-.5,1.5-1.32,2.33-1.84s2-1.11,2.93-1.71a12.52,12.52,0,0,0,2-1.47,1,1,0,0,1,1.52-.08c.67.6,1.28,1.26,2,1.85,1.11,1,1.24,1,2.49.24,1.59-.91,3.1.07,3.51,1.7a2.69,2.69,0,0,0,1.1,1.57c1.06.83,2,1.75,3,2.66a.78.78,0,0,1,.15.56c-.11,1.44.77,2.34,1.71,3.23a2,2,0,0,1,.54,1c0,.11-.47.35-.75.49-1.38.69-2.77,1.35-4.14,2s-2.74,1.36-4.06,2.12-2.42,1.57-3.64,2.35c-1.86,1.2-3.76,2.35-5.6,3.59-1,.7-2,1.55-3,2.3-1.18.87-2.4,1.67-3.57,2.56Q70.25,77.88,68,79.72c-1.48,1.2-2.93,2.45-4.39,3.68a2.17,2.17,0,0,0-.48.5c-1.51,2.52-3.93,3.57-6.65,4.07a34.18,34.18,0,0,1-5.56.71,29.8,29.8,0,0,1-6.66-.5,46.57,46.57,0,0,0-4.63-.93,5.46,5.46,0,0,1-1.69-.15c-.88-.43-1.64-1.12-2.5-1.61a20.36,20.36,0,0,0-2.56-1.17c-.44-.17-.64.12-.62.56.06,1.33.13,2.66.16,4s.05,2.54,0,3.8c0,.67-.71,1-1.61.91-2-.12-4-.16-6.06-.21s-3.88-.08-5.83-.1c-1.42,0-2.85,0-4.27,0-1.15,0-2.29.2-3.44.23-.52,0-1.05-.23-1.58-.24a7.69,7.69,0,0,0-1.23.25,1.69,1.69,0,0,1-.85,0A4.52,4.52,0,0,0,4.39,93.5Z" style="fill:none;stroke-miterlimit:10;stroke-width:2px;stroke:url(#b)"/></svg>'
                }),
            }),
            creatHtml({
                'tage': 'ul',
                'cl':'item',
                'addHtml': [
                    {'cl':'bamanager','text':'管理員','svg':'<svg viewBox="0 0 1000 1000"><path d="M108.1,949.3c-0.6,27.1-23,48.5-50.1,48c-27.1-0.6-48.5-23-48-50.1c5.4-255.2,259.2-418.6,490-418.6c236.2,0,484.6,163.4,490,418.6c0.5,27.1-21,49.5-48,50.1c-27.1,0.5-49.5-21-50.1-48C887.7,750.1,685.2,626.7,500,626.7C314,626.7,112.1,756.4,108.1,949.3"></path><path d="M500,493c108.2,0,196.2-88,196.2-196.2c0-108.1-88-196.2-196.2-196.2c-108.1,0-196.1,88-196.1,196.2C303.9,405,391.8,493,500,493 M500,591.1c-162.5,0-294.2-131.7-294.2-294.2C205.8,134.4,337.5,2.7,500,2.7c162.5,0,294.3,131.7,294.3,294.2C794.2,459.4,662.5,591.1,500,591.1L500,591.1L500,591.1z"></path></svg>'},
                    {'cl':'baproduct','text':'商品展示','svg':'<svg viewBox="0 0 24 24"><path d="M12.434 22.586l7.859-7.858.707.707-8.565 8.565-.001-.001v.001l-12.434-12.434.707-.707 11.727 11.727zm-.033-1.7l-12.401-12.405v-8.481h8.441l12.445 12.401-8.485 8.485zm-4.373-19.886h-7.028v7.067l11.401 11.405 7.07-7.07s-7.534-7.506-11.443-11.402zm-1.598 2.594c.78.78.78 2.048 0 2.828-.781.781-2.048.781-2.829 0-.78-.78-.78-2.048 0-2.828.781-.781 2.048-.781 2.829 0zm-.707.707c.39.39.39 1.024 0 1.414-.391.39-1.024.39-1.414 0-.391-.39-.391-1.024 0-1.414.39-.39 1.023-.39 1.414 0z"></path></svg>'},
                    {'cl':'fnindex','text':'回到首頁','svg':'<svg viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"></path></svg>'},
                    {'cl':'balogout','text':'登出後台','svg':'<svg viewBox="0 0 24 24"><path d="M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"></path></svg>'}
                ]
            })
        ]
    })
}
function seach(o) {
    var a = getUrl('a');
    var p = o.p || 1;
    var addHtml =function(o) {
        $('#main').html($('<div class="BaAllProducts ' + o.a + '"></div>').append(o.n, o.c, o.p));
    
        //showPage
        setTimeout(function() {
            $('.BaAllProducts').each(function(i) {
                $(this).removeClass('active');
                $(this).addClass('active');
            })
        }, 300)
    }
    getAjax({ 'value': [{ 'p': p }, { 'seach': '0' }] }).then(function(data) {
        if (data.result) {
            //頁碼
            var page = creatPageNumber({ 'd': data, 'p': p, 'a': a, 'pn': data['pn']})

            var obj = '';
            if (a == 'bamanager' || a == 'baproduct') {
                console.log(a)
                // obj = bacommon({ 'data': data, 'p': p, 'a': a });
                obj = {
                    n: productsNav({
                        'd': data,
                        'a': a
                    }),
                    c: productsContent({
                        'd': data,
                        'p': p,
                        'a': a
                    })
                }
            } else {
                obj = window[a]({ 'data': data, 'p': p, 'a': a });
            }

            // var obj = window[a]({ 'data': data, 'p': p, 'a': a });
            //html
            addHtml({ 'n': obj.n, 'c': obj.c, 'p': page, 'a': a });
        } else {
            console.log(data.message)
        }
    })


}
window.onload = seach({});
/*page*/
function baprescription(o) {
    function btTFn(o) {
        var rules = o.data;
        var arrays = [];
        var form = $('#myForm');
        var formLeng = 0;
        //rules
        for (var prop in rules) {
            form.find('[name="' + prop + '"]').each(function() {
                formLeng++
                if ($(this).val()) {
                    arrays.push(prop)
                } else {
                    $(this).after('<label id="cove-error" class="error" for="cove">' + rules[prop].error + '</label>')
                }

                $(this).on('blur', function() {
                    $(this).next('.error').remove()
                })
            })
        }

        //send
        if (arrays.length == formLeng) {
            // var parts = [];
            // form.find('.baprescriptionTextRow .baprescriptionTextFlex input[name="part"]').each(function(i, v) {
            //     parts.push({ 'id': $(this).data('id'), 'part': $(this).val() });
            // })

            // var symptoms = [];
            // form.find('.baprescriptionTextRow .baprescriptionTextFlex input[name="symptom"]').each(function(i, v) {
            //     symptoms.push({ 'id': $(this).data('id'), 'symptom': $(this).val() });
            // })

            var parts = [];
            console.log(form.find('.part'))
            form.find('.part').each(function(i, v) {
                // console.log($(this).data('value'), $(this).text())
                parts.push($(this).data('value'));
            })

            var symptoms = [];
            form.find('.symptom').each(function(i, v) {
                symptoms.push($(this).data('value'));
            })

            var bp = [];
            form.find('.baprescriptionMultipleTextRow .baprescriptionMultipleTextFlex').each(function(i, v) {
                bp.push({
                    'practice': $(this).find('input[name="practice"]').val(),
                    'id': $(this).find('input[name="practice"]').data('id'),
                    'dose': $(this).find('input[name="dose"]').val(),
                    'img2': $(this).find('input[name="img2"]').val(),
                    'bpName': $(this).find('input[name="bpname"]').val(),
                })
            })

            // console.log(img, bn, bt, is, bi, bp)
            var value = [
                { 'img': form.find('input[name="Image2"]').val() },
                { 'id': form.find('input[name="id"]').val() },
                { 'bn': form.find('#bn').val() },
                { 'bt': form.find('input[name="bt"]').val() },
                { 'is': form.find('input[name="is_Release"]:checked').val() },
                { 'part': parts.join(',') },
                { 'symptom': symptoms.join(',') },
                { 'indications': form.find('textarea[name="indications"]').val() },
                { 'bp': JSON.stringify(bp) },
                // { 'add': 0 }
            ]
            value.push(o.event)
            send({ 'value': value })
        }
    }
    return {
        productsNav: productsNav({
            'd': o.data,
            'a': o.a,
            'p': o.p,
            'btTFn': function(e) {
                e.preventDefault();
                btTFn({
                    'data': o.data.customRow.validate.rules,
                    'event': { 'add': 0 }
                });
            }
        }),
        productsContent: productsContent({
            'd': o.data,
            'p': o.p,
            'a': o.a,
            'btTFn': function(e) {
                e.preventDefault();
                btTFn({
                    'data': o.data.customRow.validate.rules,
                    'event': { 'edit': 0 }
                });
            }
        })
    }
}