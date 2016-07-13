angular.module('app')
  .controller('BwcaController', ['$scope', 'uiGmapGoogleMapApi', '$uibModal', function($scope, uiGmapGoogleMapApi, $uibModal) {

    var openWelcomeModal = function() {
      $uibModal.open({
        animation: false,
        templateUrl: 'templates/bwca/welcome-modal.html',
        controller: 'BwcaWelcomeModalController'
      });
    };

    var setInitialMapType = function(val) {
      $scope.map.options.mapTypeId = val;
    };

    uiGmapGoogleMapApi.then(function(maps) {
      setInitialMapType(maps.MapTypeId.SATELLITE);
    });

    $scope.map = {
      center: {
        latitude: 47.8698739,
        longitude: -91.6299122
      },
      zoom: 13,
      options: {}
    };

    var setMarkerHover = function(index, val) {
      $scope.markers[index].hover = val;
    };

    var openGalleryModal = function(index) {
      $uibModal.open({
        animation: false,
        templateUrl: 'templates/bwca/gallery-modal.html',
        controller: 'BwcaGalleryModalController',
        size: 'lg',
        resolve: {
          gallery: function () {
            return $scope.markers[index].gallery;
          }
        }
      });
    };

    $scope.markerEvents = {
      mouseover: function (marker, e) {
        setMarkerHover(marker.key, true);
      },
      mouseout: function (marker, e) {
        setMarkerHover(marker.key, false);
      },
      click: function(marker, e) {
        openGalleryModal(marker.key);
      }
    };

    $scope.infowindowOptions = {
      maxWidth: 300
    };

    $scope.markers = [
      {
        coords: {
          latitude: 47.848141,
          longitude: -91.635684
        },
        options: {
          label: 'S'
        },
        gallery: {
          title:     'Starting Point',
          numPhotos: 1,
          name:      'starting-point',
          shortDescription: 'We were dropped off at a trailhead, and had to carry all our gear and canoes through the portage.',
          description: 'This was one of the longest portgages of the trip, and we had to do it right off the bat.  Luckily we had some help from our Outfitters!'
        }
      },
      {
        coords: {
          latitude: 47.846838,
          longitude: -91.584494
        },
        gallery: {
          title:     'First Campsite (Day 1 PM - Day 3 AM)',
          numPhotos: 17,
          name:      'first-campsite',
          shortDescription: 'We settled here since the campsites with the fishing spots up north were taken.',
          description: 'We stayed here the first and second nights.  It took us a little while to get our bearings and figure out what was in all of the equipment packs.  We found some surprises in our first batches of treated water--mosquito larvae (or as Denis called them, "shrimps").  However, we feasted on burgers and steaks the first night!'
        }
      },
      {
        coords: {
          latitude: 47.837887,
          longitude: -91.573266
        },
        gallery: {
          title:     'Rapids (Day 2)',
          numPhotos: 3,
          name:      'rapids',
          shortDescription: 'A small portage',
          description: 'These pictures were taken at the beginning of our day trip.  It was a neat area with some small rapids.'
        }
      },
      {
        coords: {
          latitude: 47.847385,
          longitude: -91.560080
        },
        gallery: {
          title:     'Portage (Day 2)',
          numPhotos: 4,
          name:      'portage',
          shortDescription: 'Who says carrying canoes isn\'t fun?',
          description: 'The changes in elevation and roughness of the terrain made this pretty difficult.  It was definitely the toughest portage of the trip.'
        }
      },
      {
        coords: {
          latitude: 47.855104,
          longitude: -91.549712
        },
        gallery: {
          title:     'Lunch on Turtle Lake (Day 2)',
          numPhotos: 7,
          name:      'turtle-lake',
          shortDescription: 'We feast on PB&J sandwiches and raisins',
          description: '"Turtle Lake" may or may not have been where the picture of the turtle was taken.  But it\'s definitely where Denis enjoyed his first-ever peanut butter and jelly sandwich!'
        }
      },
      {
        coords: {
          latitude: 47.870647,
          longitude: -91.534803
        },
        gallery: {
          title:     'Clearwater Lake (Day 2)',
          numPhotos: 4,
          name:      'clearwater-lake',
          shortDescription: 'A highlight of the trip',
          description: 'After two long portages on rough terrain, we found a spot to swim and relax.  "Clearwater Lake" lived up to its name, providing the best drinking water on the trip.  After this point Dan, Denis and Ben continued on the "day-trip loop" through the other lakes.  Dad, Aaron, Matt and Mike headed back to camp via Turtle Lake.'
        }
      },
      {
        coords: {
          latitude: 47.867552,
          longitude: -91.513817
        },
        gallery: {
          title:     'No Fish Lake (Day 2)',
          numPhotos: 1,
          name:      'no-fish-lake',
          shortDescription: 'A desolate place',
          description: 'We saw a lot of damage here from the wild fire.  We couldn\'t find the portage to Petro Lake due to the damage, as well as the map being marked incorrectly.'
        }
      },
      {
        coords: {
          latitude: 47.835860,
          longitude: -91.528945
        },
        gallery: {
          title:     'Stream (Day 2)',
          numPhotos: 2,
          name:      'stream',
          shortDescription: 'Pleasant area coming out of Gull Lake',
          description: 'We let the current propel us through this pretty little area.'
        }
      },
      {
        coords: {
          latitude: 47.904512,
          longitude: -91.633122
        },
        gallery: {
          title:     'Second Campsite (Day 3 PM to Day 4 AM)',
          numPhotos: 30,
          name:      'second-campsite',
          shortDescription: 'We had the lake to ourselves.  This campsite was great!',
          description: 'On day three we spent a leisurely afternoon at this campsite.  We were running low on cooking fuel, so we had to boil water over the fire.  We found that it took an awful lot of energy and time to boil a pot of water!'
        }
      },
      {
        coords: {
          latitude: 47.911031,
          longitude: -91.654928
        },
        gallery: {
          title:     'Last Portage (Day 4)',
          numPhotos: 6,
          name:      'last-portage',
          shortDescription: 'We found that the water was deep enough to go straight through.',
          description: 'We found that the water was deep enough to go straight through.  Shh...don\'t tell our Outfitter!'
        }
      },
      {
        coords: {
          latitude: 47.908522,
          longitude: -91.692243
        },
        gallery: {
          title:     'Last Snack (Day 4)',
          numPhotos: 4,
          name:      'last-snack',
          shortDescription: 'One final chance to fill up on the delicious lake water!',
          description: 'We had civilization on our minds as we prepared for the final stretch back to the outfitters.'
        }
      },
      {
        coords: {
          latitude: 47.902829,
          longitude: -91.754473
        },
        options: {
          label: 'F'
        },
        gallery: {
          title:     'North Country Outfitters (Day 4)',
          numPhotos: 1,
          name:     'north-country',
          shortDescription: 'The exit point',
          description: 'We were greeted on the docks with ice-cold Hamm\'s beer, a Minnesota classic.  After four days and three nights in the wilderness daydreaming about ice-cold beer, Matt still said "no thanks" to Hamm\'s :)'
        }
      }
    ];

    $scope.pathStroke = {
      color: '#FF0000',
      opacity: 1.0,
      weight: 2
    };

    $scope.paths = [
      [
        {latitude: 47.848141, longitude: -91.635684},
        {latitude: 47.855636, longitude: -91.629360},
        {latitude: 47.858613, longitude: -91.620880},
        {latitude: 47.858392, longitude: -91.612145},
        {latitude: 47.858437, longitude: -91.610764},
        {latitude: 47.858900, longitude: -91.609416},
        {latitude: 47.858319, longitude: -91.608166},
        {latitude: 47.857230, longitude: -91.607552},
        {latitude: 47.853163, longitude: -91.585215},
        {latitude: 47.851088, longitude: -91.582390},
        {latitude: 47.846538, longitude: -91.581887},
        {latitude: 47.846414, longitude: -91.583808},
        {latitude: 47.846771, longitude: -91.584450},
        {latitude: 47.843983, longitude: -91.582890},
        {latitude: 47.840469, longitude: -91.580572},
        {latitude: 47.837646, longitude: -91.577654},
        {latitude: 47.837026, longitude: -91.574564},
        {latitude: 47.837739, longitude: -91.573105},
        {latitude: 47.837811, longitude: -91.572906},
        {latitude: 47.837790, longitude: -91.572745},
        {latitude: 47.837692, longitude: -91.572622},
        {latitude: 47.837768, longitude: -91.572086},
        {latitude: 47.837185, longitude: -91.571656},
        {latitude: 47.836839, longitude: -91.571259},
        {latitude: 47.836601, longitude: -91.570766},
        {latitude: 47.836018, longitude: -91.570562},
        {latitude: 47.835543, longitude: -91.569908},
        {latitude: 47.835197, longitude: -91.568899},
        {latitude: 47.834779, longitude: -91.568019},
        {latitude: 47.834707, longitude: -91.566882},
        {latitude: 47.834995, longitude: -91.565723},
        {latitude: 47.835543, longitude: -91.564350},
        {latitude: 47.835701, longitude: -91.562870},
        {latitude: 47.835716, longitude: -91.559930},
        {latitude: 47.836637, longitude: -91.558256},
        {latitude: 47.837732, longitude: -91.558471},
        {latitude: 47.838395, longitude: -91.560102},
        {latitude: 47.838855, longitude: -91.562634},
        {latitude: 47.839489, longitude: -91.564071},
        {latitude: 47.840627, longitude: -91.564586},
        {latitude: 47.841361, longitude: -91.564500},
        {latitude: 47.847252, longitude: -91.560091},
        {latitude: 47.853256, longitude: -91.552591},
        {latitude: 47.854120, longitude: -91.551819},
        {latitude: 47.854710, longitude: -91.550488},
        {latitude: 47.855042, longitude: -91.549630},
        {latitude: 47.856287, longitude: -91.549405},
        {latitude: 47.856935, longitude: -91.548504},
        {latitude: 47.857662, longitude: -91.544952},
        {latitude: 47.858972, longitude: -91.540725},
        {latitude: 47.859634, longitude: -91.539416},
        {latitude: 47.868560, longitude: -91.534567},
        {latitude: 47.868898, longitude: -91.534519},
        {latitude: 47.869963, longitude: -91.534749},
        {latitude: 47.870442, longitude: -91.535001},
        {latitude: 47.877642, longitude: -91.514096},
        {latitude: 47.877584, longitude: -91.510792},
        {latitude: 47.876865, longitude: -91.508346},
        {latitude: 47.875742, longitude: -91.507745},
        {latitude: 47.874648, longitude: -91.507959},
        {latitude: 47.873411, longitude: -91.508818},
        {latitude: 47.872576, longitude: -91.510320},
        {latitude: 47.870733, longitude: -91.512337},
        {latitude: 47.870071, longitude: -91.513023},
        {latitude: 47.868545, longitude: -91.514053},
        {latitude: 47.867480, longitude: -91.514096},
        {latitude: 47.865695, longitude: -91.513989},
        {latitude: 47.864875, longitude: -91.513689},
        {latitude: 47.864083, longitude: -91.512959},
        {latitude: 47.863831, longitude: -91.512852},
        {latitude: 47.863054, longitude: -91.512948},
        {latitude: 47.862535, longitude: -91.512948},
        {latitude: 47.862075, longitude: -91.513088},
        {latitude: 47.861189, longitude: -91.513238},
        {latitude: 47.858526, longitude: -91.513882},
        {latitude: 47.855358, longitude: -91.516285},
        {latitude: 47.851960, longitude: -91.519074},
        {latitude: 47.849656, longitude: -91.519632},
        {latitude: 47.848533, longitude: -91.519847},
        {latitude: 47.848072, longitude: -91.519815},
        {latitude: 47.847662, longitude: -91.519772},
        {latitude: 47.847165, longitude: -91.520019},
        {latitude: 47.846625, longitude: -91.520072},
        {latitude: 47.845912, longitude: -91.520190},
        {latitude: 47.844998, longitude: -91.520555},
        {latitude: 47.843731, longitude: -91.521209},
        {latitude: 47.840569, longitude: -91.522207},
        {latitude: 47.838726, longitude: -91.522980},
        {latitude: 47.838366, longitude: -91.524374},
        {latitude: 47.838373, longitude: -91.525404},
        {latitude: 47.838323, longitude: -91.526445},
        {latitude: 47.838344, longitude: -91.527003},
        {latitude: 47.838178, longitude: -91.527432},
        {latitude: 47.838034, longitude: -91.527797},
        {latitude: 47.837674, longitude: -91.528323},
        {latitude: 47.837329, longitude: -91.528473},
        {latitude: 47.837084, longitude: -91.528419},
        {latitude: 47.836688, longitude: -91.528473},
        {latitude: 47.835888, longitude: -91.528752},
        {latitude: 47.835413, longitude: -91.528988},
        {latitude: 47.835096, longitude: -91.529374},
        {latitude: 47.834520, longitude: -91.529460},
        {latitude: 47.833915, longitude: -91.529739},
        {latitude: 47.833656, longitude: -91.529696},
        {latitude: 47.833324, longitude: -91.529739},
        {latitude: 47.833080, longitude: -91.529782},
        {latitude: 47.832676, longitude: -91.535082},
        {latitude: 47.832705, longitude: -91.539803},
        {latitude: 47.832561, longitude: -91.543987},
        {latitude: 47.832460, longitude: -91.549888},
        {latitude: 47.833180, longitude: -91.557612},
        {latitude: 47.834102, longitude: -91.560531},
        {latitude: 47.835687, longitude: -91.562853}
      ],
      [
        {latitude: 47.858613, longitude: -91.620880},
        {latitude: 47.860613, longitude: -91.620183},
        {latitude: 47.861780, longitude: -91.619207},
        {latitude: 47.862593, longitude: -91.618338},
        {latitude: 47.863327, longitude: -91.617597},
        {latitude: 47.863543, longitude: -91.617436},
        {latitude: 47.863629, longitude: -91.617426},
        {latitude: 47.865652, longitude: -91.617179},
        {latitude: 47.867192, longitude: -91.616707},
        {latitude: 47.867984, longitude: -91.616299},
        {latitude: 47.868200, longitude: -91.616213},
        {latitude: 47.870633, longitude: -91.617093},
        {latitude: 47.872086, longitude: -91.618037},
        {latitude: 47.873238, longitude: -91.618145},
        {latitude: 47.876318, longitude: -91.618938},
        {latitude: 47.878189, longitude: -91.619153},
        {latitude: 47.878563, longitude: -91.619196},
        {latitude: 47.878966, longitude: -91.619378},
        {latitude: 47.879822, longitude: -91.619507},
        {latitude: 47.881513, longitude: -91.619840},
        {latitude: 47.882794, longitude: -91.620784},
        {latitude: 47.883787, longitude: -91.622136},
        {latitude: 47.885672, longitude: -91.624796},
        {latitude: 47.887629, longitude: -91.626577},
        {latitude: 47.888003, longitude: -91.626856},
        {latitude: 47.887816, longitude: -91.627758},
        {latitude: 47.887989, longitude: -91.628509},
        {latitude: 47.888392, longitude: -91.628509},
        {latitude: 47.889010, longitude: -91.627951},
        {latitude: 47.889586, longitude: -91.627543},
        {latitude: 47.890492, longitude: -91.627092},
        {latitude: 47.891536, longitude: -91.626760},
        {latitude: 47.892679, longitude: -91.626921},
        {latitude: 47.893636, longitude: -91.627189},
        {latitude: 47.893989, longitude: -91.627307},
        {latitude: 47.894895, longitude: -91.627597},
        {latitude: 47.895945, longitude: -91.628144},
        {latitude: 47.896550, longitude: -91.628562},
        {latitude: 47.896952, longitude: -91.629227},
        {latitude: 47.897816, longitude: -91.630890},
        {latitude: 47.898780, longitude: -91.632543},
        {latitude: 47.899499, longitude: -91.633015},
        {latitude: 47.900161, longitude: -91.632435},
        {latitude: 47.901340, longitude: -91.632328},
        {latitude: 47.903527, longitude: -91.633068},
        {latitude: 47.904289, longitude: -91.633219},
        {latitude: 47.904505, longitude: -91.633272},
        {latitude: 47.904066, longitude: -91.634978},
        {latitude: 47.903620, longitude: -91.637703},
        {latitude: 47.903620, longitude: -91.640536},
        {latitude: 47.903714, longitude: -91.643164},
        {latitude: 47.903714, longitude: -91.643636},
        {latitude: 47.904548, longitude: -91.647177},
        {latitude: 47.905584, longitude: -91.649301},
        {latitude: 47.906231, longitude: -91.649730},
        {latitude: 47.906533, longitude: -91.650374},
        {latitude: 47.906677, longitude: -91.651189},
        {latitude: 47.906921, longitude: -91.651618},
        {latitude: 47.907741, longitude: -91.651726},
        {latitude: 47.909252, longitude: -91.651318},
        {latitude: 47.910589, longitude: -91.651468},
        {latitude: 47.910949, longitude: -91.652734},
        {latitude: 47.911071, longitude: -91.654338},
        {latitude: 47.911008, longitude: -91.654800},
        {latitude: 47.910904, longitude: -91.655248},
        {latitude: 47.910798, longitude: -91.655695},
        {latitude: 47.910647, longitude: -91.656522},
        {latitude: 47.910244, longitude: -91.657895},
        {latitude: 47.909877, longitude: -91.658710},
        {latitude: 47.909662, longitude: -91.658914},
        {latitude: 47.909460, longitude: -91.658946},
        {latitude: 47.909122, longitude: -91.659129},
        {latitude: 47.908727, longitude: -91.659676},
        {latitude: 47.907856, longitude: -91.661339},
        {latitude: 47.907756, longitude: -91.663313},
        {latitude: 47.908015, longitude: -91.664922},
        {latitude: 47.908475, longitude: -91.665673},
        {latitude: 47.910273, longitude: -91.670566},
        {latitude: 47.910819, longitude: -91.672111},
        {latitude: 47.911064, longitude: -91.676252},
        {latitude: 47.910719, longitude: -91.678891},
        {latitude: 47.910489, longitude: -91.680543},
        {latitude: 47.910445, longitude: -91.681724},
        {latitude: 47.910704, longitude: -91.682432},
        {latitude: 47.910604, longitude: -91.683290},
        {latitude: 47.910057, longitude: -91.684320},
        {latitude: 47.909654, longitude: -91.686037},
        {latitude: 47.909539, longitude: -91.687260},
        {latitude: 47.909151, longitude: -91.689041},
        {latitude: 47.908978, longitude: -91.691658},
        {latitude: 47.908619, longitude: -91.692002},
        {latitude: 47.908331, longitude: -91.692216},
        {latitude: 47.907597, longitude: -91.695735},
        {latitude: 47.907037, longitude: -91.698868},
        {latitude: 47.906519, longitude: -91.701443},
        {latitude: 47.905929, longitude: -91.703289},
        {latitude: 47.905411, longitude: -91.704254},
        {latitude: 47.904706, longitude: -91.706336},
        {latitude: 47.904936, longitude: -91.710949},
        {latitude: 47.905397, longitude: -91.713052},
        {latitude: 47.905929, longitude: -91.714511},
        {latitude: 47.906404, longitude: -91.715305},
        {latitude: 47.906562, longitude: -91.716099},
        {latitude: 47.906030, longitude: -91.717730},
        {latitude: 47.905339, longitude: -91.718416},
        {latitude: 47.905123, longitude: -91.719897},
        {latitude: 47.906130, longitude: -91.721807},
        {latitude: 47.907209, longitude: -91.722858},
        {latitude: 47.907727, longitude: -91.724961},
        {latitude: 47.907511, longitude: -91.727579},
        {latitude: 47.907224, longitude: -91.729059},
        {latitude: 47.906821, longitude: -91.732750},
        {latitude: 47.906993, longitude: -91.735775},
        {latitude: 47.907554, longitude: -91.739123},
        {latitude: 47.907454, longitude: -91.741912},
        {latitude: 47.907339, longitude: -91.745131},
        {latitude: 47.907152, longitude: -91.749530},
        {latitude: 47.906921, longitude: -91.751890},
        {latitude: 47.906245, longitude: -91.753500},
        {latitude: 47.905454, longitude: -91.753757},
        {latitude: 47.904591, longitude: -91.753500},
        {latitude: 47.904073, longitude: -91.753392},
        {latitude: 47.903714, longitude: -91.753843},
        {latitude: 47.903369, longitude: -91.754444},
        {latitude: 47.903066, longitude: -91.754787},
        {latitude: 47.902906, longitude: -91.754575},
        {latitude: 47.902829, longitude: -91.754473}
      ]
    ];

    openWelcomeModal();
    
 }]);