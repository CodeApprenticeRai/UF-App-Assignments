angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedListing = Listings[0];

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function(newListing) {
      $scope.listings.push(newListing);
      console.log(typeof($scope.listings));

      //Maintain Alphabetical Order
      // expensive, but who cares :
      $scope.listings.sort(function( listingA,listingB){
        return listingA.address.localeCompare(listingB.address);
      });

    };
    $scope.deleteListing = function(listing) {
       var indexOfBeingRemoved = $scope.listings.indexOf(listing);
       $scope.listings.splice( indexOfBeingRemoved, 1);
    };
    $scope.showDetails = function(listing) {
      $scope.detailedListing = listing;
    };
  }
]);
