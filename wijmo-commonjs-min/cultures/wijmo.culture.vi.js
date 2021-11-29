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

var wijmo;!function(n){window.wijmo||(window.wijmo=n);var t={Globalize:{name:"vi",displayName:"Vietnamese",numberFormat:{".":",",",":".","-":"-","+":"+","%":"%",percent:{pattern:["-n%","n%"]},currency:{decimals:2,symbol:"₫",pattern:["-n $","n $"]}},calendar:{"/":"/",":":":",firstDay:1,days:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],daysAbbr:["CN","T2","T3","T4","T5","T6","T7"],months:["Tháng Giêng","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],monthsAbbr:["Thg1","Thg2","Thg3","Thg4","Thg5","Thg6","Thg7","Thg8","Thg9","Thg10","Thg11","Thg12"],am:["SA","S"],pm:["CH","C"],eras:["A.D."],patterns:{d:"dd/MM/yyyy",D:"dd MMMM yyyy",f:"dd MMMM yyyy h:mm tt",F:"dd MMMM yyyy h:mm:ss tt",t:"h:mm tt",T:"h:mm:ss tt",m:"dd MMMM",M:"dd MMMM",y:"MMMM yyyy",Y:"MMMM yyyy",g:"dd/MM/yyyy h:mm tt",G:"dd/MM/yyyy h:mm:ss tt",s:'yyyy"-"MM"-"dd"T"HH":"mm":"ss'},fiscalYearOffsets:[-3,-3]}},Licensing:{cls:"ĐÓNG",ctc:'Xin vui lòng liên hệ với Grapecity:  <a href="mailto:us.sales@grapecity.com"> us.sales@grapecity.com</a>.',dmn:"Bản quyền Wijmo trong ứng dụng này là không hợp lệ cho tên miền hiện tại. Tên miền hợp lệ là  <b> {licDomain}</b>; tên miền hiện tại là  <b> {domain}</b>.",evl:"Phiên bản Wijmo Evaluation ({version})",exp:"Bản quyền Wijmo trong ứng dụng này đã hết hạn. Ngày hết hạn là  <b> {expDate:d}</b>.",hdr:"Bản quyền Wijmo",lic:"Bản quyền Wijmo trong ứng dụng này không hợp lệ.",mss:"Bản quyền Wijmo trong ứng dụng này chưa có.",prd:"Bản quyền Wijmo trong ứng dụng này là không hợp lệ đối với lệnh  <b> {control} </b>  .",ver:"Bản quyền Wijmo trong ứng dụng này là không hợp lệ cho phiên bản đang sử dụng. Phiên bản hợp lệ là  <b> {licVer}</b>; Phiên bản của ứng dụng là  <b> {version}</b>."},Calendar:{ariaLabels:{calendar:"Lịch",monthView:"Xem Tháng",yearView:"Xem Năm",prvMo:"Tháng Trước",today:"Hôm nay",nxtMo:"Tháng Tiếp theo",prvYr:"Năm Trước",currMo:"Tháng Hiện tại",nxtYr:"Năm Tiếp theo"}},DropDown:{ariaLabels:{tgl:"Bật tắt trình đơn xổ dọc"}},FlexGrid:{groupHeaderFormat:"{name}: <b>{value}</b> ({count:n0} mục)",ariaLabels:{toggleDropDown:"Bật tắt trình đơn xổ dọc",toggleGroup:"Bật tắt Nhóm"}},FlexGridDetailProvider:{ariaLabels:{toggleDetail:"Bật tắt Hàng Chi tiết"}},FlexGridFilter:{ariaLabels:{edit:"Chỉnh sửa bộ lọc cho cột",dialog:"Hiệu chỉnh Bộ lọc Cột",asc:"Sắp xếp cột theo thứ tự tăng dần",dsc:"Sắp xếp cột theo thứ tự giảm dần",search:"Tìm danh sách Mục",op1:"Toán tử điều kiện đầu tiên",val1:"Giá trị điều kiện Đầu tiên",and:"Yêu cầu cả hai điều kiện",or:"Yêu cầu điều kiện hoặc",op2:"Toán tử điều kiện thứ hai",val2:"Giá trị điều kiện Thứ hai"},ascending:"↑ Tăng dần",descending:"↓ Giảm dần",apply:"Áp dụng",cancel:"Hủy",clear:"Xóa",conditions:"Lọc theo Điều kiện",values:"Lọc theo Giá trị",search:"Tìm kiếm",selectAll:"Chọn Tất cả",null:"(không có)",header:"Hiện các mục nơi giá trị",and:"Và",or:"Hoặc",stringOperators:[{name:"(chưa thiết lập)",op:null},{name:"Bằng",op:0},{name:"Không bằng",op:1},{name:"Bắt đầu với",op:6},{name:"Kết thúc bằng",op:7},{name:"Chứa",op:8},{name:"Không chứa",op:9}],numberOperators:[{name:"(chưa thiết lập)",op:null},{name:"Bằng",op:0},{name:"Không bằng",op:1},{name:"Lớn hơn",op:2},{name:"Lớn hơn hoặc bằng",op:3},{name:"Nhỏ hơn",op:4},{name:"Nhỏ hơn hoặc bằng",op:5}],dateOperators:[{name:"(chưa thiết lập)",op:null},{name:"Bằng",op:0},{name:"Nằm trước",op:4},{name:"Nằm sau",op:2}],booleanOperators:[{name:"(chưa thiết lập)",op:null},{name:"Bằng",op:0},{name:"Không bằng",op:1}]},GroupPanel:{dragDrop:"Kéo và thả các cột ở đây để tạo nhóm."},InputDateTime:{ariaLabels:{tglDate:"Chuyển đổi lịch",tglTime:"Bật tắt danh sách Thời gian"}},InputNumber:{ariaLabels:{incVal:"Tăng giá trị",decVal:"Giảm giá trị"}},MultiSelect:{itemsSelected:"{count:n0} mục được chọn"},MultiSelectListBox:{filterPlaceholder:"Bộ lọc",selectAll:"Chọn Tất cả"},olap:{PivotFieldEditor:{dialogHeader:"Thiết đặt Trường:",header:"Đầu trang:",summary:"Tổng kết:",showAs:"Hiện là:",weighBy:"Đo bằng:",sort:"Sắp xếp:",filter:"Bộ lọc:",format:"Định dạng:",sample:"Mẫu:",edit:"Chỉnh sửa…",clear:"Xóa",ok:"OK",cancel:"Hủy",none:"(không có)",sorts:{asc:"Tăng dần",desc:"Giảm dần"},aggs:{sum:"Tổng",cnt:"Đếm",avg:"Trung bình",max:"Lớn nhất",min:"Nhỏ nhất",rng:"Phạm vi",std:"StdDev",var:"Var",stdp:"StdDevPop",varp:"VarPop",first:"Đầu tiên",last:"Cuối cùng"},calcs:{noCalc:"Không có Tính toán",dRow:"Khác với hàng trước",dRowPct:"% Khác hàng trước",dCol:"Khác với cột trước",dColPct:"% Khác cột trước",dPctGrand:"% của Tổng cuối",dPctRow:"% của Tổng hàng",dPrevRow:"% của giá trị ở hàng trước",dPctCol:"% của Tổng cột",dPrevCol:"% của giá trị trong cột trước",dRunTot:"Tổng hiện có",dRunTotPct:"% Tổng hiện có"},formats:{n0:"Số nguyên (n0)",n2:"Float (n2)",c:"Tiền tệ (c)",p0:"Tỷ lệ phần trăm (p0)",p2:"Tỷ lệ phần trăm (p2)",n2c:"Hàng ngàn (n2,)",n2cc:"Hàng triệu (n2,,)",n2ccc:"Hàng tỷ (n2,,,)",d:"Ngày (d)",MMMMddyyyy:"Tháng ngày năm (MMMM dd, yyyy)",dMyy:"Ngày tháng năm (d/M/yy)",ddMyy:"Ngày tháng năm (dd/M/yy)",dMyyyy:"Ngày tháng năm (dd/M/yyyy)",MMMyyyy:"Tháng năm (MMM yyyy)",MMMMyyyy:"Tháng năm (MMMM yyyy)",yyyy:"Năm (yyyy)",yyyyQq:'Năm Quý (yyyy "Q" q)',FYEEEEQU:'Quý theo năm tài chính ("Năm tài chính" EEEE "Qúy" U)'}},PivotEngine:{grandTotal:"Tổng cuối",subTotal:"Tổng con"},PivotPanel:{fields:"Chọn các trường để thêm vào báo cáo:",drag:"Kéo trường giữa các vùng bên dưới:",filters:"Bộ lọc",cols:"Cột",rows:"Hàng",vals:"Giá trị",defer:"Trì hoãn Cập nhật ngay",update:"Cập nhật"},_ListContextMenu:{up:"Chuyển Lên",down:"Chuyển xuống",first:"Chuyển tới Đầu",last:"Chuyển đến Cuối",filter:"Di chuyển tới Bộ lọc Báo cáo",rows:"Di chuyển tới Nhãn Hàng",cols:"Di chuyển tới Nhãn Cột",vals:"Di chuyển tới Giá trị",remove:"Loại bỏ Trường",edit:"Thiết đặt Trường…",detail:"Hiện chi tiết…"},PivotChart:{by:"bởi",and:"và"},DetailDialog:{header:"Xem chi tiết:",ok:"OK",items:"{cnt:n0} mục",item:"{cnt} mục",row:"Hàng",col:"Cột"},Slicer:{multiSelect:"Đa lựa chọn",clearFilter:"Xóa Bộ lọc"}},Viewer:{cancel:"Hủy",ok:"OK",bottom:"Dưới cùng:",top:"Trên cùng:",right:"Phải:",left:"Trái:",margins:"Lề (inches)",orientation:"Hướng:",paperKind:"Loại giấy:",pageSetup:"Thiết lập Trang",landscape:"Khổ ngang",portrait:"Khổ dọc",pageNumber:"Số Trang",zoomFactor:"Hệ số Thu Phóng",paginated:"Đánh số trang",print:"In",search:"Tìm kiếm",matchCase:"Khớp chữ hoa/thường",wholeWord:"Chỉ Khớp toàn bộ Từ",searchResults:"Kết quả Tìm kiếm",previousPage:"Trang Trước",nextPage:"Trang Tiếp theo",firstPage:"Trang Đầu",lastPage:"Trang Cuối",backwardHistory:"Sau",forwardHistory:"Trước",pageCount:"Số lượng Trang",selectTool:"Chọn công cụ",moveTool:"Công cụ di chuyển",continuousMode:"Xem trang liên tục",singleMode:"Xem từng trang",wholePage:"Đặt vừa toàn bộ Trang",pageWidth:"Đặt vừa chiều rộng Trang",zoomOut:"Thu nhỏ",zoomIn:"Phóng to",rubberbandTool:"Thu/Phóng bằng Vùng chọn",magnifierTool:"Kính lúp",rotatePage:"Xoay trang",rotateDocument:"Xoay tài liệu",exports:"Xuất",fullScreen:"Toàn Màn hình",exitFullScreen:"Thu nhỏ Màn hình",hamburgerMenu:"Công cụ",showSearchBar:"Hiện thanh tìm kiếm",viewMenu:"Tùy chọn Bố trí",searchOptions:"Tùy chọn Tìm kiếm",matchCaseMenuItem:"Khớp chữ hoa/thường",wholeWordMenuItem:"Khớp toàn bộ Từ",thumbnails:"Thu gọn Trang",outlines:"Sơ đồ tài liệu",loading:"Đang tải…",pdfExportName:"Adobe PDF",docxExportName:"Mở từ file XML Word",xlsxExportName:"Mở file XML Excel",docExportName:"Microsoft Word",xlsExportName:"Microsoft Excel",mhtmlExportName:"Lưu trữ web (MHTML)",htmlExportName:"Tài liệu HTML",rtfExportName:"Tài liệu RTF",metafileExportName:"Tập tin đã nén",csvExportName:"CSV",tiffExportName:"Ảnh TIFF",bmpExportName:"Ảnh BMP",emfExportName:"Siêu tệp tin",gifExportName:"Ảnh GIF",jpgExportName:"Ảnh JPEG",jpegExportName:"Ảnh JPEG",pngExportName:"Ảnh PNG",abstractMethodException:"Đây là một phương pháp trừu tượng, hãy thực hiện nó.",cannotRenderPageNoViewPage:"Không thể hiển thị trang mà không có nguồn tài liệu và xem trang.",cannotRenderPageNoDoc:"Không thể hiển thị trang mà không có nguồn tài liệu và xem trang.",exportFormat:"Định dạng xuất:",exportOptionTitle:"Tùy chọn khi xuất",documentRestrictionsGroup:"Giới hạn tài liệu",passwordSecurityGroup:"Bảo vệ mật khẩu",outputRangeGroup:"Phạm vi đầu ra",documentInfoGroup:"Thông tin tài liệu",generalGroup:"Chung",docInfoTitle:"Tiêu đề",docInfoAuthor:"Tác giả",docInfoManager:"Trình quản lý",docInfoOperator:"Toán tử",docInfoCompany:"Công ty",docInfoSubject:"Chủ đề",docInfoComment:"Chú thích",docInfoCreator:"Người tạo",docInfoProducer:"Nhà sản xuất",docInfoCreationTime:"Thời gian tạo",docInfoRevisionTime:"Sửa đổi thời gian",docInfoKeywords:"Từ khóa",embedFonts:"Nhúng Phông chữ TrueType",pdfACompatible:"Tương thích với PDF/A (cấp 2B)",useCompression:"Sử dụng nén",useOutlines:"Tạo ra phác thảo",allowCopyContent:"Cho phép sao chép hoặc giải nén nội dung",allowEditAnnotations:"Cho phép chỉnh sửa chú thích",allowEditContent:"Cho phép chỉnh sửa nội dung",allowPrint:"Cho phép in",ownerPassword:"Mật khẩu cho phép (chủ sở hữu):",userPassword:"Mật khẩu mở tài liệu (người dùng):",encryptionType:"Mức mã hóa:",paged:"Được đánh số trang",showNavigator:"Hiện Bộ điều hướng",navigatorPosition:"Vị trí hoa tiêu",singleFile:"File đơn lẻ",tolerance:"Dung sai khi phát hiện văn bản giới hạn (điểm):",pictureLayer:"Sử dụng lớp hình ảnh riêng biệt",metafileType:"Loại Metafile",monochrome:"Monochrome",resolution:"Độ phân giải:",outputRange:"Phạm vi Trang:",outputRangeInverted:"Đảo ngược",showZoomBar:"Thanh công cụ Thu/Phóng",searchPrev:"Tìm kiếm Trước",searchNext:"Tìm kiếm Tiếp theo",checkMark:"✓",exportOk:"Xuất…",cannotSearch:"Tìm kiếm đòi hỏi chỉ định tài liệu nguồn.",parameters:"Tham số",requiringParameters:"Hãy nhập vào các thông số.",nullParameterError:"Giá trị không được trống.",invalidParameterError:"Thông tin đầu vào không hợp lệ.",parameterNoneItemsSelected:"(không có)",parameterAllItemsSelected:"(tất cả)",parameterSelectAllItemText:"(Chọn tất cả)",selectParameterValue:"(chọn giá trị)",apply:"Áp dụng",errorOccured:"Đã xảy ra lỗi."},FlexSheet:{insertRow:"Chèn Hàng",deleteRow:"Xóa hàng",insertCol:"Chèn Cột",deleteCol:"Xoá Cột",convertTable:"Chuyển đổi Bảng",copyCells:"Sao chép Ô",fillSeries:"Điền Chuỗi",fillFormat:"Chỉ điền Định dạng",fillWithoutFormat:"Điền không kèm Định dạng",insertSheet:"Chèn",deleteSheet:"Xóa",renameSheet:"Đổi tên"},FlexChartAnalytics:{BreakEven:{profitArea:"Khu vực lợi nhuận",lossArea:"Diện tích lỗ",safetyMargin:"Ký quỹ an toàn",salesRevenue:"Doanh thu bán hàng",totalCost:"Tổng chi phí",fixedCost:"Chi phí cố định",variableCost:"Chi phí biến đổi",marginalProfit:"Biên lợi nhuận",breakEven:"Hoà vốn"}}},a=window.wijmo._updateCulture;a?a(t):window.wijmo.culture=t}(wijmo||(wijmo={}));