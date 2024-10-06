ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-746015.781415, 516472.464056, 429756.099721, 1253561.560907]);
var wms_layers = [];

var lyr_GMRT_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.gmrt.org/services/mapserver/wms_merc?",
    attributions: ' ',
                              params: {
                                "LAYERS": "topo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "GMRT",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GMRT_0, 1]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_maskk_2 = new ol.format.GeoJSON();
var features_maskk_2 = format_maskk_2.readFeatures(json_maskk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maskk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maskk_2.addFeatures(features_maskk_2);
var lyr_maskk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maskk_2, 
                style: style_maskk_2,
                popuplayertitle: "maskk",
                interactive: false,
                title: 'maskk'
            });
var lyr_GPW_Population_Density_2020_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "GPW_Population_Density_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "GPW_Population_Density_2020",
                            opacity: 0.434000,
                            
                            
                          });
              wms_layers.push([lyr_GPW_Population_Density_2020_3, 1]);
var group_maskgroup = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_1,lyr_maskk_2,],
                                fold: "open",
                                title: "mask group"});

lyr_GMRT_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_maskk_2.setVisible(true);lyr_GPW_Population_Density_2020_3.setVisible(true);
var layersList = [lyr_GMRT_0,group_maskgroup,lyr_GPW_Population_Density_2020_3];
lyr_maskk_2.set('fieldAliases', {'fid': 'fid', });
lyr_maskk_2.set('fieldImages', {'fid': '', });
lyr_maskk_2.set('fieldLabels', {'fid': 'header label - always visible', });
lyr_maskk_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});