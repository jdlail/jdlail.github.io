---
layout: post
permalink: /2020/11/ffmpeg-tips-quickly-cut-video-clips-or-extract-audio/
title: 'FFmpeg tips: Quickly cut video clips or extract audio'
description: You can make quick work of trimming videos or capturing just the audio with FFmpeg and a Chromebook.
date: 2020-11-30 20:05:18 -0000
last_modified_at: 2022-09-21 16:25:26 -0000
publish: true
pin: false
image:
  path: /assets/wp-content/uploads/2020/11/Screenshot-2020-11-30-at-3.01.18-PM.webp
  alt: FFmpeg code example
categories:
- Video
tags:
- Chromebook
- Training
- Video
---
**_Updated: Additional code examples, resource links, some corrections._**

You can make quick work of trimming videos or capturing just the audio with FFmpeg and a Chromebook.

(This is another post on using a Chromebook as a video tool for journalists. Previously, we have shown how to [Create video slideshows with ImageMagick and FFmpeg in minutes](/2020/10/create-video-slideshows-with-imagemagick-and-ffmpeg-in-minutes/) and how to use [FFmpeg with Google Earth](/2018/12/a-flyover-of-gay-street/). And we have shown how to [get a video from the internet with yt-dlp](/2020/11/how-to-use-youtube-dl-to-grab-an-online-video/). )

We're using the terminal window of [Linux on the Chromebook](https://support.google.com/chromebook/answer/9145439?hl=en). There is a Windows version of [FFmpeg](https://ffmpeg.org/) and you could install Linux on [your Windows 10 computer](https://ubuntu.com/tutorials/ubuntu-on-windows#1-overview).

Often, you just need a small segment, or clip, from a video. FFmpeg makes this super fast with this command:
  
    ffmpeg -ss 00:01:27 -i INPUT.mp4 \
    -to 00:03:02 -c copy -copyts \
    OUTPUT.mp4

This command begins copying at the 1:27 minute mark and stop at the 3:02 minute mark. If you want to copy to the end, you can omit the "-to endtime."

If you want get just audio from a video, you can use this command:
  
    ffmpeg -i input-file-name \
    -f mp3 -ab 192000 \
    -vn output-audio.mp3

An alternative to copying just audio only:
  
    ffmpeg -i input.mp4 -vn -acodec copy audio.aac

Another alternative to copy audio only.
  
    ffmpeg -i input.mkv -map 0:a \
    -acodec copy audio.mp4

Copying out the audio as a mp3 has very short code because the mp3 format does not support video.
  
    ffmpeg -i input.mp4 output.mp3

Again, this is very fast. I liked to get the audio of Zoom meeting videos and then upload just the audio file into a speech-to-text tool like Otter.ai. Just uploading the audio is faster than uploading the whole video file to Otter.

If you need to remove the audio from a video file to create a silent video, here's your command:
  
    ffmpeg -i input-file-name -c copy \
    -an output-file-name

A slightly different command copies video; no subtitles, no metadata, no audio, just video.
  
    ffmpeg -i input_file -vcodec copy \
    -an output_file

To split the video and audio into two files, try this:
  
    ffmpeg -i input.ogv -map 0:v -vcodec copy \ output-video.mp4 -map 0:a \
    -acodec libmp3lame $output-audio.mp3

If you want info on the video and audio in the file, use this command:
  
    ffprobe -v error -show_format \
    -show_streams input-file-name

It can get a lot more complicated real quick, but the above are typical use cases. The [FFmpeg sub-Reddit](https://www.reddit.com/r/ffmpeg/) is a good place to find help.

More resources:

<https://ffmpeg.org/documentation.html>

<https://trac.ffmpeg.org/>

<https://trac.ffmpeg.org/wiki/Seeking#Cuttingsmallsections>

<https://pinboard.in/search/?query=ffmpeg>

<https://trac.ffmpeg.org/wiki/Seeking#Cuttingsmallsections>

<https://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html>

<https://cassidy.codes/blog/2017/04/25/ffmpeg-frames-to-gif-optimization/>

[FFmpeg Cookbook for Archivists](https://avpres.net/FFmpeg/)
