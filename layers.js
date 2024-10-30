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
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
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


lyr_GMRT_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GPW_Population_Density_2020_3.setVisible(true);
var layersList = [lyr_GMRT_0,lyr_OpenStreetMap_1,lyr_GPW_Population_Density_2020_3];
