var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_1_0.png" /> Desa Maja<br />\
    <img src="styles/legend/Jalan_1_1.png" /> Gang Fandi<br />\
    <img src="styles/legend/Jalan_1_2.png" /> Gang Masjid<br />\
    <img src="styles/legend/Jalan_1_3.png" /> Maja<br />\
    <img src="styles/legend/Jalan_1_4.png" /> Pesisir Kalianda, Rajabasa<br />\
    <img src="styles/legend/Jalan_1_5.png" /> <br />'
        });var format_pantai_2 = new ol.format.GeoJSON();
var features_pantai_2 = format_pantai_2.readFeatures(json_pantai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pantai_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pantai_2.addFeatures(features_pantai_2);var lyr_pantai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pantai_2, 
                style: style_pantai_2,
                title: '<img src="styles/legend/pantai_2.png" /> pantai'
            });var format_Bangunan_3 = new ol.format.GeoJSON();
var features_Bangunan_3 = format_Bangunan_3.readFeatures(json_Bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bangunan_3.addFeatures(features_Bangunan_3);var lyr_Bangunan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_3, 
                style: style_Bangunan_3,
                title: '<img src="styles/legend/Bangunan_3.png" /> Bangunan'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_pantai_2.setVisible(true);lyr_Bangunan_3.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_Jalan_1,lyr_pantai_2,lyr_Bangunan_3];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_Jalan_1.set('fieldAliases', {'id': 'id', 'NamaJln': 'NamaJln', 'JenisJln': 'JenisJln', });
lyr_pantai_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_Bangunan_3.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', 'potok': 'potok', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_Jalan_1.set('fieldImages', {'id': 'TextEdit', 'NamaJln': 'TextEdit', 'JenisJln': 'TextEdit', });
lyr_pantai_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Bangunan_3.set('fieldImages', {'id': 'TextEdit', 'Jenis': 'TextEdit', 'potok': 'Photo', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_Jalan_1.set('fieldLabels', {'id': 'no label', 'NamaJln': 'inline label', 'JenisJln': 'no label', });
lyr_pantai_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_Bangunan_3.set('fieldLabels', {'id': 'no label', 'Jenis': 'inline label', 'potok': 'no label', });
lyr_Bangunan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});