// const songSearch=async()=>{
//     const searchInput=document.getElementById('songInput').value;
//     const url=`https://api.lyrics.ovh/suggest/${searchInput}`;
//    const res=await  fetch(url);
//     const data =await res.json();
//     displaySongs(data.data);


// }

const songSearch=()=>{
    const searchInput=document.getElementById('songInput').value;
    const url=`https://api.lyrics.ovh/suggest/${searchInput}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySongs(data.data))
    .catch(error=>displayError('something we went wrong please try agin later!'))

}



const displaySongs =songs =>{
    const songContainer=document.getElementById('song-container');

    songContainer.innerHTML='';
    songs.forEach(song => {       
        const songDiv=document.createElement('div');
        songDiv.className='single-result row align-items-center my-3 p-3';
       
        songDiv.innerHTML=`
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            
            <video controls=""  name="media"><source src="${song.preview}" type="audio/mpeg"></video>

        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songContainer.appendChild(songDiv);
    });
}


const getLyric = async(artist,title)=>{

    const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
        try {
            
        const res= await fetch(url)
        const data=  await res.json();
        songLyric(data.lyrics);
        
        } catch (error) {
         displayError('lyrics are not load please try again sometime!')   
        }
    

}

const songLyric =lyrics =>{
    const lyricDiv=document.getElementById('song-lyric');
    lyricDiv.innerText=lyrics;
}


const displayError =error =>{
    const errorTag=document.getElementById('error');
    errorTag.innerText=error;
}



// const songSearch=async()=>{
//     const searchInput=document.getElementById('songInput').value;
//     const url=`https://api.lyrics.ovh/suggest/${searchInput}`;
//     const res= await fetch(url);
//     const data=await res.json();
//     displaySongs(data.data);
// }



// const getLyric = async(artist,title)=>{

//     const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
//     const res= await fetch(url);
//     const data =res.json();
//     songLyric(data.lyrics);

// }



// video add

// <audio controls="">
// <source src="${song.preview}" type="audio/mpeg">
// </audio>