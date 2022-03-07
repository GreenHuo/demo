/**
 * 采购单
 * @param config
 * @param data
 */
function OffsetPurchaseDialog(config, data) {
    //type 1 资源系统  2确认管理系统
    var supportResourceType = data.supportResInfo;
    //资源来源 （途牛存在，自定义的 class名称）
    var sourceType = { "1": "existRow", "2": "selfDefineRow" };
    var html = $('<div class="detailDialog">'
        + '<div class="row">'
        + '<div class="span2">'
        + '供应商名称<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="vendorName" ver-searchrequired="id" />'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span2">供应商货币类型：</div>'
        + '<div class="span3">'
        + '<span v="costCurrencyName" class="costCurrencyName">人民币</span>'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span2">资源来源：</div>'
        + '<div class="span3" style="width: 120px;">'
        + '<input id="sourceType_exist" type="radio" style="width: 30px;" name="sourceType" checked value="1">途牛已有资源'
        + '</div>'
        + '<div class="span3" style="width: 120px;">'
        + '<input id="sourceType_self" type="radio" name="sourceType" style="width: 30px;" value="2">自定义资源'
        + '</div>'
        + '</div>'
        + '<div class="row existRow">'
        + '<div class="span2">'
        + '资源ID<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="resourceId" ver-pattern="nonnegativeInt" ver-required="true" />'
        + '</div>'
        + '<div class="span1">'
        + '确认单资源类型<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<select class="resourceType" name="existResourceType" supportType="1" ver-required="true" />'
        + '</div>'
        + '</div>'
        + '<div class="row existRow">'
        + '<div class="span2">'
        + '资源名称<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="existResourceName" disabled />'
        + '</div>'
        + '<div class="span1">'
        + '变更原因<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<select class="changeReason" name="existChangeReason" ver-required="true" />'
        + '</div>'
        + '</div>'
        + '<div class="row hide selfDefineRow">'
        + '<div class="span2">'
        + '确认单资源类型<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<select name="selfResourceType" class="resourceType" ver-required="true" />'
        + '</div>'
        + '<div class="span1">'
        + '资源名称<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="selfResourceName" ver-required="true" />'
        + '</div>'
        + '</div>'
        + '<div class="row hide selfDefineRow">'
        + '<div class="span2">'
        + '变更原因<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<select class="changeReason" name="selfChangeReason" ver-required="true" />'
        + '</div>'
        + '</div>'
        + '<div class="content_other">'
        + '<div class="row">'
        + '<div class="span2">'
        + '成人数<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="adultNum" class="calculateTotalPrice" ver-required="true" my-ver-pattern="integer" ver-length="10" />'
        + '</div>'
        + '<div class="span1">'
        + '成人单价<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="adultCost" my-ver-pattern="price" class="calculateTotalPrice" ver-required="true" ver-length="10" />'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span2">'
        + '儿童数<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="childNum" my-ver-pattern="integer" class="calculateTotalPrice" ver-required="true" ver-length="10" />'
        + '</div>'
        + '<div class="span1">'
        + '儿童单价<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="childCost" my-ver-pattern="price" ver-required="true" class="calculateTotalPrice" ver-length="10" />'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<div class="content_hotel" style="display:none;">'
        + '<div class="row">'
        + '<div class="span2">'
        + '选择方式<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3" style="width: 120px;">'
        + '<input type="radio" style="width: 30px;" name="maintenanceMode" checked value="1">按团期维护'
        + '</div>'
        + '<div class="span3" style="width: 120px;">'
        + '<input type="radio" style="width: 30px;" name="maintenanceMode" value="2">只维护差价'
        + '</div>'
        + '</div>'
        + '<div class="departDates">'
        + '<div class="row">'
        + '<div class="span2">'
        + '入住开始时间<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" id="startDate" class="startDate" ver-required="true" ver-length="10"/>'
        + '</div>'
        + '<div class="span1">'
        + '入住结束时间<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" id="endDate" class="endDate" ver-required="true" ver-length="10"/>'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<table class="table-bordered zh-table departsTable" border="1"  width="80%" cellspacing="0" cellpadding="0" style="margin-left:80px;">'
        + '<thead>'
        + '<tr class="zh-small">'
        + '<td width="160" align="center">入住时间</td>'
        + '<td width="160" align="center">房间数量<span class="red">*</span></td>'
        + '<td width="160" align="center">每间夜价格<span class="red">*</span></td>'
        + '</tr>'
        + '</thead>'
        + '<tbody>'
        + '</tbody>'
        + '</table>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span2">'
        + '差价<span class="red">*</span>：'
        + '</div>'
        + '<div class="span3">'
        + '<input type="text" name="extraAmount" my-ver-pattern="price" class="calculateTotalPrice" ver-length="10" value="0" />'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span2">游客：</div>'
        + '<div class="span5">'
        + '<ul class="touristList">'
        + '<li><input type="checkbox" />是否带入游客信息到确认单中</li>'
        + '</ul>'
        + '</div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span3" style="text-align: right;">本次添加采购单总金额：</div>'
        + '<div id="totalPrice"></div>'
        + '</div>'
        + '<div class="row">'
        + '<div class="span2">'
        + '变更原因备注<span class="red">*</span>：'
        + '</div>'
        + '<div class="span5">'
        + '<textarea name="remark" ver-required="true" ver-length="255" style="width: 367px; height: 60px;"></textarea>'
        + '</div>'
        + '</div>'
        + '</div>');
    //页面事件
    dealEvent();
    //处理数据
    dealData();
    var title = "添加采购单";
    var win = new WinForm({
        title: title,
        node: html,
        css: {
            width: "800px",
            left: "20%",
            top: "10%"
        },
        cancelText: "关闭",
        buttons: [{
            name: "<i class='icon-ok'></i>确定",
            class: 'btn-primary',
            click: function (e) {
                var okButton = this;
                var verify = new Verify(html);
                var flag = verify.getFlag();
                if (!flag) return;

                if (!validatePrice()) { //验证价格
                    return;
                }
                if (!validateInt()) { //验证人数
                    return;
                }

                //校验变更原因 add by yuconglong
                if (!validateChangeReason()) {
                    return;
                }

                //搜集数据
                var submitData = tn.form.get(html);
                if ($("select[name='existResourceType']", html).val() == 2 || $("select[name='selfResourceType']", html).val() == 2) {
                    departsDateSubmit(submitData, okButton);
                } else {
                    singleDateSubmit(submitData, okButton);
                }
            }
        }]
    });

    function singleDateSubmit(submitData, okButton) {
        //加载资源信息
        var sourceTypeValue = $("input[name='sourceType']:checked", html).val();
        //验证对应的资源ID和资源类型
        if (!validateResource(sourceTypeValue, submitData.existResourceName)) {
            return;
        }
        if (data.batchFlag && !validateOrderTourist()) {
            return;
        }
        //自组团号
        submitData.groupId = data.groupId;
        submitData.tourDate = data.tourDate;
        //归来日期
        submitData.backDate = data.backDate;
        //订单列表
        submitData.orderIdList = [];
        submitData.orderIdList.push(data.orderId);

        //供应商Id
        submitData.vendorId = $("input[name=vendorName]", html).attr("id");

        //总费用
        submitData.totalCost = $("#totalPrice", html).text();
        if (sourceTypeValue == 1) { //已有资源
            submitData.resourceType = submitData.existResourceType;
            submitData.resourceName = submitData.existResourceName;
            if (submitData.existChangeReason) {
                var changeReason = submitData.existChangeReason;
                submitData.changeReasonCode = changeReason.split("-")[0];
                submitData.isApprove = changeReason.split("-")[1];
                submitData.changeReasonName = changeReason.split("-")[2];
            };
        } else {//自定义资源
            delete submitData.resourceId; //移除对应的资源ID
            submitData.resourceType = submitData.selfResourceType;
            submitData.resourceName = submitData.selfResourceName;
            if (submitData.selfChangeReason) {
                var changeReason = submitData.selfChangeReason;
                submitData.changeReasonCode = changeReason.split("-")[0];
                submitData.isApprove = changeReason.split("-")[1];
                submitData.changeReasonName = changeReason.split("-")[2];
            };
        }
        //给指定的orderId赋值
        if (!data.batchFlag) { //非批量
            submitData.orderId = data.orderId;
        } else {//成人总数、儿童总数
            submitData.adultTotalNum = Number($("#adultTotalNum", html).text());
            submitData.childTotalNum = Number($("#childTotalNum", html).text());
        }
        if (submitData.adultTotalNum == 0 && submitData.childTotalNum == 0) {
            config.noty.info("成人总数和儿童总数都是空");
            return;
        };
        //拼装变更原因参数

        tn.ajax.safeRequest({
            key: 'NCFM_PURCHASE_BUT_OFFSET',
            url: data.batchFlag ? config.getAction().purchaseBatchAddSubmit : config.getAction().addManual,
            type: "POST",
            data: submitData,
            listener: {
                success: function (json) {
                    if (json.success) {
                        if (json.data && json.data.changeCost) {
                            //变更原因为采购规则的校验 add by yuconglong
                            if (json.data.reasonForChangeCode == 31 && (json.data.averageCostChangeRate > 2 || json.data.averageCostChangeRate == 2)) {
                                config.noty.info("变更原因为汇率变更，变更率大于2%，需要经过OA审批");
                            }
                            else {
                                config.noty.info("本次添加采购单金额：" + json.data.changeCost
                                    + "变更率：" + (Number(json.data.averageCostChangeRate) * 100).toFixed(2) + "%,请及时跟进OA流程审批");
                            }
                        } else {
                            config.noty.info("添加采购单成功，采购单详细信息请到采购单列表中查询");
                        }
                        win.hide();
                        config.purchaseList.reload();
                    } else {
                        config.noty.error(json.msg);
                    }
                },
                requestcomplete: function () {
                    config.enableBtn(okButton, "<i class='icon-ok'></i>确定");
                },
                beforerequest: function () {
                    config.disableBtn(okButton, "<i class='icon-ok'></i>确定中");
                }
            }
        });
    }

    function departsDateSubmit(submitData, okButton) {
        delete submitData.adultNum;
        delete submitData.adultCost;
        delete submitData.childNum;
        delete submitData.childCost;

        submitData.departsDate = [];
        var maintenanceMode = $("input[name='maintenanceMode']:checked", html).val();
        if (maintenanceMode == 1) {
            var departsTableData = getDepartsTableData();
            $.each(departsTableData, function (i, item) {
                submitData.departsDate[i] = {};
                submitData.departsDate[i].departDate = item.departDate;
                submitData.departsDate[i].adultCost = item.adultCost || 0;
                submitData.departsDate[i].adultNum = item.adultNum || 0;
                submitData.departsDate[i].childCost = item.childCost || 0;
                submitData.departsDate[i].childNum = item.childNum || 0;
            });
        }
        //加载资源信息
        var sourceTypeValue = $("input[name='sourceType']:checked", html).val();
        //验证对应的资源ID和资源类型
        if (!validateResource(sourceTypeValue, submitData.existResourceName)) {
            return;
        }
        if (data.batchFlag && !validateOrderTourist()) {
            return;
        }
        //自组团号
        submitData.groupId = data.groupId;
        submitData.tourDate = data.tourDate;
        //归来日期
        submitData.backDate = data.backDate;
        //订单列表
        submitData.orderIdList = [];
        submitData.orderIdList.push(data.orderId);
        //供应商Id
        submitData.vendorId = $("input[name=vendorName]", html).attr("id");
        //总费用
        submitData.totalCost = $("#totalPrice", html).text();
        if (sourceTypeValue == 1) { //已有资源
            submitData.resourceType = submitData.existResourceType;
            submitData.resourceName = submitData.existResourceName;
            //拼装变更原因参数
            if (submitData.existChangeReason) {
                var changeReason = submitData.existChangeReason;
                submitData.changeReasonCode = changeReason.split("-")[0];
                submitData.isApprove = changeReason.split("-")[1];
                submitData.changeReasonName = changeReason.split("-")[2];
            };
        } else {//自定义资源
            delete submitData.resourceId; //移除对应的资源ID
            submitData.resourceType = submitData.selfResourceType;
            submitData.resourceName = submitData.selfResourceName;
            //拼装变更原因参数
            if (submitData.selfChangeReason) {
                var changeReason = submitData.selfChangeReason;
                submitData.changeReasonCode = changeReason.split("-")[0];
                submitData.isApprove = changeReason.split("-")[1];
                submitData.changeReasonName = changeReason.split("-")[2];
            };
        }
        //给指定的orderId赋值
        if (!data.batchFlag) { //非批量
            submitData.orderId = data.orderId;
        }

        tn.ajax.safeRequest({
            key: "NCFM_PURCHASE_BUT_OFFSET",
            url: config.getAction().addManualDeparts,
            type: "POST",
            data: submitData,
            listener: {
                success: function (json) {
                    if (json.success) {
                        if (json.data && json.data.changeCost) {
                            if (json.data.reasonForChangeCode == 31 && (json.data.averageCostChangeRate > 2 || json.data.averageCostChangeRate == 2)) {
                                config.noty.info("变更原因为汇率变更，变更率大于2%，需要经过OA审批");
                            }
                            config.noty.info("本次添加采购单金额：" + json.data.changeCost
                                + "变更率：" + (Number(json.data.averageCostChangeRate) * 100).toFixed(2) + "%,请及时跟进OA流程审批");
                        } else {
                            config.noty.info("添加采购单成功，采购单详细信息请到采购单列表中查询");
                        }
                        win.hide();
                        config.purchaseList.reload();
                    } else {
                        config.noty.error(json.msg);
                    }
                },
                requestcomplete: function () {
                    config.enableBtn(okButton, "<i class='icon-ok'></i>确定");
                },
                beforerequest: function () {
                    config.disableBtn(okButton, "<i class='icon-ok'></i>确定中");
                }
            }
        });
    }

    return win;
    function dealData() {
        initResourceType();
        initChangeReason();
        //游客信息
        orderTouristNameLoad();
        //绑定采购单信息
        initPurchaseInfo();
    }

    function initPurchaseInfo() {
        $("input[name='vendorName']", html).val(data.vendorName);
        $("input[name='vendorName']", html).attr("id", data.vendorId);
        queryCurrencyInfo(data.vendorId);
        $("input[name='resourceId']", html).val(data.resourceId);
        if (data.resourceId > 1) {
            //途牛已有资源
            $("#sourceType_exist", html).attr("checked", true);
            $(".existRow", html).removeClass("hide");
            $(".selfDefineRow", html).addClass("hide");
            $("select[name='existResourceType']", html).val(data.resourceType);
            $("input[name='existResourceName']", html).val(data.resourceName);
        } else {
            //自定义资源
            $("#sourceType_self", html).attr("checked", true);
            $(".selfDefineRow", html).removeClass("hide");
            $(".existRow", html).addClass("hide");
            $("select[name='selfResourceType']", html).val(data.resourceType);
            $("input[name='selfResourceName']", html).val(data.resourceName);
        }
        if (data.resourceType == 2) {
            $(".content_other", html).hide();
            $(".content_hotel", html).show();
            $(".adultNum", html).val(-data.adultNum);
            $(".adultCost", html).val(data.adultCost);
        } else {
            $(".content_other", html).show();
            $(".content_hotel", html).hide();
            $("input[name='adultNum']", html).val(-data.adultNum);
            $("input[name='adultCost']", html).val(data.adultCost);
            $("input[name='childNum']", html).val(-data.childNum);
            $("input[name='childCost']", html).val(data.childCost);
        }
        $("input[name='extraAmount']", html).val(-data.extraAmount);
        $("#totalPrice", html).text(-data.totalCost);
        var CHANGE_REASON = {
            "24" : "24-1-资源成本增加",
            "38" : "38-0-供应商备注",
            "37" : "37-0-赔偿供应商",
            "36" : "36-0-领队平摊、升舱",
            "34" : "34-0-供应商核损减免",
            "33" : "33-1-供应商退还费用",
            "32" : "32-1-供应商名称变更",
            "31" : "31-0-汇率变更",
            "30" : "30-1-系统问题",
            "29" : "29-1-人工失误",
            "28" : "28-1-同行竞价",
            "26" : "26-1-优惠项",
            "25" : "25-0-资源成本减少",
            "39" : "39-1-签约后订单增补项"
        };
        if (null != data.changeReasonCode && data.changeReasonCode != 0) {
            var reasonCode = data.changeReasonCode;
            if (CHANGE_REASON[reasonCode] != null) {

                $("input[name='vendorName']",html).attr("disabled", true); //供应商名称
                $("input[name='sourceType']",html).attr("disabled", true); //资源来源
                var changeReasonVague;
                var resourceType;
                if (data.resourceId > 1) { //途牛已有资源
                    $("select[name='existResourceType']",html).attr("disabled", true);
                    $("input[name='existResourceName']",html).attr("disabled", true);
                    $("select[name='existChangeReason']", html).val(CHANGE_REASON[reasonCode]);
                    $("select[name='existChangeReason']", html).attr("disabled", true); //变更原因
                    changeReasonVague = $("select[name='existChangeReason']", html).val();
                    resourceType = $("select[name='existResourceType']", html).val();
                } else { //途牛自定义资源
                    $("select[name='selfResourceType']",html).attr("disabled", true);
                    $("input[name='selfResourceName']", html).attr("disabled", true);
                    $("select[name='selfChangeReason']", html).val(CHANGE_REASON[reasonCode]);
                    $("select[name='selfChangeReason']", html).attr("disabled", true); //自定义资源变更原因
                    changeReasonVague = $("select[name='selfChangeReason']", html).val();
                    resourceType = $("select[name='selfResourceType']", html).val();
                }
                if (changeReasonVague == "38-0-供应商备注") {
                    $("input[name='extraAmount']", html).attr("disabled", true);
                    if (changeReasonVague == "38-0-供应商备注") {
                        if (resourceType == 2) {
                            $(".content_hotel .adultNum", html).val(0);
                            $(".content_hotel .adultNum", html).attr("disabled", true);
                            $(".content_hotel .adultCost", html).val(0);
                            $(".content_hotel .adultCost", html).attr("disabled", true);

                        } else {
                            $("input[name='adultNum']", html).val(0);
                            $("input[name='childNum']", html).val(0);
                            $("input[name='adultCost']", html).val(0);
                            $("input[name='childCost']", html).val(0);
                            $("input[name='adultNum']", html).attr("disabled", true);
                            $("input[name='childNum']", html).attr("disabled", true);
                            $("input[name='adultCost']", html).attr("disabled", true);
                            $("input[name='childCost']", html).attr("disabled", true);
                        }
                    } else {
                        if (resourceType == 2) {
                            $(".content_hotel .adultNum", html).attr("disabled", false);
                            $(".content_hotel .adultCost", html).attr("disabled", false);
                        } else {
                            $("input[name='adultNum']", html).attr("disabled", false);
                            $("input[name='childNum']", html).attr("disabled", false);
                            $("input[name='adultCost']", html).attr("disabled", false);
                            $("input[name='childCost']", html).attr("disabled", false);
                        }
                    }
                } else {
                    if (changeReasonVague == "24-1-资源成本增加") {
                        if (data.resourceId > 1) { //途牛已有资源
                            $("select[name='existChangeReason']", html).val("25-0-资源成本减少");
                        } else {
                            $("select[name='selfChangeReason']", html).val("25-0-资源成本减少");
                        }
                    }
                    if (changeReasonVague == "25-0-资源成本减少") {
                        if (data.resourceId > 1) {
                            $("select[name='existChangeReason']", html).val("24-1-资源成本增加");
                        } else {
                            $("select[name='selfChangeReason']", html).val("24-1-资源成本增加");
                        }
                    }
                    $("input[name='extraAmount']", html).attr("disabled", false);
                }
            }
        } else {
            $("input[name='vendorName']", html).attr("disabled", true);
            $("input[name='sourceType']", html).attr("disabled", true);
            if (data.resourceId > 1) { //途牛已有资源
                $("select[name='existResourceType']",html).attr("disabled", true);
                $("input[name='existResourceName']",html).attr("disabled", true);
            } else { //途牛自定义资源
                $("select[name='selfResourceType']",html).attr("disabled", true);
                $("input[name='selfResourceName']", html).attr("disabled", true);
            }
            $("select[name='existChangeReason']", html).attr("disabled", false); //变更原因
        }
    }

    function initResourceType() {
        if (data.batchFlag) {
            // 如果是批量添加采购单，则将酒店资源类型移除
            $.each($(".resourceType", html), function (i, itemI) {
                //支持的类别
                var supportType = $(this).attr("supportType");
                $(itemI).append($('<option value="">请选择资源类型</option>'));
                $.each(supportResourceType, function (j, itemJ) {
                    //未设置支持类别或指定的类别
                    if (null == supportType || "" == supportType || supportType == itemJ.type) {
                        if ('2' != j) {
                            $(itemI).append($('<option value="' + j + '">' + itemJ.name + '</option>'));
                        }
                    }
                });
            });
        } else {
            $.each($(".resourceType", html), function (i, itemI) {
                //支持的类别
                var supportType = $(this).attr("supportType");
                $(itemI).append($('<option value="">请选择资源类型</option>'));
                $.each(supportResourceType, function (j, itemJ) {
                    //未设置支持类别或指定的类别
                    if (null == supportType || "" == supportType || supportType == itemJ.type) {
                        $(itemI).append($('<option value="' + j + '">' + itemJ.name + '</option>'));
                    }
                });
            });
        }
    }

    //根据资源ID获取附加项目的具体信息 add by yuoconglong
    function AddItemResourceInfoDetail(resourceId) {
        Ajax.request({
            url: config.getAction().confirmList,
            type: "GET",
            data: {
                resId: resourceId
            },
            listener: {
                success: function (json) {
                    if (json.success) {
                        this.data1 = json.data;
                        //取最新的数据
                        data.workformId = this.data1.rows[this.data1.count - 1].workformId;
                        data.resourceType = this.data1.rows[this.data1.count - 1].resType;
                        if (data.resourceType == 18) {
                            Ajax.request({
                                url: config.getAction().confirmDetail,
                                type: "GET",
                                data: {
                                    workformId: data.workformId,
                                    resType: data.resourceType
                                },
                                listener: {
                                    success: function (json) {
                                        if (json.success) {
                                            this.data2 = json.data;
                                            if (this.data2.resourceInfo.addItemInfo.supportChildPrice) {
                                                data.supportChildPrice = this.data2.resourceInfo.addItemInfo.supportChildPrice;
                                            } else {
                                                data.supportChildPrice = 0;
                                            }
                                            if (data.supportChildPrice == 0) {
                                                $("input[name='childNum']", html).click(function (e) {
                                                    config.noty.error("该资源类型不支持儿童价！");
                                                    $("input[name='childNum']").val(0);
                                                    $("input[name='childCost']").val(0);
                                                    $("input[name='childCost']").attr("readonly", true);
                                                    $("input[name='childNum']").attr("readonly", true);
                                                });
                                                $("input[name='childCost']", html).click(function (e) {
                                                    config.noty.error("该资源类型不支持儿童价！");
                                                    $("input[name='childNum']").val(0);
                                                    $("input[name='childCost']").val(0);
                                                    $("input[name='childCost']").attr("readonly", true);
                                                    $("input[name='childNum']").attr("readonly", true);
                                                });
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
            }
        });
    }

    //变更原因初始化
    function initChangeReason() {
        Ajax.request({
            url: config.getAction().getChangeReason,
            type: "GET",
            data: {
                systemCode: 'CFM'
            },
            async: false,
            listener: {
                success: function (json) {
                    $.each($(".changeReason", html), function (i, itemI) {
                        $(itemI).append($('<option value="">请选择变更原因</option>'));
                        $.each(json.data.rows, function (j, v) {
                            $(itemI).append("<option value=" + v.changeReasonCode + "-" + v.isApprove +
                                "-" + v.changeReasonName + ">" + v.changeReasonName + "</option>");
                        });
                    });
                },
                error: function (json) {
                    config.noty.error('提交失败。错误内容：' + json.errorCode + ' ' + json.msg);
                }
            }
        });
    }
    function dealEvent() {
        //修改  资源来源
        $("input[name='sourceType']", html).change(function (e) {
            var sourceTypeValue = $("input[name='sourceType']:checked", html).val();
            $.each(sourceType, function (i, itemI) {
                if (sourceTypeValue == i) { //当前选中值
                    $.each($("." + itemI), function (j, itemJ) {
                        $(itemJ).removeClass("hide");
                    });
                } else {
                    $.each($("." + itemI), function (j, itemJ) {
                        $(itemJ).addClass("hide");
                    });
                }
            });
            $("select[name='existResourceType']", html).val(0);
            $("select[name='selfResourceType']", html).val(0);
        });

        //触发计算总金额的
        $.each($(".calculateTotalPrice", html), function (i, item) {
            $(item).change(function (e) {
                calculateTotalPrice();
            });
        });

        //供应商名称
        $.each($("input[name='vendorName']", html), function (i, item) {
            //config.vendorSearch.call(config, $(item));
            vendorSearch($(item));
        });
        //触发判断附加项目是否支持儿童价 add by yuconglong
        $("input[name='resourceId']", html).change(function (e) {
            var resourceId = $("input[name='resourceId']", html).val();
            AddItemResourceInfoDetail(resourceId);
        });
        //触发加载资源名称请求
        $("input[name='resourceId']", html).change(function (e) {
            resNameReload();
        });
        $("select[name='existResourceType']", html).change(function (e) {
            resNameReload();
            showContent(this.value);
            var resourceType = $("select[name='existResourceType']", html).val();
            var existChangeReason = $("select[name='existChangeReason']", html).val();
            if (existChangeReason == "38-0-供应商备注") {
                if (resourceType == 2) {
                    $(".content_hotel .adultNum").val(0);
                    $(".content_hotel .adultNum").attr("disabled", true);
                    $(".content_hotel .adultCost").val(0);
                    $(".content_hotel .adultCost").attr("disabled", true);
                } else {
                    $("input[name='adultNum']").val(0);
                    $("input[name='childNum']").val(0);
                    $("input[name='adultCost']").val(0);
                    $("input[name='childCost']").val(0);
                    $("input[name='adultNum']").attr("disabled", true);
                    $("input[name='childNum']").attr("disabled", true);
                    $("input[name='adultCost']").attr("disabled", true);
                    $("input[name='childCost']").attr("disabled", true);
                }
            } else {
                if (resourceType == 2) {
                    $(".content_hotel .adultNum").attr("disabled", false);
                    $(".content_hotel .adultCost").attr("disabled", false);
                } else {
                    $("input[name='adultNum']").attr("disabled", false);
                    $("input[name='childNum']").attr("disabled", false);
                    $("input[name='adultCost']").attr("disabled", false);
                    $("input[name='childCost']").attr("disabled", false);
                }
            }
        });

        $("select[name='selfResourceType']", html).change(function (e) {
            showContent(this.value);
            // 自定义资源-酒店-供应商备注
            var resourceType = $("select[name='selfResourceType']", html).val();
            var selfChangeReason = $("select[name='selfChangeReason']", html).val();
            if (selfChangeReason == "38-0-供应商备注") {
                if (resourceType == 2) {
                    $(".content_hotel .adultNum").val(0);
                    $(".content_hotel .adultNum").attr("disabled", true);
                    $(".content_hotel .adultCost").val(0);
                    $(".content_hotel .adultCost").attr("disabled", true);
                } else {
                    $("input[name='adultNum']").val(0);
                    $("input[name='childNum']").val(0);
                    $("input[name='adultNum']").attr("disabled", true);
                    $("input[name='childNum']").attr("disabled", true);
                    $("input[name='adultCost']").val(0);
                    $("input[name='childCost']").val(0);
                    $("input[name='adultCost']").attr("disabled", true);
                    $("input[name='childCost']").attr("disabled", true);
                }
            } else {
                if (resourceType == 2) {
                    $(".content_hotel .adultNum").attr("disabled", false);
                    $(".content_hotel .adultCost").attr("disabled", false);
                } else {
                    $("input[name='adultNum']").attr("disabled", false);
                    $("input[name='childNum']").attr("disabled", false);
                    $("input[name='adultCost']").attr("disabled", false);
                    $("input[name='childCost']").attr("disabled", false);
                }
            }
        });

        $("input[name='maintenanceMode']", html).change(function (e) {
            var maintenanceMode = $("input[name='maintenanceMode']:checked", html).val();
            if (maintenanceMode == 1) {
                $(".departDates").show();
            } else {
                $(".departDates").hide();
            }
            calculateTotalPrice();
        });

        $(".changeReason", html).change(function(e) {
            var sourceTypeValue = $("input[name='sourceType']:checked", html).val();
            var changeReasonStr;
            if (sourceTypeValue == 1) {
                changeReasonStr = $("select[name='existChangeReason']").val();
            }
            if (sourceTypeValue == 2) {
                changeReasonStr = $("select[name='selfChangeReason']").val();
            }
            // 供应商备注-不允许输入房间或成人儿童数数量
            var resourceType;
            if (sourceTypeValue == 1) {
                resourceType = $("select[name='existResourceType']").val();
            }  else {
                resourceType = $("select[name='selfResourceType']").val();
            }
            if (resourceType == 2) {
                // 酒店
                if (changeReasonStr == "38-0-供应商备注") {
                    $(".content_hotel .adultNum").val(0);
                    $(".content_hotel .adultNum").attr("disabled", true);
                    $(".content_hotel .adultCost").val(0);
                    $(".content_hotel .adultCost").attr("disabled", true);
                    $(".content_hotel .extraAmount").val(0);
                    $(".content_hotel .extraAmount").attr("disabled", true);
                } else {
                    $(".content_hotel .adultNum").attr("disabled", false);
                    $(".content_hotel .adultCost").attr("disabled", false);
                    $(".content_hotel .extraAmount").attr("disabled", false);
                }
            } else {
                // 其他childNum
                if (changeReasonStr == "38-0-供应商备注") {
                    $("input[name='adultNum']").val(0);
                    $("input[name='childNum']").val(0);
                    $("input[name='adultNum']").attr("disabled", true);
                    $("input[name='childNum']").attr("disabled", true);
                    $("input[name='adultCost']").val(0);
                    $("input[name='childCost']").val(0);
                    $("input[name='adultCost']").attr("disabled", true);
                    $("input[name='childCost']").attr("disabled", true);
                    $("input[name='extraAmount']").val(0);
                    $("input[name='extraAmount']").attr("disabled", true);
                } else {
                    $("input[name='adultNum']").attr("disabled", false);
                    $("input[name='childNum']").attr("disabled", false);
                    $("input[name='adultCost']").attr("disabled", false);
                    $("input[name='childCost']").attr("disabled", false);
                    $("input[name='extraAmount']").attr("disabled", false);
                }
            }
            calculateTotalPrice(); //计算总价
        });
        // 初始化酒店多团期数据
        initHotelTourDate(html);
    }

    function vendorSearch(el) {
        var self = this;
        var s = new TNSearch({
            el: el,
            param: {
                flag: 1,
                fuzzy: 1,
                start: 0,
                limit: 20
            },
            url: config.getAction().getVendor,
            width: 140,
            showKey: "companyName",
            searchParam: "company_name",
            attrs: ["id"],
            maxShowCount: 0,
            autoComplete: false,
            selectFn: function (data) {
                if (data && data[0]) {
                    queryCurrencyInfo(data[0].id);
                }
            }
        });
    }

    function queryCurrencyInfo(vendorId) {
        /*查询订单人数详情信息*/
        var submitData = {};
        submitData.vendorId = vendorId;
        tn.ajax.request({
            url: config.getAction().queryCurrencyInfo,
            type: "GET",
            data: submitData,
            failback: true,
            listener: {
                success: function (json) {
                    if (json.success) {
                        var data = json.data;
                        if (null != data) {
                            if (!data.currencyName) {
                                config.noty.error('供应商币种或汇率信息未维护，无法执行变更采购单操作！');
                                win.hide();
                                return;
                            }
                            $(".costCurrencyName", html).text(data.currencyName);
                        } else {
                            $(".costCurrencyName", html).text("人民币");
                        }
                    } else {
                        $(".costCurrencyName", html).text("人民币");
                    }
                }
            }
        });
    }
    //计算本次采购总金额
    function calculateTotalPrice() {
        var totalPrice;
        if (data.batchFlag) {
            var adultTotalPrice = $("input[name='adultTotalCost']", html).val();
            var childTotalPrice = $("input[name='childTotalCost']", html).val();
            totalPrice = (parseFloat(adultTotalPrice) || 0) + (parseFloat(childTotalPrice) || 0);
        } else if ($("select[name='existResourceType']", html).val() == 2 || $("select[name='selfResourceType']", html).val() == 2) {
            totalPrice = 0;
            if ($("input[name='maintenanceMode']:checked", html).val() == 1) {
                var departsTableData = getDepartsTableData();
                $.each(departsTableData, function (i, item) {
                    var adultNum = parseFloat(item.adultNum) || 0;
                    var adultCost = parseFloat(item.adultCost) || 0;
                    var childNum = parseFloat(item.childNum) || 0;
                    var childCost = parseFloat(item.childCost) || 0;
                    totalPrice += adultNum * adultCost + childNum * childCost;
                });
            }
            var extraAmount = $("input[name='extraAmount']", html).val();
            totalPrice += parseFloat(extraAmount) || 0;
        } else {
            var adultNum = $("input[name='adultNum']", html).val();
            var adultCost = $("input[name='adultCost']", html).val();
            var childNum = $("input[name='childNum']", html).val();
            var childCost = $("input[name='childCost']", html).val();
            var extraAmount = $("input[name='extraAmount']", html).val();
            totalPrice = (parseFloat(adultNum) || 0) * (parseFloat(adultCost) || 0) + (parseFloat(childNum) || 0) * (parseFloat(childCost) || 0) + (parseFloat(extraAmount) || 0);
        }
        $("#totalPrice", html).text(totalPrice.toFixed(2));
    }
    //验证填写的金额是否符合要求
    function validatePrice() {
        var validResult = true;
        var title = "请输入价格，如4.99或-4.99";
        var pattern = /^-?\d+[\.]?\d{0,2}$/;
        //自身验证
        $.each($("input[my-ver-pattern='price']", html), function (i, item) {
            if (!$(item).is(':hidden')) {
                if (!pattern.test($(item).val())) {
                    $(item).addClass('ver-error');
                    $(item).tooltip({ title: title });
                    validResult = false;
                }
            }
        });
        return validResult;
    }
    //验证填写的人数是否符合要求
    function validateInt() {
        var validResult = true;
        var title = "请输入整数";
        var pattern = /^-?\d+$/;
        //自身验证
        $.each($("input[my-ver-pattern='integer']", html), function (i, item) {
            if (!$(item).is(':hidden')) {
                if (!pattern.test($(item).val())) {
                    $(item).addClass('ver-error');
                    $(item).tooltip({ title: title });
                    validResult = false;
                }
            }
        });
        return validResult;
    }

    //校验变更原因 add by yuconglong
    function validateChangeReason() {
        var sourceTypeValue = $("input[name='sourceType']:checked", html).val();
        var changeReason;
        if (sourceTypeValue == 1) {
            changeReason = $("select[name='existChangeReason']").val();
        }
        if (sourceTypeValue == 2) {
            changeReason = $("select[name='selfChangeReason']").val();
        }
        var validResult = true;
        var totalPrice = $("#totalPrice").text();
        if (changeReason == '25-0-资源成本减少') {
            if (totalPrice > 0 || totalPrice == 0) {
                config.noty.error("变更原因为资源成本减少,添加金额必须小于0");
                validResult = false;
            }
            return validResult;
        }
        if (changeReason == '38-0-供应商备注') {
            if (totalPrice != 0) {
                config.noty.error("变更原因为供应商备注，添加金额必须等于0");
                validResult = false;
            }
            return validResult;
        }
        if (changeReason == '33-1-供应商退还费用') {
            if (totalPrice > 0 || totalPrice == 0) {
                config.noty.error("变更原因为供应商退还费用，添加金额必须小于0");
                validResult = false;
            }
            return validResult;
        }
        if (changeReason == '26-1-优惠项') {
            if (totalPrice > 0 || totalPrice == 0) {
                config.noty.error("变更原因为优惠项，添加金额必须小于0");
                validResult = false;
            }
            return validResult;
        }
        return validResult;
    }


    //验证资源
    function validateResource(sourceType, existResourceName) {
        if (1 == sourceType) { //途牛已有资源
            if (null == existResourceName || "" == existResourceName) { //不存在对应的资源
                $("input[name='resourceId']", html).addClass('ver-error');
                $("input[name='resourceId']", html).tooltip({ title: "无此资源ID或者资源ID与资源类型不匹配，请重新填写" });
                return false;
            }
        }
        return true;
    }
    //验证是否正常加载了订单人员数据
    function validateOrderTourist() {
        var adultTotalNum = $("#adultTotalNum", html).text().trim();
        var childTotalNum = $("#childTotalNum", html).text().trim();
        if (null == adultTotalNum || "" == adultTotalNum || null == childTotalNum || "" == childTotalNum) {
            config.noty.confirm("成人总数，儿童总数加载失败，点击\"确定\"重新加载", {
                type: "btn btn-primary",
                text: "<i class='icon-ok'></i>确定",
                click: function (noty) {
                    noty.close();
                    orderTouristLoad();
                }
            });
            return false;
        }
        return true;
    }

    /**
     * 酒店资源显示多团期的变更样式
     * @param resourceType 资源类型
     */
    function showContent(resourceType) {
        if (resourceType == 2) {
            $(".content_other").hide();
            $(".content_hotel").show();
        } else {
            $(".content_other").show();
            $(".content_hotel").hide();
        }
        calculateTotalPrice();
    }

    function initHotelTourDate(html) {
        $('.startDate', html).kalendae({
            months: 1,
            mode: 'single',
            side: 'buttom'
        }, html);

        $('.endDate', html).kalendae({
            months: 1,
            mode: 'single',
            side: 'buttom'
        }, html);

        calRender.call(this, $('.startDate', html), function (data) {
            return compare($('.endDate', html).val(), 1, data);
        }, function () {
            $('.startDate', html).val(this.getSelected()).blur();
            departsTableInit($(".startDate", html).val(), $(".endDate", html).val());
        });
        calRender.call(this, $('.endDate', html), function (data) {
            return compare($('.startDate', html).val(), 0, data);
        }, function () {
            $('.endDate', html).val(this.getSelected()).blur();
            departsTableInit($(".startDate", html).val(), $(".endDate", html).val());
        });

        $(".startDate", html).val(data.tourDate);
        $(".endDate", html).val(data.tourDate);
        departsTableInit($(".startDate", html).val(), $(".endDate", html).val());
    }

    function departsTableInit(startDate, endDate, isSupportChild) {
        if (startDate && endDate) {
            var startMoment = Kalendae.moment(startDate);
            var endMoment = Kalendae.moment(endDate);
            if (startMoment < endMoment) {
                endMoment = endMoment.add({ d: -1 })
            }
            var departsTableData = getDepartsTableData();
            $(".departsTable tbody", html).empty();
            while (startMoment <= endMoment) {
                var adultNum = "";
                var adultCost = "";
                var childNum = "";
                var childCost = "";
                $.each(departsTableData, function (i, item) {
                    if (item.departDate == startMoment.format("YYYY-MM-DD")) {
                        adultNum = item.adultNum;
                        adultCost = item.adultCost;
                        childNum = item.childNum;
                        childCost = item.childCost;
                    }
                });
                var $departDateTr = $('<tr class="zh-small"></tr>');
                $departDateTr.append($('<td width="160" align="center" class="departDate">' + startMoment.format("YYYY-MM-DD") + '</td>' +
                    '<td width="160" align="center"><input type="text" class="calculateTotalPrice adultNum" ver-required="true" my-ver-pattern="integer" ver-length="10" value="' + adultNum + '"/></td>' +
                    '<td width="160" align="center"><input type="text" class="calculateTotalPrice adultCost" ver-required="true" my-ver-pattern="price" ver-length="10" value="' + adultCost + '"/></td>'));
                if (isSupportChild) {
                    $departDateTr.append($('<td width="160" align="center"><input type="text" class="calculateTotalPrice childNum" ver-required="true" my-ver-pattern="integer" ver-length="10" value="' + childNum + '"/></td>' +
                        '<td width="160" align="center"><input type="text" class="calculateTotalPrice childCost" ver-required="true" my-ver-pattern="price" ver-length="10" value="' + childCost + '"/></td>'));
                }
                $(".departsTable tbody", html).append($departDateTr);
                startMoment = startMoment.add({ d: 1 });
            }
            calculateTotalPrice();
            $.each($(".calculateTotalPrice", html), function (i, item) {
                $(item).change(function (e) {
                    calculateTotalPrice();
                });
            });
        }
    }

    function getDepartsTableData() {
        var data = [];
        $.each($(".departsTable", html), function (j, itemJ) {
            if (!$(itemJ).is(':hidden')) {
                $.each($("tbody tr", itemJ), function (i, item) {
                    data[i] = {};
                    data[i].departDate = $("td[class='departDate']", item).html();
                    data[i].adultNum = $("td .adultNum", item).val();
                    data[i].adultCost = $("td .adultCost", item).val();
                    data[i].childNum = $("td .childNum", item).val();
                    data[i].childCost = $("td .childCost", item).val();
                });
            }
        });
        return data;
    }

    function calRender(el, blackout, change) {
        el.keydown(function (e) {
            if (e.keyCode == 8) $(this).val("");
            return false;
        }).kalendae({
            blackout: blackout,
            subscribe: {
                change: change
            }
        });

    }

    //时间比较
    function compare(v, flag, data) {
        if (v) {
            if (flag) {
                return Kalendae.moment(v) < data ? true : false;
            } else {
                return Kalendae.moment(v) > data ? true : false;
            }
        } else {
            return false;
        }
    }

    /**
     * 查询资源名称
     */
    function resNameReload() {
        //先将existResourceName 置为空
        $("input[name='existResourceName']", html).val("");
        var resourceId = $("input[name='resourceId']", html).val();
        //途牛存在的资源
        var resourceType = $("select[name='existResourceType']", html).val();
        if (null == resourceId || "" == resourceId || null == resourceType || "" == resourceType) {
            return;
        }
        var submitData = {};
        submitData.resId = resourceId;
        submitData.resType = resourceType;
        tn.ajax.request({
            url: config.getAction().resNameQueryUrl,
            type: "GET",
            data: submitData,
            listener: {
                success: function (json) {
                    if (json.success) {
                        var data = json.data;
                        if (null == data || null == data.resName || "" == data.resName) {
                            config.noty.error(json.msg);
                        } else {
                            $("input[name='existResourceName']").val(data.resName);
                        }
                    } else {
                        config.noty.error(json.msg);
                    }
                }
            }
        });
    }
    /*查询订单人数信息*/
    function orderTouristLoad() {
        var submitData = {};
        submitData.orderIds = data.orderIdList;
        tn.ajax.request({
            url: config.getAction().orderTourist,
            type: "POST",
            data: submitData,
            failback: true,
            listener: {
                success: function (json) {
                    var data = json.data;
                    if (null != data) {
                        if (data.adultCnt == 0) {
                            $("input[name='adultTotalCost']").removeAttr("ver-required");
                            $("input[name='adultTotalCost']").removeAttr("ver-length");
                            $("input[name='adultTotalCost']").removeAttr("my-ver-pattern");
                            $("input[name='adultTotalCost']").attr("disabled", true);
                        };
                        if (data.childCnt == 0) {
                            $("input[name='childTotalCost']").removeAttr("ver-required");
                            $("input[name='childTotalCost']").removeAttr("ver-length");
                            $("input[name='childTotalCost']").removeAttr("my-ver-pattern");
                            $("input[name='childTotalCost']").attr("disabled", true);
                        };
                        $("#adultTotalNum", html).text(data.adultCnt);
                        $("#childTotalNum", html).text(data.childCnt);
                    } else {
                        config.noty.error(json.msg);
                    }
                }
            }
        });
    }
    /*查询订单人数详情信息*/
    function orderTouristNameLoad() {
        var submitData = {};
        submitData.orderId = data.orderId;
        var purchaseId = data.purchaseId;
        var addUid = data.addUid;
        tn.ajax.request({
            url: config.getAction().orderTouristName,
            type: "GET",
            data: submitData,
            failback: true,
            listener: {
                success: function (json) {
                    if (json.success) {
                        var data = json.data;
                        data.purchaseId = purchaseId;
                        data.addUid = addUid;
                        //如果是手动添加的，需要查询原采购单对应的游客信息
                        if (addUid != 39) {
                            tn.ajax.request({
                                url: config.getAction().orderTouristByPurchaseId,
                                type: "GET",
                                data: { "purchaseId": data.purchaseId },
                                failback: true,
                                listener: {
                                    success: function (json) {
                                        var touristList = data.touristList;
                                        var checkedList = json.data;
                                        if (null != checkedList && checkedList.length > 0) {
                                            for (var i = touristList.length - 1; i >= 0; i--) {
                                                for (var j = checkedList.length - 1; j >= 0; j--) {
                                                    if (touristList[i].personId == checkedList[j]) {
                                                        touristList[i].checked = true;
                                                    };
                                                };
                                            };
                                        }
                                        if (null != data) {
                                            $("#adultTotalNum", html).text(data.adultCnt);
                                            $("#childTotalNum", html).text(data.childCnt);
                                            createTouristList(data);
                                        }
                                    }
                                }
                            });
                        } else {
                            for (var i = data.touristList.length - 1; i >= 0; i--) {
                                data.touristList[i].checked = true;
                            };
                            if (null != data) {
                                $("#adultTotalNum", html).text(data.adultCnt);
                                $("#childTotalNum", html).text(data.childCnt);
                                createTouristList(data);
                            }
                        }
                    } else {
                        config.noty.error(json.msg);
                    }
                }
            }
        });
    }

    function createTouristList(data) {
        //先清空
        $(".touristList", html).empty();
        var topLi = $("<li><input type='checkbox' style='width:20px;'/><span style='width:60px;margin-rigth:20px;display:inline-block;'>全选</span><span style='color:blue'>（勾选的游客信息将在确认单中展示）</span></li>");
        $(".touristList", html).append(topLi);
        if (null == data) {
            return;
        }
        var childChecks = [];
        var list = data.touristList;
        if (null != list) {
            for (var key in list) {
                var contentLi = $("<li><input type='checkbox' name='customerIds' value='" + list[key].personId + "' style='width:20px;margin-left:30px;'/><span style='width:60px;margin-rigth:20px;display:inline-block;'>" + list[key].name + "</span>（证件号码：" + list[key].psptId + "）</li>");
                if (list[key].checked) {
                    $("input[name='customerIds']", contentLi).attr("checked", true)
                };
                $(".touristList", html).append(contentLi);
                childChecks.push($("input[type='checkbox']", contentLi)[0]);
            }
        }
        var allCheck = $("input[type='checkbox']", topLi);
        //全选添加绑定事件
        $(allCheck[0]).click(function () {
            var checked = this.checked;
            $.each(childChecks, function (i, item) {
                item.checked = checked;
            });
        });
        //子选项绑定事件
        $.each(childChecks, function (i, item) {
            $(item).click(function () {
                var checked = this.checked;
                if (checked) { //选中
                    //判断是否都已选中
                    var childAllChecked = true;
                    $.each(childChecks, function (j, itemJ) {
                        if (!itemJ.checked) {
                            childAllChecked = false;
                        }
                    });
                    if (childAllChecked) {
                        allCheck[0].checked = true;
                    }
                } else {
                    allCheck[0].checked = false;
                }
            });
        });
    }
}