function creatNav(){
    var json = {
        'list_TW': [
            {'text':'公司簡介','href':'?a=fnintroduction'},
            {'text':'產品展示','href':'?a=fnproduct'},
            {'text':'機械設備','href':'?a=fnequipment'},
            {'text':'資質認證','href':'?a=fncertification'},
            {'text':'聯絡方式','href':'?a=fncontact'},
        ],
        'list_EN': [
            {'text':'about','href':'?a=fnintroduction'},
            {'text':'product','href':'?a=fnproduct'},
            {'text':'equipment','href':'?a=fnequipment'},
            {'text':'certification','href':'?a=fncertification'},
            {'text':'contact','href':'?a=fncontact'},
        ]
    }
    return creatHtml({
        'tage': 'div',
        'cl':'fnNav',
        'addHtml': [
            creatHtml({
                'tage': 'a',
                'cl':'logo scrollAnimation',
                'attr': {'href':'?a=fnhome'},
                'text': '<svg viewBox="0 0 100 115"><defs><linearGradient id="a" x1="50.24" y1="85.24" x2="50.24" y2="14.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aa8107"/><stop offset="0.09" stop-color="#9b6d08"/><stop offset="0.17" stop-color="#8b570a"/><stop offset="0.21" stop-color="#915f10"/><stop offset="0.29" stop-color="#a2761f"/><stop offset="0.38" stop-color="#be9a39"/><stop offset="0.39" stop-color="#c19e3c"/><stop offset="0.44" stop-color="#d1b34d"/><stop offset="0.52" stop-color="#e4ce62"/><stop offset="0.61" stop-color="#f2e272"/><stop offset="0.69" stop-color="#faed7b"/><stop offset="0.78" stop-color="#fdf17e"/><stop offset="0.82" stop-color="#f9ea78"/><stop offset="0.87" stop-color="#edd769"/><stop offset="0.94" stop-color="#dbb84f"/><stop offset="1" stop-color="#c3912f"/></linearGradient><linearGradient id="b" x1="1.8" y1="49.44" x2="98.33" y2="49.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cfa738"/><stop offset="0.02" stop-color="#c39a33"/><stop offset="0.06" stop-color="#ac812a"/><stop offset="0.1" stop-color="#9e7124"/><stop offset="0.13" stop-color="#996c22"/><stop offset="0.17" stop-color="#9e7227"/><stop offset="0.23" stop-color="#ab8233"/><stop offset="0.29" stop-color="#c19d49"/><stop offset="0.36" stop-color="#e0c366"/><stop offset="0.39" stop-color="#f2d977"/><stop offset="0.56" stop-color="#ffa"/><stop offset="0.7" stop-color="#e1ab39"/><stop offset="0.73" stop-color="#c99431"/><stop offset="0.78" stop-color="#a46f25"/><stop offset="0.84" stop-color="#86531b"/><stop offset="0.9" stop-color="#713e15"/><stop offset="0.95" stop-color="#643210"/><stop offset="1" stop-color="#602e0f"/></linearGradient></defs><path d="M10.43,110.91H8.72l-4-4.79a3,3,0,0,1-.28-.37h0v5.16H3.15V100.44H4.37v4.92h0a2.87,2.87,0,0,1,.28-.36l3.91-4.56h1.53l-4.49,5Z" style="fill:#eac954"/><path d="M14.07,100.44v1.05H13v8.37h1v1.05H10.8v-1.05h1v-8.37h-1v-1.05Z" style="fill:#eac954"/><path d="M24.24,110.91h-1.5l-5.39-8.35a3.45,3.45,0,0,1-.34-.66h0a10.91,10.91,0,0,1,.06,1.44v7.57H15.8V100.44h1.59l5.24,8.22c.22.34.36.57.42.7h0a11,11,0,0,1-.07-1.54v-7.38h1.23Z" style="fill:#eac954"/><path d="M34.82,110.2a7,7,0,0,1-3.51.89,4.79,4.79,0,0,1-3.63-1.45,5.3,5.3,0,0,1-1.38-3.83,5.44,5.44,0,0,1,1.54-4,5.24,5.24,0,0,1,3.9-1.56,6.63,6.63,0,0,1,2.87.55v1.36a5.51,5.51,0,0,0-3-.8,3.76,3.76,0,0,0-2.88,1.21,5.06,5.06,0,0,0-.08,6.26A3.66,3.66,0,0,0,31.46,110a4.38,4.38,0,0,0,2.13-.49v-2.94H31.3v-1.11h3.52Z" style="fill:#eac954"/><path d="M41.35,110.91V100.44h3a3.26,3.26,0,0,1,2.15.66,2.15,2.15,0,0,1,.8,1.73,2.55,2.55,0,0,1-.48,1.55,2.6,2.6,0,0,1-1.33.93v0a2.67,2.67,0,0,1,1.69.8,2.46,2.46,0,0,1,.64,1.76,2.74,2.74,0,0,1-1,2.18,3.59,3.59,0,0,1-2.43.83Zm1.23-9.36v3.38h1.26a2.38,2.38,0,0,0,1.58-.49,1.69,1.69,0,0,0,.58-1.37q0-1.53-2-1.53Zm0,4.48v3.77h1.66a2.5,2.5,0,0,0,1.68-.51,1.75,1.75,0,0,0,.6-1.4Q46.51,106,44,106Z" style="fill:#eac954"/><path d="M54.14,111.09a4.6,4.6,0,0,1-3.57-1.47,5.45,5.45,0,0,1-1.34-3.82,5.77,5.77,0,0,1,1.37-4,4.77,4.77,0,0,1,3.72-1.5,4.49,4.49,0,0,1,3.49,1.46,5.46,5.46,0,0,1,1.33,3.82,5.79,5.79,0,0,1-1.36,4.05A4.68,4.68,0,0,1,54.14,111.09Zm.09-9.71a3.37,3.37,0,0,0-2.68,1.19,5.29,5.29,0,0,0,0,6.24A3.27,3.27,0,0,0,54.14,110a3.44,3.44,0,0,0,2.72-1.12,4.6,4.6,0,0,0,1-3.15,4.8,4.8,0,0,0-1-3.21A3.31,3.31,0,0,0,54.23,101.38Z" style="fill:#eac954"/><path d="M67.38,101.55h-3v9.36H63.13v-9.36h-3v-1.11h7.27Z" style="fill:#eac954"/><path d="M75.22,101.55h-3v9.36H71v-9.36H68v-1.11h7.27Z" style="fill:#eac954"/><path d="M82.3,110.91H76.86V100.44h1.23v9.36H82.3Z" style="fill:#eac954"/><path d="M89.45,110.91H83.9V100.44h5.32v1.11H85.13V105h3.78v1.1H85.13v3.67h4.32Z" style="fill:#eac954"/><path d="M91,110.49V109a2.82,2.82,0,0,0,.6.39,4.79,4.79,0,0,0,.73.3,5.74,5.74,0,0,0,.77.19,4.29,4.29,0,0,0,.72.07,2.81,2.81,0,0,0,1.69-.42,1.58,1.58,0,0,0,.37-1.95,2.09,2.09,0,0,0-.51-.57,5.13,5.13,0,0,0-.78-.5l-1-.5c-.37-.19-.71-.37-1-.56a4.4,4.4,0,0,1-.83-.63,2.62,2.62,0,0,1-.55-.78,2.66,2.66,0,0,1,.11-2.26,2.67,2.67,0,0,1,.83-.87,3.73,3.73,0,0,1,1.16-.51,5.37,5.37,0,0,1,1.33-.17,5.13,5.13,0,0,1,2.26.37V102a4.09,4.09,0,0,0-2.38-.64,3.9,3.9,0,0,0-.8.08,2.26,2.26,0,0,0-.72.27,1.58,1.58,0,0,0-.51.49,1.3,1.3,0,0,0-.2.73,1.5,1.5,0,0,0,.15.69,1.7,1.7,0,0,0,.44.53,4.37,4.37,0,0,0,.71.47l1,.5q.56.28,1.07.58a4.81,4.81,0,0,1,.88.68,3,3,0,0,1,.6.82,2.32,2.32,0,0,1,.22,1,2.63,2.63,0,0,1-.3,1.31,2.48,2.48,0,0,1-.82.87,3.55,3.55,0,0,1-1.19.49,6.49,6.49,0,0,1-1.42.15,5.75,5.75,0,0,1-.61,0c-.24,0-.49-.07-.74-.12a6,6,0,0,1-.72-.19A2.26,2.26,0,0,1,91,110.49Z" style="fill:#eac954"/><path d="M4.39,93.5c-.94-1.4-.25-2.83-.24-4.21,0-.89-.3-1.87.36-2.69-.68-.82.4-1.75-.18-2.62-.17-.25.05-.75.08-1.14s.05-.66.06-1c0-.11-.1-.22-.1-.33,0-1.36,0-2.73,0-4.09a13.79,13.79,0,0,1,.33-1.84c0-.14.11-.34,0-.4-.71-.77-.25-1.66-.28-2.49-.07-2.36-.1-4.73-.11-7.09,0-1,.09-2,.1-3,0-1.86,0-3.72,0-5.58,0-1.24,0-2.49,0-3.73,0-.4-.06-.79-.07-1.19-.05-2.49-.11-5-.14-7.46,0-.45.16-.9.17-1.36,0-.72-.06-1.44-.05-2.16,0-2.18,0-4.36,0-6.54,0-.56-.16-1.13-.15-1.69,0-1,.07-2.08.1-3.12,0-.27-.07-.54-.06-.82,0-1.41.07-2.81.07-4.22,0-.48-.13-1-.16-1.43,0-.82.06-1.64.08-2.46,0-.24,0-.47,0-.71a5.23,5.23,0,0,0,0-.89c-.11-.51-.45-1,.07-1.52.09-.08,0-.49-.11-.6-.58-.5-.46-.91.12-1.28-.7-1.35.42-3-.79-4.17l.84-.32a5.24,5.24,0,0,1-.51-3.24c0-.32-.33-.66-.44-1S3,6,3.21,5.7A2,2,0,0,1,4.65,5.2c3,0,6,.22,9,.24,3.69,0,7.37,0,11.06,0,.91,0,1.82.14,2.73.13s1.76-.17,2.64-.23a1,1,0,0,1,1.07,1.11Q31,10.46,31,14.52c0,3.25-.08,6.49-.12,9.74,0,2.47-.06,4.94-.06,7.41a1.11,1.11,0,0,0,1.69,1c1.19-.74,2.48-1.42,2.87-3a.57.57,0,0,1,.21-.35A5.86,5.86,0,0,0,38,26.89c.18-.3.4-.54.84-.21s.54.08.57-.37a.82.82,0,0,1,.43-.59c1.23-.48,2.49-.88,3.72-1.37a2.2,2.2,0,0,0,.9-.75c.82-1.14,1.58-2.31,2.38-3.47.27-.4.55-.81.85-1.18a17.71,17.71,0,0,1,1.41-1.61c1.39-1.33,2.79-2.66,4.24-3.93.6-.52,1.4-.81,2-1.34.88-.78,1.64-1.7,2.49-2.51a4.85,4.85,0,0,1,4.87-1,8.29,8.29,0,0,1,1.08.35,3.43,3.43,0,0,1,2.12,2.4,61.82,61.82,0,0,0,2.47,5.83c.92,2.11,1.85,4.21,2.76,6.32a30,30,0,0,1,1.27,3.11,3.22,3.22,0,0,1-.71,2.83c-.13.18-.48.21-.75.33a2,2,0,0,1-1.45,1.7,21.83,21.83,0,0,1-5.85,1.48.87.87,0,0,0-.55.22A11.17,11.17,0,0,1,59.83,35a5,5,0,0,0-1.58,1.38q-1.79,2.34-3.45,4.78c-1,1.45-1.76,3-2.82,4.42a41.73,41.73,0,0,0-3,5.35,49.09,49.09,0,0,0-2.21,4.69c-.84,2-1.72,3.91-2.37,5.93-1,3,.56,6.64,4.23,7.09A6.67,6.67,0,0,0,53.51,67c1.3-1,2.67-1.83,4-2.76.84-.6,1.64-1.26,2.49-1.85,1-.72,2.11-1.38,3.17-2.07l.15-.09c1.05-.82,2.07-1.7,3.17-2.46.9-.62,1.92-1.06,2.83-1.66C70.91,55.1,72.38,53.84,74,53c.94-.5,1.5-1.32,2.33-1.84s2-1.11,2.93-1.71a12.52,12.52,0,0,0,2-1.47,1,1,0,0,1,1.52-.08c.67.6,1.28,1.26,2,1.85,1.11,1,1.24,1,2.49.24,1.59-.91,3.1.07,3.51,1.7a2.69,2.69,0,0,0,1.1,1.57c1.06.83,2,1.75,3,2.66a.78.78,0,0,1,.15.56c-.11,1.44.77,2.34,1.71,3.23a2,2,0,0,1,.54,1c0,.11-.47.35-.75.49-1.38.69-2.77,1.35-4.14,2s-2.74,1.36-4.06,2.12-2.42,1.57-3.64,2.35c-1.86,1.2-3.76,2.35-5.6,3.59-1,.7-2,1.55-3,2.3-1.18.87-2.4,1.67-3.57,2.56Q70.25,77.88,68,79.72c-1.48,1.2-2.93,2.45-4.39,3.68a2.17,2.17,0,0,0-.48.5c-1.51,2.52-3.93,3.57-6.65,4.07a34.18,34.18,0,0,1-5.56.71,29.8,29.8,0,0,1-6.66-.5,46.57,46.57,0,0,0-4.63-.93,5.46,5.46,0,0,1-1.69-.15c-.88-.43-1.64-1.12-2.5-1.61a20.36,20.36,0,0,0-2.56-1.17c-.44-.17-.64.12-.62.56.06,1.33.13,2.66.16,4s.05,2.54,0,3.8c0,.67-.71,1-1.61.91-2-.12-4-.16-6.06-.21s-3.88-.08-5.83-.1c-1.42,0-2.85,0-4.27,0-1.15,0-2.29.2-3.44.23-.52,0-1.05-.23-1.58-.24a7.69,7.69,0,0,0-1.23.25,1.69,1.69,0,0,1-.85,0A4.52,4.52,0,0,0,4.39,93.5Z" style="fill:url(#a)"/><path d="M4.39,93.5c-.94-1.4-.25-2.83-.24-4.21,0-.89-.3-1.87.36-2.69-.68-.82.4-1.75-.18-2.62-.17-.25.05-.75.08-1.14s.05-.66.06-1c0-.11-.1-.22-.1-.33,0-1.36,0-2.73,0-4.09a13.79,13.79,0,0,1,.33-1.84c0-.14.11-.34,0-.4-.71-.77-.25-1.66-.28-2.49-.07-2.36-.1-4.73-.11-7.09,0-1,.09-2,.1-3,0-1.86,0-3.72,0-5.58,0-1.24,0-2.49,0-3.73,0-.4-.06-.79-.07-1.19-.05-2.49-.11-5-.14-7.46,0-.45.16-.9.17-1.36,0-.72-.06-1.44-.05-2.16,0-2.18,0-4.36,0-6.54,0-.56-.16-1.13-.15-1.69,0-1,.07-2.08.1-3.12,0-.27-.07-.54-.06-.82,0-1.41.07-2.81.07-4.22,0-.48-.13-1-.16-1.43,0-.82.06-1.64.08-2.46,0-.24,0-.47,0-.71a5.23,5.23,0,0,0,0-.89c-.11-.51-.45-1,.07-1.52.09-.08,0-.49-.11-.6-.58-.5-.46-.91.12-1.28-.7-1.35.42-3-.79-4.17l.84-.32a5.24,5.24,0,0,1-.51-3.24c0-.32-.33-.66-.44-1S3,6,3.21,5.7A2,2,0,0,1,4.65,5.2c3,0,6,.22,9,.24,3.69,0,7.37,0,11.06,0,.91,0,1.82.14,2.73.13s1.76-.17,2.64-.23a1,1,0,0,1,1.07,1.11Q31,10.46,31,14.52c0,3.25-.08,6.49-.12,9.74,0,2.47-.06,4.94-.06,7.41a1.11,1.11,0,0,0,1.69,1c1.19-.74,2.48-1.42,2.87-3a.57.57,0,0,1,.21-.35A5.86,5.86,0,0,0,38,26.89c.18-.3.4-.54.84-.21s.54.08.57-.37a.82.82,0,0,1,.43-.59c1.23-.48,2.49-.88,3.72-1.37a2.2,2.2,0,0,0,.9-.75c.82-1.14,1.58-2.31,2.38-3.47.27-.4.55-.81.85-1.18a17.71,17.71,0,0,1,1.41-1.61c1.39-1.33,2.79-2.66,4.24-3.93.6-.52,1.4-.81,2-1.34.88-.78,1.64-1.7,2.49-2.51a4.85,4.85,0,0,1,4.87-1,8.29,8.29,0,0,1,1.08.35,3.43,3.43,0,0,1,2.12,2.4,61.82,61.82,0,0,0,2.47,5.83c.92,2.11,1.85,4.21,2.76,6.32a30,30,0,0,1,1.27,3.11,3.22,3.22,0,0,1-.71,2.83c-.13.18-.48.21-.75.33a2,2,0,0,1-1.45,1.7,21.83,21.83,0,0,1-5.85,1.48.87.87,0,0,0-.55.22A11.17,11.17,0,0,1,59.83,35a5,5,0,0,0-1.58,1.38q-1.79,2.34-3.45,4.78c-1,1.45-1.76,3-2.82,4.42a41.73,41.73,0,0,0-3,5.35,49.09,49.09,0,0,0-2.21,4.69c-.84,2-1.72,3.91-2.37,5.93-1,3,.56,6.64,4.23,7.09A6.67,6.67,0,0,0,53.51,67c1.3-1,2.67-1.83,4-2.76.84-.6,1.64-1.26,2.49-1.85,1-.72,2.11-1.38,3.17-2.07l.15-.09c1.05-.82,2.07-1.7,3.17-2.46.9-.62,1.92-1.06,2.83-1.66C70.91,55.1,72.38,53.84,74,53c.94-.5,1.5-1.32,2.33-1.84s2-1.11,2.93-1.71a12.52,12.52,0,0,0,2-1.47,1,1,0,0,1,1.52-.08c.67.6,1.28,1.26,2,1.85,1.11,1,1.24,1,2.49.24,1.59-.91,3.1.07,3.51,1.7a2.69,2.69,0,0,0,1.1,1.57c1.06.83,2,1.75,3,2.66a.78.78,0,0,1,.15.56c-.11,1.44.77,2.34,1.71,3.23a2,2,0,0,1,.54,1c0,.11-.47.35-.75.49-1.38.69-2.77,1.35-4.14,2s-2.74,1.36-4.06,2.12-2.42,1.57-3.64,2.35c-1.86,1.2-3.76,2.35-5.6,3.59-1,.7-2,1.55-3,2.3-1.18.87-2.4,1.67-3.57,2.56Q70.25,77.88,68,79.72c-1.48,1.2-2.93,2.45-4.39,3.68a2.17,2.17,0,0,0-.48.5c-1.51,2.52-3.93,3.57-6.65,4.07a34.18,34.18,0,0,1-5.56.71,29.8,29.8,0,0,1-6.66-.5,46.57,46.57,0,0,0-4.63-.93,5.46,5.46,0,0,1-1.69-.15c-.88-.43-1.64-1.12-2.5-1.61a20.36,20.36,0,0,0-2.56-1.17c-.44-.17-.64.12-.62.56.06,1.33.13,2.66.16,4s.05,2.54,0,3.8c0,.67-.71,1-1.61.91-2-.12-4-.16-6.06-.21s-3.88-.08-5.83-.1c-1.42,0-2.85,0-4.27,0-1.15,0-2.29.2-3.44.23-.52,0-1.05-.23-1.58-.24a7.69,7.69,0,0,0-1.23.25,1.69,1.69,0,0,1-.85,0A4.52,4.52,0,0,0,4.39,93.5Z" style="fill:none;stroke-miterlimit:10;stroke-width:2px;stroke:url(#b)"/></svg>'
            }),
            creatHtml({
                'tage': 'ul',
                'cl':'list scrollAnimation',
                'addHtml': json['list_'+getLanguage()].map((element)=>{
                    return creatHtml({
                        'tage': 'li',
                        'addHtml':creatHtml({
                            'tage': 'a',
                            'cl': element.href.split('=')[1]==getUrl('a')?'active':'',
                            'attr': {'href':element.href},
                            'text': element.text
                        })
                    })
                })
            }),
            creatHtml({
                'tage': 'ul',
                'cl':'language scrollAnimation',
                'addHtml': ['TW','EN'].map((element)=>{
                    return creatHtml({
                        'tage': 'li',
                        'cl': getLanguage()==element?'active':'',
                        'text': element,
                        'handler': function(){
                            localStorage.setItem('language', element);
                            window[getUrl('a')]({})
                        }
                    })
                })
            }),
            creatHtml({
                'tage': 'div',
                'cl':'bar',
                'addHtml': [0,1,2].map((element)=>{
                    return creatHtml({'tage': 'div'})
                }),
                'handler':function(){
                    var body = document.querySelector('body')
                    var fnNav = this.closest('.fnNav')
                    if(fnNav.classList.contains('active')){
                        fnNav.classList.remove('active')
                        body.style.overflow = '';
                    }else{
                        fnNav.classList.add('active')
                        body.style.overflow = 'hidden';
                    }
                }
            }),
        ]
    })

}
function creatFooter(){
    var json = {
        'phone_TW': {'text':'電話'},
        'phone_EN': {'text':'phone'},
        'email_TW': {'text':'信箱'},
        'email_EN': {'text':'email'},
        'list_TW': [
            {'text':'公司簡介','href':'?a=fnintroduction'},
            {'text':'產品展示','href':'?a=fnproduct'},
            {'text':'機械設備','href':'?a=fnequipment'},
            {'text':'資質認證','href':'?a=fncertification'},
            {'text':'聯絡方式','href':'?a=fncontact'},
        ],
        'list_EN': [
            {'text':'about','href':'?a=fnintroduction'},
            {'text':'product','href':'?a=fnproduct'},
            {'text':'equipment','href':'?a=fnequipment'},
            {'text':'certification','href':'?a=fncertification'},
            {'text':'contact','href':'?a=fncontact'},
        ]
    }
    return creatHtml({
        'tage': 'div',
        'cl':'fnFooter',
        'addHtml': creatHtml({
            'tage': 'div',
            'cl':'container',
            'addHtml': [
                creatHtml({
                    'tage': 'div',
                    'cl':'logo',
                    'text': '<svg viewBox="0 0 100 115"><defs><linearGradient id="a" x1="50.24" y1="85.24" x2="50.24" y2="14.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aa8107"/><stop offset="0.09" stop-color="#9b6d08"/><stop offset="0.17" stop-color="#8b570a"/><stop offset="0.21" stop-color="#915f10"/><stop offset="0.29" stop-color="#a2761f"/><stop offset="0.38" stop-color="#be9a39"/><stop offset="0.39" stop-color="#c19e3c"/><stop offset="0.44" stop-color="#d1b34d"/><stop offset="0.52" stop-color="#e4ce62"/><stop offset="0.61" stop-color="#f2e272"/><stop offset="0.69" stop-color="#faed7b"/><stop offset="0.78" stop-color="#fdf17e"/><stop offset="0.82" stop-color="#f9ea78"/><stop offset="0.87" stop-color="#edd769"/><stop offset="0.94" stop-color="#dbb84f"/><stop offset="1" stop-color="#c3912f"/></linearGradient><linearGradient id="b" x1="1.8" y1="49.44" x2="98.33" y2="49.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cfa738"/><stop offset="0.02" stop-color="#c39a33"/><stop offset="0.06" stop-color="#ac812a"/><stop offset="0.1" stop-color="#9e7124"/><stop offset="0.13" stop-color="#996c22"/><stop offset="0.17" stop-color="#9e7227"/><stop offset="0.23" stop-color="#ab8233"/><stop offset="0.29" stop-color="#c19d49"/><stop offset="0.36" stop-color="#e0c366"/><stop offset="0.39" stop-color="#f2d977"/><stop offset="0.56" stop-color="#ffa"/><stop offset="0.7" stop-color="#e1ab39"/><stop offset="0.73" stop-color="#c99431"/><stop offset="0.78" stop-color="#a46f25"/><stop offset="0.84" stop-color="#86531b"/><stop offset="0.9" stop-color="#713e15"/><stop offset="0.95" stop-color="#643210"/><stop offset="1" stop-color="#602e0f"/></linearGradient></defs><path d="M10.43,110.91H8.72l-4-4.79a3,3,0,0,1-.28-.37h0v5.16H3.15V100.44H4.37v4.92h0a2.87,2.87,0,0,1,.28-.36l3.91-4.56h1.53l-4.49,5Z" style="fill:#eac954"/><path d="M14.07,100.44v1.05H13v8.37h1v1.05H10.8v-1.05h1v-8.37h-1v-1.05Z" style="fill:#eac954"/><path d="M24.24,110.91h-1.5l-5.39-8.35a3.45,3.45,0,0,1-.34-.66h0a10.91,10.91,0,0,1,.06,1.44v7.57H15.8V100.44h1.59l5.24,8.22c.22.34.36.57.42.7h0a11,11,0,0,1-.07-1.54v-7.38h1.23Z" style="fill:#eac954"/><path d="M34.82,110.2a7,7,0,0,1-3.51.89,4.79,4.79,0,0,1-3.63-1.45,5.3,5.3,0,0,1-1.38-3.83,5.44,5.44,0,0,1,1.54-4,5.24,5.24,0,0,1,3.9-1.56,6.63,6.63,0,0,1,2.87.55v1.36a5.51,5.51,0,0,0-3-.8,3.76,3.76,0,0,0-2.88,1.21,5.06,5.06,0,0,0-.08,6.26A3.66,3.66,0,0,0,31.46,110a4.38,4.38,0,0,0,2.13-.49v-2.94H31.3v-1.11h3.52Z" style="fill:#eac954"/><path d="M41.35,110.91V100.44h3a3.26,3.26,0,0,1,2.15.66,2.15,2.15,0,0,1,.8,1.73,2.55,2.55,0,0,1-.48,1.55,2.6,2.6,0,0,1-1.33.93v0a2.67,2.67,0,0,1,1.69.8,2.46,2.46,0,0,1,.64,1.76,2.74,2.74,0,0,1-1,2.18,3.59,3.59,0,0,1-2.43.83Zm1.23-9.36v3.38h1.26a2.38,2.38,0,0,0,1.58-.49,1.69,1.69,0,0,0,.58-1.37q0-1.53-2-1.53Zm0,4.48v3.77h1.66a2.5,2.5,0,0,0,1.68-.51,1.75,1.75,0,0,0,.6-1.4Q46.51,106,44,106Z" style="fill:#eac954"/><path d="M54.14,111.09a4.6,4.6,0,0,1-3.57-1.47,5.45,5.45,0,0,1-1.34-3.82,5.77,5.77,0,0,1,1.37-4,4.77,4.77,0,0,1,3.72-1.5,4.49,4.49,0,0,1,3.49,1.46,5.46,5.46,0,0,1,1.33,3.82,5.79,5.79,0,0,1-1.36,4.05A4.68,4.68,0,0,1,54.14,111.09Zm.09-9.71a3.37,3.37,0,0,0-2.68,1.19,5.29,5.29,0,0,0,0,6.24A3.27,3.27,0,0,0,54.14,110a3.44,3.44,0,0,0,2.72-1.12,4.6,4.6,0,0,0,1-3.15,4.8,4.8,0,0,0-1-3.21A3.31,3.31,0,0,0,54.23,101.38Z" style="fill:#eac954"/><path d="M67.38,101.55h-3v9.36H63.13v-9.36h-3v-1.11h7.27Z" style="fill:#eac954"/><path d="M75.22,101.55h-3v9.36H71v-9.36H68v-1.11h7.27Z" style="fill:#eac954"/><path d="M82.3,110.91H76.86V100.44h1.23v9.36H82.3Z" style="fill:#eac954"/><path d="M89.45,110.91H83.9V100.44h5.32v1.11H85.13V105h3.78v1.1H85.13v3.67h4.32Z" style="fill:#eac954"/><path d="M91,110.49V109a2.82,2.82,0,0,0,.6.39,4.79,4.79,0,0,0,.73.3,5.74,5.74,0,0,0,.77.19,4.29,4.29,0,0,0,.72.07,2.81,2.81,0,0,0,1.69-.42,1.58,1.58,0,0,0,.37-1.95,2.09,2.09,0,0,0-.51-.57,5.13,5.13,0,0,0-.78-.5l-1-.5c-.37-.19-.71-.37-1-.56a4.4,4.4,0,0,1-.83-.63,2.62,2.62,0,0,1-.55-.78,2.66,2.66,0,0,1,.11-2.26,2.67,2.67,0,0,1,.83-.87,3.73,3.73,0,0,1,1.16-.51,5.37,5.37,0,0,1,1.33-.17,5.13,5.13,0,0,1,2.26.37V102a4.09,4.09,0,0,0-2.38-.64,3.9,3.9,0,0,0-.8.08,2.26,2.26,0,0,0-.72.27,1.58,1.58,0,0,0-.51.49,1.3,1.3,0,0,0-.2.73,1.5,1.5,0,0,0,.15.69,1.7,1.7,0,0,0,.44.53,4.37,4.37,0,0,0,.71.47l1,.5q.56.28,1.07.58a4.81,4.81,0,0,1,.88.68,3,3,0,0,1,.6.82,2.32,2.32,0,0,1,.22,1,2.63,2.63,0,0,1-.3,1.31,2.48,2.48,0,0,1-.82.87,3.55,3.55,0,0,1-1.19.49,6.49,6.49,0,0,1-1.42.15,5.75,5.75,0,0,1-.61,0c-.24,0-.49-.07-.74-.12a6,6,0,0,1-.72-.19A2.26,2.26,0,0,1,91,110.49Z" style="fill:#eac954"/><path d="M4.39,93.5c-.94-1.4-.25-2.83-.24-4.21,0-.89-.3-1.87.36-2.69-.68-.82.4-1.75-.18-2.62-.17-.25.05-.75.08-1.14s.05-.66.06-1c0-.11-.1-.22-.1-.33,0-1.36,0-2.73,0-4.09a13.79,13.79,0,0,1,.33-1.84c0-.14.11-.34,0-.4-.71-.77-.25-1.66-.28-2.49-.07-2.36-.1-4.73-.11-7.09,0-1,.09-2,.1-3,0-1.86,0-3.72,0-5.58,0-1.24,0-2.49,0-3.73,0-.4-.06-.79-.07-1.19-.05-2.49-.11-5-.14-7.46,0-.45.16-.9.17-1.36,0-.72-.06-1.44-.05-2.16,0-2.18,0-4.36,0-6.54,0-.56-.16-1.13-.15-1.69,0-1,.07-2.08.1-3.12,0-.27-.07-.54-.06-.82,0-1.41.07-2.81.07-4.22,0-.48-.13-1-.16-1.43,0-.82.06-1.64.08-2.46,0-.24,0-.47,0-.71a5.23,5.23,0,0,0,0-.89c-.11-.51-.45-1,.07-1.52.09-.08,0-.49-.11-.6-.58-.5-.46-.91.12-1.28-.7-1.35.42-3-.79-4.17l.84-.32a5.24,5.24,0,0,1-.51-3.24c0-.32-.33-.66-.44-1S3,6,3.21,5.7A2,2,0,0,1,4.65,5.2c3,0,6,.22,9,.24,3.69,0,7.37,0,11.06,0,.91,0,1.82.14,2.73.13s1.76-.17,2.64-.23a1,1,0,0,1,1.07,1.11Q31,10.46,31,14.52c0,3.25-.08,6.49-.12,9.74,0,2.47-.06,4.94-.06,7.41a1.11,1.11,0,0,0,1.69,1c1.19-.74,2.48-1.42,2.87-3a.57.57,0,0,1,.21-.35A5.86,5.86,0,0,0,38,26.89c.18-.3.4-.54.84-.21s.54.08.57-.37a.82.82,0,0,1,.43-.59c1.23-.48,2.49-.88,3.72-1.37a2.2,2.2,0,0,0,.9-.75c.82-1.14,1.58-2.31,2.38-3.47.27-.4.55-.81.85-1.18a17.71,17.71,0,0,1,1.41-1.61c1.39-1.33,2.79-2.66,4.24-3.93.6-.52,1.4-.81,2-1.34.88-.78,1.64-1.7,2.49-2.51a4.85,4.85,0,0,1,4.87-1,8.29,8.29,0,0,1,1.08.35,3.43,3.43,0,0,1,2.12,2.4,61.82,61.82,0,0,0,2.47,5.83c.92,2.11,1.85,4.21,2.76,6.32a30,30,0,0,1,1.27,3.11,3.22,3.22,0,0,1-.71,2.83c-.13.18-.48.21-.75.33a2,2,0,0,1-1.45,1.7,21.83,21.83,0,0,1-5.85,1.48.87.87,0,0,0-.55.22A11.17,11.17,0,0,1,59.83,35a5,5,0,0,0-1.58,1.38q-1.79,2.34-3.45,4.78c-1,1.45-1.76,3-2.82,4.42a41.73,41.73,0,0,0-3,5.35,49.09,49.09,0,0,0-2.21,4.69c-.84,2-1.72,3.91-2.37,5.93-1,3,.56,6.64,4.23,7.09A6.67,6.67,0,0,0,53.51,67c1.3-1,2.67-1.83,4-2.76.84-.6,1.64-1.26,2.49-1.85,1-.72,2.11-1.38,3.17-2.07l.15-.09c1.05-.82,2.07-1.7,3.17-2.46.9-.62,1.92-1.06,2.83-1.66C70.91,55.1,72.38,53.84,74,53c.94-.5,1.5-1.32,2.33-1.84s2-1.11,2.93-1.71a12.52,12.52,0,0,0,2-1.47,1,1,0,0,1,1.52-.08c.67.6,1.28,1.26,2,1.85,1.11,1,1.24,1,2.49.24,1.59-.91,3.1.07,3.51,1.7a2.69,2.69,0,0,0,1.1,1.57c1.06.83,2,1.75,3,2.66a.78.78,0,0,1,.15.56c-.11,1.44.77,2.34,1.71,3.23a2,2,0,0,1,.54,1c0,.11-.47.35-.75.49-1.38.69-2.77,1.35-4.14,2s-2.74,1.36-4.06,2.12-2.42,1.57-3.64,2.35c-1.86,1.2-3.76,2.35-5.6,3.59-1,.7-2,1.55-3,2.3-1.18.87-2.4,1.67-3.57,2.56Q70.25,77.88,68,79.72c-1.48,1.2-2.93,2.45-4.39,3.68a2.17,2.17,0,0,0-.48.5c-1.51,2.52-3.93,3.57-6.65,4.07a34.18,34.18,0,0,1-5.56.71,29.8,29.8,0,0,1-6.66-.5,46.57,46.57,0,0,0-4.63-.93,5.46,5.46,0,0,1-1.69-.15c-.88-.43-1.64-1.12-2.5-1.61a20.36,20.36,0,0,0-2.56-1.17c-.44-.17-.64.12-.62.56.06,1.33.13,2.66.16,4s.05,2.54,0,3.8c0,.67-.71,1-1.61.91-2-.12-4-.16-6.06-.21s-3.88-.08-5.83-.1c-1.42,0-2.85,0-4.27,0-1.15,0-2.29.2-3.44.23-.52,0-1.05-.23-1.58-.24a7.69,7.69,0,0,0-1.23.25,1.69,1.69,0,0,1-.85,0A4.52,4.52,0,0,0,4.39,93.5Z" style="fill:url(#a)"/><path d="M4.39,93.5c-.94-1.4-.25-2.83-.24-4.21,0-.89-.3-1.87.36-2.69-.68-.82.4-1.75-.18-2.62-.17-.25.05-.75.08-1.14s.05-.66.06-1c0-.11-.1-.22-.1-.33,0-1.36,0-2.73,0-4.09a13.79,13.79,0,0,1,.33-1.84c0-.14.11-.34,0-.4-.71-.77-.25-1.66-.28-2.49-.07-2.36-.1-4.73-.11-7.09,0-1,.09-2,.1-3,0-1.86,0-3.72,0-5.58,0-1.24,0-2.49,0-3.73,0-.4-.06-.79-.07-1.19-.05-2.49-.11-5-.14-7.46,0-.45.16-.9.17-1.36,0-.72-.06-1.44-.05-2.16,0-2.18,0-4.36,0-6.54,0-.56-.16-1.13-.15-1.69,0-1,.07-2.08.1-3.12,0-.27-.07-.54-.06-.82,0-1.41.07-2.81.07-4.22,0-.48-.13-1-.16-1.43,0-.82.06-1.64.08-2.46,0-.24,0-.47,0-.71a5.23,5.23,0,0,0,0-.89c-.11-.51-.45-1,.07-1.52.09-.08,0-.49-.11-.6-.58-.5-.46-.91.12-1.28-.7-1.35.42-3-.79-4.17l.84-.32a5.24,5.24,0,0,1-.51-3.24c0-.32-.33-.66-.44-1S3,6,3.21,5.7A2,2,0,0,1,4.65,5.2c3,0,6,.22,9,.24,3.69,0,7.37,0,11.06,0,.91,0,1.82.14,2.73.13s1.76-.17,2.64-.23a1,1,0,0,1,1.07,1.11Q31,10.46,31,14.52c0,3.25-.08,6.49-.12,9.74,0,2.47-.06,4.94-.06,7.41a1.11,1.11,0,0,0,1.69,1c1.19-.74,2.48-1.42,2.87-3a.57.57,0,0,1,.21-.35A5.86,5.86,0,0,0,38,26.89c.18-.3.4-.54.84-.21s.54.08.57-.37a.82.82,0,0,1,.43-.59c1.23-.48,2.49-.88,3.72-1.37a2.2,2.2,0,0,0,.9-.75c.82-1.14,1.58-2.31,2.38-3.47.27-.4.55-.81.85-1.18a17.71,17.71,0,0,1,1.41-1.61c1.39-1.33,2.79-2.66,4.24-3.93.6-.52,1.4-.81,2-1.34.88-.78,1.64-1.7,2.49-2.51a4.85,4.85,0,0,1,4.87-1,8.29,8.29,0,0,1,1.08.35,3.43,3.43,0,0,1,2.12,2.4,61.82,61.82,0,0,0,2.47,5.83c.92,2.11,1.85,4.21,2.76,6.32a30,30,0,0,1,1.27,3.11,3.22,3.22,0,0,1-.71,2.83c-.13.18-.48.21-.75.33a2,2,0,0,1-1.45,1.7,21.83,21.83,0,0,1-5.85,1.48.87.87,0,0,0-.55.22A11.17,11.17,0,0,1,59.83,35a5,5,0,0,0-1.58,1.38q-1.79,2.34-3.45,4.78c-1,1.45-1.76,3-2.82,4.42a41.73,41.73,0,0,0-3,5.35,49.09,49.09,0,0,0-2.21,4.69c-.84,2-1.72,3.91-2.37,5.93-1,3,.56,6.64,4.23,7.09A6.67,6.67,0,0,0,53.51,67c1.3-1,2.67-1.83,4-2.76.84-.6,1.64-1.26,2.49-1.85,1-.72,2.11-1.38,3.17-2.07l.15-.09c1.05-.82,2.07-1.7,3.17-2.46.9-.62,1.92-1.06,2.83-1.66C70.91,55.1,72.38,53.84,74,53c.94-.5,1.5-1.32,2.33-1.84s2-1.11,2.93-1.71a12.52,12.52,0,0,0,2-1.47,1,1,0,0,1,1.52-.08c.67.6,1.28,1.26,2,1.85,1.11,1,1.24,1,2.49.24,1.59-.91,3.1.07,3.51,1.7a2.69,2.69,0,0,0,1.1,1.57c1.06.83,2,1.75,3,2.66a.78.78,0,0,1,.15.56c-.11,1.44.77,2.34,1.71,3.23a2,2,0,0,1,.54,1c0,.11-.47.35-.75.49-1.38.69-2.77,1.35-4.14,2s-2.74,1.36-4.06,2.12-2.42,1.57-3.64,2.35c-1.86,1.2-3.76,2.35-5.6,3.59-1,.7-2,1.55-3,2.3-1.18.87-2.4,1.67-3.57,2.56Q70.25,77.88,68,79.72c-1.48,1.2-2.93,2.45-4.39,3.68a2.17,2.17,0,0,0-.48.5c-1.51,2.52-3.93,3.57-6.65,4.07a34.18,34.18,0,0,1-5.56.71,29.8,29.8,0,0,1-6.66-.5,46.57,46.57,0,0,0-4.63-.93,5.46,5.46,0,0,1-1.69-.15c-.88-.43-1.64-1.12-2.5-1.61a20.36,20.36,0,0,0-2.56-1.17c-.44-.17-.64.12-.62.56.06,1.33.13,2.66.16,4s.05,2.54,0,3.8c0,.67-.71,1-1.61.91-2-.12-4-.16-6.06-.21s-3.88-.08-5.83-.1c-1.42,0-2.85,0-4.27,0-1.15,0-2.29.2-3.44.23-.52,0-1.05-.23-1.58-.24a7.69,7.69,0,0,0-1.23.25,1.69,1.69,0,0,1-.85,0A4.52,4.52,0,0,0,4.39,93.5Z" style="fill:none;stroke-miterlimit:10;stroke-width:2px;stroke:url(#b)"/></svg>'
                }),
                creatHtml({
                    'tage': 'div',
                    'cl':'phone',
                    'addHtml': [
                        creatHtml({
                            'tage': 'span',
                            'text': json['phone_'+getLanguage()]['text'],
                        }),
                        creatHtml({
                            'tage': 'a',
                            'attr':{'href':'tel:886-3-354-7136'},
                            'text':'+886-3-354-7136',
                        }),
                    ]
                }),
                creatHtml({
                    'tage': 'div',
                    'cl':'email',
                    'addHtml': [
                        creatHtml({
                            'tage': 'span',
                            'text':json['email_'+getLanguage()]['text'],
                        }),
                        creatHtml({
                            'tage': 'a',
                            'attr':{'href':'mailto:King.qty@msa.hinet.net'},
                            'text':'King.qty@msa.hinet.net',
                        }),
                    ]
                }),
                creatHtml({
                    'tage': 'div',
                    'cl':'nav',
                    'addHtml': creatHtml({
                        'tage': 'ul',
                        'addHtml': json['list_'+getLanguage()].map((element)=>{
                            return creatHtml({
                                'tage': 'li',
                                'addHtml':creatHtml({
                                    'tage': 'a',
                                    'attr': {'href': element.href},
                                    'text': element.text
                                })
                            })
                        })
                    }),
                }),
                creatHtml({
                    'tage': 'div',
                    'cl':'copy-area',
                    'addHtml':  creatHtml({
                        'tage': 'span',
                        'text': 'Copyright © Aurex Industries Inc. All rights reserved. Privacy Policy web design by GRNET'
                    })
                })
            ]
        })
    })
}
function creatPage(o){
    var creatContent = o.creatContent;
    var handler = o.handler?o.handler:'';
    var body = document.querySelector('body')
    body.innerHTML=''
    body.append(creatHtml({
        'tage': 'div',
        'cl':'fn '+getUrl('a'),
        'addHtml': [
            creatNav(),
            creatContent,
            creatFooter()
        ]
    }))
    window.addEventListener('scroll',function(){
        var fnNav = body.querySelector('.fnNav')
        if(window.scrollY>80){
            fnNav.classList.add('scroll')
        }else{
            fnNav.classList.remove('scroll')
        }
    });
    if(handler){
        setTimeout(handler,30)
    }
    body.querySelector('.fn').classList.add('active')
}
function creatTitle(o){
    var src = o.src?o.src:''
    return creatHtml({
        'tage': 'div',
        'cl':'customTitle',
        'addHtml': creatHtml({
            'tage': 'img',
            'attr': {'src': src},
        })
    })
}
function customReset(o){
    var text2 = o.text?o.text:'';
    var text1 = getLanguage()=='TW'?'首頁':'home'
    return creatHtml({
        'tage': 'div',
        'cl':'customReset',
        'addHtml': creatHtml({
            'tage': 'ul',
            'cl':'container',
            'addHtml': [
                creatHtml({
                    'tage': 'li',
                    'addHtml': creatHtml({
                        'tage': 'a',
                        'attr': {'href': './'},
                        'text':'<i><svg viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg></i>'+text1
                    }),
                }),
                creatHtml({
                    'tage': 'li',
                    'text': text2
                })
            ]
        })
    })
}
window.onload = window[getUrl('a')]
function fnhome(){
    var json = {
        'slide': ['./page/img/s01.jpg','./page/img/s02.jpg','./page/img/s03.jpg'],
        'slide_text_EN': 'Work at perfection',
        'slide_text_TW': '工於完美．始得傳承',
        'about_title_TW': '效率、服務 、品質',
        'about_title_EN': 'Efficiency, service, quality',
        'about_text_TW': '歡迎來到祥好塑膠!我們在台灣、上海、河北、湖北為廣大客戶提供專業塑膠包材製造，除了提供主要塑膠產品，我們也為客戶提供其他，如:貼標、收縮膜、印刷、燙金、鋁罩、電鍍、噴槍配套等多項服務。<br>二十多年來，從PVC到PET，從單模穴單工位到8模穴雙工位，從生產礦泉水瓶到日化灌裝，祥好在因應全球市場快速變化下，在材料上、效率上以及產品紹不斷求新求變，以榮譽、誠信、責任、團結為營運宗旨，希望能長期位客戶提供最優質的產品及服務。如有需要請與我們聯繫，我們將會以最快速度提供最好的品質。',
        'about_text_EN': 'Welcome to Xianghao Plastics! We provide our customers with professional plastic packaging materials manufacturing in Taiwan, Shanghai, Hebei, and Hubei. In addition to providing major plastic products, we also provide customers with other products, such as: labeling, shrink film, printing, and hot stamping , Aluminum cover, electroplating, spray gun matching and many other services. <br>For more than 20 years, from PVC to PET, from single-cavity single station to 8-cavity double station, from the production of mineral water bottles to daily chemical filling, fortunately, in response to the rapid changes in the global market, In terms of materials, efficiency and product development, we are constantly seeking innovation and change. With honor, integrity, responsibility, and unity as our operating tenet, we hope to provide customers with the highest quality products and services for a long time. If necessary, please contact us, we will provide the best quality as quickly as possible.',
    }
    var text = json['about_text_'+getLanguage()].split('<br>')
    var creatContent = creatHtml({
        'tage': 'div',
        'cl':'fnContent',
        'addHtml': [
            creatHtml({
                'tage': 'div',
                'cl':'slide',
                'addHtml': [
                    creatHtml({
                        'tage': 'ul',
                        'addHtml': json['slide'].map((element,index)=>{
                            return creatHtml({
                                'tage': 'li',
                                'addHtml': creatHtml({
                                    'tage': 'img',
                                    'attr': {'src': element}
                                })
                            })
                        })
                    }),
                    creatHtml({
                        'tage': 'div',
                        'cl':'text scrollAnimation',
                        'addHtml': [
                            creatHtml({
                                'tage': 'p',
                                'text': json['slide_text_'+getLanguage()]
                            }),
                            creatHtml({
                                'tage': 'h2',
                                'text':'ONLY PERFECTION CAN BE INHERITED'
                            })
                        ]
                    })
                ]
            }),
            creatHtml({
                'tage': 'div',
                'cl':'introduction ',
                'addHtml': creatHtml({
                    'tage': 'div',
                    'cl':'container',
                    'addHtml': [
                        creatHtml({
                            'tage': 'div',
                            'cl':'img scrollAnimation imgLeft',
                            'addHtml': creatHtml({
                                'tage': 'img',
                                'attr': {'src':'./page/img/home01.jpg'}
                            })
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl':'text customText scrollAnimation textTop',
                            'addHtml': [
                                creatHtml({
                                    'tage': 'h2',
                                    'text':'ABOUT',
                                    'addHtml': creatHtml({
                                        'tage': 'span',
                                        'text':'KING BOTTLES',
                                    })
                                }),
                                creatHtml({
                                    'tage': 'h4',
                                    'text': json['about_title_'+getLanguage()],
                                }),
                                creatHtml({
                                    'tage': 'p',
                                    'text': text[0],
                                }),
                                creatHtml({
                                    'tage': 'p',
                                    'text': text[1],
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    })
    creatPage({
        'creatContent': creatContent,
        'handler': function(){
            var body = document.querySelector('body')
            var lis = body.querySelectorAll('.fnContent .slide li')
            var liLength = lis.length
            var slideIndex = 0
            var showSlides = function(n){
                slideIndex = (slideIndex + n + liLength) % liLength;
                lis.forEach(element=>element.classList.remove('active'))
                lis[slideIndex].classList.add('active')
            }
            setInterval(function() {
                showSlides(1)
            }, 6000)
            document.addEventListener('scroll', function() {
                scrollAnimation();
            })
            scrollAnimation();
            showSlides(0)
        }
    })
}
function fnintroduction(){
    var json = {
        'customTitle_img': './page/img/customTitle_bg.jpg',
        'customReset_text_TW': '公司簡介',
        'customReset_text_EN': 'about',
        'title_TW': '為了打造出品質更卓越的產品',
        'title_EN': 'In order to create excellent products',
        'text_TW': '祥好塑膠位於台灣桃園海湖工業區，成立於1988年，是一個專業生產塑膠包裝材料製造廠商，專為國內外許多廠商提供必需的日常化學用品包裝材料(如:洗髮精瓶、沐浴乳瓶、洗潔精瓶、洗衣精瓶、洗手液瓶、機油瓶..等)，主要材料為HDPE(高密度聚乙烯)、PP(聚丙烯)、PET(聚酯樹脂)，目前我們有四個廠區，分別位於台灣桃園、上海市、河北省滄州市、湖北省仙桃市。<br>上海祥好塑膠五金有限公司，成立於1992年，位於上海市普陀區，目前廠區占地15畝、員工150人，是華東地區最早的專業塑膠包材製造商，拥有產品研發部門、模具製造部門和中空成型部門，從設計到生產，為客戶提供全方位，多元化服務。<br>河北祥盛塑膠製品有限公司成立於2007年，位於河北省滄州市，廠區占地15畝、員工60人，拥有中空成型部門和印刷部門，服務華北地區客戶。<br>武漢祥宏塑膠製品有限公司成立於2009年，位於湖北省仙桃市，服務華中地區客戶，廠區占地47畝、員工280人，拥有中空成型部門、射出成形部門、PET吹塑部門、後加工部門，並成立日化灌裝部門，位美國知名品牌提供成品代工。',
        'text_EN': 'Xianghao Plastic is located in Haihu Industrial Zone, Taoyuan, Taiwan. Founded in 1988, it is a manufacturer specializing in the production of plastic packaging materials. It provides many domestic and foreign manufacturers with necessary daily chemical packaging materials (such as shampoo bottles, shower gels). Bottles, detergent bottles, laundry detergent bottles, hand sanitizer bottles, motor oil bottles, etc.), the main materials are HDPE (high-density polyethylene), PP (polypropylene), PET (polyester resin), currently we have four The two factories are located in Taoyuan, Taiwan, Shanghai, Cangzhou City, Hebei Province, and Xiantao City, Hubei Province. <br>Shanghai Xianghao Plastic Hardware Co., Ltd., established in 1992, is located in Putuo District, Shanghai. Currently, the factory covers an area of ​​15 acres and employs 150 people. It is the earliest professional manufacturer of plastic packaging materials in East China. It has a product research and development department, The mold manufacturing department and the hollow molding department provide customers with all-round and diversified services from design to production. <br>Hebei Xiangsheng Plastic Products Co., Ltd. was established in 2007 and is located in Cangzhou City, Hebei Province. The factory covers an area of ​​15 acres and has 60 employees. It has a hollow molding department and a printing department to serve customers in North China. <br>Wuhan Xianghong Plastic Products Co., Ltd. was established in 2009 and is located in Xiantao City, Hubei Province. It serves customers in Central China. The factory covers an area of ​​47 acres and has 280 employees. It has a hollow molding department, an injection molding department, a PET blow molding department, and The processing department, and the establishment of a daily chemical filling department, provides OEM products for well-known American brands.',
    }
    var text = json['text_'+getLanguage()].split('<br>')
    var creatContent = creatHtml({
        'tage': 'div',
        'cl':'fnContent',
        'addHtml': [
            creatTitle({'src':json['customTitle_img']}),
            customReset({'text':json['customReset_text_'+getLanguage()]}),
            creatHtml({
                'tage': 'div',
                'cl':'introduction',
                'addHtml': creatHtml({
                    'tage': 'div',
                    'cl':'container',
                    'addHtml': [
                        creatHtml({
                            'tage': 'div',
                            'cl': 'img scrollAnimation imgRight',
                            'addHtml': creatHtml({
                                'tage': 'img',
                                'attr': {'src':'./page/img/introduction01.jpg'},
                            }),
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl':'customText scrollAnimation textTop',
                            'addHtml': [
                                creatHtml({
                                    'tage': 'h2',
                                    'text': 'QUALITY<span>PRODUCTS</span>'
                                }),
                                creatHtml({
                                    'tage': 'h4',
                                    'text': json['title_'+getLanguage()]
                                }),
                                creatHtml({
                                    'tage': 'p',
                                    'text': text[0]
                                }),
                                creatHtml({
                                    'tage': 'p',
                                    'text': text[1]
                                }),
                                creatHtml({
                                    'tage': 'p',
                                    'text': text[2]
                                }),
                                creatHtml({
                                    'tage': 'p',
                                    'text': text[3]
                                })
                            ]
                        }),
                    ]
                })
            })
        ]
    })
    creatPage({'creatContent': creatContent,'handler':function () {
        document.addEventListener('scroll', function() {
            scrollAnimation();
        })
        scrollAnimation();
    }})
}
function fnproduct(o){
    var lang = getLanguage().toLowerCase()
    var a = getUrl('a');
    var p = o.p || 1;
    getAjax({ 'value': [{ 'p': p }, {'seach': '0'}, {'lang':lang}]}).then(function(data) {
        if (data.result) {
            var json = {
                'customTitle_img': './page/img/customTitle_bg2.jpg',
                'customReset_text_TW': '產品展示',
                'customReset_text_EN': 'product',
                'list': data.row,
            }
            creatPage({
                'creatContent': creatHtml({
                    'tage': 'div',
                    'cl':'fnContent',
                    'addHtml': [
                        creatTitle({'src':json['customTitle_img']}),
                        customReset({'text':json['customReset_text_'+getLanguage()]}),
                        creatHtml({
                            'tage': 'div',
                            'cl':'product',
                            'addHtml': creatHtml({
                                'tage': 'div',
                                'cl':'container',
                                'addHtml': (()=>{
                                    var list = [];
                                    json['list'].forEach((element)=>{
                                        list.push(creatHtml({
                                            'tage': 'div',
                                            'cl':'item',
                                            'addHtml':[
                                                creatHtml({
                                                    'tage': 'div',
                                                    'cl':'img scrollAnimation imgRight',
                                                    'addHtml': creatHtml({
                                                        'tage': 'img',
                                                        'attr':{'src': './page/img/baimg/'+element['Image']}
                                                    }),
                                                }),
                                                creatHtml({
                                                    'tage': 'div',
                                                    'cl':'customText scrollAnimation textTop',
                                                    'addHtml': [
                                                        creatHtml({
                                                            'tage': 'h2',
                                                            'text': element['lg_title_'+lang]+'<span>'+element['sm_title_'+lang]+'<span>'
                                                        }),
                                                        creatHtml({
                                                            'tage': 'p',
                                                            'text': element['content_'+lang]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }))
                                    })
                                    if(Math.ceil(data['totle'] / data['pn'])>1){
                                        list.push(creatPageNumber({ 'd': data, 'p': p, 'a': a, 'pn': data['pn'],'fn': a})[0])
                                    }
                                    return list
                                })()
                            })
                        })
                    ]
                }),
                'handler':function () {
                    document.addEventListener('scroll', function() {
                        scrollAnimation();
                    })
                    scrollAnimation();
                }
            })
        } else {
            console.log(data.message)
        }
    })
}
function fnequipment(){
    var json = {
        'customTitle_img': './page/img/customTitle_bg3.jpg',
        'customReset_text_TW': '機械設備',
        'customReset_text_EN': 'equipment',
        'title1_TW': '與您堅定守護',
        'title1_EN': 'Steadfast guard',
        'title2_TW': '各項細節品質',
        'title2_EN': 'Various qualities',
        'list_TW': [
            {'src':'./page/img/product01.jpg','title':'PE 吹瓶機','text':'我們擁有45台吹瓶機，從1穴單工位(用於大桶)到8穴雙工位不等，年產能約為3億支瓶。'},
            {'src':'./page/img/product02.jpg','title':'射出機','text':'我們擁有55台射出機，從90噸到300頓不等，可用於生產PP射出件和PET瓶胚，年產能約為5億件。'},
            {'src':'./page/img/product02.jpg','title':'PET 吹瓶機','text':'我們擁有8台全自動PET倒吹機，2、4、6、8穴，並有10架4穴半自動正吹機，年產能約為5億支。'},
            {'src':'./page/img/product02.jpg','title':'印刷機','text':'我們擁有8台全自動網版印刷機，1到4色不等。'},
        ],
        'list_EN': [
            {'src':'./page/img/product01.jpg','title':'PE Blow Molding Machine','text':'We have 45 blow molding machines, ranging from 1-cavity single station (for large barrels) to 8-cavity double station, with an annual production capacity of about 300 million bottles.'},
            {'src':'./page/img/product02.jpg','title':'Injection machine','text':'We have 55 injection machines, ranging from 90 tons to 300 tons, which can be used to produce PP injection parts and PET preforms, with an annual production capacity of about 500 million parts。'},
            {'src':'./page/img/product02.jpg','title':'PET Blow Molding Machine','text':'We have 8 fully automatic PET inverted blowing machines with 2, 4, 6, 8 holes, and 10 4-hole semi-automatic forward blowing machines, with an annual production capacity of about 500 million pieces.'},
            {'src':'./page/img/product02.jpg','title':'Printing machine','text':'We have 8 fully automatic screen printing machines, ranging from 1 to 4 colors.'},
        ],
    }
    var creatContent = creatHtml({
        'tage': 'div',
        'cl':'fnContent',
        'addHtml': [
            creatTitle({'src':json['customTitle_img']}),
            customReset({'text':json['customReset_text_'+getLanguage()]}),
            creatHtml({
                'tage': 'div',
                'cl':'product',
                'addHtml': creatHtml({
                    'tage': 'div',
                    'cl':'container',
                    'addHtml': [
                        creatHtml({
                            'tage': 'h2',
                            'text': json['title1_'+getLanguage()]+'<span>'+json['title2_'+getLanguage()]+'<span>',
                        }),
                        creatHtml({
                            'tage': 'ul',
                            'addHtml': json['list_'+getLanguage()].map((element)=>{
                                return creatHtml({
                                    'tage': 'li',
                                    'addHtml': [
                                        creatHtml({
                                            'tage': 'div',
                                            'cl':'img scrollAnimation imgLeft',
                                            'addHtml':  creatHtml({
                                                'tage': 'img',
                                                'attr': {'src': element['src']}
                                            })
                                        }),
                                        creatHtml({
                                            'tage': 'div',
                                            'cl':'text scrollAnimation textTop',
                                            'addHtml': [
                                                creatHtml({
                                                    'tage': 'h4',
                                                    'text': element['title'],
                                                }),
                                                creatHtml({
                                                    'tage': 'p',
                                                    'text': element['text'],
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                    ]
                })
            })
        ]
    })
    creatPage({'creatContent': creatContent,'handler':function () {
        document.addEventListener('scroll', function() {
            scrollAnimation();
        })
        scrollAnimation();
    }})
}
function fncertification(){
    var json = {
        'customTitle_img': './page/img/customTitle_bg4.jpg',
        'customReset_text_TW': '資質認證',
        'customReset_text_EN': 'Certification',
        'title1_TW': '層層嚴密把關',
        'title1_EN': 'Check at every level',
        'title2_TW': '為您展現完美價值',
        'title2_EN': 'Perfect value',
        'text_TW': '我們的工廠通過ISO9001:2008認證,並持有證書，我們除了堅持遵守ISO管理體系規範以外，還能依照每個客戶執行其他額外的生產與品管作業流程。目前已有數個國際品牌將我們列入指定的合格供應商。',
        'text_EN': 'Our factory has passed ISO9001:2008 certification and holds a certificate. In addition to adhering to the ISO management system specifications, we can also perform other additional production and quality control procedures in accordance with each customer. At present, several international brands have listed us as designated qualified suppliers.',
    }
    var creatContent = creatHtml({
        'tage': 'div',
        'cl':'fnContent',
        'addHtml': [
            creatTitle({'src':json['customTitle_img']}),
            customReset({'text':json['customReset_text_'+getLanguage()]}),
            creatHtml({
                'tage': 'div',
                'cl':'certification',
                'addHtml': creatHtml({
                    'tage': 'ul',
                    'cl':'container',
                    'addHtml': [
                        creatHtml({
                            'tage': 'h2',
                            'text': json['title1_'+getLanguage()]+'<span>'+json['title2_'+getLanguage()]+'<span>',
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl':'img scrollAnimation imgLeft',
                            'addHtml': creatHtml({
                                'tage': 'img',
                                'attr': {'src':'./page/img/certification.jpg'},
                            }),
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl':'text scrollAnimation textTop',
                            'addHtml': creatHtml({
                                'tage': 'p',
                                'text': json['text_'+getLanguage()],
                            }),
                        })
                    ]
                })
            })
        ]
    })
    creatPage({'creatContent': creatContent,'handler':function () {
        document.addEventListener('scroll', function() {
            scrollAnimation();
        })
        scrollAnimation();
    }})
}
function fncontact(){
    var json = {
        'customTitle_img': './page/img/customTitle_bg5.jpg',
        'customReset_text_TW': '聯絡方式',
        'customReset_text_EN': 'contact',
        'list_TW': [
            {'title1':'台灣','title2':'祥好塑膠股份有限公司','add':'33842 桃園市蘆竹區坑口里三德街15巷1號','map':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.143414997705!2d121.26304871500747!3d25.097006183942852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a1d528b0a13b%3A0xbf789767b00d3076!2zMzM45qGD5ZyS5biC6JiG56u55Y2A5LiJ5b636KGXMTXlt7cx6Jmf!5e0!3m2!1szh-TW!2stw!4v1618884845220!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>','email':'king.qty@msa.hinet.net'},
            {'title1':'上海','title2':'祥好塑膠股份有限公司','add':'200331 上海市普陀區真南路882弄118號','map':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.201363342626!2d121.38043631514452!3d31.270524881453053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b26f1961e6670d%3A0xff669f53297482dc!2z5Lit5ZyL5LiK5rW35biC5pmu6ZmA5Yy655yf5Y2X6LevODgy5Y-3IOmCruaUv-e8lueggTogMjAwMzM2!5e0!3m2!1szh-TW!2stw!4v1618884876554!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>','email':'info@kingbottles.com'},
            {'title1':'河北','title2':'祥盛塑膠製品限公司','add':'061002 河北省滄州市東海路1號','map':'	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.823754246296!2d116.92476431540737!3d38.283578190495206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35eebb861998f849%3A0xc53643d7187d001b!2z5Lit5ZyL5rKz5YyX55yB5rKn5bee5biC5paw5Y2O5Yy65Lic5rW36LevMeWPtyDpgq7mlL_nvJbnoIE6IDA2MjEwMA!5e0!3m2!1szh-TW!2stw!4v1618886095293!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'},
            {'title1':'武漢','title2':'祥宏塑膠製品有限公司','add':'433000 湖北省仙桃市劉口工業區仙彭公路1號','map':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.220733655096!2d113.45850721978336!3d30.350464031386828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3623377aa918f4!2z5rmW5YyX55yB5LuZ5qGD5biC5YqJ5Y-j5bel6LK_55m85bGV5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1618886054866!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'},
        ],
        'list_EN': [
            {'title1':'Taiwan','title2':'Xianghao plastic co., ltd.','add':'33842 No. 1, Lane 15, Sande Street, Kengkou Li, Luzhu District, Taoyuan City','map':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.143414997705!2d121.26304871500747!3d25.097006183942852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a1d528b0a13b%3A0xbf789767b00d3076!2zMzM45qGD5ZyS5biC6JiG56u55Y2A5LiJ5b636KGXMTXlt7cx6Jmf!5e0!3m2!1szh-TW!2stw!4v1618884845220!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>','email':'king.qty@msa.hinet.net'},
            {'title1':'Shanghai','title2':'Xianghao plastic co., ltd.','add':'200331 No.118, Lane 882, Zhennan Road, Putuo District, Shanghai','map':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.201363342626!2d121.38043631514452!3d31.270524881453053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b26f1961e6670d%3A0xff669f53297482dc!2z5Lit5ZyL5LiK5rW35biC5pmu6ZmA5Yy655yf5Y2X6LevODgy5Y-3IOmCruaUv-e8lueggTogMjAwMzM2!5e0!3m2!1szh-TW!2stw!4v1618884876554!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>','email':'info@kingbottles.com'},
            {'title1':'Hebei','title2':'Xiangsheng Plastic Products Co., Ltd.','add':'061002 No. 1 Donghai Road, Cangzhou City, Hebei Province','map':'	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.823754246296!2d116.92476431540737!3d38.283578190495206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35eebb861998f849%3A0xc53643d7187d001b!2z5Lit5ZyL5rKz5YyX55yB5rKn5bee5biC5paw5Y2O5Yy65Lic5rW36LevMeWPtyDpgq7mlL_nvJbnoIE6IDA2MjEwMA!5e0!3m2!1szh-TW!2stw!4v1618886095293!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'},
            {'title1':'Wuhan','title2':'Xianghong Plastic Products Co., Ltd.','add':'433000 No. 1, Xianpeng Road, Liukou Industrial Zone, Xiantao City, Hubei Province','map':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.220733655096!2d113.45850721978336!3d30.350464031386828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3623377aa918f4!2z5rmW5YyX55yB5LuZ5qGD5biC5YqJ5Y-j5bel6LK_55m85bGV5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1618886054866!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'},
        ],
    }
    var creatContent = creatHtml({
        'tage': 'div',
        'cl':'fnContent',
        'addHtml': [
            creatTitle({'src':json['customTitle_img']}),
            customReset({'text':json['customReset_text_'+getLanguage()]}),
            creatHtml({
                'tage': 'div',
                'cl':'content container',
                'addHtml': json['list_'+getLanguage()].map((element)=>{
                    return creatHtml({
                        'tage': 'div',
                        'cl':'item',
                        'addHtml': [
                            creatHtml({
                                'tage': 'div',
                                'cl':'map',
                                'text': element.map
                            }),
                            creatHtml({
                                'tage': 'div',
                                'cl':'text scrollAnimation textTop',
                                'addHtml': [
                                    creatHtml({
                                        'tage': 'h4',
                                        'text': '<span>'+element['title1']+'</span>'+element['title2'],
                                    }),
                                    creatHtml({
                                        'tage': 'ul',
                                        'addHtml': [
                                            creatHtml({
                                                'tage': 'li',
                                                'text': '<i><svg viewBox="0 0 24 24" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg></i>'+element['add'],
                                            }),
                                            creatHtml({
                                                'tage': 'li',
                                                'text': '<i><svg viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg></i><a href="tel:886-21-6250-0633">886-21-6250-0633</a>',
                                            }),
                                            creatHtml({
                                                'tage': 'li',
                                                'text': '<i><svg viewBox="0 0 24 24"><path d="M14 20h-6v-1h6v1zm5-12h-2v1h2v-1zm-3 9h-8v1h8v-1zm8-13v15h-4v5h-16v-5h-4v-15h4v-4h16v4h4zm-18 0h12v-2h-12v2zm12 11h-12v7h12v-7zm4-9h-20v11h2v-4h16v4h2v-11zm-10 2h-7v3h7v-3zm7 2h-2v1h2v-1zm-3 0h-2v1h2v-1zm0-2h-2v1h2v-1z"/></svg></i>886-21-6250-6188',
                                            }),
                                            element['email']? creatHtml({
                                                'tage': 'li',
                                                'text': '<i><svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></i><a href="mailto:'+element['email']+'">'+element['email']+'</a>',
                                            }):''
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    })
    creatPage({'creatContent': creatContent,'handler':function () {
        document.addEventListener('scroll', function() {
            scrollAnimation();
        })
        scrollAnimation();
    }})
}