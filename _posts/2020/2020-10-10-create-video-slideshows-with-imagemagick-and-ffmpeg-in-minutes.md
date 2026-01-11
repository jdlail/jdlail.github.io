---
layout: post
permalink: /2020/10/create-video-slideshows-with-imagemagick-and-ffmpeg-in-minutes/
title: Create video slideshows with ImageMagick and FFmpeg in minutes
description: None
date: 2020-10-10 15:44:47 -0000
last_modified_at: 2022-09-21 16:23:12 -0000
publish: true
pin: false
image:
  path: /assets/wp-content/uploads/2020/10/charley-1500.webp
categories:
- Video
tags:
- ffmpeg
- ImageMagick
- slideshow
---
**_Updated: Sept. 21, 2022_**. **_Code examples have been updated after noticing some issues._**

I've been using a Pixelbook, a Chromebook from Google, for the past two and a half years.

Chromebooks are not known as great for photo and video editing, but I have found it's an excellent platform for my needs. It does nearly all of the photo and video editing I need to do -- and usually quicker.

The trick is to [enable Linux on your Chromebook](/2018/10/chromebooks-just-got-a-lot-more-interesting/) and use some very well-known command-line tools: [youtube-dl](https://ytdl-org.github.io/youtube-dl/), [FFmpeg](https://ffmpeg.org/), [ImageMagick](https://imagemagick.org/index.php), and [MediaInfo](https://mediaarea.net/en/MediaInfo/Download/Debian).

Here is how I created a video slideshow in just a few minutes using ImageMagick and FFmpeg.

I had a series of photos taken with my Fujifilm X20 point-and-shoot camera of our dogs. Winston and Charley.

They were 4000 x 3000 pixels, a 4:3 aspect ratio. I wanted to create a video of those photos in a 16:9 aspect ratio (the aspect ratio of your HD TV) with as little "black frame" as possible and add background music.

![](/assets/wp-content/uploads/2020/10/charley-1500.webp)Charley photo in a 4:3 aspect ratio

Here is what I did.

I put all the photos in a folder under Linux on the Pixelbook and then I ran this ImageMagick script on the files in the folder:
  
    for i in *JPG;do convert "$i" \
    -gravity center -crop 16:9 \
    +repage 16x9-"$i";done

This converted all the ".JPG" files to 4000x2250, or a 16:9 aspect ratio with the center as the most important part to keep in the crop. Yes, I could have resized them as well to 1920x1080, but in this case, FFmpeg handles that.

Also, it's Linux, case matters for JPG vs jpg.

Then I deleted the 4:3 aspect ratio versions, leaving only the new 16:9 aspect ratio ones.

The above works well with landscape photos, but with people, it's possible to chop their heads off. I've found the following code will put the entire image in a 16x9 canvas with letterboxing .
  
    for i in *jpg;do convert "$i" \
    -resize 1920x1080 -background black \
    -gravity center -extent 1920x1080 \
    +repage 16x9-"$i";done

**Credit:** <https://stackoverflow.com/a/72880508/5703932>

With my images ready, it's time to run this FFmpeg command to combine the photos as a video.
  
    ffmpeg -framerate 1/5 -pattern_type \
    glob -i '*.JPG' -c:v libx264 -vf \
    "scale='min(1920,iw)':min'(1080,ih)':force_original_aspect_ratio=decrease,pad=1920:1080:-1:-1:color=black,fps=8,format=yuv420p" \
    -crf 20 video-no-music.mp4

This command says to create a video showing each photo for 5 seconds (-framerate 1/5). The order of the photos wasn't important.

**Credit:** <https://superuser.com/questions/547296/resizing-videos-with-ffmpeg-avconv-to-fit-into-static-sized-player/1136305#1136305>

You might want to change the output framerate to 25 or 30 ... change fps=8 to fps=25 or 30 ... but fps=8 worked for me and all that happens in the photos are duplicated more often to get the frames per second.

There also are other ways to combine a series of photos, [particularly ones with sequentially numbered filenames](/2018/12/a-flyover-of-gay-street/).

I downloaded some royalty-free music from YouTube and ran another FFmpeg command. (These two steps probably could be combined.)
  
    ffmpeg -i video-no-music.mp4 \
    -i background-music.mp3 -c copy \
    -map 0:v:0 -map 1:a:0 -shortest \
    video-with-music.mp4

Here is the result:

{% include youtube.html id="ukRphfbb8zs" %}
If you have vertical photos, they might come in sideways. I was able to fix that with ImageMagick using this command:
  
    mogrify -auto-orient image-name.JPG

You might not want to change the aspect of vertical photos to 16:9. Run a few test files to see what you like.

There are tons of resources out there, but one of the best for [FFmpeg is on Reddit](https://www.reddit.com/r/ffmpeg/). Some of the users in that subreddit are truly FFmpeg power users (which I am not).

If you wanted to take it further, it would be possible to add a watermark or "bug" to the video and to have narration as well as background audio -- and a long list of other command-line options, enhancements, and tweaks.

Also, MediaInfo will also give you detailed information on a video/audio/image file.

The command is really simple:
  
    mediainfo filename

There are versions of these command-line tools for Windows and the MacOS, but it seems the Linux versions are more actively updated. Also, you can run a Linux terminal on a Windows 10 PC now.

If your slideshows are pretty standardized, this is a very fast way to create them.

Suggestions or comments? Hit me up on Twitter at [@jacklail](https://twitter.com/jacklail)

_Note: If you copy any of the code snippets above, remove any returns._

