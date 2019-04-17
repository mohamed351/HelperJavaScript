function selectTable({ rowSelectors, thisElement, backgroundColor, fontColor, backgroundColorSelect, fontColorSelect, dataBinderEnabled, databindeColumn }) {
    $(rowSelectors).each(function () {

        $(this).css("background-color", backgroundColor);
        $(this).find("td").css("color", fontColor);
    });
    thisElement.css("background-color", backgroundColorSelect);
    thisElement.find("td").css("color", fontColorSelect);
    if (dataBinderEnabled) {
       
        for (var i = 0; i < databindeColumn.length; i++) {
            $(databindeColumn[i].controlSelector).val(thisElement.find("td")[databindeColumn[i].index].innerHTML);
        }
    }
}
function convertControlsToRow({ formSelector }) {

    var str = "<tr>";
    
    $(formSelector).find("input").each(function () {

        str += "<td> " + $(this).val() +" </td>";
        
    });
    str += "</tr>";
    return str;
}