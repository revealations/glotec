﻿/*!
    *
    * Wijmo Library 5.20212.812
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var wijmo;!function(e){window.wijmo||(window.wijmo=e);var o={Globalize:{name:"zh-TW",displayName:"Chinese (Traditional, Taiwan)",numberFormat:{".":".",",":",","-":"-","+":"+","%":"%",percent:{pattern:["-n%","n%"]},currency:{decimals:2,symbol:"NT$",pattern:["-$n","$n"]}},calendar:{"/":"/",":":":",firstDay:0,days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],daysAbbr:["週日","週一","週二","週三","週四","週五","週六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsAbbr:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],am:["上午","上"],pm:["下午","下"],eras:["西元"],patterns:{d:"yyyy/M/d",D:'yyyy"年"M"月"d"日"',f:'yyyy"年"M"月"d"日" tt hh:mm',F:'yyyy"年"M"月"d"日" tt hh:mm:ss',t:"tt hh:mm",T:"tt hh:mm:ss",m:'M"月"d"日"',M:'M"月"d"日"',y:'yyyy"年"M"月"',Y:'yyyy"年"M"月"',g:"yyyy/M/d tt hh:mm",G:"yyyy/M/d tt hh:mm:ss",s:'yyyy"-"MM"-"dd"T"HH":"mm":"ss'}}},Licensing:{cls:"關閉",ctc:'请联系葡萄城厂家： <a href="mailto:sales.xa@grapecity.com">sales.xa@grapecity.com</a>。',dmn:"当前应用程序中的Wijmo许可对于该域名无效。授权域名是<b>{licDomain}</b>；当前域名是<b>{domain}</b>。",evl:"Wijmo 试用版({version})",exp:"当前应用程序中的Wijmo许可已经过期。 许可失效时间为<b>{expDate:d}</b>。",hdr:"Wijmo许可",lic:"当前应用程序中的Wijmo许可无效。",mss:"当前应用程序中的Wijmo许可未被设置。",prd:"当前应用程序中的Wijmo许可对于<b>{control}</b>控件无效。",ver:"当前应用程序中的Wijmo许可对正在使用的控件版本无效。 许可版本是<b>{licVer}</b>；当前版本是<b>{version}</b>。"},Calendar:{ariaLabels:{calendar:"行事曆",monthView:"月檢視",yearView:"年檢視",prvMo:"前一月",today:"今天",nxtMo:"下個月",prvYr:"去年",currMo:"當前月份",nxtYr:"明年"}},DropDown:{ariaLabels:{tgl:"切換下拉清單"}},FlexGrid:{groupHeaderFormat:"{name}: <b>{value}</b> ({count:n0} 項目)",ariaLabels:{toggleDropDown:"切換下拉清單",toggleGroup:"切換組"}},FlexGridDetailProvider:{ariaLabels:{toggleDetail:"切換行詳細資訊"}},FlexGridFilter:{ariaLabels:{edit:"編輯列的篩選器",dialog:"列的濾鏡編輯器",asc:"按昇冪排列列",dsc:"按降冪排列列",search:"搜索專案清單",op1:"第一個條件運算子",val1:"第一個條件值",and:"要求兩種條件",or:"要求任一條件",op2:"第二條件運算子",val2:"第二個條件值"},ascending:"↑ 遞增排序",descending:"↓ 遞減排序",apply:"應用",cancel:"取消",clear:"清除",conditions:"依條件篩選",values:"依值篩選",search:"搜尋",selectAll:"選取全部",null:"(無)",header:"顯示項目的值為",and:"與",or:"或",stringOperators:[{name:"(未設定)",op:null},{name:"等於",op:0},{name:"不等於",op:1},{name:"開頭為",op:6},{name:"結尾為",op:7},{name:"包含",op:8},{name:"不包含",op:9}],numberOperators:[{name:"(未設定)",op:null},{name:"等於",op:0},{name:"不等於",op:1},{name:"大於",op:2},{name:"大於或等於",op:3},{name:"小於",op:4},{name:"小於或等於",op:5}],dateOperators:[{name:"(未設定)",op:null},{name:"等於",op:0},{name:"早於",op:4},{name:"晚於",op:2}],booleanOperators:[{name:"(未設定)",op:null},{name:"等於",op:0},{name:"不等於",op:1}]},GroupPanel:{dragDrop:"在此處拖放列以創建組。"},InputDateTime:{ariaLabels:{tglDate:"切換日曆",tglTime:"切換時間清單"}},InputNumber:{ariaLabels:{incVal:"增加價值",decVal:"減小值"}},MultiSelect:{itemsSelected:"選定{count:n0}個項目"},MultiSelectListBox:{filterPlaceholder:"篩選",selectAll:"全選"},olap:{PivotFieldEditor:{dialogHeader:"欄位設置:",header:"欄位名稱:",summary:"摘要:",showAs:"顯示為:",weighBy:"通過權衡:",sort:"排序:",filter:"篩選器:",format:"格式:",sample:"示例:",edit:"編輯…",clear:"清除",ok:"確定",cancel:"取消",none:"(不擬校對)",sorts:{asc:"遞增",desc:"遞減"},aggs:{sum:"加總",cnt:"計數",avg:"平均",max:"最大值",min:"分鐘",rng:"範圍",std:"標準差",var:"VAR",stdp:"StdDevPop",varp:"VarPop",first:"第一個",last:"最後一個"},calcs:{noCalc:"無計算",dRow:"上一行的區別",dRowPct:"%上一行的區別",dCol:"前一篇專欄的區別",dColPct:"%上一列的區別",dPctGrand:"總計的百分比",dPctRow:"%的行總數",dPrevRow:"前一行中的值的百分比",dPctCol:"%的列合計",dPrevCol:"上一列中值的百分比",dRunTot:"運行總和",dRunTotPct:"總運行 %"},formats:{n0:"整數 (n0)",n2:"浮 (n2)",c:"(C) 貨幣",p0:"百分比 (p0)",p2:"百分比 (p2)",n2c:"數千人 (n2，)",n2cc:"數以百萬計 (n2、、)",n2ccc:"數十億 (n2、、、)",d:"日期 (d)",MMMMddyyyy:"月天年 （MMMM dd，yyyy）",dMyy:"天月年 (d/M/yy)",ddMyy:"天月年 (dd/M/yy)",dMyyyy:"天月年 (dd/M/yyyy)",MMMyyyy:"月年 (MMM yyyy)",MMMMyyyy:"月年 (MMMM yyyy)",yyyy:"年 (yyyy)",yyyyQq:'去年季度 (yyyy"Q"q)',FYEEEEQU:'財政年度季度 ("FY"哎"Q"U)'}},PivotEngine:{grandTotal:"總計",subTotal:"小計"},PivotPanel:{fields:"選擇要向報表中添加欄位:",drag:"在以下區域之間拖曳欄位:",filters:"篩選",cols:"欄",rows:"列",vals:"值",defer:"推遲更新",update:"更新"},_ListContextMenu:{up:"上移",down:"下移",first:"移動至開頭",last:"移動至結尾",filter:"移到報表篩選",rows:"移到列標籤",cols:"移到欄標籤",vals:"移到值",remove:"移除欄位",edit:"欄位設定…",detail:"顯示詳細資訊…"},PivotChart:{by:"乘",and:"和"},DetailDialog:{header:"詳細資訊視圖:",ok:"確定",items:"{cnt:n0} 專案",item:"{cnt} 專案",row:"資料列",col:"直條圖"},Slicer:{multiSelect:"多選",clearFilter:"清除篩選器"}},Viewer:{cancel:"取消",ok:"確定",bottom:"下:",top:"上:",right:"右:",left:"左:",margins:"邊界 (英吋)",orientation:"定位:",paperKind:"紙類:",pageSetup:"設定列印格式",landscape:"橫向",portrait:"縱向",pageNumber:"頁碼",zoomFactor:"縮放係數",paginated:"整頁模式",print:"列印",search:"搜尋",matchCase:"大小寫須相符",wholeWord:"全字拼寫須相符",searchResults:"搜尋結果",previousPage:"上一頁",nextPage:"下一頁",firstPage:"第一頁",lastPage:"最後一頁",backwardHistory:"往後",forwardHistory:"轉寄",pageCount:"頁面計數",selectTool:"選擇工具",moveTool:"移動工具",continuousMode:"連續的網頁視圖",singleMode:"單一的網頁視圖",wholePage:"適應整頁",pageWidth:"頁面寬度",zoomOut:"拉遠顯示",zoomIn:"拉近顯示",rubberbandTool:"按選區縮放",magnifierTool:"放大鏡",rotatePage:"旋轉頁面",rotateDocument:"旋轉文檔",exports:"匯出",fullScreen:"全螢幕",exitFullScreen:"結束全螢幕",hamburgerMenu:"工具",showSearchBar:"顯示搜尋列",viewMenu:"佈局選項",searchOptions:"搜尋選項",matchCaseMenuItem:"大小寫須相符",wholeWordMenuItem:"全字匹配",thumbnails:"頁面縮略圖",outlines:"文件引導模式",loading:"正在載入…",pdfExportName:"Adobe PDF",docxExportName:"打開 XML 詞",xlsxExportName:"打開 XML Excel",docExportName:"Microsoft Word",xlsExportName:"Microsoft Excel",mhtmlExportName:"Web 檔案 (MHTML)",htmlExportName:"HTML 文檔",rtfExportName:"RTF 文檔",metafileExportName:"壓縮的圖中繼檔",csvExportName:"CSV",tiffExportName:"Tiff 圖像",bmpExportName:"BMP 圖像",emfExportName:"增強型圖中繼檔",gifExportName:"GIF 圖像",jpgExportName:"JPEG 圖像",jpegExportName:"JPEG 圖像",pngExportName:"PNG 圖像",abstractMethodException:"這是一種抽象的方法，請執行它。",cannotRenderPageNoViewPage:"無法呈現無文檔源頁面和視圖頁面。",cannotRenderPageNoDoc:"無法呈現無文檔源頁面和視圖頁面。",exportFormat:"匯出格式︰",exportOptionTitle:"匯出選項",documentRestrictionsGroup:"文檔限制",passwordSecurityGroup:"密碼安全性",outputRangeGroup:"輸出範圍",documentInfoGroup:"文檔資訊",generalGroup:"一般",docInfoTitle:"標題",docInfoAuthor:"製作者",docInfoManager:"主管",docInfoOperator:"運算子",docInfoCompany:"公司",docInfoSubject:"主旨",docInfoComment:"Comment",docInfoCreator:"建立者",docInfoProducer:"製作人",docInfoCreationTime:"創建時間",docInfoRevisionTime:"修改時間",docInfoKeywords:"關鍵字",embedFonts:"內嵌 TrueType 字型",pdfACompatible:"PDF/A 相容 (水準 2B)",useCompression:"使用壓縮",useOutlines:"生成的輪廓",allowCopyContent:"允許內容複寫或提取",allowEditAnnotations:"允許編輯注釋",allowEditContent:"允許內容編輯",allowPrint:"允許列印",ownerPassword:"許可權 （擁有者） 密碼︰",userPassword:"文檔打開 （使用者） 密碼︰",encryptionType:"加密級別︰",paged:"已分頁",showNavigator:"顯示導覽",navigatorPosition:"導航器位置",singleFile:"單個檔",tolerance:"容限時檢測文本邊界 （點）︰",pictureLayer:"使用單獨的圖片圖層",metafileType:"圖元檔案類型︰",monochrome:"單色",resolution:"解析度:",outputRange:"頁面範圍︰",outputRangeInverted:"反轉",showZoomBar:"縮放欄",searchPrev:"搜尋上一個",searchNext:"搜尋下一個",checkMark:"✓",exportOk:"出口…",cannotSearch:"搜索要求指定文檔源。",parameters:"參數",requiringParameters:"請輸入參數。",nullParameterError:"值不能為 null。",invalidParameterError:"輸入無效。",parameterNoneItemsSelected:"(不擬校對)",parameterAllItemsSelected:"(全部)",parameterSelectAllItemText:"(選擇所有)",selectParameterValue:"(選擇的值)",apply:"應用",errorOccured:"已發生錯誤。"},FlexSheet:{insertRow:"插入資料列",deleteRow:"刪除資料列",insertCol:"插入資料行",deleteCol:"刪除資料行",convertTable:"表格轉換",copyCells:"複製儲存格",fillSeries:"以數列方式填滿",fillFormat:"僅以格式填滿",fillWithoutFormat:"填滿但不填入格式",insertSheet:"插入",deleteSheet:"刪除",renameSheet:"重新命名"},FlexChartAnalytics:{BreakEven:{profitArea:"利潤區域",lossArea:"損失面積",safetyMargin:"安全边际",salesRevenue:"銷售收入",totalCost:"總成本",fixedCost:"固定成本",variableCost:"可變成本",marginalProfit:"邊際利潤",breakEven:"收支平衡"}}},a=window.wijmo._updateCulture;a?a(o):window.wijmo.culture=o}(wijmo||(wijmo={}));