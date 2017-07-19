  
  
 $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
			
					var currentSongNumber = 1;
				var willLoop = 0;
				var willShuffle = 0;
			
			
				function randomExcluded(min, max, excluded) {
			var n = Math.floor(Math.random() * (max-min) + min);
			if (n >= excluded) n++;
			return n;
			  }	
	
	
	
					var Playingnumber = 0  ;
						 var shuffle=0;
	<!-------------------------------------- name of song function start---------------------------------------------------------------------------->
	
			function toggleSong() {
		var song = document.querySelector('audio');
		if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		} 
				 function changeCurrentSongDetails(songObj) {
				  $('.current-song-image').attr('src','images/' + songObj.image)
					$('.current-song-name').text(songObj.name)
					$('.current-song-album').text(songObj.album)
			}
	
	<!------------------------------------- name of song function end ---------------------------------------------------------------------------->
	
	
	
    $('.play-icon').on('click', function() {
	toggleSong();                                          <!--- use function name--->
        
    });
    $('body').on('keypress', function(event) {
		 var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT') {
                    toggleSong();                         <!--- use function name--->
                }
            });
			
			$('.main button').on('click', function() {
				$('.main').addClass('hidden');
            $('.welcome-screen').removeClass('hidden');
			
			});
			
			
			
			
			function UpdateTimer() {
						var song = document.querySelector('audio');
						var ct = song.currentTime;
						var td = song.duration;
						var percentage = (ct/td)*100;
						$('.progress-filled').css('width', percentage+ "%");
						}
						
			
			function timeJump() {
				var song = document.querySelector('audio')
				song.currentTime = song.duration - 5;
				}
				
			<!---------------------------fancy time start------------------------------------------------------------------------------------------------->
			function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
<!-----------------------------------fancy end--------------------------------------------------------------------------------------------------------->			
		
			function updateCurrentTime() {
					var song = document.querySelector('audio');
					var ct = song.currentTime;
					var td = song.duration;
					var per = ct/td*100;
					}
			
			
			 	
			
			
			     function updateCurrentTime() {
						var song = document.querySelector('audio');
						var currentTime = Math.floor(song.currentTime);
						currentTime = fancyTimeFormat(currentTime);
						var duration = Math.floor(song.duration);
						duration = fancyTimeFormat(duration)
						$('.time-elapsed').text(currentTime);
						$('.song-duration').text(duration);
					}
					
					
					
					
					function addSongNameClickEvent(songObj,position) {
						  var songName = songObj.fileName; // New Variable 
						var id = '#song' + position;
					$(id).click(function() {
					var audio = document.querySelector('audio');
					var currentSong = audio.src;
					if(currentSong.search(songName) != -1)
					{
					toggleSong();
					}
					else {
					audio.src = songName;
					toggleSong();
					changeCurrentSongDetails(songObj); // Function Call
					}
					});
					}
					
					
											
					function changeSong() 
					{
					var music =  songs[Playingnumber].fileName;
					var song = document.querySelector("audio");
					song.src = music;
					toggleSong();
					changeCurrentSongDetails(songs[Playingnumber])
					}
					
					
					
					
				<!---------------------------------------------------forwrd and backwrd start---------------------------------------------------->	
					
					
					$(".fa-step-forward").click(function(){

					if(shuffle==1)
					{
					var audio = document.querySelector('audio');
					var nextSongNumber = randomExcluded(0,3,Playingnumber); // Calling our function from Stackoverflow

					var nextSongObj = songs[nextSongNumber];
					audio.src = nextSongobj.fileName;
					toggleSong();
					changeCurrentSongDetails(nextSongobj);
					Playingnumber = nextSongNumber;
					}
                   else {

					if(Playingnumber == songs.length-1){
					Playingnumber = 0;
					changeSong();
					}

					else {
					console.log("two");
					console.log(Playingnumber);
					Playingnumber++;
					changeSong();
					}}
					})

                   $(".fa-step-backward").click(function(){

					if(Playingnumber == 0){
					console.log("one");
					Playingnumber = (songs.length-1);
					changeSong();
					}
                    else {
					console.log("two");
					console.log(Playingnumber);
					Playingnumber--;
					changeSong();
					}
                      })
