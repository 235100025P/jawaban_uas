var size = 0;
var placement = 'point';
function categories_Jalan_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Desa Maja':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(193,176,166,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Gang Fandi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,108,200,0.290196)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Gang Masjid':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(124,234,73,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Maja':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,80,80,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pesisir Kalianda, Rajabasa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,50,50,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,165,165,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,85,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Jalan_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NamaJln");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Jalan_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
