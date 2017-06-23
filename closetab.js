;
(function() {
    var ModularTab = {
        init: function() {
            this.switchtab();
            this.closetab();
        },
        switchtab: function() {
            var _this = this;
            $(".tab-atr").click(function(event) {
                $index = $(this).index();
                $(this).addClass('tab-bg-active').siblings().removeClass('tab-bg-active');
                $(this).parent().siblings(".tabcontent").children().eq($index).show().siblings().hide();

                $(this).children(".activityTabCloseBtn").show().addClass('closeImg').parent().siblings().children(".activityTabCloseBtn").hide().removeClass('closeImg');

            });
            $(".tabTriggerClick").trigger('click');
            _this.mousetab();
        },
        mousetab: function() {
            $(".tab-atr").mouseover(function(event) {
                $index = $(this).index();
                $(this).children(".activityTabCloseBtn").show();
            });
            $(".tab-atr").mouseleave(function(event) {
                $index = $(this).index();
                if ($(this).children(".activityTabCloseBtn").hasClass('closeImg')) {
                    $(this).children(".activityTabCloseBtn").show();
                } else {
                    $(this).children(".activityTabCloseBtn").hide();
                }
            });
        },
        closetab: function() {
            $(".activityTabCloseBtn").click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                var $key = $(this).attr("data-type");

                var tabList = $('[data-type]'),
                    tabArry = [],
                    isDelete = null;

                $.each(tabList, function(index, val) { //参数index为遍历索引值，val为当前的遍历对象
                    
                    tabArry.push($(val).attr('data-type'));
                });

                $(this).parent(".tab-atr").remove();
                $('[data-problem-info="' + $key + '"]').remove();

                $.each(tabArry, function(index, val) {

                    if (val === $key) {
                        isDelete = index;//删除它在数组里面的位置
                    }
                });

                if (tabArry.length > 1 && $(this).parent().hasClass('tab-bg-active')) {
                    if (isDelete == tabArry.length - 1) {//删除最后一个的时候
                        $(".tab-atr").eq(isDelete - 1).trigger('click')
                    } else {
                        $(".tab-atr").eq(isDelete).trigger('click')
                    }
                }
                console.log(tabArry);
                tabArry.splice(isDelete, 1);


            });
        }
    }
    ModularTab.init();
})()