<!--------------------------------------------------------forwrd and backwrd butn------------------------------------------------------->					  
					
					
<!------------------------------------------------------array of songs------------------------------------------------------------------------------->
				    // var songList = ['badri ki dulhaniya', 'humma song', 'nashe se chad gayi', 'breakup song',];
					 //var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
					 //var artistList = ['Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
					 //var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
                     //var durationList = ['2:56','3:15','2:34','2:29'];
					 
<!--------------------------------------------------------array end---------------------------------------------------------------------------------->

<!----------------------------------------------arrayof objects-------------------------------------------------------------------->
        var songs = [{
        'name': 'Badri Ki Dulhania',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
        'fileName': 'song1.mp3',
		'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
		'image' : 'song2.jpg'
    },
	{
        'name': 'lean on',
        'artist': 'unknown',
        'album': 'The ashian collection',
        'duration': '2:56',
        'fileName': 'song3.mp3',
		'image' : 'song3.jpg'
    },
	{
        'name': 'Mai tera boyfriend',
        'artist': 'Arijit Singh, neha kakkar',
        'album': 'mai tera boyfriend',
        'duration': '3:08',
        'fileName': 'song4.mp3',
		'image' : 'song4.jpg'
    },
	{
        'name': 'mercy',
        'artist': 'Badshah',
        'album': 'mercy',
        'duration': '2:42',
        'fileName': 'song5.mp3',
		'image' : 'song5.jpg'
	},
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song6.mp3',
		'image' : 'song6.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
         'fileName': 'song7.mp3',
		 'image' : 'song7.jpg'
	},	 
	]
		
	<!-----------------------------------------------------array of object end --------------------------------------------------------------------->
<!----------------------------loopsection start------------------------------------------------------------------------------------------>						 
					 
					 
					 
						     window.onload = function() {
								changeCurrentSongDetails(songs[0]);

	
							    for(var i =0; i < songs.length;i++) {
								var obj = songs[i];
								var name = '#song' + (i+1);
								var song = $(name);
								song.find('.song-name').text(obj.name);
								song.find('.song-artist').text(obj.artist);
								song.find('.song-album').text(obj.album);
								song.find('.song-length').text(obj.duration);
								 addSongNameClickEvent(obj,i+1)
							}
							
							
							
							
							$('.fa-repeat').on('click',function() {
							$('.fa-repeat').toggleClass('disabled')
							willLoop = 1 - willLoop;
							});	
												
							$('.fa-random').on('click',function() {
							$('.fa-random').toggleClass('disabled');
							willShuffle = 1 - willShuffle;
							});	
							
							
								
							$('audio').on('ended',function() {
								var audio = document.querySelector('audio');
								if (willShuffle == 1) {
									var nextSongNumber = randomExcluded(1,4,currentSongNumber); 
									var nextSongobj = songs[nextSongNumber-1];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber = nextSongNumber;
								}
								else if(currentSongNumber < 4) {
									var nextSongobj = songs[currentSongNumber];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber = currentSongNumber + 1;
								}
								else if(willLoop == 1) {
									var nextSongobj = songs[0];
									audio.src = nextSongobj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongobj);
									currentSongNumber =  1;
								}
								else {
									$('.play-icon').removeClass('fa-pause').addClass('fa-play');
									audio.currentTime = 0;
								}
							});
							
													
					
						 
											 
					 <!--------------------loop end------------------------------------------------------------------------------------------------->					 
					
				    
				
				
				updateCurrentTime();
				setInterval(function() {
					updateCurrentTime();
					},1000);
					
					setInterval(function() {
						UpdateTimer();
					},2000);
					
				
							$('#songs').DataTable({
								paging: false
							});
						 }
			
			