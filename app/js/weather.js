const onGeoRun = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('You live it ',lat,lon);
}
const onGeoError = () => {
    console.log('Error');
}

navigator.geolocation.getCurrentPosition(onGeoRun,onGeoError)