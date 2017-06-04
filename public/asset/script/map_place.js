 // In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.


      var labels = '';
      var labelIndex = 0;
      var markers = [];
      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 10.4561, lng: 106.356 },
          zoom: 13,
          mapTypeId: 'roadmap'
        });
        // new google.maps.Marker({
        //   position: {lat: <?= $mark->latitude ?>, lng:  <?= $mark->longitude ?>},
        //   label: labels[labelIndex++ % labels.length],
        //   map: map  
        // });

        // function initAutocomplete(() {
        //   var bangalore = { lat: 12.97, lng: 77.59 };
        //   var map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 13,
        //     center: bangalore,
        //     //mapTypeId: 'roadmap'
        //   });

        // This event listener calls addMarker() when the map is clicked.
        google.maps.event.addListener(map, 'click', function (event) {
          addMarker(event.latLng, map);
        });

        var input = document.getElementById('input');

        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.addListener('bounds_changed', function () {
          searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener('places_changed', function () {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function (marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function (place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
          document.getElementById('lat').value = map.center.lat();
          document.getElementById('lng').value = map.center.lng();
        });


        // Add a marker at the center of the map.
        //addMarker(bangalore, map);
      }

      $('#btnSentPlace').on('click',()=> {
        var name = document.getElementById('txtNamePlace').value;
        var valName = document.getElementById('valName');
        var address = document.getElementById('txtAddress').value;
        var valAddress = document.getElementById('valAddress');
        var desc = document.getElementById('txtDesPlace').value;
        var valDesc = document.getElementById('valDesc');
        var cbClaimb = document.getElementById('cbClaimb').value;
        var seeView = document.getElementById('seeView').value;
        var cbTreckking = document.getElementById('cbTreckking').value;
        var camping = document.getElementById('camping').value;
        var city = document.getElementById('ddlCity').value;
        var valCity = document.getElementById('valCity');
        var ward = document.getElementById('ddlProvinces').value;
        if (name === "") {
          valName.innerHTML = "Nhập tên địa điểm"
          $('html, body').animate({ scrollTop: $('#txtNamePlace').offset().top - 80 }, 1);
          return false;
        }
        else
          if (address === "") {
            valName.innerHTML = "";
            valAddress.innerHTML = "Nhập địa chỉ";
            $('html, body').animate({ scrollTop: $('#txtAddress').offset().top - 80 }, 1);
            return false;
          }
          else
            if (city === '0' || ward === '0') {
              valName.innerHTML = "";
              valAddress.innerHTML = "";
              valCity.innerHTML = "Chọn Thành phố/ Tỉnh sau đó chọn Quận/Huyện";
              $('html, body').animate({ scrollTop: $('#ddlCity').offset().top - 80 }, 1);
              return false;
            }
            else
              if (desc === "") {
                valName.innerHTML = "";
                valAddress.innerHTML = "";
                valCity.innerHTML = "";
                valDesc.innerHTML = "Nhập tên mô tả địa điểm";
                $('html, body').animate({ scrollTop: $('#txtDesPlace').offset().top - 80 }, 1);
                return false;
              }
              else
                return alert(`Cám ơn những chia sẽ của bạn!  Chúc bạn có những hành trình phượt thật là thú vị và khó quên nhé ^^`);
      })
      // Adds a marker to the map.
      function addMarker(location, map) {

        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
          position: location,
          label: labels[labelIndex++ % labels.length],
          map: map

        });

        document.getElementById('lat').value = marker.position.lat();
        document.getElementById('lng').value = marker.position.lng();
        deleteMarkers();
        markers.push(marker);
      }
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }


      //google.maps.event.addDomListener(window, 'load', initialize);