$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
    $('.btn-box p').each(function (index) {
        $(this).click(function () {
            $('.btn-box p').removeClass('on').eq(index).addClass('on');
            $('.show-box').hide().eq(index).show()
        })
    })

    // 开启视频
    $('.buy button').each(function (index) {
        $(this).click(function () {
            console.log(index)
            $('.zzc').show();
            $('.vid').eq(index).show()
            $('.vid video')[index].play()
        })
    })
    $('.vid em').each(function (index) {
        $(this).click(function(){
            $('.zzc').hide()
            $('.vid').hide()
            $('.vid video')[index].pause()
        })
    })
})