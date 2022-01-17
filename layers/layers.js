var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.lotetgaronne.fr/accueil">Département de Lot-et-Garonne, Service vie citoyenne et associative, 2021</a> &middot; <a href="mailto:cdj@lotetgaronne.fr">Contacter le CDJ 47</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCI_1 = new ol.format.GeoJSON();
var features_EPCI_1 = format_EPCI_1.readFeatures(json_EPCI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_1.addFeatures(features_EPCI_1);
var lyr_EPCI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_1, 
                style: style_EPCI_1,
                interactive: false,
                title: '<img src="styles/legend/EPCI_1.png" /> EPCI'
            });
var format_DEPARTEMENT_2 = new ol.format.GeoJSON();
var features_DEPARTEMENT_2 = format_DEPARTEMENT_2.readFeatures(json_DEPARTEMENT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTEMENT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTEMENT_2.addFeatures(features_DEPARTEMENT_2);
var lyr_DEPARTEMENT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTEMENT_2, 
                style: style_DEPARTEMENT_2,
                interactive: false,
    title: 'DEPARTEMENT<br />\
    <img src="styles/legend/DEPARTEMENT_2_0.png" /> Oui<br />'
        });
var format_Etablissementcouvertparlepartenaire_3 = new ol.format.GeoJSON();
var features_Etablissementcouvertparlepartenaire_3 = format_Etablissementcouvertparlepartenaire_3.readFeatures(json_Etablissementcouvertparlepartenaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etablissementcouvertparlepartenaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissementcouvertparlepartenaire_3.addFeatures(features_Etablissementcouvertparlepartenaire_3);
var lyr_Etablissementcouvertparlepartenaire_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etablissementcouvertparlepartenaire_3, 
                style: style_Etablissementcouvertparlepartenaire_3,
                interactive: true,
    title: 'Etablissement couvert par le partenaire :<br />\
    <img src="styles/legend/Etablissementcouvertparlepartenaire_3_0.png" /> Francas<br />\
    <img src="styles/legend/Etablissementcouvertparlepartenaire_3_1.png" /> IFAC<br />\
    <img src="styles/legend/Etablissementcouvertparlepartenaire_3_2.png" /> Ligue<br />\
    <img src="styles/legend/Etablissementcouvertparlepartenaire_3_3.png" /> Maison de l\'Europe<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_EPCI_1.setVisible(true);lyr_DEPARTEMENT_2.setVisible(true);lyr_Etablissementcouvertparlepartenaire_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EPCI_1,lyr_DEPARTEMENT_2,lyr_Etablissementcouvertparlepartenaire_3];
lyr_EPCI_1.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', });
lyr_DEPARTEMENT_2.set('fieldAliases', {'ID': 'ID', 'NOM_DEP_M': 'NOM_DEP_M', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'Selection': 'Selection', });
lyr_Etablissementcouvertparlepartenaire_3.set('fieldAliases', {'GRAPHIE': 'Nom établissement', 'Partenaire': 'Partenaire', 'Commune': 'Commune', '1ere inter': 'Date de la première intervention', '2e interv': 'Date de la deuxième intervention', '3e interv': 'Date de la troisième intervention', });
lyr_EPCI_1.set('fieldImages', {'NOM_EPCI': 'TextEdit', });
lyr_DEPARTEMENT_2.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP_M': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'Selection': 'TextEdit', });
lyr_Etablissementcouvertparlepartenaire_3.set('fieldImages', {'GRAPHIE': 'TextEdit', 'Partenaire': 'TextEdit', 'Commune': 'TextEdit', '1ere inter': 'DateTime', '2e interv': 'DateTime', '3e interv': 'DateTime', });
lyr_EPCI_1.set('fieldLabels', {'NOM_EPCI': 'no label', });
lyr_DEPARTEMENT_2.set('fieldLabels', {'ID': 'no label', 'NOM_DEP_M': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'Selection': 'no label', });
lyr_Etablissementcouvertparlepartenaire_3.set('fieldLabels', {'GRAPHIE': 'header label', 'Partenaire': 'header label', 'Commune': 'header label', '1ere inter': 'header label', '2e interv': 'header label', '3e interv': 'header label', });
lyr_Etablissementcouvertparlepartenaire_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
