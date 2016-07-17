angular.module('app')
  .controller('BwcaController', ['$scope', 'uiGmapGoogleMapApi', '$uibModal', '$analytics', 'pathService', function($scope, uiGmapGoogleMapApi, $uibModal, $analytics, pathService) {

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
      setInitialMapType(maps.MapTypeId.HYBRID);
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

    var trackIconEvent = function(index, event) {
      $analytics.eventTrack(event, {
        category: 'bwca icon', label: index
      });
    };

    $scope.markerEvents = {
      mouseover: function (marker, e) {
        setMarkerHover(marker.key, true);
        trackIconEvent(marker.key, 'hover');        
      },
      mouseout: function (marker, e) {
        setMarkerHover(marker.key, false);
      },
      click: function(marker, e) {
        openGalleryModal(marker.key);
        setMarkerHover(marker.key, false);
        trackIconEvent(marker.key, 'click'); 
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

    var setPaths = function() {
      var promise = pathService.getPaths();

      promise.then(function(paths) {
        $scope.paths = paths;
      });
    };

    openWelcomeModal();
    setPaths();
    
 }]);