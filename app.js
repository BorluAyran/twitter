function sorgula(usrname) {
	fetch("https://twitter60.p.rapidapi.com/user_info?user_name="+usrname, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "twitter60.p.rapidapi.com",
			"x-rapidapi-key": "a87c37c1d5msh676c6449f2844d8p110b1fjsn098c4ca6e431"
}
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.data)
		if(data.data.user.result.id){
		document.getElementById('id').innerHTML = "İd : " + data.data.user.result.id.toString();
	}
	if(data.data.user.result.legacy.name){
		document.getElementById('realname').innerHTML = "Adı : " + data.data.user.result.legacy.name.toString();
	}
	if(data.data.user.result.legacy.name){
		document.getElementById('realname').innerHTML = "Adı : " + data.data.user.result.legacy.name.toString();
	}
	if(data.data.user.result.legacy.screen_name){
		document.getElementById('uname').innerHTML = "Kullanıcı Adı : " + data.data.user.result.legacy.screen_name.toString();
	}
	if(data.data.user.result.legacy.followers_count){
		document.getElementById('followers').innerHTML = "Takipçisi : " + data.data.user.result.legacy.followers_count.toString();
	}
	if(data.data.user.result.legacy.description){
		document.getElementById('bio').innerHTML = "Açıklama : " + data.data.user.result.legacy.description.toString();
	}
	if(data.data.user.result.legacy.favourites_count){
		document.getElementById('favsay').innerHTML = "Favori Sayısı : " + data.data.user.result.legacy.favourites_count.toString();
	}
	if(data.data.user.result.legacy.verified==true){
		document.getElementById('tick').innerHTML = "Doğrulama : Var";	
	} else {
		document.getElementById('tick').innerHTML = "Doğrulama : Yok";
	}
	if(data.data.user.result.legacy.created_at){
		document.getElementById('createdAt').innerHTML = "Oluşturma Tarihi : " + data.data.user.result.legacy.created_at.toString();
	}
	if(data.data.user.result.legacy.location){
		document.getElementById('location').innerHTML = "Lokasyon : " + data.data.user.result.legacy.location.toString();
	}


});	
}