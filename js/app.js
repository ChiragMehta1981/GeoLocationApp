var result = document.getElementById("divResultMessages");

function ShowMap()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(ProcessResult,HandleError); // Callbacks
    }
    else
    {
        result.innerHTML = "Geolocation is not supported by this browser";
    }
}

function ProcessResult(position)
{
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";

    document.getElementById("divMap").innerHTML = "<img src='" + img_url + "'>";
}

function HandleError(error)
{
    switch (error.code)
    {
        case error.PERMISSION_DENIED:
            result.innerHTML = "User denied the request for Geolocation.";
            break;

        case error.POSITION_UNAVAILABLE:
            result.innerHTML = "Location information is unavailable.";
            break;

        case error.TIMEOUT:
            result.innerHTML = "The request to get user location timed out.";
            break;

        case error.UNKNOWN_ERROR:
            result.innerHTML = "An unknown error occurred.";
            break;
    }
}
