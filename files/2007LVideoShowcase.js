const video = document.getElementsByTagName('video')[0]

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }  
  
current_video = 1
limit_video = 7
function get_video() {
  my_str = "files/video/2007LWonderlandUsers/" + current_video + ".mp4"
  current_video = current_video + 1
  if (current_video > limit_video) { 
    current_video = 1
  }
  return my_str
}

source = document.createElement('source')
source.type = "video/mp4"
source.src = get_video()
video.appendChild(source)

video.play()
video.addEventListener('ended', function() {
  console.log('Video loop end');
  source.src = get_video()
  video.load()
  video.play()
});
