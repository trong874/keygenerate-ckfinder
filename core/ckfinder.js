!function(e){e.fn.keyGenCKfinder=function(r){function s(e){var r=0,n=e;0===s&&(n=function(e){return(e=e.replace(/^www./,"")).replace(/^./,"")}(n));for(let e=0;e<n.length;e++)r+=n.charCodeAt(e);return r+-33*parseInt(r%100/33,10)-100*(""+r/100>>>0)}r=e.extend({version:"2x",licenseKey:"",licenseName:"",classKey:".licenseKey"},r),String.prototype.replaceAt=function(e,r){return e>this.length-1?this:this.substr(0,e)+r+this.substr(e+r.length)},licName=e(r.licenseName).val(),"2x"===r.version?(r.licenseKey=function(e){for(licenseKey="",chars="123456789ABCDEFGHJKLMNPQRSTUVWXYZ",i=0;i<=31;i++)licenseKey+=chars[Math.floor(Math.random()*(chars.length-1))];return zeroChars=chars[4]+chars[9]+chars[14]+chars[19]+chars[24]+chars[29],zeroChars=zeroChars[Math.floor(Math.random()*(zeroChars.length-1))],licenseKey=licenseKey.replaceAt(0,zeroChars),threeChars=chars.substr(9*(e.length+chars.indexOf(licenseKey[1]))%32,1),licenseKey=licenseKey.replaceAt(3,threeChars),twelveChars=chars[9*(chars.indexOf(licenseKey[11])+chars.indexOf(licenseKey[8]))%(chars.length-1)],licenseKey=licenseKey.replaceAt(12,twelveChars),twentyFiveChars=chars[7]+chars[15]+chars[23]+chars[31],twentyFiveChars=twentyFiveChars[Math.floor(Math.random()*(twentyFiveChars.length-1))],licenseKey=licenseKey.replaceAt(25,twentyFiveChars),licenseKey}(licName),e(r.classKey).val(r.licenseKey)):(r.licenseKey=function e(r){function n(e){for(var r=chars.toString().split(""),s=0;s<r.length;s++)if(e===r[s])return s;return 0}for(licenseKey="",chars="123456789ABCDEFGHJKLMNPQRSTUVWXYZ",i=0;i<=28;i++)licenseKey+=chars[Math.floor(Math.random()*(chars.length-1))];return zeroChars=chars[Math.floor(Math.random()*(chars.length-1))],licenseKey=licenseKey.replaceAt(1,zeroChars),licenseKey=licenseKey.replaceAt(3,zeroChars),twoChars=chars[1]+chars[6]+chars[11]+chars[16]+chars[21]+chars[26]+chars[31]+chars[2]+chars[7]+chars[12]+chars[17]+chars[22]+chars[27]+chars[32],twoChars=twoChars[Math.floor(Math.random()*(twoChars.length-1))],licenseKey=licenseKey.replaceAt(2,twoChars),thirteen=chars[function(e,r){for(var s=chars.toString().split(""),n=0;n<s.length;n++)if(e===s[n])return n;return 0}(licenseKey[8])+1],licenseKey=licenseKey.replaceAt(13,thirteen),twenty=s(r),twentyChar=chars[twenty],licenseKey=licenseKey.replaceAt(20,twentyChar),licenseC=licenseKey[1]+licenseKey[8]+licenseKey[17]+licenseKey[22]+licenseKey[3]+licenseKey[13]+licenseKey[11]+licenseKey[20]+licenseKey[5]+licenseKey[24],tsC=function(e){for(var r=0,s=0;10>s;s++)r+=e.charCodeAt(s);for(;r>33;){const e=r.toString().split("");r=0;for(var n=0;n<e.length;n++)r+=parseInt(e[n])}return r}(licenseC),twentySevenChars=chars[tsC],licenseKey=licenseKey.replaceAt(27,twentySevenChars),function(e,r,s,n,c,t){for(var a=33,h=s,l=t,i=a+(h*l-(i=n)*(o=c))%a,y=window.Date,o=h=0;a>o;o++)1==i*o%a&&(h=o);return(h*t%a*(i=e)+h*(a+-1*n)%a*(o=r))%a*12+((h*(33+-1*c)-33*(""+h*(a+-1*c)/33>>>0))*i+h*s%33*o)%a-1>=(l=new y(145751884e4)).getFullYear()%2e3*12+l.getMonth()}(n(licenseC[8]),n(licenseC[9]),n(licenseC[0]),n(licenseC[1]),n(licenseC[2]),n(licenseC[3]))?licenseKey:e(r)}(licName),e(r.classKey).val(r.licenseKey))},e.keyGenCKfinder=e.fn.keyGenCKfinder}(jQuery);