$(document).ready(function (e) {
    $('#generateBtn').on('click', function () {
        const version = $('#LicenseVer').val();
        $.keyGenCKfinder({
            classKey: "#Key",
            version,
            licenseName: "#LicenseName"
        });
    });
    $('#copy-lic').on('click', function () {
         const key = $('#Key').val();
         navigator.clipboard.writeText(key);
    });
    $('#LicenseVer').on('change', function () {
        $('#Key').val('');
        $('#LicenseName').val('');
    })
});
